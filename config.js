// MyHabboPlus  Configuration


// Update system
var prefRelease="1.0-a1";

if(GM_getValue("prefUpdateFreq")){
	var prefUpdateFreq=GM_getValue("prefUpdateFreq"); //User
}else{
	var prefUpdateFreq="3600000"; //Default
}

if(GM_getValue("prefUpdateChannel")){
	var prefUpdateChannel=GM_getValue("prefUpdateChannel"); //User
}else{
	var prefUpdateChannel="release"; //Default
}

if(GM_getValue("prefUpdateCustomChannel")){
	var prefUpdateCustomChannel=GM_getValue("prefUpdateCustomChannel"); //User
}else{
	var prefUpdateCustomChannel="https://raw.github.com/MyHabboPlus/userscript/dev/"; //Default
}

if(GM_getValue("prefUpdateLast")){
	var prefUpdateLast=GM_getValue("prefUpdateLast"); //User
}else{
	var prefUpdateLast=new Date().getTime()+''; //Default
	GM_setValue("prefUpdateLast", prefUpdateLast);
}

// Languages
if(GM_getValue("prefLang")){
	var prefLang=GM_getValue("prefLang"); //User
}else{
	var prefLang="auto"; //Default
}


// Modules

if(GM_getValue("prefNewHabbo")){
	var prefNewHabbo=GM_getValue("prefNewHabbo"); //User
}else{
	var prefNewHabbo="1"; //Default
}

if(GM_getValue("prefHomeInfo")){
	var prefHomeInfo=GM_getValue("prefHomeInfo"); //User
}else{
	var prefHomeInfo="1"; //Default
}

if(GM_getValue("prefHabboSearch")){
	var prefHabboSearch=GM_getValue("prefHabboSearch"); //User
}else{
	var prefHabboSearch="1"; //Default
}

if(GM_getValue("prefNewArticles")){
	var prefNewArticles=GM_getValue("prefNewArticles"); //User
}else{
	var prefNewArticles="1"; //Default
}
var prefNewArticlesVideoDefault="vQEJ0HOI7VU";
if(GM_getValue("prefNewArticlesVideo")){
	var prefNewArticlesVideo=GM_getValue("prefNewArticlesVideo"); //User
}else{
	var prefNewArticlesVideo=prefNewArticlesVideoDefault; //Default
}

if(GM_getValue("prefTweetList")){
	var prefTweetList=GM_getValue("prefTweetList"); //User
}else{
	var prefTweetList="1"; //Default
}