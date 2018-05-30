// ==UserScript==
// @name            HabrCacheEnchanced
// @description     Перенаправляет удалённые или скрытые в черновики записи с habr.com на кэш Google
// @namespace       habrcache
// @version         20180424.1
// @include         https://habr.com/*
// @updateURL       https://github.com/dartraiden/HabrCacheEnchanced/raw/master/HabrCacheEnchanced.meta.js
// @downloadURL     https://github.com/dartraiden/HabrCacheEnchanced/raw/master/HabrCacheEnchanced.user.js
// @supportURL      https://github.com/dartraiden/HabrCacheEnchanced/issues
// ==/UserScript==

var h1 = document.querySelector("h1,.info .state");
if(h1.innerHTML == "Доступ к публикации закрыт" || h1.innerHTML == "Страница не найдена" || h1.innerHTML == "прекратила активность на хабре"){
	var link = "https://webcache.googleusercontent.com/search?q=cache:" + window.location;
	window.location = link;
}