// ==UserScript==
// @name            HabrCacheEnhanced
// @description     Перенаправляет удалённые или скрытые в черновики записи с habr.com на зеркала Хабра. Redirects deleted or hidden posts from habr.com to Habr mirrors.
// @namespace       habrcache
// @version         20241207.2
// @author          dartraiden
// @match           https://habr.com/*
// @updateURL       https://github.com/dartraiden/HabrCacheEnhanced/raw/master/HabrCacheEnhanced.meta.js
// @downloadURL     https://github.com/dartraiden/HabrCacheEnhanced/raw/master/HabrCacheEnhanced.user.js
// @supportURL      https://github.com/dartraiden/HabrCacheEnhanced/issues
// ==/UserScript==

window.addEventListener('load', function() {
    var h1 = document.querySelector("h1");
    if(h1.innerText == "Доступ закрыт" || h1.innerText == "Access denied" || h1.innerText == "Доступ к публикации закрыт" || h1.innerText == "Access to this post is restricted" || h1.innerText == "Страница не найдена" || h1.innerText == "Page not found") {
        var id = document.location.href.replace(/^.*\/(\d+)\/?.+/, '$1');
        h1.outerHTML += '<p>&bull; <a href="https://itnan.ru/post.php?c=1&p=' + id + '">ITnan</a></p><p>&bull; <a href="https://sohabr.net/habr/post/' + id + '/">СоХабр</a></p><p>&bull; <a href="https://savepearlharbor.com/?p=' + id + '">SavePearlHarbor</a></p>';
    }
});
