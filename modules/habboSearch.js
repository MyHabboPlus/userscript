// MyHabboPlus Search Habbos on /me

if (window.top==window){

     if(dir=="/me" && prefHabboSearch=="1"){
        $("#wide-personal-info").after('<div id="myhp-habbosearch"><form id="myhp-habbosearch-form"><input type="text" placeholder="'+text["HabboSearchPlaceholder"]+'"><input type="submit" value="»"></form><div id="myhp-habbosearch-content"></div></div>');

        $("#myhp-habbosearch-form").submit(function(event){
                            habboSearch=$("#myhp-habbosearch-form input[type=text]").val();
                            if(habboSearch!=""){
                               $.ajax({url:site+"/habblet/habbosearchcontent?searchString="+encodeURIComponent(habboSearch), async:false})
                                 .done(function(search){
                                    search=search.replace(/<li (.*) homeurl=\"(.*)\" (.*)>/g, '<a href="$2"><li $1 $3>').replace(/<\li>/g, '</li></a>');
                                    $("#myhp-habbosearch-content").html('<div id="myhp-habbosearch-separator"></div>'+search);

                                    habboSearchPage=1;
                                    habboSearchPages=search.match(/\<input type=\"hidden\" id=\"avatar-habblet-list-container-totalPages\" value=\"(.*)\"\/\>/);
                                    if(habboSearchPages==null){habboSearchPages=1;}else{habboSearchPages=habboSearchPages[1];}
                                    $("#avatar-habblet-list-container-list-next").after(' <a id="avatar-habblet-list-container-list-last" class="avatar-habblet-list-container-list-paging-link" href="#">»»</a>');
                                    
                                    $("#myhp-habbosearch-content").on("click", ".avatar-habblet-list-container-list-paging-link", function(){
                                        if($(this).is("#avatar-habblet-list-container-list-first")){
                                            habboSearchPage=1;
                                        }else if($(this).is("#avatar-habblet-list-container-list-previous")){
                                            habboSearchPage=habboSearchPage-1;
                                        }else if($(this).is("#avatar-habblet-list-container-list-next")){
                                            habboSearchPage=habboSearchPage+1;
                                        }else if($(this).is("#avatar-habblet-list-container-list-last")){
                                            habboSearchPage=habboSearchPages;
                                        }else{
                                            habboSearchPage=$(this).attr("id").split('-')[6];
                                        }
                                    $.ajax({url:site+"/habblet/habbosearchcontent?searchString="+habboSearch+"&pageNumber="+habboSearchPage, async:false})
                                        .done(function(search){
                                             search=search.replace(/<li (.*) homeurl=\"(.*)\" (.*)>/g, '<a href="$2"><li $1 $3>').replace(/<\li>/g, '</li></a>');
                                             $("#myhp-habbosearch-content").html('<div id="myhp-habbosearch-separator"></div>'+search);
                                             $("#avatar-habblet-list-container-list-previous").before('<a id="avatar-habblet-list-container-list-first" class="avatar-habblet-list-container-list-paging-link" href="#">««</a>  ');
                                             $("#avatar-habblet-list-container-list-next").after(' <a id="avatar-habblet-list-container-list-last" class="avatar-habblet-list-container-list-paging-link" href="#">»»</a>');
                                        });
                                    });
                                });
                            }else{
                                $("#myhp-habbosearch-content").html("");
                            }
                            event.preventDefault();
                        });
    }
}