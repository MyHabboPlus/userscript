// MyHabboPlus Habbo Home module

if (window.top==window){


	if(dir.match(/^\/home\//) && prefHomeInfo=="1"){
		$("#content.clearfix").prepend('<div class="myhp-div" id="myhp-div-home"><div class="myhp-div-header">'+text["HomeInfoDetails"]+'</div><div id="myhp-homeinfo">'+text["Loading"]+'</div></div>');
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

				$.ajax({url:site+"/habblet/habbosearchcontent?searchString="+encodeURIComponent(habboHomeName), async:false})
				.done(function(info){
					info=info.match(/<ul class=\"habblet-list\">([\s\S]*?)([\s\S]*?)<\/li>/)[0];
					if(info.match(/\<span title=\"(.*)\"\>(.*)\<\/span\>/)){
						habboHomeLastVisit=info.match(/\<span title=\"(.*)\"\>(.*)\<\/span\>/);
						habboHomeLastVisit=habboHomeLastVisit[1]+". <em>"+habboHomeLastVisit[2]+"</em>";
					}else{
						habboHomeLastVisit="--";
					}
				});


				$("#myhp-homeinfo").html('<div id="myhp-homeinfo-container1"><div class="myhp-homeinfo-habbo"><img src="'+site+'/habbo-imaging/avatarimage?user='+encodeURIComponent(habboHomeName)+'&direction=3&head_direction=3&action=&size=m" width="64" height="110"></div><div class="myhp-homeinfo-general"><div class="myhp-homeinfo-name">'+habboHomeName+'</div><div class="myhp-homeinfo-motto">'+habboHomeMotto+'</div><div id="myhp-homeinfo-addfriend">'+text["HomeInfoAddFriend"]+'</div></div><div class="myhp-homeinfo-list"><strong>Habbo ID: </strong>'+habboHomeId+'</div><div class="myhp-homeinfo-list"><strong>'+text["HomeInfoDate"]+' </strong>'+habboHomeDate+'</div><div class="myhp-homeinfo-list"><strong>'+text["HomeInfoStatus"]+' </strong>'+habboHomeStatus+'</div><div class="myhp-homeinfo-list" title="'+habboHomeLastVisit.replace(/(<([^>]+)>)/g,"")+'"><strong>'+text["HomeInfoLastVisit"]+' </strong>'+habboHomeLastVisit+'</div></div>');

				$("#myhp-homeinfo-addfriend").click(function(){
					habboHomeAddToken=$('meta[name="csrf-token"]').attr("content");
					$.ajax({url:site+"/myhabbo/friends/add", type:"POST", headers:{"X-Prototype-Version":"1.7", "X-App-Key":habboHomeAddToken}, data:{accountId:habboHomeId}, dataType:"html", async:false})
					.done(function(addfriend){
						addfriend=addfriend.split('"')[3].replace(/\\t/g, "").replace(/\\n/g, "");
						myhpLightbox("alert", text["Attention"], addfriend);
					})
					.fail(function(){
						myhpLightbox("alert", text["Error"], text["HomeInfoAddError"]);
					});
				});

				$.ajax({url:site+"/myhabbo/avatarlist/friendsearchpaging", type:"POST", data:{_mypage_requested_account:habboHomeId, widgetId:habboHomeWidgetId[hotel]}, async:false})
				.done(function(friends){
					friends=friends.replace(/\<div class=\"avatar-list-open\"\>(.*)\<\/div\>/g, "");
					$("#myhp-homeinfo").append('<div id="myhp-homeinfo-container2"><div id="myhp-homeinfo-friends-title">'+text["HomeInfoFriends"]+'</div><div style="float:right;"><form id="myhp-homeinfo-friends-search-form"><input type="text" id="myhp-homeinfo-friends-search" placeholder="'+text["HomeInfoFriendSearch"]+'"><input type="submit" id="myhp-homeinfo-friends-search-submit" value="»"></form></div><div id="myhp-homeinfo-friends">'+friends+'</div><div id="common-friends">'+text["HomeInfoFriendsCommon"]+'</div></div>');
					habboHomeFriendsPage=1;
					habboHomeFriendsPages=friends.match(/\<input type=\"hidden\" id=\"totalPages\" value=\"(.*)\"\/\>/)[1];
					$("#myhp-homeinfo-container2").on("click", "#common-friends", function(){ 

						if($("head").html().match(/document.habboLoggedIn = true;/)){
							myHabboName=$("head").html().match(/var habboName = \"(.*)\";/)[1];
							myHabboId=$("head").html().match(/var habboId = (.*);/)[1];
							if(myHabboId!=habboHomeId){

								if(!$("#myhp-homeinfo-commonfriends.commonfriends-finished").length){
									$.ajax({url:site+"/myhabbo/avatarlist/friendsearchpaging", type:"POST", data:{_mypage_requested_account:habboHomeId, widgetId:habboHomeWidgetId[hotel]}, async:false})
									.done(function(friends){
										habboHomeFriendsPagesCommon=friends.match(/\<input type=\"hidden\" id=\"totalPages\" value=\"(.*)\"\/\>/)[1];
									});

									$.ajax({url:site+"/myhabbo/avatarlist/friendsearchpaging", type:"POST", data:{_mypage_requested_account:myHabboId, widgetId:habboHomeWidgetId[hotel]}, async:false})
									.done(function(friendsMe){
										habboHomeFriendsPagesMe=friendsMe.match(/\<input type=\"hidden\" id=\"totalPages\" value=\"(.*)\"\/\>/)[1];
									});
									commonProgress=0;
									habboHomeFriendsTotalPages=habboHomeFriendsPagesCommon*1+habboHomeFriendsPagesMe*1;
									myhpLightbox(null, text["HomeInfoFriendsCommon"], '<div id="myhp-homeinfo-commonfriends"><progress id="common-friends-progress" value="0" max="'+habboHomeFriendsTotalPages+'" style="width:200px; display:block; margin:auto;"></progress></div>');

									var friendsCommon=[];
									for(i=1; i<=habboHomeFriendsPages; i++){
										$.ajax({url:site+"/myhabbo/avatarlist/friendsearchpaging", type:"POST", data:{_mypage_requested_account:habboHomeId, widgetId:habboHomeWidgetId[hotel], pageNumber:i}, async:false})
										.done(function(friends){
											friendsCommonPage=friends.match(/<li([\s\S]*?)<\/li>/g);
											for(n=0; n<=friendsCommonPage.length-1; n++){
												friendsCommon[friendsCommon.length]=friendsCommonPage[n].match(/<li(.*) title=\"([\s\S]*?)\">/)[2];
											}
											commonProgress++;
											$("#common-friends-progress").val(commonProgress);
										});
									}

									var friendsCommonMe=[];

									for(i=1; i<=habboHomeFriendsPagesMe; i++){
										$.ajax({url:site+"/myhabbo/avatarlist/friendsearchpaging", type:"POST", data:{_mypage_requested_account:myHabboId, widgetId:habboHomeWidgetId[hotel], pageNumber:i}, async:false})
										.done(function(friendsMe){
											friendsCommonPageMe=friendsMe.match(/<li([\s\S]*?)<\/li>/g);
											for(n=0; n<=friendsCommonPageMe.length-1; n++){
												friendsCommonMe[friendsCommonMe.length]=friendsCommonPageMe[n].match(/<li(.*) title=\"([\s\S]*?)\">/)[2];
											}
											commonProgress++;
											$("#common-friends-progress").val(commonProgress);
										});
									}

									if(friendsCommon.length>friendsCommonMe.length){
										friendsCommonOne=friendsCommonMe;
										friendsCommonTwo=friendsCommon;
									}else{
										friendsCommonOne=friendsCommon;
										friendsCommonTwo=friendsCommonMe;
									}

									friendsCommonResult=[];
									friendsCommonCode="";
									friendsCommonNum=0;

									for(i=0; i<=friendsCommonOne.length; i++){
										if(friendsCommonTwo.indexOf(friendsCommonOne[i])!==-1){
											friendsCommonResult[friendsCommonResult.length]=friendsCommonOne[i];
											friendsCommonCode+='<div class="myhp-homeinfo-commonfriend"><div class="habbo" style="background-image:url('+site+'/habbo-imaging/avatarimage?user='+friendsCommonOne[i]+'&direction=2&head_direction=2&gesture=&action=&size=n);"></div><a href="'+site+'/home/'+friendsCommonOne[i]+'" target="_blank"><div class="user">'+friendsCommonOne[i]+'</div></a></div>';
											friendsCommonNum++;
										}
									}

									if(friendsCommonNum!=0){
										$("#myhp-homeinfo-commonfriends").addClass("commonfriends-finished").html(friendsCommonCode);
									}else{
										$("#myhp-homeinfo-commonfriends").addClass("commonfriends-finished").text(text["HomeInfoFriendsCommonZero"]);
									}
									$("#myhp-homeinfo-commonfriends").parent().parent().children(".lightbox-header").append(" ("+friendsCommonNum+")");
									
								}else{
									$("#myhp-homeinfo-commonfriends").parent().parent().addClass("lightbox-animation").parent().show();
								}
							}else{
								myhpLightbox("alert", "Error", text["HomeInfoFriendsCommonYou"]);
							}
						}else{
							myhpLightbox("alert", "Error", text["HomeInfoFriendsCommonLogin"]);
						}
					});

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
	if(badges.match(/\<input type=\"hidden\" id=\"badgeListTotalPages\" value=\"(.*)\"\/\>/)){
		habboHomeBadgesPages=badges.match(/\<input type=\"hidden\" id=\"badgeListTotalPages\" value=\"(.*)\"\/\>/)[1];
	}else{
		habboHomeBadgesPages=1;
	}
	habboHomeBadgesPage=1;
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

                    $.ajax({url:site+"/myhabbo/avatarlist/roomswidget", type:"POST", data:{anAccountId:habboHomeId, widgetId:[hotel]}, async:false}) //Rooms widget. Thanks to Saternoir for the URL.
                    .done(function(rooms){
                    	if(rooms.match(/<tr>/g)!=undefined){
                    		rooms=rooms.match(/<table(.*)>([\s\S]*?)<\/table>/g)[0];
                    		roomsNum=rooms.match(/<tr>/g).length;
                    	}else{
                    		rooms=text["HomeInfoNoRooms"];
                    		roomsNum=0;
                    	}
                    	$("#myhp-homeinfo").append('<div id="myhp-homeinfo-container4"><div id="myhp-homeinfo-rooms-title">'+text["HomeInfoRooms"]+' ('+roomsNum+')</div><div id="myhp-homeinfo-rooms">'+rooms+'</div></div>');

                    });

                    $.ajax({url:site+"/myhabbo/groups/grouplist", type:"POST", data:{_mypage_requested_account:habboHomeId, widgetId:habboHomeWidgetId[hotel]}, async:false})
                    .done(function(groups){
                    	if(groups.match(/<li (.*)>/g)!=undefined){
                    		groups=groups.match(/<ul class=\"groups-list\">([\s\S]*?)<\/ul>/g)[0].replace(/\<div class=\"groups-list-open\"\>(.*)\<\/div\>/g, "");
                    		groupsNum=groups.match(/<li (.*)>/g).length;
                    	}else{
                    		groups=text["HomeInfoNoGroups"];
                    		groupsNum=0;
                    	}
                    	$("#myhp-homeinfo").append('<div id="myhp-homeinfo-container5"><div id="myhp-homeinfo-groups-title">'+text["HomeInfoGroups"]+' ('+groupsNum+')</div><div id="myhp-homeinfo-groups">'+groups+'</div></div>');
                    });

                    $.ajax({url:site+"/myhabbo/avatarlist/ratingwidget", type:"POST", data:{_mypage_requested_account:habboHomeId, widgetId:habboHomeWidgetId[hotel]}, async:false}) //Rating widget. Thanks to Saternoir for the URL.
                    .done(function(rating){
                    	rating=rating.match(/<div class=\"rating-average\">([\s\S]*?)\)([\s\S]*?)<\/div>/g)[0];
                    	rating=rating.replace(/<b>(.*)<\/b>/g, "")
                    	$("#myhp-homeinfo").append('<div id="myhp-homeinfo-container6"><div id="myhp-homeinfo-rating-title">'+text["HomeInfoRatings"]+'</div><div id="myhp-homeinfo-rating">'+rating+'</div></div>');

                    });
                    
                })

.fail(function(){
	$("#myhp-homeinfo").html(text["NoConnect"]);
});
}
}
}