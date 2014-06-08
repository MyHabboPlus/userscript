// MyHabboPlus New articles module
if (window.top==window){
            
    if(dir=="/articles" && prefNewArticles=="1" || dir=="/articles/" && prefNewArticles=="1"){
        var newSearching; var newLast;
        function newSearching(){
             newSearch();
             newSearching = setInterval(function(){
                newSearch();
             },15000);
                
            }

        function newSearch(){
            $.ajax({url:site+"/articles"})
                .done(function(newSearch){
                    newLast=newSearch.match(/<a href=\"\/articles\/(.*)\" class=\"article-(.*)\">/)[1];
                    if(newActual!=newLast){
                        document.title="["+text["NewArticlesTitle"]+"] "+document.title;
                        $("body").prepend('<div id="myhp-newsdetector-alarm"><iframe width="200" height="65" src="//www.youtube-nocookie.com/embed/'+prefNewArticlesVideo+'?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
                        $("#myhp-newsdetector-button").removeClass("myhp-newsdetector-searching").addClass("myhp-newsdetector-detected").html(text["NewArticlesDetected"]);
                        $("#myhp-newsdetector-button").wrap('<a href="articles/'+newLast+'" class="nodecoration">');
                        clearInterval(newSearching);
                    }
                });
            }

        var newActual=$('meta[property="og:url"]').attr("content").match(/\/articles\/(.*)/)[1];

        $("#column2").prepend('<div id="myhp-newsdetector-button" class="myhp-newsdetector-start">'+text["NewArticles"]+'</div>');

        $("body").on("click", ".myhp-newsdetector-start", function(){
            $(this).removeClass("myhp-newsdetector-start").addClass("myhp-newsdetector-searching").html(text["NewArticlesSearching"]);
            newSearching();
        });
    }
}