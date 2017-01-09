(function ($) {
    "use strict";

    var presentation = {
        english: "Hello! My name is Gonzalo Terzano. I am a Semi-Senior Web Developer, with 2-3 years of experience in the area. I have many skills to work as a team member and also individually. I always push myself to the limit in order to achieve excellece in my work.",
        spanish: "Hola! Soy Gonzalo Terzano. Semi-Senior Web Developer, con 2-3 años de experiencia en tecnologías de este area. Poseo habilidades para trabajar tanto en equipo como individualmente. Con el objetivo de obtener excelentes resultados en las tareas asignadas siempre ofrezco mi mayor esfuerzo y dedicación.",
        delay: 25
    };
    var particlesConfig = {
        "particles": {
            "number": {
                "value": 90,
                "density": {
                    "enable": true,
                    "value_area": 400
                }
            },
            "color": {
                "value": "#1976d2"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#1976d2",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    };

    jQuery(document).ready(function () {

        /***MENU TOGGLE ANIMATION***/
        $('.toggle-normal').on('click', function() {
                $('.top-bar').toggleClass('top-transform');
                $('.middle-bar').toggleClass('middle-transform');
                $('.bottom-bar').toggleClass('bottom-transform');
            });

        /***MENU CLOSE***/
        $('.section,div#menu-options a').on('click', function () {
            $('nav#theMenu').removeClass('menu-open');
            $('.top-bar').removeClass('top-transform');
            $('.middle-bar').removeClass('middle-transform');
            $('.bottom-bar').removeClass('bottom-transform');
        });

        /***MENU OPEN***/
        $('div#menuToggle').on('click', function () {
            $('div#menuToggle').toggleClass('active');
            $('body').toggleClass('body-push-toright');
            $('nav#theMenu').toggleClass('menu-open');
        });


        /***SMOOTH SCROLL***/
        $(function () {
            $('div#menu-options,div#about-btn').find('a[href*=#]:not([href=#])').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 900, "swing");
                        return false;
                    }
                }
            });
        });

        /***SCROLL TO TOP***/
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
                $('div#scrollup').addClass('animated flipInY').fadeIn(200);    // Fade in the arrow
            } else {
                $('div#scrollup').fadeOut(200);
            }
        });

        $('div#scrollup').on('click', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 600);

            return false;
        });

        /***SKILLS***/
        $('div.skillbar').each(function () {
            $(this).find('div.skillbar-bar').css({
                width: $(this).attr('data-percent')
            });
        });

        /***GOOGLE MAP***/
        function init() {
            var mapOptions = {
                zoom: 5,
                center: new google.maps.LatLng(-30.010268, -64.5910376),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                mapTypeControl: false,
                streetViewControl: false
            };

            var myMap = new google.maps.Map(document.getElementById('myMap'), mapOptions);

            new MarkerWithLabel({
                position: myMap.getCenter(),
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 0
                },
                map: myMap,
                labelAnchor: new google.maps.Point(10, 10),
                labelClass: "map-label", // The CSS class for the label
                draggable: false

            });
        }

        /***GOOGLE MAP INITIALIZATION***/
        init();

        // /***MAIL SCRIPT***/ // Upadted in V. 1.1
        $('form.contact-form').on('submit', function (e) {
            e.preventDefault(); //Prevents default submit
            var form = $(this);
            $("#submit").attr('disabled', 'disabled'); //Disable the submit button on click
            var post_data = form.serialize(); //Serialized the form data 
            $('div#form-loader').removeClass('is-hidden').fadeIn(500);
            $.ajax({
                url: 'https://formspree.io/gonzaloterzano@gmail.com', // Form script
                method: 'POST',
                data: post_data,
                dataType: "json"
            })
                .success(function () {
                    $('div#form-loader').fadeOut(500);
                    Materialize.toast('Message Sent! I will contact you shortly, Thanks', 4000);
                    $("form.contact-form")[0].reset();
                    $("form.contact-form")[1].reset();
                    Materialize.updateTextFields(); // Rest floating labels
                    $("#submit").removeAttr('disabled', 'disabled'); // Enable submit button

                })
                .error(function () {
                    $('div#form-loader').fadeOut(500);
                    Materialize.toast('Sorry! Something Wrong, Try Again', 4000);
                    $("#submit").removeAttr('disabled', 'disabled'); // Enable submit button
                });
        });

    });

    function autoWrite(querySelector, text) {
        if (text.length) {
            setTimeout(function(){
                $(querySelector).html($(querySelector).html() + text[0]);

                var newText = text.slice(1);
                autoWrite(querySelector, newText); 
            }, presentation.delay)
        } else return;
    }
    

    $('#englishClick').on('click', function() {
        $('#loading').fadeOut(500);
        $('[data-lenguage="english"]').each(function(){
            $(this).show();
        });
        autoWrite('#englishPresentation', presentation.english);
    })

    $('#espaniolClick').on('click', function() {
        $('#loading').fadeOut(500);
        $('[data-lenguage="espaniol"]').each(function(){
            $(this).show();
        });
        autoWrite('#spanishPresentation', presentation.spanish);
    })

    particlesJS("particles-js", particlesConfig);

    jQuery(window).load(function () {

        /***FADES OUT PRE-LOADER***/
        $('#loading-center').fadeOut(500);

        /***SCROLL ANIMATION***/
        window.sr = ScrollReveal({reset: false}); // reset false stops repetition of animation
        var commonCards = '#port-add-icon,#map-card,.interest-icon-even,.interest-icon,' +
            '.timeline-dot, .timeline-content,#add-more,#skills-card,#testimonials-card,' +
            '#portfolios-card,#interest-card,#p-one,#p-two,#p-three,#blog-card,#contact-card,#clients';
        // Customizing a reveal set
        sr.reveal(commonCards, {duration: 1100});
        sr.reveal('#about-card,.map-label', {duration: 1400, delay: 500});
        sr.reveal('#v-card-holder', {duration: 1400, distance: '150px'});
        sr.reveal('.skillbar-bar', {duration: 1800, delay: 300, distance: '0'});});

})(jQuery);


