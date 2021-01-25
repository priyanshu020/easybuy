//MENU BAR STYLING
    var menu= document.getElementById("menu");

    menu.style.maxHeight= "0px";

    function menutoggle() {
        if(menu.style.maxHeight== "0px")
            {
                menu.style.maxHeight= "300px";
            }
        else
            {
                menu.style.maxHeight= "0px";
            }
    }

//STICKY HEADER STYLING
    var header= $('header');
    var sticky= header.before(header.clone().addClass("sticky"));

    $(window).on("scroll", function() {
        var scrollFromTop = $(window).scrollTop();
        $("body").toggleClass("scroll", (scrollFromTop > 770));
    })    

//POPUP NEWSLETTER STYLING
    $(document).ready(function(){
        var popupMain= document.getElementById("popupMain")
        setTimeout(function(){
            popupMain.style.display = "flex";
        }, 5000);
    });

    $('.submitId').click(function() {
        popupMain.style.display = "none";
    })
