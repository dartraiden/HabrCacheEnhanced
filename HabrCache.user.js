// ==UserScript==
// @name            HabrCache
// @namespace       dotneter
// @version         20150518.1
// @description     Редиректит "Доступ к публикации закрыт" на кэш гугла
// @icon            https://raw.githubusercontent.com/dartraiden/HabrCache/master/icon.png
// @include         http://habrahabr.ru/*
// @include         http://geektimes.ru/*
// @include         http://megamozg.ru/*
// @updateURL       https://github.com/dartraiden/HabrCache/raw/master/HabrCache.meta.js
// @downloadURL     https://github.com/dartraiden/HabrCache/raw/master/HabrCache.user.js
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