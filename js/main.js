!function (i) {
    "use strict";
    var e, t, a = {
        Android: function () {
            return navigator.userAgent.match(/Android/i)
        }, BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i)
        }, iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        }, Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i)
        }, Windows: function () {
            return navigator.userAgent.match(/IEMobile/i)
        }, any: function () {
            return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows()
        }
    }, n = {
        iOS: function () {
            return navigator.userAgent.match(/iPad/i)
        }, any: function () {
            return n.iOS()
        }
    }, o = function () {
        i(".slides-container .slide-item").addClass("sliderFix"), setTimeout(function () {
            i(".slides-container .slide-item").removeClass("sliderFix")
        }, 200)
    }, s = function () {
        function e() {
            i("#slideshow").imagesLoaded(function () {
                if (i(window).width() <= 1024) {
                    var e = i(".slide-item:first-of-type").height();
                    i(".sydney-hero-area, #slideshow").height(e)
                } else i(".sydney-hero-area").css("height", "auto")
            })
        }

        !function () {
            i("#slideshow").length && i("#slideshow").superslides({
                play: i("#slideshow").data("speed"),
                animation: "fade",
                pagination: !1
            })
        }(), "responsive" === i("#slideshow").data("mobileslider") && (i(document).ready(e), i(window).resize(function () {
            setTimeout(function () {
                e()
            }, 50)
        })), i(function () {
            i('.mainnav a[href*="#"], a.roll-button[href*="#"], .smoothscroll[href*="#"]').on("click", function (e) {
                var t = this.hash, a = i(t);
                return a.length ? (e.preventDefault(), i("html, body").stop().animate({scrollTop: a.offset().top - 70}, 900, "swing"), i("#mainnav-mobi").length && i("#mainnav-mobi").hide(), !1) : void 0
            })
        })
    }, r = function () {
        var e = "desktop";
        i(window).on("load resize", function () {
            var t = "desktop";
            if (matchMedia("only screen and (max-width: 1024px)").matches && (t = "mobile"), t !== e) if (e = t, "mobile" === t) {
                var a = i("#mainnav").attr("id", "mainnav-mobi").hide(), n = i("#mainnav-mobi").find("li:has(ul)");
                i("#header").find(".header-wrap").after(a), n.children("ul").hide(), n.children("a").after('<span class="btn-submenu"></span>'), i(".btn-menu").removeClass("active")
            } else {
                var o = i("#mainnav-mobi").attr("id", "mainnav").removeAttr("style");
                o.find(".submenu").removeAttr("style"), i("#header").find(".col-md-10").append(o), i(".btn-submenu").remove()
            }
        }), i(".btn-menu").on("click", function () {
            i("#mainnav-mobi").slideToggle(300), i(this).toggleClass("active")
        }), i(document).on("click", "#mainnav-mobi li .btn-submenu", function (e) {
            i(this).toggleClass("active").next("ul").slideToggle(300), e.stopImmediatePropagation()
        })
    }, l = function () {
        i(".panel-row-style").each(function () {
            if (i(this).data("hascolor") && i(this).find("h1,h2,h3,h4,h5,h6,a,.fa, div, span").css("color", "inherit"), i(this).data("hasbg") && i(this).data("overlay")) {
                i(this).append('<div class="overlay"></div>');
                var e = i(this).data("overlay-color");
                i(this).find(".overlay").css("background-color", e)
            }
        }), i(".panel-grid .panel-widget-style").each(function () {
            var e = i(this).data("title-color"), t = i(this).data("headings-color");
            e && i(this).find(".widget-title").css("color", e), t && i(this).find("h1,h2,h3:not(.widget-title),h4,h5,h6,h3 a").css("color", t)
        })
    }, d = function () {
        e = a.any(), null == e && i(".panel-row-style, .slide-item").parallax("50%", .3)
    }, c = function () {
        t = n.any(), null != t && i(".slides-container .slide-item").css("background-attachment", "scroll")
    }, u = function () {
        i(".orches-animation").each(function () {
            var e = i(this), t = e.data("animation"), a = e.data("animation-delay"), n = e.data("animation-offset");
            e.css({
                "-webkit-animation-delay": a,
                "-moz-animation-delay": a,
                "animation-delay": a
            }), e.waypoint(function () {
                e.addClass("animated").addClass(t)
            }, {triggerOnce: !0, offset: n})
        })
    }, f = function () {
        i(window).scroll(function () {
            i(this).scrollTop() > 800 ? i(".go-top").addClass("show") : i(".go-top").removeClass("show")
        }), i(".go-top").on("click", function () {
            return i("html, body").animate({scrollTop: 0}, 1e3), !1
        })
    }, h = function () {
        i().owlCarousel && i(".roll-testimonials").owlCarousel({
            navigation: !1,
            pagination: !0,
            responsive: !0,
            items: 1,
            itemsDesktop: [3e3, 1],
            itemsDesktopSmall: [1400, 1],
            itemsTablet: [970, 1],
            itemsTabletSmall: [600, 1],
            itemsMobile: [360, 1],
            touchDrag: !0,
            mouseDrag: !0,
            autoHeight: !0,
            autoPlay: i(".roll-testimonials").data("autoplay")
        })
    }, m = function () {
        i(".progress-bar").on("on-appear", function () {
            i(this).each(function () {
                var e = i(this).data("percent");
                i(this).find(".progress-animate").animate({width: e + "%"}, 3e3), i(this).parent(".roll-progress").find(".perc").addClass("show").animate({width: e + "%"}, 3e3)
            })
        })
    }, p = function () {
        var e = i(".site-header").offset().top;
        i(window).on("load scroll", function () {
            var t = i(this).scrollTop();
            t >= e ? (i(".site-header").addClass("fixed"), i("body").addClass("siteScrolled")) : (i(".site-header").removeClass("fixed"), i("body").removeClass("siteScrolled")), t >= 107 ? i(".site-header").addClass("float-header") : i(".site-header").removeClass("float-header")
        })
    }, v = function () {
        i(".roll-counter").on("on-appear", function () {
            i(this).find(".numb-count").each(function () {
                var e = parseInt(i(this).attr("data-to"));
                i(this).countTo({to: e})
            })
        })
    }, g = function () {
        i('[data-waypoint-active="yes"]').waypoint(function () {
            i(this).trigger("on-appear")
        }, {offset: "90%", triggerOnce: !0}), i(window).on("load", function () {
            setTimeout(function () {
                i.waypoints("refresh")
            }, 100)
        })
    }, w = function () {
        i().owlCarousel && i(".roll-team:not(.roll-team.no-carousel)").owlCarousel({
            navigation: !1,
            pagination: !0,
            responsive: !0,
            items: 3,
            itemsDesktopSmall: [1400, 3],
            itemsTablet: [970, 2],
            itemsTabletSmall: [600, 1],
            itemsMobile: [360, 1],
            touchDrag: !0,
            mouseDrag: !0,
            autoHeight: !1,
            autoPlay: !1
        })
    }, y = function () {
        function e() {
            if (i(".sydney-video.vid-lightbox .video-overlay").hasClass("popup-show")) {
                var e = i(".sydney-video.vid-lightbox .video-overlay.popup-show");
                if (e.find("iframe").hasClass("yt-video")) var t = e.find("iframe").attr("src").replace("&autoplay=1", ""); else var t = e.find("iframe").attr("src").replace("?autoplay=1", "");
                e.find("iframe").attr("src", t), e.removeClass("popup-show")
            }
        }

        i(".toggle-popup").on("click", function (e) {
            e.preventDefault(), i(this).siblings().addClass("popup-show");
            var t = i(this).siblings().find("iframe").attr("src");
            -1 !== t.indexOf("youtube.com") ? (i(this).siblings().find("iframe")[0].src += "&autoplay=1", i(this).siblings().find("iframe").addClass("yt-video")) : -1 !== t.indexOf("vimeo.com") && (i(this).siblings().find("iframe")[0].src += "?autoplay=1", i(this).siblings().find("iframe").addClass("vimeo-video"))
        }), i(document).keyup(function (i) {
            27 == i.keyCode && e()
        }), i(".sydney-video.vid-lightbox .video-overlay").on("click", function () {
            e()
        }), i(".sydney-video.vid-lightbox").parents(".panel-row-style").css({"z-index": "12", overflow: "visible"})
    }, b = function () {
        i("body").fitVids({ignore: ".crellyslider-slider"})
    }, C = function () {
        var e = i(".project-wrap").data("portfolio-effect");
        i(".project-item").children(".item-wrap").addClass("orches-animation"), i(".project-wrap").waypoint(function (t) {
            i(".project-item").children(".item-wrap").each(function (t, a) {
                setTimeout(function () {
                    i(a).addClass("animated " + e)
                }, 150 * t)
            })
        }, {offset: "75%"})
    }, k = function () {
        i(".widget_fp_social a").attr("target", "_blank")
    }, T = function () {
        e = a.iOS(), i(window).on("load", function () {
            i("#wp-custom-header").fitVids(), i(".fluid-width-video-wrapper + #wp-custom-header-video-button").find("i").removeClass("fa-play").addClass("fa-pause"), i(".fluid-width-video-wrapper + #wp-custom-header-video-button").on("click", function () {
                i(this).find("i").toggleClass("fa-play fa-pause")
            }), null != e && (i("#wp-custom-header-video-button").css("opacity", "0"), i("#wp-custom-header-video").prop("controls", !0))
        })
    }, x = function () {
        var e = i(".site-header").outerHeight();
        i(".header-clone").css("height", e), i(window).resize(function () {
            var e = i(".site-header").outerHeight();
            i(".header-clone").css("height", e)
        })
    }, O = function () {
        i(".preloader").css("opacity", 0), setTimeout(function () {
            i(".preloader").hide()
        }, 600)
    }, S = function () {
        i(".project-wrap").length && i(".project-wrap").each(function () {
            var e = i(this), t = e.find(".project-filter").find("a"), a = function (i) {
                i.isotope({
                    filter: "*",
                    itemSelector: ".project-item",
                    percentPosition: !0,
                    animationOptions: {duration: 750, easing: "liniar", queue: !1}
                })
            };
            e.children().find(".isotope-container").imagesLoaded(function () {
                a(e.children().find(".isotope-container"))
            }), i(window).load(function () {
                a(e.children().find(".isotope-container"))
            }), t.click(function () {
                var a = i(this).attr("data-filter");
                return t.removeClass("active"), i(this).addClass("active"), e.find(".isotope-container").isotope({
                    filter: a,
                    animationOptions: {duration: 750, easing: "liniar", queue: !1}
                }), !1
            })
        })
    };
    i(function () {
        o(), s(), /* p(), */ h(), w(), v(), m(), g(), r(), y(), b(), u(), c(), l(), d(), C(), k(), f(), /* S(), */ T(), x(), O()
    })
}(jQuery);