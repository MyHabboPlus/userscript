// MyHabboPlus Updater module
var autoUpdate="yes";
function myhpUpdater (autoUpdate) {
    var updateURL;
    if(prefUpdateChannel=="release"){updateURL="https://raw.github.com/MyHabboPlus/userscript/release/";}else if(prefUpdateChannel=="beta"){updateURL="https://raw.github.com/MyHabboPlus/userscript/beta/";}else{updateURL=prefUpdateCustomChannel;}
    GM_xmlhttpRequest({method: "GET", url:updateURL+"VERSION", 
onload: function(about) {
     version=about.responseText.replace("\n", "");
      if(version!=prefRelease){
            myhpLightbox("standard", text["UpdaterNewTitle"], text["UpdaterNewText"]+' <strong>'+version+'</strong><br><button id="updater-button">'+text["UpdaterUpdate"]+'</button>');
            $("body").on("click", "#updater-button", function(){
                window.open(updateURL+"MyHabboPlus.user.js");
                $(this).parents(".lightbox-bg").fadeOut(600);
                $("body").css({"overflow": "auto"});
                prefUpdateLast=time+'';
                GM_setValue("prefUpdateLast", prefUpdateLast);
            });
        }else if(autoUpdate=="yes"){
            prefUpdateLast=time+'';
            GM_setValue("prefUpdateLast", prefUpdateLast);
        }else{
            prefUpdateLast=time+'';
            myhpLightbox("alert", text["UpdaterNoTitle"], text["UpdaterNoText"]);
        }
  }
, onerror:function(){
    myhpLightbox("alert", text["UpdaterErrorTitle"], text["UpdaterErrorText"]);
  }
});

}
if(1*prefUpdateLast+1*prefUpdateFreq < time){myhpUpdater("yes");} // Search auto updates