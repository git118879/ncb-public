$(document).ready(function() {
    NCB.init();
    NCB.submenuMb2.init()
    $('#datepicker').datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd/mm/yy'
    });
    $('#date-of-birth').datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: '1917:' + (new Date().getFullYear() - 15),
        dateFormat: 'dd/mm/yy',
        maxDate: new Date().getFullYear() - 15,
    });
    var nationality = new mySelect('#quoctich');
    $('#date-cmnd').datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: '1917:' + new Date().getFullYear(),
        dateFormat: 'dd/mm/yy',
        maxDate: new Date(),
    });
    var placeCMND = new mySelect('#place-cmnd');
    var placeCMNDprocess = new mySelect('#place-cmnd-process');
    var nationalityprocess = new mySelect('#quoctich-process');
    var loanproductprocess = new mySelect('#loan-product-process');
    var brandprocess = new mySelect('#branch-process');
    var typemoney = new mySelect('#type-money');
    var kyhangui1 = new mySelect('#ky-han-gui-1');
    var kyhangui2 = new mySelect('#ky-han-gui-2');
    var kyhangui3 = new mySelect('#ky-han-gui-3');
    var kyhangui4 = new mySelect('#ky-han-gui-4');
    var kyhangui5 = new mySelect('#ky-han-gui-5');
    var kyhangui6 = new mySelect('#saving-time-out');
    $('.mobile-link').on('click', function() {
        $(this).next().show();
        $(this).hide();
    })
    $('#type-money a').on('click', function() {
        var data = $(this).data('value'),
            show = $(this).data('show'),
            href = $(this).data('href');
        $('.js-link-product').removeClass('dn');
        $('.js-link-product').hide();
        $('.' + show).show();
    })
})



