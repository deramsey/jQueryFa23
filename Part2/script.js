$(document).ready(function(){

    $("#dm").on("click", function(){
        if($(this).prop("checked")){
            $("main").css({"background-color": "black", "color":"white"});
            $("header").css({"background-color": "#004400", "color":"#ccffcc"});
            $("footer").css({"background-color": "#004400", "color":"#ccffcc"});
            $("body").css("background-color", "#444400");
            $("#dm_label").text("🌙");
        }
        else{
            $("main").css({"background-color": "white", "color":"black"});
            $("header").css({"background-color": "#ccffcc", "color":"#116611"});
            $("footer").css({"background-color": "#ccffcc", "color":"#116611"});
            $("body").css("background-color", "#eeeeaa");
            $("#dm_label").text("🌞");
        }
    });

    $("#alert").on("click", function() {
        alert("Hello World!");
    })

    $("#alert").on("mouseenter", function() {
        $(this).addClass("pulse").text("Click Me!");
    });

    $("#alert").on("mouseleave", function(){
        $(this).removeClass("pulse").text("Show Alert");
    });
});