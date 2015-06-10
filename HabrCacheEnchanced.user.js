// ==UserScript==
// @name            HabrCacheEnchanced
// @description     Редиректит удалённые или скрытые в черновики записи на кэш гугла
// @namespace       habrcache
// @version         20150610.1
// @include         http://geektimes.ru/*
// @include         http://habrahabr.ru/*
// @include         http://megamozg.ru/*
// @updateURL       https://github.com/dartraiden/HabrCacheEnchanced/raw/master/HabrCacheEnchanced.meta.js
// @downloadURL     https://github.com/dartraiden/HabrCacheEnchanced/raw/master/HabrCacheEnchanced.user.js
// @supportURL      https://github.com/dartraiden/HabrCacheEnchanced/issues
// ==/UserScript==

var h1 = document.querySelector("h1");
if(h1.innerHTML == "Доступ к публикации закрыт"){
	var link = "http://webcache.googleusercontent.com/search?q=cache:" + window.location;
	if(history.length <= 1){
		window.location = link;
	}else{
		h1.innerHTML += "<a href='" + link + "'>[Cache]</a>";
	}
}