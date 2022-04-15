(function ($) { // début de fichier


 

    $('#btnCommencez').on ("click", function() {
        if($(".sectionImage").is(":visible"))
        {
            $("#btnCommencez").text("Commencez")
        }
        else
        {
            $("#btnCommencez").text("Fermer")
        }

        $(".sectionImage").slideToggle("slow")
        
    });
//------------------------------------------------------
    $( window ).resize(function() {
        $( "#log" ).html( "<div>" + $( window ).width()  + "</div>" );

      });

      $



//slideToggle gere l'ouverture ainsi que la fermeture
    $('#menuSelector').on("click", function () {
        $('#mobileNav').slideToggle(400);
    });
    //var daoudaa= document.querySelector("#btnCommencez");     
    //$('#btnCommencez')
    // $("#btnCommencez").on("click", function () {
//le slideDown permet que de l'ouvrir la page.
    //     $(".sectionImage").slideDown(400);
    //     //$(this).fadeOut(0);
    //     //$(this).toggle();
    //     //$(this).hide();
    //     $(this).css('display', 'none');

    //     return false;
    // });


    /*
     *  Changement d'images au survol de la souris
     */

    var imageSrcOriginale = $('.firstColumnRelative img').attr('src');
    var imageSrcACopier = $(".sectionImage img").attr('src');

    $('.firstColumnRelative img').on("mouseover", function () {
        $(this).attr('src', imageSrcACopier);
    });

    $('.firstColumnRelative img').on("mouseleave", function () {
        $(this).attr('src', imageSrcOriginale);
    });


    /*
     *  Diaporama page d'accueil / transition en fondu
     */

    $('.slideshow').slick({
        //setting-name: setting-value
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        fade: true
    });


    $('.monCarousel-haut').slick({
        //setting-name: setting-value
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        dots: true,
        arrows: false,
        mobileFirst: true,
        responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                arrows: true,
                dots: false
            }
        }]
    });

    /*
     *  Slideshow basique
     */
    /*
    var indexCurrentImage = 0;
    var quantiteImages = $('.slideshow img').length;
    var timerSlideshow; 

    // faire apparaitre la premiere image
	$('.slideshow img').eq(0)
        .addClass('active')
        .fadeIn(500);
		
    // attend le chargement de la premiere image
	$('.slideshow img').eq(0).on("load", function(){
        // récupere la hauteur de la premiere image
        var hauteurImage = $('.slideshow img').eq(0).height();
        // applique la hauteur de l'image au slideshow pour éviter la superposition
		$('.slideshow').height( hauteurImage );


		timerSlideshow = setInterval(nextImage, 2000);
	
    });

    function nextImage(){

       	if( indexCurrentImage == (quantiteImages - 1) ){
            indexCurrentImage = 0;
    	}
        else {
            indexCurrentImage++;
        }

        // j'efface l'image active
        $('.slideshow img.active')
            .removeClass('active')
            .fadeOut(500);

        // j'affiche la prochaine image
        $('.slideshow img')
            .eq(indexCurrentImage)
            .addClass('active')
            .fadeIn(500);
        
    }

    $('.slideshow').on("mouseover", function(){
        clearInterval(timerSlideshow);
    });

    $('.slideshow').on("mouseleave", function(){
        timerSlideshow = setInterval(nextImage, 5000);
    });
    */


    /*
     *  Sous menu "sticky" 
     */


    // offset()
    //console.log(  $('#subHeader').offset().top   );
    // evenement "scroll" appliqué à la fenetre $(window)

    if ($('#subHeader').length > 0) {

        const offsetTopSousMenuOriginal = $('#subHeader').offset().top;

        $(window).on("scroll", function () {


            // si le scroll de la fenetre est supérieur ou égale à la position originale du sous menu
            if ($(window).scrollTop() >= offsetTopSousMenuOriginal) {
                // alors je fixe le menu en haut de l'écran (ajoute la classe .fixedMenu)
                $('body').addClass('fixedMenu');
                $('main').css('margin-top', $('#subHeader').height());
            }
            // sinon
            else {
                // alors je supprime la classe .fixedMenu
                $('body').removeClass('fixedMenu');
                $('main').css('margin-top', 0);
            }
            //console.log(  "scrollTop: " + $(window).scrollTop() + "  / offset.top: " + $('#subHeader').offset().top + "  / offset.top original: " + offsetTopSousMenuOriginal);

        });
    }


    /* 
     * retour en haut de page de manière fluide
     */

    // déclarer un événement au click du bouton
    $("#btnRetourHautPage, #subHeader a").on("click", function () {
        var elementCible = $(this).attr('href');
        //console.log( $(elementCible) );
        var positionElementCible = $(elementCible).offset().top;
        console.log(positionElementCible);
        $("html, body").animate({
            scrollTop: positionElementCible
        }, 150);
        return false;
    });



    /* 
     * Charge plus d'articles ( avec methode load() )
     */

    $('.btnLoadMore').on("click", function () {
        $(this).hide();

        $('.btnWrapper').load('https://clients.raphaelwittmann.net/webforce3/more-articles.html', function () {

            // s'execute un fois que l'url est chargée
            $('.monCarousel').slick({
                //setting-name: setting-value
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
                dots: true,
                arrows: false,
                mobileFirst: true,
                responsive: [{
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 3,
                        arrows: true,
                        dots: false
                    }
                }]
            });

        });



    });





})(jQuery); // Fin de fichier