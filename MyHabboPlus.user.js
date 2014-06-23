// MyHabboPlus Userscript (http://www.MyHabboPlus.com) are under GPLv2: https://www.gnu.org/licenses/gpl-2.0.html
// ==UserScript==
// @name        MyHabboPlus
// @namespace   http://myhabboplus.com
// @description Userscript for Habbo Hotel
// @version     1.1.0
// @author		iButton
// @author		Tetule
// @icon        https://raw.github.com/MyHabboPlus/userscript/release/img/favicon.png
// @include     http://www.habbo.es/*
// @include     https://www.habbo.es/*
// @include     http://www.habbo.com/*
// @include     https://www.habbo.com/*
// @include     http://www.habbo.fi/*
// @include     https://www.habbo.fi/*
// @include     http://www.habbo.com.br/*
// @include     https://www.habbo.com.br/*
// @include     http://www.habbo.com.tr/*
// @include     https://www.habbo.com.tr/*
// @include     http://www.habbo.it/*
// @include     https://www.habbo.it/*
// @include     http://www.habbo.fr/*
// @include     https://www.habbo.fr/*
// @include     http://www.habbo.nl/*
// @include     https://www.habbo.nl/*
// @include     http://www.habbo.de/*
// @include     https://www.habbo.de/*
// @include     http://www.habbo.dk/*
// @include     https://www.habbo.dk/*
// @include     http://www.habbo.no/*
// @include     https://www.habbo.no/*
// @include     http://www.habbo.se/*
// @include     https://www.habbo.se/*

// @exclude     http://www.habbo.*/
// @exclude     http://www.habbo.*/account/submit
// @exclude     http://www.habbo.*/identity/*
// @exclude     https://www.habbo.*/
// @exclude     https://www.habbo.*/account/submit
// @exclude     https://www.habbo.*/identity/*

// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @grant       GM_getResourceURL
// @grant       GM_xmlhttpRequest
// @resource    CSSnewhabbo https://raw.github.com/MyHabboPlus/userscript/release/css/newhabbo.css
// @resource    CSSmyhabboplus https://raw.github.com/MyHabboPlus/userscript/release/css/myhabboplus.css
// @resource    PNGSprites https://raw.github.com/MyHabboPlus/userscript/release/img/sprites.png
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @require     https://raw.github.com/MyHabboPlus/userscript/release/config.js
// @require     https://raw.github.com/MyHabboPlus/userscript/release/langs.js
// @require     https://raw.github.com/MyHabboPlus/userscript/release/modules/system.js
// @require     https://raw.github.com/MyHabboPlus/userscript/release/modules/updater.js
// @require     https://raw.github.com/MyHabboPlus/userscript/release/modules/habboHome.js
// @require     https://raw.github.com/MyHabboPlus/userscript/release/modules/habboSearch.js
// @require     https://raw.github.com/MyHabboPlus/userscript/release/modules/newArticles.js
// ==/UserScript==
