$(function(){

    //$("#segundo").css({"background-color":"red"})
    //$(".primero").css({"background-color":"red"})
    /*$("#btn-hide").dblclick(function(){
        //alert("hola")
        $("#segundo").hide()
    })

      $("#btn-show").click(function(){
        $("#segundo").show()
    })
    */

   /* $(".primero").mouseenter(function(){
        //alert("hola")
        $("#segundo").fadeOut()
    })

    $(".primero").mouseleave(function(){
        $("#segundo").fadeIn()
    })*/

        /*
        $(".primero").animate({width:"300px"})

        $(".primero").mouseenter(function(){
        //alert("hola")
        $("#segundo").slideDown()
    })

    $(".primero").mouseleave(function(){
        $("#segundo").slideUp()
    })*/

        $("#btn-hide").click(function(){

            //alert($("#segundo").text())
            //alert($("#segundo").html())
            //alert($("#segundo").attr("title"))
            //$("#segundo").text("Hola <strong>programadores</strong>")
           // $("#segundo").html("Hola <strong>programadores</strong>")
           //$("#segundo").append("Hola <strong>programadores</strong>")
           //$("#segundo").prepend("Hola <strong>programadores</strong>")
           //$("#segundo").after("<p>Hola <strong>programadores</strong></p>")
          // $("#segundo").before("<p>Hola <strong>programadores</strong></p>")
           //$("#segundo").remove()
           //$("#btn-show").empty()

            $("h1").toggleClass("red")

        })

        
    

})