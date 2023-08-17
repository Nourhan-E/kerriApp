
$(window).scroll(function(){
    let sectionTop = $("#About").offset().top
    
    let top = $(window).scrollTop()

    if( top >= sectionTop){
        $(".navbar").css("background-color","#000")
        $(".icoTop").fadeIn(1000)
    }
    else{
        $(".navbar").css("background-color","transparent")
        $(".icoTop").fadeOut(1000)
    }

})

$(".nav-link").click(function(){

    let hrefVle = $(this).attr("href")
    let sectionTop = $(hrefVle).offset().top
    $("html,body").animate({ scrollTop: sectionTop}, {duration:3000,queue:false}) // {queue بتشغل اخر كول باك حصل }

    $(this).addClass("active")
    // $(this).parent().siblings().find("a").removeClass("active")
    $(".nav-link").not(this).removeClass("active")
})

$(".icoTop").click(function(){
    $("html,body").animate({scrollTop: 0},3000)
})


$(".box").click(function(){
    let color = $(this).css("background-color")
    console.log(color)
 
    localStorage.setItem("color",color)
    $(":root").css("--main-color",color)
})

if(localStorage.getItem("color") != null){
    $(":root").css("--main-color",localStorage.getItem("color"))

}

  

let width = $(".innerBox").outerWidth()
$(".sidebar").css({left: `-${width}px`})




$(".setting").click(function(){

    let widthinner = $(".innerBox").outerWidth()
    // console.log(widthinner)
     
    let leftinner = $(".sidebar").css("left")


    if(leftinner== "0px"){
        $(".sidebar").animate({left:`-${widthinner}px`},1000)

    }
    else{
        $(".sidebar").animate({left:`0px`},1000)

    }
    
})