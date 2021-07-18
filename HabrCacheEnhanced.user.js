// ==UserScript==
// @name            HabrCacheEnhanced
// @description     Перенаправляет удалённые или скрытые в черновики записи с habr.com на СоХабр, ITnan и кэш Google. Redirects deleted or hidden posts from habr.com to SoHabr, ITnan and Google cache.
// @namespace       habrcache
// @version         20210719.1
// @author          dartraiden
// @match           https://habr.com/*
// @updateURL       https://github.com/dartraiden/HabrCacheEnhanced/raw/master/HabrCacheEnhanced.meta.js
// @downloadURL     https://github.com/dartraiden/HabrCacheEnhanced/raw/master/HabrCacheEnhanced.user.js
// @supportURL      https://github.com/dartraiden/HabrCacheEnhanced/issues
// ==/UserScript==

var h1 = document.querySelector("h1");
if(h1.innerText == "Доступ закрыт" || h1.innerText == "Access denied" || h1.innerText == "Доступ к публикации закрыт" || h1.innerText == "Access to this post is restricted" || h1.innerText == "Страница не найдена" || h1.innerText == "Page not found"){
	var id = document.location.href.replace(/^.*\/(\d+)\/?.+/, '$1');
    h1.outerHTML += '<p>&bull; <a href="https://itnan.ru/post.php?c=1&p=' + id + '">ITnan</a></p><p>&bull; <a href="https://sohabr.net/habr/post/' + id + '/">СоХабр</a></p><p>&bull; <a href="https://savepearlharbor.com/?p=' + id + '">SavePearlHarbor</a></p><p>&bull; <a href="https://webcache.googleusercontent.com/search?q=cache:' + document.location.href + '">Google Cache</a></p>';
}
else if(h1.innerHTML == "прекратила активность на хабре" || h1.innerHTML == "no more active on Habr"){
	var link = "https://webcache.googleusercontent.com/search?q=cache:" + window.location;
	window.location = link
}