$(window).resize(function() {
    NCB.submenuMb.init();
    NCB.submenuMb2.init();
    NCB.submenu.init()
    new equalheight('.sub-category-list article');
    new equalheight('.bank-content article');
    new equalheight('.intro-pr ul li .intro-pr-item');
    new equalheight('.other-services ul li');
    var wScreen = window.innerWidth;
    if (wScreen < 1025) {
        if ($('.filter-content').hasClass('scrolled')) {
            var content = $('.filter-content').find('.g-overview').html();
            $('.filter-content').removeClass('scrolled');
            $('.filter-content').empty().html(content);
        }
    } else {
        if ($('.filter-content').hasClass('scrolled')) {
            $('.filter-content').tinyscrollbar_update();
        } else {
            $('.filter-content').tinyscrollbar();
        }
    }

    NCB.showImgPp.resize();
});
var NCB = {
    init: function() {
        NCB.home.init()
        NCB.canhan.init()
        NCB.vencb.init()
        NCB.tuyendung.init()
        NCB.mangluoi.init()
        NCB.priority.init()
        NCB.news.init()
        NCB.submenu.init()
        NCB.submenuMb.init()
        NCB.serviseIbank.init()
        NCB.footer.init();
        NCB.saving.init();
        NCB.passPort.init();
        NCB.tabIb.init();
        NCB.registerForm.init();
        NCB.showMessage.init();
        NCB.showImgPp.init();
    },
    home: {
        init: function() {
            var slideHome = new mySlide('#banner-home');
            var tabCaNhanHome = new tabHome('#canhan-tab');
            var tabDoanhNghiepHome = new tabHome('#doanhghiep-tab');
            var myQuestion = new question('.group-question');
            var moveTop = new backToTop('.btn-backtotop');
            var filterCaNhan = new mySelect('#filter-canhan');
            var filterDoanhNghiep = new mySelect('#filter-doanhnghiep');
            $('.group-service').on('inview', function() {
                $(this).find('li').addClass('animate');
            })
            $('.tab-article').on('inview', function() {
                var item = $(this).find('li');
                index = 0.1;
                item.each(function() {
                    $(this).css({
                        '-webkit-transition-delay': index + 's',
                        '-moz-transition-delay': index + 's',
                        'transition-delay': index + 's'
                    })
                    $(this).addClass('moveUp');
                    index = index + 0.1;
                })
            })
            $(window).load(function() {
                if (window.innerWidth > 1024) {
                    $('.bottom-header').waypoint(function(direction) {
                        (direction === 'down') ? ($('body > header').addClass('fixed-header'), $('.top-header').hide()) : ($('body > header').removeClass('fixed-header'), $('.top-header').show());
                    });
                }
            })
            $('input[placeholder]').placeholder();
        },
    },
    canhan: {
        init: function() {
            var faqs = new tabHome('#faqs');
        }
    },
    vencb: {
        init: function() {
            var lanhdao = new question('.ct-page-right .item-question');
            var laisuat = new tabHome('#tab-laisuat');
        }
    },
    tuyendung: {
        init: function() {
            var thanhpho = new mySelect('#thanhpho');
            var matuyendung = new mySelect('#codetuyendung');
        }
    },
    mangluoi: {
        init: function() {
            var district = new mySelect('#add-fiter');
            var net = new mySelect('#filter-chinhanh');
            var wScreen = window.innerWidth;
            if (wScreen < 1025) {
                if ($('.filter-content').hasClass('scrolled')) {
                    var content = $('.filter-content').find('.g-overview').html();
                    $('.filter-content').removeClass('scrolled');
                    $('.filter-content').empty().html(content);
                }
            } else {
                if ($('.filter-content').hasClass('scrolled')) {
                    $('.filter-content').tinyscrollbar_update();
                } else {
                    $('.filter-content').tinyscrollbar();
                }
            }
        }
    },
    priority: {
        init: function() {
            $('.intro-pr').on('inview', function() {
                var item = $(this).find('li');
                index = 0.2;
                item.each(function() {
                    $(this).css({
                        '-webkit-transition-delay': index + 's',
                        '-moz-transition-delay': index + 's',
                        'transition-delay': index + 's'
                    })
                    $(this).addClass('moveUp');
                    index = index + 0.2;
                })
            })
            $('.intro-pr').on('inview', function() {
                $('.infomation-contact-pr').addClass('moveUp');
            })
            $('.img-title').on('inview', function() {
                $(this).addClass('moveUp');
            })
            $('.text-title').on('inview', function() {
                $(this).addClass('moveUp');
            })
        }
    },
    news: {
        init: function() {
            var news = new mySelect('#filter-news');
            var backto = new backToTop('.back-top');
        }
    },
    footer: {
        init: function() {
            var footerSlide = new acFooterMb('.ac-footer');
        }
    },
}
NCB.showMessage = {
    _ovl: {},
    _popup: {},
    _btnOk: {},
    _btnCancel: {},

    init: function() {
        this._ovl = $(".ovl");
        this._popup = $(".message-popup");
        this._btnOk = this._popup.find(".ok-button");
        this._btnCancel = this._popup.find(".cancel-button");
    },

    showPpMessage: function() {
        var self = NCB.showMessage;
        self._ovl.show();
        self._popup.show();
    },

    hidePpMessage: function() {
        var self = NCB.showMessage;
        self._ovl.hide();
        self._popup.hide();
    },
}
NCB.showImgPp = {
    _ovl: {},
    _popup: {},
    _btnClose: {},
    _target: {},
    _img: {},
    _wScreen: {},
    _hScreen: {},

    init: function() {
        this._wScreen = window.innerWidth;
        this._hScreen = window.innerHeight;
        this._ovl = $(".ovl");
        this._popup = $(".img-popup");
        this._img = this._popup.find('img');
        this._target = $('.showImg');
        this._btnClose = this._popup.find('.btn-close-pp');
        this._btnClose.on('click', this.hidePpImg);
        this._target.on('click', this.showPpImg);
        this._ovl.on('click', this.hidePpImg);
        this._popup.on('click', this.hidePpImg);
        this._popup.find('img').on('click', function() {
            return true;
        });
    },

    showPpImg: function() {
        var self = NCB.showImgPp;
        self._ovl.show();
        self._popup.show();
        $('html, body').addClass('overflow');

        var offset = self._img.offset();
        var wImg = self._img.width(),
            hImg = self._img.height();

        self._btnClose.css({
            left: offset.left + wImg - 20,
            top: offset.top - 20
        })
        console.log(offset)
    },

    hidePpImg: function() {
        var self = NCB.showImgPp;
        self._ovl.hide();
        self._popup.hide();
        $('html, body').removeClass('overflow');
    },

    resize: function() {
        var self = NCB.showImgPp;
        var offset = self._img.offset();
        var wImg = self._img.width(),
            hImg = self._img.height();

        self._btnClose.css({
            left: offset.left + wImg - 20,
            top: offset.top - 20
        })
    },
}
NCB.submenu = {
    _wScreen: 0,
    _hScreen: 0,
    _this: {},
    _target: {},
    _menu: {},
    init: function() {
        this._wScreen = window.innerWidth;
        this._hScreen = window.innerHeight;
        this._this = $('.bottom-menu');
        this._target = this._this.find('.has-menuchild');
        this._menu = this._this.find('.submenu');
        this._target.off('mouseover').on('mouseover', this.onMouseoverShowSubMenuHandler)
        this._target.off('mouseleave').on('mouseleave', this.onMouseLeaveHideSubMenuHandler)
        var languageMb = new selectLanguageMb('.group-language-mb');
    },
    onMouseoverShowSubMenuHandler: function() {
        var self = NCB.submenu,
            item = $(this);
        if (self._wScreen > 767) {
            item.find('.submenu').css({
                'display': 'block'
            })
            item.find('.submenu').velocity('stop').velocity({
                'opacity': 1
            }, {
                delay: 0,
                duration: 0,
                easing: 'easeOutSine'
            })
        }
    },
    onMouseLeaveHideSubMenuHandler: function() {
        var self = NCB.submenu,
            item = $(this);
        if (self._wScreen > 767) {
            item.find('.submenu').velocity('stop').velocity({
                'opacity': 0
            }, {
                duration: 0,
                easing: 'easeOutSine',
                complete: function() {
                    item.find('.submenu').css({
                        'display': 'none'
                    })
                }
            })
        }
    },
}
NCB.serviseIbank = {
    _this: {},
    _target: {},
    _opChild: {},
    _opAccuraty: {},
    init: function() {
        this._this = $('.group-servise-ibank');
        this._target = this._this.find('.op-parent');
        this._opChild = this._this.find('.op-child');
        this._opAccuraty = this._this.find('.op-accuracy');
        this._target.on('click', this.onClickShowListchoose);
        this._opChild.on('click', this.onClickShowTextBox);
        this._opAccuraty.on('click', this.onClickShowBox);
    },
    onClickShowListchoose: function() {
        var self = NCB.serviseIbank,
            item = $(this);
        if (item.hasClass('clicked')) {
            item.removeClass('clicked');
            item.parent('.radio-group').next().hide();
        } else {
            item.addClass('clicked');
            item.parent('.radio-group').next().show();
        }
    },
    onClickShowTextBox: function() {
        var self = NCB.serviseIbank,
            item = $(this);
        self._opChild.parent('.radio-group').next('.text-box').hide();
        item.parent('.radio-group').next('.text-box').show();
    },
    onClickShowBox: function() {
        var self = NCB.serviseIbank,
            item = $(this);
        self._opAccuraty.parent('.radio-group').next('.text-box').hide();
        item.parent('.radio-group').next('.text-box').show();
    },
}
NCB.submenuMb = {
    _wScreen: 0,
    _this: {},
    _btn: {},
    _menu: {},
    _isAnimate: false,
    _lv1: {},
    _subLv1: {},
    _lv2: {},
    _subLv2: {},
    init: function() {
        this._wScreen = window.innerWidth;
        this._this = $('.head-menu');
        this._btn = this._this.find('.btn-mobile');
        this._menu = this._this.find('.mobile-menu');
        this._isAnimate = false;
        this._lv1 = this._this.find('.lv1');
        this._subLv1 = this._this.find('.sub-lv1');
        this._lv2 = this._this.find('.lv2');
        this._subLv2 = this._this.find('.sub-lv2');
        if (this._wScreen < 1025) {
            (this._btn.hasClass('js-active')) ? this._menu.show(): this._menu.hide();
        } else {
            this._menu.hide();
        }
        this._btn.off('click').on('click', this.onClickShowMenuMobileHandler)
        this._lv1.off('click').on('click', this.onClickShowSubLv1Handler)
        this._lv2.off('click').on('click', this.onClickShowSubLv2Handler)
    },
    onClickShowMenuMobileHandler: function() {
        var self = NCB.submenuMb,
            item = $(this);
        if (item.hasClass('js-active')) {
            item.removeClass('js-active')
            self._menu.fadeOut();
        } else {
            item.addClass('js-active');
            self._menu.fadeIn(500, 'swing', function() {
                self._isAnimate = false;
            });
            self._menu.fadeIn();
        }
    },
    onClickShowSubLv1Handler: function() {
        var self = NCB.submenuMb,
            item = $(this);
        if (item.hasClass('js-hover')) {
            self._lv1.removeClass('js-hover');
            self._subLv1.slideUp();
            self._lv2.removeClass('js-hover');
            self._subLv2.slideUp();
        } else {
            self._lv1.removeClass('js-hover');
            self._subLv1.slideUp();
            self._lv2.removeClass('js-hover');
            self._subLv2.slideUp();
            item.addClass('js-hover');
            item.next('.sub-lv1').slideDown();
        }
    },
    onClickShowSubLv2Handler: function() {
        var self = NCB.submenuMb,
            item = $(this);
        if (item.hasClass('js-hover')) {
            self._lv2.removeClass('js-hover');
            self._subLv2.slideUp();
        } else {
            self._lv2.removeClass('js-hover');
            self._subLv2.slideUp();
            item.addClass('js-hover');
            item.next('.sub-lv2').slideDown();
        }
    },
}
NCB.submenuMb2 = {
    _wScreen: 0,
    _this: {},
    _btn: {},
    _menu: {},
    _isAnimate: false,
    init: function() {
        this._wScreen = window.innerWidth;
        this._this = $('.head-menu');
        this._btn = this._this.find('.btn-mobile-2');
        this._menu = this._this.find('.menu-list-mb-2');
        this._isAnimate = false;
		/*
        if (this._wScreen < 1025) {
            (this._btn.hasClass('js-active')) ? this._menu.show(): this._menu.hide();
        } else {
            this._menu.hide();
        }
		*/
		
        this._btn.off('click').on('click', this.onClickMenuList)
    },
    onClickMenuList: function() {
        console.log(1);
        var self = NCB.submenuMb2,
            item = $(this);
        if (item.hasClass('js-active')) {
            item.removeClass('js-active')
            self._menu.fadeOut();
        } else {
            item.addClass('js-active');
            self._menu.fadeIn(500, 'swing', function() {
                self._isAnimate = false;
            });
            self._menu.fadeIn();
        }
    },
}
NCB.saving = {
    _this: {},
    _title: {},
    _target: {},
    _tab: {},
    init: function() {
        this._this = $('.outer-item-select');
        this._title = this._this.find('.select-title');
        this._target = this._title.find('li');
        this._tab = this._this.find('.select-tab');
        this._tab.hide();
        this._tab.first().show();
        this._target.off('click').on('click', this.onClickChangeTabHandler)
    },
    onClickChangeTabHandler: function() {
        var self = NCB.saving,
            item = $(this),
            tab = item.data('tab');
        self._tab.hide();
        $('.select-tab-' + tab).show();
    },
}
NCB.registerForm = {
    init: function() {
        $('.label-card').on('click', function() {
            var item = $(this),
                src = item.data('img');
            item.parents('.jsValidateRadioParent').find('.src-hidden').val(src);
        });
        $('.register-form .option-ib .radio-item label').on('click', function() {
            var item = $(this);
            item.parent().next().slideToggle();
        });
    }
}
NCB.passPort = {
    _this: {},
    _target: {},
    _text: {},
    _value: {},

    init: function() {
        var obj = NCB.passPort;
        obj._this = $('.passport-group');
        obj._target = obj._this.find('.passport-item');
        obj._text = obj._this.find('.txt-change');
        obj._value = obj._this.find('.value-hidden');
        obj._valueShow = obj._this.find('.jsTypeCMNDShow');

        obj._ip = obj._this.find('.text-ip-card');

        obj._target.off('click').on('click', function() {
            var text = $(this).data('value');
            var valueShow = $(this).data('valueshow');
            var wrap = $(this).parent('.right-line');

            if (wrap.hasClass("disabled-click")) return;

            obj._text.text(text);
            obj._value.val(text);
            obj._valueShow.val(valueShow);

            var index = $(this).data('index');
            obj._ip.hide();
            obj._ip.eq(index).show();
            
            obj._this.find('.passport-item').removeClass('js-active');
            $(this).addClass('js-active');
        });
    }
}
NCB.tabIb = {
    _target: {},
    _copy: {},
    _option: {},
    _ip: {},
    init: function() {
        var obj = NCB.tabIb;
        obj._target = $('.tab-ib .item-ib');
        obj._copy = $('.tab-ib-item');
        obj._target.off('click').on('click', function() {
            var item = $(this);
            var data = $(this).data('value');
            var text = $(this).data('text');
            if (item.hasClass('js-active')) {
                item.removeClass('js-active');
                $('.' + data).slideUp();
                if (text == "Internet banking") $('#iphiddenib').val('no');
                if (text == "Sms banking") $('#iphiddensms').val('no');
            } else {
                item.addClass('js-active');
                $('.' + data).slideDown();
                if (text == "Internet banking") $('#iphiddenib').val('yes');
                if (text == "Sms banking") $('#iphiddensms').val('yes');
            }
        })
    },
}
var mySlide = function(container) {
    var container = $(container),
        btnNext = container.find('.btn-next'),
        btnPrev = container.find('.btn-prev'),
        img = container.find('.slide'),
        imgW = $(window).width(),
        imgL = img.length,
        cur = 0,
        isAnimate = false,
        dot = container.find('.container-dots li'),
        delaySlide, delayTime = 8000,
        lastX, curX, offset;
    init();

    function init() {
        img.hide();
        img.eq(0).show();
        btnNext.on('click', fnNext)
        btnPrev.on('click', fnPrev)
        dot.on('click', fnDot)
        container.off('touchstart').on('touchstart', touchStartImg)
        container.off('touchmove').on('touchmove', touchMoveImg)
        container.off('touchend').on('touchend', touchEndImg)
    }

    function touchStartImg(evt) {
        lastX = evt.originalEvent.touches[0].clientX;
    }

    function touchMoveImg(evt) {
        curX = evt.originalEvent.touches[0].clientX;
        var offset = lastX - curX,
            itemCur = img.eq(cur),
            itemN = img.eq(cur + 1),
            itemP = img.eq(cur - 1);
        TweenMax.to(itemCur, 0, {
            x: -offset
        })
        TweenMax.to(itemN, 0, {
            x: imgW - offset,
            display: 'block'
        })
        TweenMax.to(itemP, 0, {
            x: -imgW - offset,
            display: 'block'
        })
        var target = cur + 1;
        if (target === imgL) {
            target = 0;
            TweenMax.to(img.eq(target), 0, {
                x: imgW - offset,
                display: 'block'
            })
        }
    }

    function touchEndImg(evt) {
        var offset = lastX - curX,
            itemCur = img.eq(cur);
        if (lastX != evt.originalEvent.changedTouches[0].clientX) {
            if (offset > 0) {
                var target = cur + 1,
                    itemOther = img.eq(target);
                if (lastX - curX > 160) {
                    if (target === imgL) target = 0;
                    goNextMobile(target, offset);
                } else {
                    TweenMax.to(itemCur, 0.25, {
                        x: 0
                    })
                    TweenMax.to(itemOther, 0.25, {
                        x: imgW
                    })
                    if (target === imgL) {
                        target = 0;
                        TweenMax.to(img.eq(target), 0.25, {
                            x: imgW
                        })
                    }
                }
            } else {
                var target = cur - 1,
                    itemOther = img.eq(target);
                if (curX - lastX > 160) {
                    if (target < 0) target = imgL - 1;
                    goPrevMobile(target, offset);
                } else {
                    TweenMax.to(itemCur, 0.25, {
                        x: 0
                    })
                    TweenMax.to(itemOther, 0.25, {
                        x: -imgW
                    });
                }
            }
        }
    }

    function autoSlider() {
        fnNext()
    }

    function fnDot() {
        var item = $(this),
            target = item.data('index');
        if (item.hasClass('js-active')) return;
        (target > cur) ? goNext(target): goPrev(target)
    }

    function fnNext() {
        var target = cur + 1;
        if (target === imgL) target = 0;
        goNext(target)
    }

    function fnPrev() {
        var target = cur - 1;
        if (target < 0) target = imgL - 1;
        goPrev(target)
    }

    function goNext(target) {
        var item = img.eq(cur),
            itemNext = img.eq(target);
        clearInterval(delaySlide);
        if (isAnimate) return;
        isAnimate = true;
        container.off('touchmove');
        container.off('touchend');
        setActive(target)
        TweenMax.set(itemNext, {
            x: imgW,
            display: 'block'
        });
        TweenMax.to(item, 0.6, {
            x: -imgW,
            ease: Quad.easeInOut
        });
        TweenMax.to(itemNext, 0.6, {
            x: 0,
            ease: Quad.easeInOut,
            onComplete: function() {
                isAnimate = false;
                container.on('touchmove', touchMoveImg)
                container.on('touchend', touchEndImg)
                delaySlide = setInterval(function() {
                    autoSlider()
                }, delayTime);
            }
        })
        cur = target;
    }

    function goPrev(target) {
        var item = img.eq(cur),
            itemPrev = img.eq(target);
        clearInterval(delaySlide);
        if (isAnimate) return;
        isAnimate = true;
        container.off('touchmove');
        container.off('touchend');
        setActive(target)
        TweenMax.set(itemPrev, {
            x: -imgW,
            display: 'block'
        })
        TweenMax.to(item, 0.6, {
            x: imgW,
            ease: Quad.easeInOut
        })
        TweenMax.to(itemPrev, 0.6, {
            x: 0,
            ease: Quad.easeInOut,
            onComplete: function() {
                isAnimate = false;
                container.on('touchmove', touchMoveImg)
                container.on('touchend', touchEndImg)
                delaySlide = setInterval(function() {
                    autoSlider()
                }, delayTime);
            }
        })
        cur = target;
    }

    function goNextMobile(target, offset) {
        var item = img.eq(cur),
            itemNext = img.eq(target);
        clearInterval(delaySlide);
        if (isAnimate) return;
        isAnimate = true;
        container.off('touchmove');
        container.off('touchend');
        setActive(target)
        TweenMax.set(itemNext, {
            x: imgW - offset,
            display: 'block'
        });
        TweenMax.to(item, 0.6, {
            x: -imgW,
            ease: Quad.easeInOut
        });
        TweenMax.to(itemNext, 0.6, {
            x: 0,
            ease: Quad.easeInOut,
            onComplete: function() {
                isAnimate = false;
                container.on('touchmove', touchMoveImg)
                container.on('touchend', touchEndImg)
            }
        })
        cur = target;
    }

    function goPrevMobile(target, offset) {
        var item = img.eq(cur),
            itemPrev = img.eq(target);
        clearInterval(delaySlide);
        if (isAnimate) return;
        isAnimate = true;
        container.off('touchmove');
        container.off('touchend');
        setActive(target)
        TweenMax.set(itemPrev, {
            x: -imgW - offset,
            display: 'block'
        })
        TweenMax.to(item, 0.6, {
            x: imgW,
            ease: Quad.easeInOut
        })
        TweenMax.to(itemPrev, 0.6, {
            x: 0,
            ease: Quad.easeInOut,
            onComplete: function() {
                isAnimate = false;
                container.on('touchmove', touchMoveImg)
                container.on('touchend', touchEndImg)
            }
        })
        cur = target;
    }

    function setActive(target) {
        img.removeClass('js-active');
        img.eq(target).addClass('js-active');
        dot.removeClass('js-active');
        dot.eq(target).addClass('js-active');
    }
    $(window).resize(function() {
        imgW = $(window).width();
    })
    return this;
}
var tabHome = function(container) {
    var container = $(container),
        title = container.find('.outer-title li'),
        content = container.find('.tab-ct'),
        wScreen = window.innerWidth;
    init();

    function init() {
        content.hide();
        content.eq(0).show();
        title.on('click', clicked)
    }

    function clicked() {
        var item = $(this);
        id = item.data('value');
        if (item.hasClass('js-active')) return;
        content.find('li').removeClass('moveUp');
        title.removeClass('js-active');
        item.addClass('js-active');
        content.hide();
        container.find('.' + id).show();
    }
    return this;
}
var slideTab = function(container) {
    var container = $(container),
        btnN = container.find('.btnN'),
        btnP = container.find('.btnP'),
        wView = container.find('.wrap-tabSlide').outerWidth(),
        wrapImg = container.find('.wrap-tabSlide > ul'),
        img = wrapImg.find('> li'),
        imgW = img.outerWidth(),
        imgL = img.length,
        cur = 0,
        isAnimate = false,
        wScreen = window.innerWidth;
    init();

    function init() {
        setUpW();
    }

    function setUpW() {
        var wScreen = window.innerWidth;
        imgW = wScreen;
        wrapImg.css({
            width: imgW * imgL
        })
        img.css({
            width: imgW
        })
        btnN.on('click', fnNext)
        btnP.on('click', fnPrev)
    }

    function fnNext() {
        var target = cur + 1;
        if (target === imgL) target = 0;
        moveTab(target)
    }

    function fnPrev() {
        var target = cur - 1;
        if (target < 0) target = imgL - 1;
        moveTab(target)
    }

    function moveTab(target) {
        if (isAnimate) return;
        isAnimate = true;
        img.eq(cur).removeClass('js-active');
        img.eq(target).addClass('js-active');
        wrapImg.animate({
            marginLeft: -(imgW * target)
        }, 800, function() {
            isAnimate = false;
        })
        cur = target;
    }
    $(window).resize(function() {
        setUpW()
    })
    return this;
}
var question = function(container) {
    var container = $(container),
        itemQ = container.find('.item-question .question'),
        itemA = container.find('.item-question .answer'),
        isAnimate = false;
    itemQ.on('click', clicked)

    function clicked() {
        var item = $(this);
        if (isAnimate) return;
        isAnimate = true;
        if (item.hasClass('js-active')) {
            item.removeClass('js-active');
            item.parent().find('.answer').slideUp(function() {
                isAnimate = false;
            });
        } else {
            item.addClass('js-active');
            item.parent().find('.answer').slideDown(function() {
                isAnimate = false;
            });
        }
    }
    return this;
}
var mySelect = function(container) {
    var container = $(container),
        title = container.find('span'),
        content = container.find('ul'),
        option = container.find('a'),
        val = '',
        text = '';
    $(document).on('click', function(e) {
        if (!container.is(e.target) && !container.find('*').is(e.target)) {
            optionClose()
        }
    })
    title.off('click').on('click', titleClicked)
    option.off('click').on('click', optionClicked)

    function titleClicked() {
        content.toggle();
    }

    function optionClicked(e) {
        e.preventDefault();
        option.parent().removeClass('selected');
        $(this).parent().addClass('selected');
        content.hide();
        text = $(this).text();
        title.text(text);
        val = $(this).data('value');
    }

    function optionClose() {
        content.hide();
    }
    this.getSelected = function() {
        return title.val();
    }
    return this;
}
var mySelectToLink = function(container) {
    var container = $(container),
        title = container.find('span'),
        content = container.find('ul'),
        option = container.find('a'),
        val = '',
        text = '';
    $(document).on('click', function(e) {
        if (!container.is(e.target) && !container.find('*').is(e.target)) {
            optionClose()
        }
    })
    title.off('click').on('click', titleClicked)

    function titleClicked() {
        content.toggle();
    }

    function optionClose() {
        content.hide();
    }
    this.getSelected = function() {
        return title.val();
    }
    return this;
}
var selectLanguageMb = function(container) {
    var container = $(container),
        title = container.find('span'),
        content = container.find('ul'),
        option = container.find('a'),
        val = '',
        text = '';
    $(document).on('click', function(e) {
        if (!container.is(e.target) && !container.find('*').is(e.target)) {
            optionClose()
        }
    })
    title.off('click').on('click', titleClicked)
    option.off('click').on('click', optionClicked)

    function titleClicked() {
        content.slideToggle();
    }

    function optionClicked(e) {
        e.preventDefault();
        option.parent().removeClass('selected');
        $(this).parent().addClass('selected');
        content.slideUp();
        text = $(this).html();
        title.html(text);
        val = $(this).data('value');
    }

    function optionClose() {
        content.slideUp();
    }
    this.getSelected = function() {
        return title.val();
    }
    return this;
}
var equalheight = function(container) {
    var container = $(container),
        curHeight = 0,
        curRow = 0,
        curPos = 0,
        rowItem = new Array();
    container.each(function() {
        var item = $(this);
        item.height('auto');
        curPos = item.position().top;
        if (curRow != curPos) {
            curRow = curPos;
            rowItem.length = 0;
            curHeight = item.height();
            rowItem.push(item);
        } else {
            rowItem.push(item);
            curHeight = (curHeight < item.height()) ? (item.height()) : (curHeight);
        }
        for (var i = 0; i < rowItem.length; i++) {
            rowItem[i].height(curHeight);
        }
    })
    return this;
}
var backToTop = function(container) {
    var container = $(container);
    container.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })
    return this;
}
var acFooterMb = function(container) {
    var container = $(container),
        target = container.find('h3'),
        list = container.find('ul'),
        wScreen = window.innerWidth,
        isAnimate = false;
    if (wScreen < 640) {
        target.on('click', function(e) {
            e.preventDefault();
            var item = $(this);
            if (isAnimate) return;
            isAnimate = true;
            if (item.hasClass('clicked')) {
                item.removeClass('clicked');
                item.next().slideUp(function() {
                    isAnimate = false;
                });
            } else {
                list.slideUp();
                target.removeClass('clicked');
                item.addClass('clicked');
                item.next().slideDown(function() {
                    isAnimate = false;
                });
            }
        })
    } else {
        list.show();
    }
    $(window).resize(function() {
        if (wScreen < 640) {
            target.on('click', function(e) {
                e.preventDefault();
                var item = $(this);
                if (isAnimate) return;
                isAnimate = true;
                if (item.hasClass('clicked')) {
                    item.removeClass('clicked');
                    item.next().slideUp(function() {
                        isAnimate = false;
                    });
                } else {
                    list.slideUp();
                    target.removeClass('clicked');
                    item.addClass('clicked');
                    item.next().slideDown(function() {
                        isAnimate = false;
                    });
                }
            })
        } else {
            list.show();
        }
    })
    return this;
}

function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function lineBar(value) {
    var per = Math.round(parseInt(($('.bar-animate').outerWidth()) / ($('.bar').outerWidth())) * 100);
    var sum = per + value;
    if (sum >= 100) {
        $('.bar-animate').css({
            width: value + '%'
        })
        $('.circle').text(value + '%');
    } else {
        $('.bar-animate').css({
            width: sum + '%'
        })
        $('.circle').text(sum + '%');
    }
}