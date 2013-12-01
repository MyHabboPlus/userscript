// MyHabboPlus System module
if (window.top==window){
    // Config texts
    if(prefNewHabbo=="1"){
        $("body").addClass('newhabbo');
        var CSSnewhabbo=GM_getResourceText("CSSnewhabbo");
        GM_addStyle(CSSnewhabbo);
    }
    
    var CSSmyhabboplus=GM_getResourceText("CSSmyhabboplus");
    GM_addStyle(CSSmyhabboplus);

    var PNGSprites=GM_getResourceURL("PNGSprites");
    $("head").append("<style>.myhp-sprites {background-image:url("+PNGSprites+")}");

    var site = location.protocol+"//"+location.hostname; // Whithout "/"
    var hotel = location.hostname.split("habbo.")[1];
    var dir = location.pathname;

    var time = new Date().getTime();

    $(document).ready(function(){
        $("body").on("click", ".lightbox-bg", function(){
            $(this).fadeOut(600);
            $("body").css({"overflow": "auto"});
        });
        $("body").on("click", ".lightbox-close", function(){
            $(this).parents(".lightbox-bg").fadeOut(600);
            $("body").css({"overflow": "auto"});
        });
        $("body").on("click", ".lightbox-container", function(event){
            event.stopPropagation();
        });
    });
    var myhpLightboxLvl=10000;
    var lightboxType="standard";
    var lightboxTitle=text["LightboxTitle"];
    function myhpLightbox(lightboxType, lightboxTitle, lightboxContent) {
        var lightbox='<div class="lightbox-bg" style="z-index:'+myhpLightboxLvl+';">';
        lightboxContent=lightboxContent.replace(/\\t/g, "<br>").replace(/\\n/g, "<br>");
        if(lightboxType=="alert"){lightbox+='<div class="lightbox-container lightbox-alert">';}else{lightbox+='<div class="lightbox-container">';}
        lightbox+='<div class="lightbox-header">'+lightboxTitle+'<div class="myhp-sprites lightbox-close" title="'+text["Close"]+'"></div></div><div class="lightbox-content">'+lightboxContent+'</div></div></div>';
        $("body").prepend(lightbox);
        $(".lightbox-bg").first().fadeIn(600);
        $("body").css({"overflow": "hidden"});
        myhpLightboxLvl=myhpLightboxLvl+1;
    }

    //Parameters WidgetID - Thanks to desativaado.ban (@desapou)
    
    var habboHomeWidgetId = {
        "es": "30",
        "com": "902026",
        "fi": "120562",
        "com.br": "223976",
        "com.tr": "909",
        "it": "3160768",
        "fr": "41",
        "nl": "1544770",
        "de": "5452027",
        "dk": "617402",
        "no": "1488979",
        "se": "348047"
    };

    // Twitter Lists

    var twitterWidget = {
        "es": "396254757615984640",
        "com": "396280205053919234",
        "fi": "396280280492675072",
        "com.br": "396280398834962432",
        "com.tr": "396280513742131200",
        "it": "396280577352933376",
        "fr": "396280622424915969",
        "nl": "396280678028832768",
        "de": "396280718021517313",
        "dk": "396280776326516736",
        "no": "396280839014592512",
        "se": "396280927522803713"
    };
    var twitterHotel=hotel.replace('.', '-');
    
    // Config module
    
    $("#habbos-online").after('<div id="myhp-button-config">'+text["Preferences"]+'<div class="myhp-button-config-name">MyHabboPlus</div></div>');
    

    var prefLangValueAuto=""; var prefLangValueES=""; var prefLangValueEN=""; var prefLangValuePT=""; var prefLangValueFR=""; var prefLangValueIT=""; var prefLangValueDE=""; var prefLangValueTR=""; var prefUpdateFreq1h=""; var prefUpdateFreq2h=""; var prefUpdateFreq8h=""; var prefUpdateFreq1d=""; var prefUpdateFreq1w=""; var prefUpdateFreqNo=""; var prefUpdateChannelRelease=""; var prefUpdateChannelBeta=""; var prefUpdateChannelCustom=""; var prefUpdateCustomChannelStyle="";  var prefNewHabboValue; var prefHomeInfoValue; var prefHabboSearchValue; var prefNewArticlesValue; var prefNewArticlesVideoValue; var prefTweetListValue;
    if(prefLang=="auto") {prefLangValueAuto="selected";} if(prefLang=="es") {prefLangValueES="selected";} if(prefLang=="en") {prefLangValueEN="selected";} if(prefLang=="pt") {prefLangValuePT="selected";} if(prefLang=="fr") {prefLangValueFR="selected";} if(prefLang=="it") {prefLangValueIT="selected";} if(prefLang=="de") {prefLangValueDE="selected";} if(prefLang=="tr") {prefLangValueTR="selected";} if(prefUpdateFreq=="3600000"){prefUpdateFreq1h="selected";} if(prefUpdateFreq=="7200000"){prefUpdateFreq2h="selected";} if(prefUpdateFreq=="28800000"){prefUpdateFreq8h="selected";} if(prefUpdateFreq=="86400000"){prefUpdateFreq1d="selected";} if(prefUpdateFreq=="604800000"){prefUpdateFreq1w="selected";} if(prefUpdateFreq=="none"){prefUpdateFreqNo="selected";} if(prefUpdateChannel=="release"){prefUpdateChannelRelease="selected";} if(prefUpdateChannel=="beta"){prefUpdateChannelBeta="selected";} if(prefUpdateChannel=="custom"){prefUpdateChannelCustom="selected"; prefUpdateCustomChannelStyle="display:block;";} if(prefNewHabbo=="1"){prefNewHabboValue="checked";} if(prefHomeInfo=="1"){prefHomeInfoValue="checked";} if(prefHabboSearch=="1"){prefHabboSearchValue="checked";} if(prefNewArticles=="1"){prefNewArticlesValue="checked";} prefNewArticlesVideoValue=prefNewArticlesVideo; if(prefTweetList=="1"){prefTweetListValue="checked";}
    
    $("#header.clearfix").on("click", "#myhp-button-config", function(){
        myhpLightbox(null, text["Preferences"], '<div id="myhp-config">\
            <h2>'+text["PreferencesGeneral"]+'</h2>\
            <div class="myhp-config-option"><div style="float:left;">'+text["PreferencesVersion"]+' <strong>'+prefRelease+'</strong>.</div><button id="search-updates">'+text["PreferencesUpdate"]+'</button></div>\
            <div class="myhp-config-option"><div style="float:left;">'+text["PreferencesUpdateFreq"]+'</div><select id="prefUpdateFreq"><option value="3600000" '+prefUpdateFreq1h+'>1 '+text["Hour"]+'</option><option value="7200000" '+prefUpdateFreq2h+'>2 '+text["Hours"]+'</option><option value="28800000" '+prefUpdateFreq8h+'>8 '+text["Hours"]+'</option><option value="86400000" '+prefUpdateFreq1d+'>1 '+text["Day"]+'</option><option value="604800000"  '+prefUpdateFreq1w+'>1 '+text["Week"]+'</option><option value="none" '+prefUpdateFreqNo+'>'+text["Never"]+'</option></select></div>\
            <div class="myhp-config-option"><div style="float:left;">'+text["PreferencesUpdateChannel"]+'</div><select id="prefUpdateChannel"><option value="release" '+prefUpdateChannelRelease+'>'+text["PreferencesUpdateChannelRelease"]+'</option><option value="beta" '+prefUpdateChannelBeta+'>'+text["PreferencesUpdateChannelBeta"]+'</option><option value="custom" '+prefUpdateChannelCustom+'>'+text["PreferencesUpdateChannelCustom"]+'</option></select>\
            <br><div id="myhp-customchannel" style="'+prefUpdateCustomChannelStyle+'"><input type="text" value="'+prefUpdateCustomChannel+'" id="prefUpdateCustomChannel" style="width:700px;"></div></div>\
            <div class="myhp-config-option"><div style="float:left;">'+text["Language"]+'</div><select id="prefLang"><option value="auto" '+prefLangValueAuto+'>'+text["LanguageAuto"]+'</option><option value="es" '+prefLangValueES+'>Español</option><option value="en" '+prefLangValueEN+'>English</option><option value="pt" '+prefLangValuePT+'>Português</option><option value="fr" '+prefLangValueFR+'>French</option><option value="it" '+prefLangValueIT+'>Italiano</option><option value="de" '+prefLangValueDE+'>Deutsch</option><option value="tr" '+prefLangValueTR+'>Türk</option></select></div>\
            <h2>'+text["PreferencesModules"]+'</h2>\
            <div class="myhp-config-option"><div style="float:left;">'+text["PreferencesTheme"]+'</div><input type="checkbox" id="prefNewHabbo"'+prefNewHabboValue+'></div>\
            <div class="myhp-config-option"><div style="float:left;">'+text["PreferencesHomeInfo"]+'</div><input type="checkbox" id="prefHomeInfo"'+prefHomeInfoValue+'></div>\
            <div class="myhp-config-option"><div style="float:left;">'+text["PreferencesHabboSearch"]+'</div><input type="checkbox" id="prefHabboSearch"'+prefHabboSearchValue+'></div>\
            <div class="myhp-config-option"><div style="float:left;">'+text["PreferencesNewArticles"]+'</div><input type="checkbox" id="prefNewArticles"'+prefNewArticlesValue+'><br><div style="float:left; margin-left:20px; font-style:italic;">http://youtube.com/watch?v=</div><input type="text" value="'+prefNewArticlesVideoValue+'" id="prefNewArticlesVideo" style="float:left;"></div>\
            <div class="myhp-config-option"><div style="float:left;">'+text["PreferencesTweet"]+'</div><input type="checkbox" id="prefTweetList"'+prefTweetListValue+'></div>\
            ');
        $("#myhp-config").on("click", "#search-updates", function(){
            myhpUpdater("no");
        });
        $("#myhp-config input, #myhp-config select").change(function() {
            if($(this).is("#prefLang")) {
                var prefLangNew=$(this).val();
                GM_setValue("prefLang", prefLangNew);
                prefLang=prefLangNew;
                loadLang();
                prefLangValueAuto=""; prefLangValueES=""; prefLangValueEN=""; prefLangValuePT=""; prefLangValueFR=""; prefLangValueIT=""; prefLangValueDE=""; prefLangValueTR="";
                if(prefLangNew=="auto"){prefLangValueAuto="selected";}else if(prefLangNew=="es"){prefLangValueES="selected";}else if(prefLangNew=="en"){prefLangValueEN="selected";}else if(prefLangNew=="pt"){prefLangValuePT="selected";}else if(prefLangNew=="fr"){prefLangValueFR="selected";}else if(prefLangNew=="it"){prefLangValueIT="selected";}else if(prefLangNew=="de"){prefLangValueDE="selected";}else if(prefLangNew=="tr"){prefLangValueTR="selected";}
            } else if($(this).is("#prefUpdateFreq")) {
                var prefUpdateFreqNew=$(this).val();
                GM_setValue("prefUpdateFreq", prefUpdateFreqNew);
                prefUpdateFreq=prefUpdateFreqNew;
                prefUpdateFreq1h=""; prefUpdateFreq2h=""; prefUpdateFreq8h=""; prefUpdateFreq1d=""; prefUpdateFreq1w=""; prefUpdateFreqNo="";
                if(prefUpdateFreqNew=="3600000"){prefUpdateFreq1h="selected";} if(prefUpdateFreqNew=="7200000"){prefUpdateFreq2h="selected";} if(prefUpdateFreqNew=="28800000"){prefUpdateFreq8h="selected";} if(prefUpdateFreqNew=="86400000"){prefUpdateFreq1d="selected";} if(prefUpdateFreqNew=="604800000"){prefUpdateFreq1w="selected";} if(prefUpdateFreqNew=="none"){prefUpdateFreqNo="none";}
            } else if($(this).is("#prefUpdateChannel")) {
                var prefUpdateChannelNew=$(this).val();
                GM_setValue("prefUpdateChannel", prefUpdateChannelNew);
                prefUpdateChannel=prefUpdateChannelNew;
                prefUpdateChannelRelease=""; prefUpdateChannelBeta=""; prefUpdateChannelCustom="";
                if(prefUpdateChannel=="release"){prefUpdateChannelRelease="selected"; $("#myhp-customchannel").hide(); prefUpdateCustomChannelStyle="";} if(prefUpdateChannel=="beta"){prefUpdateChannelBeta="selected"; $("#myhp-customchannel").hide(); prefUpdateCustomChannelStyle="";} if(prefUpdateChannel=="custom"){prefUpdateChannelCustom="selected"; $("#myhp-customchannel").show(); prefUpdateCustomChannelStyle="display:block;"}
            } else if($(this).is("#prefUpdateCustomChannel")) {
                var prefUpdateCustomChannelNew=$(this).val();
                GM_setValue("prefUpdateCustomChannel", prefUpdateCustomChannelNew);
                prefUpdateCustomChannel=prefUpdateCustomChannelNew;
               
            } else if($(this).is("#prefNewHabbo")) {
                if($(this).is(":checked")){
                    GM_setValue("prefNewHabbo", "1");
                    prefNewHabboValue="checked";
                    $("body").addClass('newhabbo');
                    var CSSnewhabbo=GM_getResourceText("CSSnewhabbo");
                    GM_addStyle(CSSnewhabbo);

                }else{
                    GM_setValue("prefNewHabbo", "0");
                    prefNewHabboValue="";
                    $("body").removeClass('newhabbo');
                }
            }else if($(this).is("#prefHomeInfo")) {
                if($(this).is(":checked")){
                    GM_setValue("prefHomeInfo", "1");
                    prefHomeInfoValue="checked";
                }else{
                    GM_setValue("prefHomeInfo", "0");
                    prefHomeInfoValue="";
                }
            }else if($(this).is("#prefHabboSearch")) {
                if($(this).is(":checked")){
                    GM_setValue("prefHabboSearch", "1");
                    prefHabboSearchValue="checked";
                }else{
                    GM_setValue("prefHabboSearch", "0");
                    prefHabboSearchValue="";
                }
            }else if($(this).is("#prefNewArticles")) {
                if($(this).is(":checked")){
                    GM_setValue("prefNewArticles", "1");
                    prefNewArticlesValue="checked";
                }else{
                    GM_setValue("prefNewArticles", "0");
                    prefNewArticlesValue="";
                }
            }else if($(this).is("#prefNewArticlesVideo")) {
                var newArticlesVideoID=$(this).val();
                if($.trim(newArticlesVideoID)!=""){
                    $.ajax({url:"https://gdata.youtube.com/feeds/api/videos/"+newArticlesVideoID, async:false})
                        .done(function(gdata){
                            if(gdata!=="Invalid id"){
                                GM_setValue("prefNewArticlesVideo", newArticlesVideoID);
                                prefNewArticlesVideoValue=newArticlesVideoID;
                            }
                        })
                    }else{
                        GM_setValue("prefNewArticlesVideo", prefNewArticlesVideoDefault);
                        prefNewArticlesVideoValue=prefNewArticlesVideoDefault;
                    }
            }else if($(this).is("#prefTweetList")) {
                if($(this).is(":checked")){
                    GM_setValue("prefTweetList", "1");
                    prefTweetListValue="checked";
                }else{
                    GM_setValue("prefTweetList", "0");
                    prefTweetListValue="";
                }
            }
        });
    });


    // Twitter Lists
    if (dir=="/me" && prefTweetList=="1") {
        $("#twitterfeed-habblet-container .twitter-timeline").attr("width", "376").attr("height", "400");
        $("#twitterfeed-habblet-container").after('<div style="float:left;"><a class="twitter-timeline" data-dnt="true" href="https://twitter.com/MyHabboPlus/habbo-'+twitterHotel+'"  data-widget-id='+twitterWidget[hotel]+' width="376" height="400">Tweets by @MyHabboPlus/habbo-'+twitterHotel+'</a></div>');
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
    }
}