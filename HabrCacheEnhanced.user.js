// ==UserScript==
// @name            HabrCacheEnhanced
// @description     Перенаправляет удалённые или скрытые в черновики записи с habr.com на зеркала Хабра. Redirects deleted or hidden posts from habr.com to Habr mirrors.
// @namespace       habrcache
// @version         20250125.3
// @author          dartraiden
// @match           https://habr.com/*
// @updateURL       https://github.com/dartraiden/HabrCacheEnhanced/raw/master/HabrCacheEnhanced.meta.js
// @downloadURL     https://github.com/dartraiden/HabrCacheEnhanced/raw/master/HabrCacheEnhanced.user.js
// @supportURL      https://github.com/dartraiden/HabrCacheEnhanced/issues
// ==/UserScript==

setTimeout(function() {
    // Обработка ошибки 403
    var error_code = document.querySelector(".tm-error-message__code");
    if(error_code && error_code.innerText == "403") {
        var id = document.location.href.replace(/^.*\/(\d+)\/?.+/, '$1');
        var currentUrl = document.location.href; // Получаем полный URL
        var body = document.querySelector(".tm-error-message__body");
        if(body){
            body.outerHTML += '<p>&bull; <a href="https://itnan.ru/post.php?c=1&p=' + id + '">ITnan</a></p>' +
            '<p>&bull; <a href="https://sohabr.net/habr/post/' + id + '/">СоХабр</a></p>' +
            '<p>&bull; <a href="https://savepearlharbor.com/?p=' + id + '">SavePearlHarbor</a></p>' +
            '<p>&bull; <a href="https://webcache.googleusercontent.com/search?q=cache:' + currentUrl + '">Google Cache</a></p>' +
            '<p>&bull; <a href="https://yandexwebcache.appspot.com/' + currentUrl + '">Yandex Cache</a></p>';
        }
    }

    // Обработка регионального ограничения
    var isRegional = document.querySelector(".tm-regional-restriction");
    if (isRegional) {
        var idss = document.location.href.replace(/^.*\/(\d+)\/?.+/, '$1');
        var title = document.querySelector(".tm-regional-restriction__title");
        if(title){
            var currentUrl = document.location.href;

            // Формируем ссылки (добавлены Google и Yandex)
            var linksHtml = `
            <p>&bull; <a href="https://sohabr.net/habr/post/${idss}/">СоХабр</a></p>
            <p>&bull; <a href="https://savepearlharbor.com/?p=${idss}">SavePearlHarbor</a></p>
            <p>&bull; <a href="https://archive.today/${currentUrl}" target="_blank">Archive.today</a></p>
            <p>&bull; <a href="https://web.archive.org/web/${currentUrl}" target="_blank">Web Archive</a></p>
            `;
            title.insertAdjacentHTML('afterend', linksHtml);
        }
    }
}, 500);
