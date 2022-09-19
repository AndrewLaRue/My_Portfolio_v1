// Run On Page Load
$(window).on("load", function () {

    "use strict";

    // On Page Load Animations
    setTimeout(function () {
        $("#loading").addClass("animated-middle fadeOut")
    }, 2e3), setTimeout(function () {
        setTimeout(function () {
            $(".text-intro").each(function (e) {
                ! function (n) {
                    setTimeout(function () {
                        $(n).addClass("animated-middle fadeInUp").removeClass("opacity-0")
                    }, 150 * e + 150)
                }(this)
            })
        }, 0)
    }, 2e3), setTimeout(function () {
        $(".bar-intro").addClass("animated-middle slideInDown").removeClass("opacity-0"), $(".nav-intro").addClass("animated-middle slideInUp").removeClass("opacity-0"), $(".nav-arrows span").removeClass("opacity-0").addClass("show-arrows")
    }, 3e3), setTimeout(function () {
        $("#loading").remove()
    }, 3300), setTimeout(function () {
        $(".text-intro").removeClass("animated-middle fadeInUp")
    }, 4e3)

    // Custom Scrollbar
    function e() {
        $(".content-slide").mCustomScrollbar({
            scrollInertia: 150,
            axis: "y"
        })
    }

    // Loading Effect + Content Slider
    $("#loading").removeClass("dark-back"),
        $(".loading-text").addClass("animated-middle fadeIn").removeClass("opacity-0"),
        e(),
        $(function () {
            var e = function () {
                var e = $("#nav-arrows"),
                    n = $("#nav-multi-square > li > a[href*='#']"),
                    s = $("#slider").slitslider({
                        onBeforeChange: function (e, s) {
                            n.removeClass("nav-square-current"), n.eq(s).addClass("nav-square-current")
                        }
                    }),
                    i = function () {
                        t()
                    },
                    t = function () {
                        e.children(":last").on("click", function () {
                            return s.next(), !1
                        }),
                            e.children(":first").on("click", function () {
                                return s.previous(), !1
                            }),
                            n.each(function (e) {
                                $(this).on("click", function (i) {
                                    var t = $(this);
                                    return s.isActive() || (n.removeClass("nav-square-current"), t.addClass("nav-square-current")), s.jump(e + 1), !1
                                })
                            })
                    };
                return {
                    init: i
                }
            }();
            e.init()

        })

    // Blog Masonry
    var $container = $('#blogs');
    $container.isotope({
        masonry: {
            columnWidth: '.blog-item'
        },
        itemSelector: '.blog-item'
    })

    // Portfolio Masonry
    var $container = $('#projects');
    $container.isotope({
        masonry: {
            columnWidth: '.portfolio-item'
        },
        itemSelector: '.portfolio-item'
    })

    // Portfolio Filters
    $('#filters').on('click', 'li', function () {
        $('#filters li').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
        return false;
    })

    // Typing Animation (Typed.js)
    $('#element').typed({
        strings: ["a <strong>Front-end Developer</strong>", "a <strong>UI/UX Designer</strong>", "a <strong>Table top enthusiast.</strong>"],
        typeSpeed: 0,
        loop: true,
        startDelay: 500,
        backDelay: 5000,
        contentType: 'html'
    })
});
