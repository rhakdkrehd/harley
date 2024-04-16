$(document).ready(function(){
    var menuButNum=0;
    
    $(".mainMenuBut").click(function(){
        menuButNum++;
        if(menuButNum==1){
            $(".main_menu_box").addClass("on");
            $(".opctiyBox").addClass("on");
            $(".mainMenuBut").css({zIndex:2});
            menuButNum=-1;
        }
        else {
            $(".main_menu_box").removeClass("on");
            $(".main_menu").removeClass("menuOn");
            $(".sub_menu_box").removeClass("on");
            $(".opctiyBox").removeClass("on");
        }
    });
    
    $(".main_menu").each(function(index){$(this).attr("mainMenuIndex",index);});
    $(".main_menu").click(function(){
        var mainMenuNum = $(this).attr("mainMenuIndex");
        
        $(".main_menu").removeClass("menuOn");
        $(".sub_menu").removeClass("on");
        
        $(".main_menu").eq(mainMenuNum).addClass("menuOn");
        $(".sub_menu_box").addClass("on");
        $(".sub_menu").eq(mainMenuNum).addClass("on");
    });
    
    $(".color_but").each(function(index){$(this).attr("colorButIndex",index);});
    $(".color_but").click(function(){
        var colorButNum=$(this).attr("colorButIndex");
        
        $(".color_but").removeClass("colorButOn");
        $(".color_img").removeClass("on");
        $(".color_name").removeClass("on");
        
        $(".color_but").eq(colorButNum).addClass("colorButOn");
        $(".color_img").eq(colorButNum).addClass("on");
        $(".color_name").eq(colorButNum).addClass("on");
    });
});