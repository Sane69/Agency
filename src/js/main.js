

        $(document).ready(function(e) {

        $('.header__scroll--link').click(function() {

            var target = $(this.hash);

            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000)
        })

        $('.slider__main').slick({
            dots:true,
            infinite: true,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2
        });

        var $portfolio__pictures = $('.portfolio__pictures').isotope({
            itemSelector: '.pictures__elem',
            masonry: {
                gutter: 20
            }
        });
    
        $('.portfolio__info--menuFilter').on( 'click', 'a', function(e) {
            e.preventDefault();
            var filterValue = $(this).attr('data-filter');
            $portfolio__pictures.isotope({ filter: filterValue });
        });

        $('#burger').click(function(e) {
            e.stopPropagation();
            $('.header__menu').slideToggle('fast', function() {
                if($(this).css('display') === 'block') {
                    $('.header__burger').css('position', 'fixed');
                    $('.header__burger').css('right', '9.3%');
                } else {
                    $('.header__burger').css('position', 'unset');
                }
            });
        });
    });
