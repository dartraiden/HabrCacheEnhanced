// ==UserScript==
// @name            HabrCacheEnhanced
// @description     Перенаправляет скрытые из-за региональных ограничений, удалённые или скрытые в черновики записи с habr.com на различные зеркала. Redirects posts hidden due to regional restrictions, deleted, or hidden in drafts from habr.com to various mirror sites.
// @namespace       habrcache
// @version         20260319.1
// @author          dartraiden
// @match           https://habr.com/*
// @updateURL       https://github.com/dartraiden/HabrCacheEnhanced/raw/master/HabrCacheEnhanced.meta.js
// @downloadURL     https://github.com/dartraiden/HabrCacheEnhanced/raw/master/HabrCacheEnhanced.user.js
// @supportURL      https://github.com/dartraiden/HabrCacheEnhanced/issues
// ==/UserScript==

setTimeout(() => {
    const currentUrl = window.location.href;
    const postId = currentUrl.match(/\/(\d+)\/?/)?.[1];

    if (!postId) return;

    const services = [
        { name: 'ITnan', url: `https://itnan.ru/post.php?c=1&p=${postId}` },
        { name: 'СоХабр', url: `https://sohabr.net/habr/post/${postId}/` },
        { name: 'SavePearlHarbor', url: `https://savepearlharbor.com/?p=${postId}` }
    ];

    const allLinksHtml = services
        .map(s => {
            const target = s.target ? `target="${s.target}"` : '';
            return `<p>&bull; <a href="${s.url}" ${target}>${s.name}</a></p>`;
        })
        .join('');

    const errorBody = document.querySelector(".tm-error-message__body");
    const errorCode = document.querySelector(".tm-error-message__code");
    const regionalTitle = document.querySelector(".tm-regional-restriction__title");

    if (errorCode?.innerText === "403" && errorBody) {
        errorBody.insertAdjacentHTML('afterend', allLinksHtml);
    }

    else if (regionalTitle) {
        regionalTitle.insertAdjacentHTML('afterend', allLinksHtml);
    }
}, 500);