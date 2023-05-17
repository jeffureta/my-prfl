import { wrapperColor, overlayColor,
        iconsColorPrimary, 
        iconsColorSecondary} from "./_variables.js"
import { hoverOverlay, hoverIcons } from "./_hover.js"   
import { flexCenter } from "./_flexcenter.js"     

$(function(){
    $(".wrapper").css(
        {
            "height": "100vh",
            "background": wrapperColor
        }
    )
    $(".profile").css(
        {
            "position": "relative",
            "width": "300px",
            "height": "350px",
            "cursor": "pointer",
            "border": "12px",
            "border-radius": "35px"
        }
    )
    $(".overlay").css(
        {
            "width": "100%",
            "height": "100%",
            "background": overlayColor,
            "cursor": "pointer",
            "opacity": "0",
            "transition": "all 1s",
            "border-radius": "35px"
        }
    )
    $(".social-icons").css(
        {
            "list-style": "none",
            "bottom": "10px",
            "position": "absolute",
            "left": "22px"
        }
    )
    $(".social-icons li").css(
        {
            "width": "25px",
            "height": "25px",
            "border": "1px solid #eee",
            "padding": "20px",
            "margin-right": "10px",
            "border-radius": "5px",
            "transition": "all 1s"
        }
    )
    $(".social-icons li a").css( 
        {
            "color" : "white",
        }
    )
    $(".overlay .about").css(
        {
        "position": "relative",
        "top":"40%",
        "color": iconsColorPrimary,
        "flex": "column"
        }
    )
    $(".wrapper, .social-icons, .social-icons li, .overlay .about").css(flexCenter());
})

hoverOverlay();

hoverIcons();
