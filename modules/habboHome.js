// MyHabboPlus Habbo Home module

if (window.top==window){

    
    if(dir.match(/^\/home\//) && prefHomeInfo=="1"){
        $("#content.clearfix").prepend('<div class="myhp-div"><div class="myhp-div-header">'+text["HomeInfoDetails"]+'</div><div id="myhp-homeinfo">'+text["Loading"]+'</div></div>');
        var habboHome;
        var habboHomeId;
        var habboHomeFail=false;
        var habboHomeName;
        var habboHomeStatus;
        var habboHomeDate;
        var habboHomeMotto;
        var habboHomeLastVisit;
        var habboHomeFriendsPage;
        var habboHomeFriendsPages;
        var habboHomeFriendsSearch;
        var habboHomeBadgesPage;
        var habboHomeBadgesPages;
        if(dir.match(/^\/home\/([0-9]+)\/id/)){
            habboHomeId=dir.match(/^\/home\/([0-9]+)\/id/)[1];
        }else{
            habboHome=dir.match(/^\/home\/(.*)/)[1];
            $.ajax({url:site+"/habblet/ajax/new_habboid?habboIdName="+habboHome, async:false})
            .done (function(data){ 
                if(data.match(/\<ul class=\"errors\"\>/)){
                    $("#myhp-homeinfo").html(text["HomeInfoNoExist"]);
                    habboHomeFail=true;
                }else{
                    habboHomeId=data.match(/\<em\>(.*)\<\/em\>/);
                    habboHomeId=habboHomeId[1].replace(/ /g, "");
                }
            })
            .fail(function(){
                $("#myhp-homeinfo").html(text["NoConnect"]);
                habboHomeFail=true;
            });
        }
        if(habboHomeFail==false){
             $.ajax({url:site+"/myhabbo/avatarlist/avatarinfo", type:"POST", data:{anAccountId:habboHomeId}, async:false})
                .done(function(data){
                    habboHomeName=data.match(/\<a href=\"(.*)\/home\/(.*)\"\>(.*)\<\/a\>/)[3];
                    document.title="Habbo: "+habboHomeName;
                    if(data.match(/\<p class=\"avatar-info-motto\"\>(.*)\<\/p\>/)){
                        habboHomeMotto=data.match(/\<p class=\"avatar-info-motto\"\>(.*)\<\/p\>/)[1];
                    }else{
                        habboHomeMotto="";
                    }
                    habboHomeDate=data.match(/\<p\>(.*)\<b\>(.*)\<\/b\>\<\/p\>/)[2];
                    habboHomeStatus=data.match(/\<img src=\"(.*)\/images\/myhabbo\/profile\/habbo_(.*)\.gif\" \/\>/)[0];
                    
                    $.ajax({url:site+"/habblet/habbosearchcontent?searchString="+habboHomeName, async:false})
                    .done(function(info){
                        habboHomeLastVisit=info.match(/\<span title=\"(.*)\"\>(.*)\<\/span\>/);
                        habboHomeLastVisit=habboHomeLastVisit[1]+". <em>"+habboHomeLastVisit[2]+"</em>";
                    });
                    

                    $("#myhp-homeinfo").html('<div id="myhp-homeinfo-container1"><div class="myhp-homeinfo-habbo"><img src="'+site+'/habbo-imaging/avatarimage?user='+habboHomeName+'&direction=3&head_direction=3&action=&size=m" width="64" height="110"></div><div class="myhp-homeinfo-general"><div class="myhp-homeinfo-name">'+habboHomeName+'</div><div class="myhp-homeinfo-motto">'+habboHomeMotto+'</div><div id="myhp-homeinfo-addfriend">'+text["HomeInfoAddFriend"]+'</div></div><div class="myhp-homeinfo-list"><strong>Habbo ID: </strong>'+habboHomeId+'</div><div class="myhp-homeinfo-list"><strong>'+text["HomeInfoDate"]+' </strong>'+habboHomeDate+'</div><div class="myhp-homeinfo-list"><strong>'+text["HomeInfoStatus"]+' </strong>'+habboHomeStatus+'</div><div class="myhp-homeinfo-list" title="'+habboHomeLastVisit.replace(/(<([^>]+)>)/g,"")+'"><strong>'+text["HomeInfoLastVisit"]+' </strong>'+habboHomeLastVisit+'</div></div>');
                    
                    $("#myhp-homeinfo-addfriend").click(function(){
                        habboHomeAddToken=$('meta[name="csrf-token"]').attr("content");
                        $.ajax({url:site+"/myhabbo/friends/add", type:"POST", headers:{"X-Prototype-Version":"1.7", "X-App-Key":habboHomeAddToken}, data:{accountId:habboHomeId}, dataType:"html", async:false})
                        .done(function(addfriend){
                            addfriend=addfriend.split('"')[3].replace(/\\t/g, "").replace(/\\n/g, "");
                            myhpLightbox("alert", undefined, addfriend);
                        })
                         .fail(function(){
                            myhpLightbox("alert", text["Error"], text["HomeInfoAddError"]);
                        });
                    });

                    $.ajax({url:site+"/myhabbo/avatarlist/friendsearchpaging", type:"POST", data:{_mypage_requested_account:habboHomeId, widgetId:habboHomeWidgetId[hotel]}, async:false})
                    .done(function(friends){
                        friends=friends.replace(/\<div class=\"avatar-list-open\"\>(.*)\<\/div\>/g, "");
                        $("#myhp-homeinfo").append('<div id="myhp-homeinfo-container2"><div id="myhp-homeinfo-friends-title">'+text["HomeInfoFriends"]+'</div><div style="float:right;"><form id="myhp-homeinfo-friends-search-form"><input type="text" id="myhp-homeinfo-friends-search" placeholder="'+text["HomeInfoFriendSearch"]+'"><input type="submit" id="myhp-homeinfo-friends-search-submit" value="»"></form></div><div id="myhp-homeinfo-friends">'+friends+'</div></div>');
                        habboHomeFriendsPage=1;
                        habboHomeFriendsPages=friends.match(/\<input type=\"hidden\" id=\"totalPages\" value=\"(.*)\"\/\>/)[1];
                        $("#myhp-homeinfo-friends").on("click", "a.avatar-list-paging-link", function(){
                            if($(this).is("#avatarlist-search-first")){
                                habboHomeFriendsPage=1;
                            }else if($(this).is("#avatarlist-search-previous")){
                                habboHomeFriendsPage=habboHomeFriendsPage-1;
                            }else if($(this).is("#avatarlist-search-next")){
                                habboHomeFriendsPage=habboHomeFriendsPage+1;
                            }else if($(this).is("#avatarlist-search-last")){
                                habboHomeFriendsPage=habboHomeFriendsPages;
                            }
                             $.ajax({url:site+"/myhabbo/avatarlist/friendsearchpaging", type:"POST", data:{_mypage_requested_account:habboHomeId, widgetId:habboHomeWidgetId[hotel], pageNumber:habboHomeFriendsPage, searchString:habboHomeFriendsSearch}, async:false})
                             .done(function(friends){
                             friends=friends.replace(/\<div class=\"avatar-list-open\"\>(.*)\<\/div\>/g, "");
                                $("#myhp-homeinfo-friends").html(friends);
                            });
                        });
                        $("#myhp-homeinfo-friends-search-form").submit(function(event){
                            habboHomeFriendsSearch=$("#myhp-homeinfo-friends-search").val();
                             $.ajax({url:site+"/myhabbo/avatarlist/friendsearchpaging", type:"POST", data:{_mypage_requested_account:habboHomeId, widgetId:habboHomeWidgetId[hotel], searchString:habboHomeFriendsSearch}, async:false})
                             .done(function(friends){
                             friends=friends.replace(/\<div class=\"avatar-list-open\"\>(.*)\<\/div\>/g, "");
                                habboHomeFriendsPage=1;
                                habboHomeFriendsPages=friends.match(/\<input type=\"hidden\" id=\"totalPages\" value=\"(.*)\"\/\>/)[1];
                                $("#myhp-homeinfo-friends").html(friends);
                            });
                            event.preventDefault();
                        });
                    });
                    
                     $.ajax({url:site+"/myhabbo/badgelist/badgepaging", type:"POST", data:{_mypage_requested_account:habboHomeId, widgetId:habboHomeWidgetId[hotel]}, async:false})
                    .done(function(badges){
                        $("#myhp-homeinfo").append('<div id="myhp-homeinfo-container3"><div id="myhp-homeinfo-badges-title">'+text["HomeInfoBadges"]+'</div><div id="myhp-homeinfo-badges">'+badges+'</div></div>');
                        habboHomeBadgesPage=1;
                        habboHomeBadgesPages=badges.match(/\<input type=\"hidden\" id=\"badgeListTotalPages\" value=\"(.*)\"\/\>/)[1];
                        $("#myhp-homeinfo-badges").on("click", "#badge-list-paging a", function(){
                            if($(this).is("#badge-list-search-first")){
                                habboHomeBadgesPage=1;
                            }else if($(this).is("#badge-list-search-previous")){
                                habboHomeBadgesPage=habboHomeBadgesPage-1;
                            }else if($(this).is("#badge-list-search-next")){
                                habboHomeBadgesPage=habboHomeBadgesPage+1;
                            }else if($(this).is("#badge-list-search-last")){
                                habboHomeBadgesPage=habboHomeBadgesPages;
                            }else{
                                habboHomeBadgesPage=1;
                            }
                             $.ajax({url:site+"/myhabbo/badgelist/badgepaging", type:"POST", data:{_mypage_requested_account:habboHomeId, widgetId:habboHomeWidgetId[hotel], pageNumber:habboHomeBadgesPage}, async:false})
                             .done(function(badges){
                                $("#myhp-homeinfo-badges").html(badges);
                            });
                        });
                    });
                })
                
                 .fail(function(){
                    $("#myhp-homeinfo").html(text["NoConnect"]);
                     });
            }
    }
}