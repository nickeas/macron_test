$(function(){
    //focusin
    $("input").focusin( function() {
        
        $(this).val("");
    
      });
    
    //buttonで移動
    var position = $("output").offset().top-60; 
    
    $('button').click(function(){
        $("html,body").animate({
            scrollTop : position
        }, {
            queue : false
        });
    });
    //移動ゆっくり  
    $('a[href^="#"]').click(function () {
            var href = $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top-55;
            var duration = 500;
            $("html, body").animate({
            scrollTop: position
            }, duration, "swing");
            return false;
    });
    
    // output 色の変更
    $("button").click(function() {
        // cssで色を変化
        $("output").css("color","#28a745");
        
      });
    //クリックで前の要素
    $("td").focusin( function() {
        $(this).prev("td").css("color","#c21027");
      });
    $("td").focusout( function() {
        $(this).prev("td").css("color","#000000");
      });   
        
});