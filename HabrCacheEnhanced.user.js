// ==UserScript==
// @name            HabrCacheEnhanced
// @description     Перенаправляет скрытые из-за региональных ограничений, удалённые или скрытые в черновики записи с habr.com на различные зеркала. Redirects posts hidden due to regional restrictions, deleted, or hidden in drafts from habr.com to various mirror sites.
// @namespace       habrcache
// @version         20260319.3
// @author          dartraiden
// @match           https://habr.com/*
// @updateURL       https://github.com/dartraiden/HabrCacheEnhanced/raw/master/HabrCacheEnhanced.meta.js
// @downloadURL     https://github.com/dartraiden/HabrCacheEnhanced/raw/master/HabrCacheEnhanced.user.js
// @supportURL      https://github.com/dartraiden/HabrCacheEnhanced/issues
// ==/UserScript==

(function() {
    'use strict'; // Включаем строгий режим для избегания типичных ошибок

    /**
     * Генерируем HTML-строку со списком всех доступных зеркал.
     * @param {string} currentUrl - Полный URL текущей страницы
     * @param {string} postId - ID статьи, извлечённый из URL
     * @returns {string} - Готовый HTML-блок со ссылками
     */
    const getLinksHtml = (currentUrl, postId) => {
        const services = [
            { name: 'ITnan', url: `https://itnan.ru/post.php?c=1&p=${postId}` },
            { name: 'СоХабр', url: `https://sohabr.net/habr/post/${postId}/` },
            { name: 'SavePearlHarbor', url: `https://savepearlharbor.com/?p=${postId}` },
            { name: 'Archive.today', url: `https://archive.today/${currentUrl}`, target: '_blank' }
        ];

        // Трансформируем массив объектов в массив HTML-строк и объединяем в одну строку
        return services
            .map(s => `<p style="margin: 4px 0;">&bull; <a href="${s.url}" target="_blank" rel="noopener">${s.name}</a></p>`)
            .join('');
    };

    /**
     * Основная логика поиска места на странице и вставки ссылок.
     */
    const inject = () => {
        const currentUrl = window.location.href;

        // Извлекаем ID статьи: ищем цифры между слэшами.
        // Используем опциональный чейнинг ?.[1], чтобы не упасть с ошибкой, если ID не найден.
        const postId = currentUrl.match(/\/(\d+)\/?/)?.[1];
        if (!postId) return;

        // Проверяем, не вставили ли мы ссылки ранее.
        // Это КРИТИЧЕСКИ важно для MutationObserver, иначе будет бесконечный цикл.
        if (document.querySelector('.tm-mirror-links-added')) return;

        // Определяем возможные элементы-маркеры на странице
        const errorBody = document.querySelector(".tm-error-message__body");
        const errorCode = document.querySelector(".tm-error-message__code");
        const regionalTitle = document.querySelector(".tm-regional-restriction__title");

        let targetEl = null; // Куда вставляем

        // Определяем тип ошибки
        if (errorCode?.innerText === "403" && errorBody) {
            targetEl = errorBody;
        } else if (regionalTitle) {
            targetEl = regionalTitle;
        }

        // Если подходящее место найдено — создаём и вставляем элемент
        if (targetEl) {
            const wrapper = document.createElement('div');
            wrapper.className = 'tm-mirror-links-added'; // Помечаем класс-маркер
            wrapper.style.marginTop = '16px';
            wrapper.innerHTML = getLinksHtml(currentUrl, postId);
            targetEl.appendChild(wrapper);
        }
    };

    /**
     * НАБЛЮДАТЕЛЬ (MutationObserver)
     * Нужен, потому что Хабр — это динамическое приложение (SPA).
     * Скрипты сайта могут перерисовать страницу в любой момент, удалив наши изменения.
     */
    const observer = new MutationObserver((mutations) => {
        inject();
    });

    // Начинаем следить за всем деревом элементов внутри body.
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Запускаем в первый раз вручную, на случай если страница уже загружена.
    inject();
})();