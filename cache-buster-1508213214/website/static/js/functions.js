$(document).ready(function() {
    BE.init();
    TOOLS.init();
    OPENACCOUNT.init();
    NEWSLETTER.init();
    EXCHANGERATES.init();
    JOB.init();
    NEWS.init();
    NETWORK.init();
    CONTACT.init();
    LOADBRANCH.init();
    loading.init();
    BE.checkPercent();
    new mySelectToLink('#menu-mb-about');
    //-----------------------------------------------------  1
    $('#monthly-income').on('keyup', function() {
        var x = String($('#monthly-income').val());
        x = x.replace(/\,/g, '');
        x = x.replace(" "+$('.jsMoneyTypeIn').val(), "");
        percent = x/10000000000;
        monthlyIncome1.setValue(percent, 0, true);
        $('#monthly-income').val(addCommas(x));
        if(x>10000000000)
            $('#monthly-income').val(addCommas(10000000000));
    });
    var monthlyIncome1 = new Dragdealer('just-a-slider1', {
        speed: 0,
        animationCallback: function(x, y) {
            var percent = x * 100000000000,
                max = 10000000000,
                value = parseInt(percent * max / 100000000000);
                if(value == 'NaN' || typeof value === "undefined")
                    value = "";
            $('#monthly-income').val(addCommas(value) + " " + $('.jsMoneyTypeIn').val());
        }
    });
    //-----------------------------------------------------  2
    $('#monthly-spending').on('keyup', function() {
        var x = String($('#monthly-spending').val());
        x = x.replace(/\,/g, '');
        percent = x/300;
        monthlyIncome2.setValue(percent, 0, true);
        if(x>300)
            $('#monthly-spending').val(addCommas(300));
    });
    var monthlyIncome2 = new Dragdealer('just-a-slider2', {
        speed: 0,
        animationCallback: function(x, y) {
            var percent = x * 100000000000,
                max = 300,
                value = parseInt(percent * max / 100000000000);
                if(value == 'NaN' || typeof value === "undefined")
                    value = "";
            $('#monthly-spending').val(addCommas(value));
        }
    });
    
    //----------------------------------------------------- 3
    $('#monthly-term').on('keyup', function() {
        var x = String($('#monthly-term').val());
        x = x.replace(/\,/g, '');
        percent = x/25;
        monthlyIncome3.setValue(percent, 0, true);
        if(x>25)
            $('#monthly-term').val(addCommas(25));
    });
    var monthlyIncome3 = new Dragdealer('just-a-slider3', {
        speed: 0,
        animationCallback: function(x, y) {
            
            var percent = x * 100000000000,
                max = 25,
                value = parseInt(percent * max / 100000000000);
                if(value == 'NaN' || typeof value === "undefined")
                    value = "";
            $('#monthly-term').val(addCommas(value));
        }
    });
    $('#monthly-income2').on('keyup', function() {
        var x = String($('#monthly-income2').val());
        x = x.replace(/\,/g, '');
        percent = x/10000000000;
        monthlyIncome4.setValue(percent, 0, true);
        $('#monthly-income2').val(addCommas(x));
        if(x>10000000000)
            $('#monthly-income2').val(addCommas(10000000000));
    });
    var monthlyIncome4 = new Dragdealer('just-a-slider4', {
        speed: 0,
        animationCallback: function(x, y) {
            var percent = x * 100000000000,
                max = 10000000000,
                value = parseInt(percent * max / 100000000000);
                if(value == 'NaN' || typeof value === "undefined")
                    value = "";
            $('#monthly-income2').val(addCommas(value) + " " + $('.jsMoneyTypeIn').val());
        }
    });

    $('#monthly-spending2').on('keyup', function() {
        var x = String($('#monthly-spending2').val());
        x = x.replace(/\,/g, '');
        percent = x/300;
        monthlyIncome5.setValue(percent, 0, true);
        if(x>300)
            $('#monthly-spending2').val(addCommas(300));
    });
    var monthlyIncome5 = new Dragdealer('just-a-slider5', {
        speed: 0,
        animationCallback: function(x, y) {
            var percent = x * 100000000000,
                max = 300,
                value = parseInt(percent * max / 100000000000);
                if(value == 'NaN' || typeof value === "undefined")
                    value = "";
            $('#monthly-spending2').val(addCommas(value));
        }
    });
});
var BE = {
    percentBar : parseInt($('.percentCurrent').val()) ,
    percentBar2 : parseInt($('.percentCurrent2').val()) ,
    init: function (webRoot)
    {
        $('.js-pdf-updating').on("click",BE.blockdownload);
        $('.jsSelectList ul li a').on("click",BE.selectlist);
        // $('.jsSelectListSaving ul li a').on("click",BE.selectlistsaving);
        $('.jsBtnSearch').on("click",BE.search);
        $('.inputSearch').on("keypress" ,BE.checkEnterSearch);
        $('.jsNumberFormatTool').on("keyup",BE.numberformat);
        $('.jsValidateRadio').on("click",BE.ValidateRadio);
        $('.jsValidateCheckBox').on("click",BE.ValidateCheckBox);
        $('.jsValidateText').on("keyup",BE.ValidateText);
        $('.jsValidateText').on("change",BE.ValidateText);
        $('.jsLoadPagingPromotion').on("click",BE.LoadPagingPromotion);
        // $('.tab-ib').on("click",BE.changePercent);
        // $('.tab-ib').on("click",BE.changePercent2);
        
        $('.jsValidateUnicode').on("keyup",validateTool.stripcode);
        $('.jsValidateUnicode').on("change",validateTool.stripcode);
        $('.jsValidateUnicodeNumber').bind("keyup", validateTool.stripcodeNumber);
        $('.jsValidateUnicodeNumber').bind("change", validateTool.stripcodeNumber);
        $('.jsValidateUnicodeEmail').on("keyup",validateTool.stripcodeEmail);
        $('.jsValidateUnicodeEmail').on("change",validateTool.stripcodeEmail);
    },
    
    changePercent:function(s)
    {   
        var per = 0;
        if($(this).children().attr('data-text')=="Internet banking")
            per = 6;
        else
            per = 6;
        $('[percent]').each(function() {
            $(this).attr('percent',per);
        });
        BE.checkPercent();
    },
    checkPercent:function(s)
    {
        var percentBar = 0;
        $('.jsCheckPercent').each(function() {
            if($(this).attr('percent'))
            {
                percentBar = percentBar + parseInt($(this).attr('percent'));
            }
        });
        
        if($('body').attr('control-action')=='step2')
            $('.percentCurrent').val(percentBar);
        else if ($('body').attr('control-action')=='step3')
            $('.percentCurrent2').val(percentBar);
        percentBar = percentBar + BE.percentBar + BE.percentBar2;
        // console.log(percentBar);
        if($('#check-accept').parents('.check-box').find('.check-btn').hasClass("jsCheckPercent")&&$('#check-read').parents('.check-box').find('.check-btn').hasClass("jsCheckPercent")) 
        {
            percentBar = 100;
        }
        // console.log(percentBar);
        lineBar(percentBar);

    },
    ValidateRadio:function(s)
    {
        $(this).parents('.jsValidateRadioParent').find('.check-radio').addClass('jsCheckPercent');
        $(this).parents('.jsValidateRadioParent').find('.check-radio').removeClass('error');
        $(this).parents('.jsValidateRadioParent').find('.msg-note').hide();
        BE.checkPercent();
    },
    ValidateCheckBox:function(s)
    {
        if($(this).parents('.check-box').find('input').prop("checked")==true) 
        {
            $(this).parents('.check-box').find('.check-btn').removeClass('jsCheckPercent');
            $(this).parents('.check-box').find('.check-btn').addClass('error');
        }
        else
        {
            $(this).parents('.check-box').find('.check-btn').addClass('jsCheckPercent');
            $(this).parents('.check-box').find('.check-btn').removeClass('error');
        }
        BE.checkPercent();
    },
    ValidateText:function(s)
    {
        var ob = $(this);
        if(ob.val() != "")
        {
            if(ob.hasClass('jsValidatePhone'))
            {
                if(ob.val().length>9 )
                {
                    ob.removeClass('error');
                    ob.addClass('jsCheckPercent');
                    ob.parent('div').find('.msg-note').hide();
                }
            }
            else if (ob.hasClass('jsValidateTelephone')) 
            {
                if((ob.val().length>=8 &&ob.val().length<12))
                {
                    ob.removeClass('error');
                    ob.addClass('jsCheckPercent');
                    ob.parent('div').find('.msg-note').hide();
                }
            }
            else if (ob.hasClass('jsValidateMail')) 
            {
                if(validateTool.isEmail(ob.val()))
                {
                    ob.removeClass('error');
                    ob.addClass('jsCheckPercent');
                    ob.parent('div').find('.msg-note').hide();
                }
            }
            else if (ob.hasClass('jsOpenAccountCMND'))
            {
                if($('.jsTypeCMND').val() =="Số CMND")
                {
                    if((ob.val().length >= 9 && ob.val().length <= 12) && $.isNumeric(ob.val()))
                    {
                        ob.removeClass('error');
                        ob.parent('div').find('.msg-note').hide();
                    }
                    else
                    {
                        ob.addClass('error');
                        ob.parent('div').find('.msg-note').text(ob.attr("msg-invalid"));
                        ob.parent('div').find('.msg-note').show();
                    }
                }
                if($('.jsTypeCMND').val() =="Số thẻ căn cước")
                {
                    if((ob.val().length >= 9 && ob.val().length <= 12) && $.isNumeric(ob.val()))
                    {
                        ob.removeClass('error');
                        ob.parent('div').find('.msg-note').hide();
                    }
                    else
                    {
                        ob.addClass('error');
                        ob.parent('div').find('.msg-note').text(ob.attr("msg-invalid"));
                        ob.parent('div').find('.msg-note').show();
                    }
                }
                if($('.jsTypeCMND').val() =="Số hộ chiếu")
                {
                    if(ob.val().length >= 8 && ob.val().length <= 12)
                    {
                        ob.removeClass('error');
                        ob.parent('div').find('.msg-note').hide();
                    }
                    else
                    {
                        ob.addClass('error');
                        ob.parent('div').find('.msg-note').text(ob.attr("msg-invalid"));
                        ob.parent('div').find('.msg-note').show();
                    }
                }
            }
            else
            {
                ob.removeClass('error');
                ob.addClass('jsCheckPercent');
                ob.parent('div').find('.msg-note').hide();
            }
        }
        else
        {
            ob.addClass('error');
            ob.removeClass('jsCheckPercent');
            ob.parent('div').find('.msg-note').hide();
        }
        BE.checkPercent();
    },
    blockdownload:function(s)
    {
        s.preventDefault();
        alert('<p>'+$('.jsErrorUpdating').attr("msg-require")+'</p>');
        return false;
    },
    selectlist:function(s)
    {
        // s.preventDefault();
        var value = $(this).attr('data-value');
        var exchange = $(this).attr('data-exchange');
        // exchange = exchange.replace(/\,/g, '');
        // exchange = exchange.replace(/\./g, '');
        $(this).parents('.jsSelectList').find('.jsSelectListHidden').val(value);
        $(this).parents('.jsSelectList').find('.jsSelectListHidden').attr('data-exchange',exchange);
        if($(this).parents('.jsSelectList').hasClass('jsLoaiSanPham'))
        {
            $('.jsLoanMonthType').val('all');
            $('.jsSelectListDate').find('span').text($('.jsSelectListDate ul li a:first').text());
        }
        $(this).parents('.my-select').find('span').removeClass('error');
        $(this).parents('.my-select').find('span').addClass('jsCheckPercent');
        BE.checkPercent();
        if($(this).hasClass('js-load-kulinhlai'))
        {
            // $('.jsSelectListDate ul li').removeClass('dn');
            loading.show();
            serverCall.callFunc(window.location.href, function (response) {   
                loading.hide();                                     
                if(response)
                {
                    var myArray = JSON.parse(response);
                    for (var i = 1; i <= myArray.length; i++) {
                        if(myArray[i])
                            $('.jsLoadLinhLai'+i).removeClass('dn');
                        else
                            $('.jsLoadLinhLai'+i).addClass('dn');
                    }
                    $('.jsSelectListDate ul li').show();
                    $('.jsLoanInterestRate').val(' %/năm');
                }
            }, "POST", "html", {op:'ajax',actionsubmit:'kyhan', data:$(this).attr('data-value')});
        }
        if($(this).hasClass('jsLoadLinhLai'))
        {
            // $('.jsSelectListDate ul li').removeClass('dn');
            loading.show();
            serverCall.callFunc(window.location.href, function (response) {   
                loading.hide();    
                $('.jsLoanInterestRate').val(response + ' %/năm');
            }, "POST", "html", {op:'ajax',actionsubmit:'kylinhlai', data:$('.jsKyHanTime').val(),linhlai:$(this).attr('data-value')});
        }
        if($(this).hasClass('jsCountry'))
        {
            var country = $(this).attr('data-country');
            $(this).parents('.jsSelectList').find('.jsSelectListHidden2').val(country);
        }
        // return false;
    },
    // selectlistsaving:function(s)
    // {
    //     // s.preventDefault();
    //     var value = $(this).attr('data-value');
    //     $(this).parents('.jsSelectListSaving').find('.jsSelectListSavingHidden').val(value);
    //     $(this).parents('.jsSelectListSaving').find('.jsSelectListSavingDate').val($(this).attr('data-date'));
    //     var count = 0;
        
    //     $(this).parents('.my-select').find('span').removeClass('error');
    //     // return false;
    // },
    search:function(s)
    {
        s.preventDefault();
        if($('.inputSearch').val().length >=2)
        {
            $('.frmSearch').submit();
        }
        else
        {
            alert('Xin vui lòng nhập thông tin cần tìm');
        }
        return false;
    },
    checkEnterSearch : function(e) {
        if(e.which == 13) {
            
            if($('.inputSearch').val().length <2){
                alert('Xin vui lòng nhập thông tin cần tìm');
            }
            else
            {
                $('.frmSearch').submit();
            }
            return false;
        }
    },
    formatNumber:function (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    },
    numberformat:function (num) {
        var number = $(this).val();
        number = String(number);
        number = number.replace(/\,/g, '');
        number = parseInt(number);
        number = number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        if(number == 'NaN' || typeof number === "undefined")
            number = "";
        $(this).val(number);
    },
    LoadPagingPromotion:function(s)
    {
        s.preventDefault();
        var obj = $(this);
        var parents = $(this).parents('.tab-ct').attr('value');
        var page = $(this).text();
        // loading.show();
        serverCall.callFunc(window.location.href, function (response) {   
            obj.parents('.tab-ct').html(response); 
            BE.init();      
        }, "POST", "html", {op:'ajax', parents:parents,page:page});
        return false;
    },
};

var LOADBRANCH = {
    init: function (webRoot)
    {
        $('.jsLoadCity ul li a').on("click",LOADBRANCH.loadcity);
        $('.jsLoadDistrict ul li a').on("click",LOADBRANCH.loaddistrict);
    },
    loadcity:function(s)
    {
        var city = $('.jsLoadCity input').val();
        var type = 'city';
        loading.show();
        serverCall.callFunc(window.location.href, function (response) {   
            loading.hide();                                     
            $('.jsLoadDistrict ul').html(response);
            var loanproductprocess = new mySelect('#loan-product-process'); 
            BE.init(); 
            LOADBRANCH.init();         
        }, "POST", "html", {op:'ajax', city:city,type:type});
        return false;
    },
    loaddistrict:function(s)
    {
        var district = $('.jsLoadDistrict input').val();
        var type = 'district';
        loading.show();
        serverCall.callFunc(window.location.href, function (response) {   
            loading.hide();                                     
            $('.jsLoadBranch ul').html(response);
            var kyhangui1 = new mySelect('#ky-han-gui-1'); 
            BE.init();
            LOADBRANCH.init();         
        }, "POST", "html", {op:'ajax', district:district,type:type});
        return false;
    },
    LoadPagingPromotion:function(s)
    {
        var district = $('.jsLoadDistrict input').val();
        var type = 'district';
        loading.show();
        serverCall.callFunc(window.location.href, function (response) {   
            loading.hide();                                     
            $('.jsLoadBranch ul').html(response);
            var kyhangui1 = new mySelect('#ky-han-gui-1'); 
            BE.init();
            LOADBRANCH.init();         
        }, "POST", "html", {op:'ajax', district:district,type:type});
        return false;
    },
};

var TOOLS = {
    init: function (webRoot)
    {
        // $('.jsMoneyIn').on("keyup",TOOLS.change);
        // $('.jsMoneyIn').on("change",TOOLS.change);
        $('.BtnToolsChange').on("click",TOOLS.change);
        $('.jsMoneyIn').on("focus",TOOLS.removecurrency);
        $('.jsMoneyIn').on("focusout",TOOLS.addcurrency);

        $('.jsLoanInterestRate').on("focus",TOOLS.removeinterestrate);
        $('.jsLoanInterestRate').on("focusout",TOOLS.addinterestrate);

        $('.jsMoneyTypeInList ul li a').on('click',TOOLS.changetypein);
        // $('.jsMoneyTypeOutList ul li a').on('click',TOOLS.changetypeout);
        $('.BtnTools').on("click",TOOLS.loans);
        $('.BtnToolsSaving').on("click",TOOLS.savings);
        $('.BtnToolsSavingChoose').on("click",TOOLS.savingschoose);
        // $('.callTool').on("click",TOOLS.calltool);
    },
    data:{
        currentType: "VNĐ",
        currentID: 1,
    },
    removeinterestrate:function(s)
    {
        var money = String($(this).val());
        money = money.replace(" %/năm", "");
        if(money == 'NaN' || typeof money === "undefined")
            money = "";
        $(this).val(money);
    },
    addinterestrate:function(s)
    {
        var money = String($(this).val());
        // money = money.replace(/\,/g, '');
        // money = BE.formatNumber(parseInt(money));
        if(money == 'NaN' || typeof money === "undefined")
            money = "";
        $(this).val(money + " %/năm");
    },
    removecurrency:function(s)
    {
        var money = String($('.jsMoneyIn').val());
        money = money.replace(/\,/g, '');
        money = BE.formatNumber(parseInt(money));
        console.log(money);
        if(money == 'NaN' || typeof money === "undefined")
            money = "";
        $('.jsMoneyIn').val(money);

    },
    addcurrency:function(s)
    {
        var money = String($('.jsMoneyIn').val());
        money = money.replace(/\,/g, '');
        money = BE.formatNumber(parseInt(money));
        if(money == 'NaN' || typeof money === "undefined")
            money = "";
        $('.jsMoneyIn').val(money + " " + $('.jsMoneyTypeIn').val());
    },
    change:function(s)
    {
        s.preventDefault();
        var money = String($('.jsMoneyIn').val());
        money = money.replace(" "+$('.jsMoneyTypeIn').val(), "");
        money = money.replace(/\,/g, '');
        var type1 = $('.jsMoneyTypeIn').attr('data-exchange');
        type1 = type1.replace(/\,/g, '');
        type1 = type1.replace(/\./g, '')/100;
        var type2 = $('.jsMoneyTypeOut').attr('data-exchange');
        type2 = type2.replace(/\,/g, '');
        type2 = type2.replace(/\./g, '')/100;
        // console.log(type1);
        // console.log("---------");
        // console.log(type2);
        money = money*type1/type2;

        money = BE.formatNumber(parseInt(money));
        if(money == 'NaN' || typeof money === "undefined")
            money = 0;
        $('.jsMoneyOut').val(money+ ' '+ $('.jsMoneyTypeOut').val());
    },
    changetypein:function(s)
    {
        TOOLS.removecurrency();
        // TOOLS.change();
        TOOLS.addcurrency();
        $('.min-max-value b').text($('.jsMoneyTypeIn').val());
        
    },

    loans:function(s)
    {
        s.preventDefault();
        var frm = $(this).parents('.FrmTools');
        var error = "";
        var urlRequest = "";
        var focus = "";

        frm.find('input[type=text] , textarea').each(function(){
            if( !$(this).val() || $(this).val() == 0 ) {
                $(this).addClass('error');
                error += '<p>'+$(this).attr("msg-require")+'</p>';
                focus = focus?focus:$(this);
            }
            else
            {
                if($(this).hasClass('jsLoanInterestRate'))
                {
                    var value = $(this).val();
                    value = value.replace(" %/năm", "");
                    if(!value || value == 0)
                    {
                        $(this).addClass('error');
                        error += '<p>'+$(this).attr("msg-require")+'</p>';
                        focus = focus?focus:$(this);
                    }
                    else
                        $(this).removeClass('error');
                }
                else
                    $(this).removeClass('error');
            }
        });

        if(!error)
        {
            loading.show();
            var serializeData = frm.serialize();
            serverCall.callFunc(window.location.href, function (response) {   
                loading.hide();   
                frm.find('.jsResponsePost').html(response);
                var topnav = frm.find(".jsResponsePost").offset().top;
                $('html,body').animate({
                        scrollTop: topnav-50},
                        500);                              
            }, "POST", "", serializeData);
        }
        else{
            // alert(error);
            if(focus)
                focus.focus();
        }
        return false;
    },
    savings:function(s)
    {
        s.preventDefault();
        var frm = $(this).parents('.FrmToolsSaving');
        var error = "";
        var urlRequest = "";
        var money = 0;
        var interestrate = 0;
        var focus = "";

        frm.find('input[type=text] , textarea').each(function(){
            if( (!$(this).val() || $(this).val() == 0 ) && $(this).attr('disabled')!='disabled') {
                $(this).addClass('error');
                error += '<p>'+$(this).attr("msg-require")+'</p>';
                focus = focus?focus:$(this);
            }
            else
            {
                if($(this).hasClass('jsLoanInterestRate'))
                {
                    var value = $(this).val();
                    value = value.replace(" %/năm", "");
                    if(!value || value == 0)
                    {
                        $(this).addClass('error');
                        error += '<p>'+$(this).attr("msg-require")+'</p>';
                        focus = focus?focus:$(this);
                    }
                    else
                        $(this).removeClass('error');
                }
                else
                    $(this).removeClass('error');
            }
        });

        money = frm.find('.jsLoanAmount').val();
        money = money.replace(/\,/g, '');
        money = money.replace(" "+$('.jsMoneyTypeIn').val(), "");
        interestrate = frm.find('.jsLoanInterestRate').val();
        interestrate = interestrate.replace(" %/năm", "");
        if(!error)
        {
            if(frm.find('.jsLoanMonthType').val()==1)
            {
                money = money*frm.find('.jsLoanMonth').val()*interestrate/360/100;
            }
            else
            {
                money = money*frm.find('.jsLoanMonth').val()*interestrate/12/100;
            }
            money = BE.formatNumber(Math.round(money));
            $('.jsMoneyOutSave').val(money + ' ' +$('.jsMoneyTypeIn').val());
        }
        else{
            // alert(error);
            if(focus)
                focus.focus();
        }
        return false;
    },
    savingschoose:function(s)
    {
        s.preventDefault();
        var frm = $(this).parents('.FrmToolsSaving');
        var error = "";
        var urlRequest = "";
        var money = 0;
        var focus = "";

        money = $('.jsMoneyIn').val();
        money = money.replace(/\,/g, '');
        money = BE.formatNumber(parseInt(money));
        if(money == 'NaN' || typeof money === "undefined")
            money = 0;
        if(!money || money == 0){
            $('.jsMoneyIn').addClass('error');
            error += '<p>'+$('.jsMoneyIn').attr("msg-require")+'</p>';
            focus = focus?focus:$('.jsMoneyIn');
        }
        else
        {
            $('.jsMoneyIn').removeClass('error');
        }

        // jsKyHanTime
        frm.find('.jsSelectList input[type=hidden]').each(function(){
            if($(this).val()=="" || typeof $(this).val() === "undefined")  
            {
                error += '<p>'+$(this).parent('.jsSelectList').attr("msg-require")+'</p>';
                $(this).parent('.jsSelectList').find('span').addClass('error');
            }
            else
                $(this).parent('.jsSelectList').find('span').removeClass('error');
        });
        

        // rate = $('.jsLoanInterestRate').val();
        // rate = rate.replace(/\,/g, '');
        // rate = BE.formatNumber(parseInt(rate));
        // if(rate == 'NaN' || typeof rate === "undefined")
        //     rate = 0;
        // if(!rate || rate == 0){
        //     $('.jsLoanInterestRate').addClass('error');
        //     error += '<p>'+$('.jsLoanInterestRate').attr("msg-require")+'</p>';
        // }
        // else
        // {
        //     $('.jsLoanInterestRate').removeClass('error');
        // }

        // frm.find('input[type=text] , textarea').each(function(){
        //     if( (!$(this).val() || $(this).val() == 0 ) && $(this).attr('disabled')!='disabled') {
        //         if($(this).hasClass('jsSelectListSavingTime'))
        //         {
        //             if($('.jsLoaiSanPham').val()==4)
        //             {
        //                 $(this).addClass('error');
        //                 error += '<p>'+$(this).attr("msg-require")+'</p>';
        //                 focus = focus?focus:$(this);
        //             }
        //             else
        //                 $(this).removeClass('error');
        //         }
        //         else
        //         {
        //             $(this).addClass('error');
        //             error += '<p>'+$(this).attr("msg-require")+'</p>';
        //             focus = focus?focus:$(this);
        //         }
        //     }
        //     else
        //     {
        //         if($(this).hasClass('jsLoanInterestRate'))
        //         {
        //             var value = $(this).val();
        //             value = value.replace(" %/năm", "");
        //             if(!value || value == 0)
        //             {
        //                 $(this).addClass('error');
        //                 error += '<p>'+$(this).attr("msg-require")+'</p>';
        //                 focus = focus?focus:$(this);
        //             }
        //             else
        //                 $(this).removeClass('error');
        //         }
        //         else
        //             $(this).removeClass('error');
        //     }
        // });

        if(!error)
        {
            loading.show();
            var serializeData = frm.serialize();
            serverCall.callFunc(window.location.href, function (response) {   
                loading.hide();   
                // frm.find('.jsResponsePost').html(response);
                $('.jsMoneyOutChoose').val(response + ' VND');
                           
            }, "POST", "", serializeData);
            
        }
        else{
            // alert(error);
            if(focus)
                focus.focus();
        }
        return false;
    },
    calltool:function(s)
    {
        $('#monthly-income2').on('keyup', function() {
            var x = String($('#monthly-income2').val());
            x = x.replace(/\,/g, '');
            percent = x/10000000000;
            monthlyIncome4.setValue(percent, 0, true);
            $('#monthly-income2').val(addCommas(x));
            if(x>10000000000)
                $('#monthly-income2').val(addCommas(10000000000));
        });
        var monthlyIncome4 = new Dragdealer('just-a-slider4', {
            speed: 0,
            animationCallback: function(x, y) {
                var percent = x * 100000000000,
                    max = 10000000000,
                    value = parseInt(percent * max / 100000000000);
                    if(value == 'NaN' || typeof value === "undefined")
                        value = "";
                $('#monthly-income2').val(addCommas(value) + " " + $('.jsMoneyTypeIn').val());
            }
        });

        $('#monthly-spending2').on('keyup', function() {
            var x = String($('#monthly-spending2').val());
            x = x.replace(/\,/g, '');
            percent = x/300;
            monthlyIncome5.setValue(percent, 0, true);
            if(x>300)
                $('#monthly-spending2').val(addCommas(300));
        });
        var monthlyIncome5 = new Dragdealer('just-a-slider5', {
            speed: 0,
            animationCallback: function(x, y) {
                var percent = x * 100000000000,
                    max = 300,
                    value = parseInt(percent * max / 100000000000);
                    if(value == 'NaN' || typeof value === "undefined")
                        value = "";
                $('#monthly-spending2').val(addCommas(value));
            }
        });
    },
};

var OPENACCOUNT = {
    init: function (webRoot)
    {
        $('#BtnOpenAccount').on("click",OPENACCOUNT.submit);
        $('#BtnCheckOTP').on("click",OPENACCOUNT.checkotp);
        $('#BtnNewOTP').on("click",OPENACCOUNT.newotp);
        $('.jsOpenAccountCMND3').on("keypress" ,OPENACCOUNT.typeCMND);
    },
    typeCMND : function(e) {
        // console.log(e.which);
        if((e.which == 8)||(e.which >= 48 && e.which <= 57)||(e.which >= 65 && e.which <= 90)||(e.which >= 97 && e.which <= 122))
        {
            
        }
        else
            return false;
    },
    newotp:function(s)
    {
        loading.show();
        serverCall.callFunc(window.location.href, function (response) {   
            loading.hide();  
            $('.otp-confirm .msg-note').text('');                               
            if(response.status == 0)
            {
                if(response.url)
                    window.location.href = siteUrl+response.url;
                else
                    alert(response.msg);
            }
            else
            {
                if(response.url)
                    window.location.href = siteUrl+response.url;
                else
                    alert(response.msg);
                // $('#FrmOpenAccount').submit();
            }
        }, "POST", "JSON", {op:'newotp'});
        return false;
    },
    checkotp:function(s)
    {
        var error = "";
        var frm = $(this).parents('#FrmOpenAccount');
        var focus = "";
        var focusid = "";
        var OTPNumber = $('.jsOTPNumber').val();

        if( !OTPNumber ) {
            $('.jsOTPNumber').addClass('error');
            error += '<p>'+$(this).attr("msg-require")+'</p>';
            focus = focus?focus:$(this);
            alert($('.jsOTPNumber').attr("msg-require"));
            // $(this).parent('div').find('.msg-note').text($(this).attr("msg-require"));
            // $(this).parent('div').find('.msg-note').show();
        }
        if(!error)
        {
            loading.show();
            serverCall.callFunc(window.location.href, function (response) {                                    
                if(response.status == 0)
                {
                    loading.hide();
                    $('.jsOTPNumber').val('');
                    if(response.url)
                        window.location.href = siteUrl+response.url;
                    else
                        alert(response.msg);
                }
                else
                {
                    $('#FrmOpenAccount').submit();
                }
            }, "POST", "JSON", {op:'checkotp', OTPNumber:OTPNumber});
        }
        else{
            if(focus)
                focus.focus();
        }
        return false;
    },
    submit:function(s)
    {
        // s.preventDefault();
        var error = "";
        var frm = $(this).parents('#FrmOpenAccount');
        var focus = "";
        var focusid = "";

        frm.find('input[type=text] , input[type=tel] , textarea').each(function(){
            if( !$(this).val() && $(this).attr('disabled')!='disabled' && !$(this).hasClass('jsNotMandatory')) {
                $(this).addClass('error');
                error += '<p>'+$(this).attr("msg-require")+'</p>';
                focus = focus?focus:$(this);
                $(this).parent('div').find('.msg-note').text($(this).attr("msg-require"));
                $(this).parent('div').find('.msg-note').show();
            }
            else
            {
                if($(this).hasClass('jsNumberFormat'))
                {
                    if( (!($(this).val().length >8 && $(this).val().length<=12)) && (!$(this).hasClass('jsOpenAccountCMND')) )
                    {
                        $(this).addClass('error');
                        error += '<p>'+$(this).attr("msg-invalid")+'</p>';
                        focus = focus?focus:$(this);
                        $(this).parent('div').find('.msg-note').text($(this).attr("msg-invalid"));
                        $(this).parent('div').find('.msg-note').show();
                    }
                    else
                    {
                        $(this).removeClass('error');
                        $(this).parent('div').find('.msg-note').hide();
                    }

                    if ($(this).hasClass('jsOpenAccountCMND'))
                    {
                        if($('.jsTypeCMND').val() =="Số CMND")
                        {
                            if(($('.jsOpenAccountCMND1').val().length >= 9 && $('.jsOpenAccountCMND1').val().length <= 12) && $.isNumeric($('.jsOpenAccountCMND1').val()))
                            {
                                $('.jsOpenAccountCMND1').removeClass('error');
                                $('.jsOpenAccountCMND1').parent('div').find('.msg-note').hide();
                            }
                            else
                            {
                                $('.jsOpenAccountCMND1').addClass('error');
                                error += '<p>'+$('.jsOpenAccountCMND1').attr("msg-invalid")+'</p>';
                                focus = focus?focus:$('.jsOpenAccountCMND1');
                                $('.jsOpenAccountCMND1').parent('div').find('.msg-note').text($('.jsOpenAccountCMND1').attr("msg-invalid"));
                                $('.jsOpenAccountCMND1').parent('div').find('.msg-note').show();
                            }
                        }
                        if($('.jsTypeCMND').val() =="Số thẻ căn cước")
                        {
                            if(($('.jsOpenAccountCMND2').val().length >= 9 && $('.jsOpenAccountCMND2').val().length <= 12) && $.isNumeric($('.jsOpenAccountCMND2').val()))
                            {
                                $('.jsOpenAccountCMND2').removeClass('error');
                                $('.jsOpenAccountCMND2').parent('div').find('.msg-note').hide();
                            }
                            else
                            {
                                $('.jsOpenAccountCMND2').addClass('error');
                                error += '<p>'+$('.jsOpenAccountCMND2').attr("msg-invalid")+'</p>';
                                focus = focus?focus:$('.jsOpenAccountCMND2');
                                $('.jsOpenAccountCMND2').parent('div').find('.msg-note').text($('.jsOpenAccountCMND2').attr("msg-invalid"));
                                $('.jsOpenAccountCMND2').parent('div').find('.msg-note').show();
                            }
                        }
                        if($('.jsTypeCMND').val() =="Số hộ chiếu")
                        {
                            if($('.jsOpenAccountCMND3').val().length >=8 && $('.jsOpenAccountCMND3').val().length <=12)
                            {
                                $('.jsOpenAccountCMND3').removeClass('error');
                                $('.jsOpenAccountCMND3').parent('div').find('.msg-note').hide();
                            }
                            else
                            {
                                $('.jsOpenAccountCMND3').addClass('error');
                                error += '<p>'+$('.jsOpenAccountCMND3').attr("msg-invalid")+'</p>';
                                focus = focus?focus:$('.jsOpenAccountCMND3');
                                $('.jsOpenAccountCMND3').parent('div').find('.msg-note').text($('.jsOpenAccountCMND3').attr("msg-invalid"));
                                $('.jsOpenAccountCMND3').parent('div').find('.msg-note').show();
                            }
                        }
                    }
                }
                else if ($(this).hasClass('jsEmailFormat'))
                {
                    if(!validateTool.isEmail($(this).val()))
                    {
                        $(this).addClass('error');
                        error += '<p>'+$(this).attr("msg-invalid")+'</p>';
                        focus = focus?focus:$(this);
                        $(this).parent('div').find('.msg-note').text($(this).attr("msg-invalid"));
                        $(this).parent('div').find('.msg-note').show();
                    }
                    else
                    {
                        $(this).removeClass('error');
                        $(this).parent('div').find('.msg-note').hide();
                    }
                }
                else
                {
                    $(this).removeClass('error');
                    $(this).parent('div').find('.msg-note').hide();
                }
            }
        });

        frm.find('.jsSelectList input[type=hidden]').each(function(){
            if($(this).val()=="" || typeof $(this).val() === "undefined")  
            {
                error += '<p>'+$(this).parent('.jsSelectList').attr("msg-require")+'</p>';
                $(this).parent('.jsSelectList').find('span').addClass('error');
            }
            else
                $(this).parent('.jsSelectList').find('span').removeClass('error');
        });

        if($('#gender-male').prop("checked")==false && $("#gender-female").prop("checked")==false) 
        {
            error += '<p>'+$('#gender-male').attr("msg-require")+'</p>';
            $('#gender-male').parent('.radio-item').find('.check-radio').addClass('error');
            $('#gender-female').parent('.radio-item').find('.check-radio').addClass('error');
        }
        else
        {
            $('#gender-male').parent('.radio-item').find('.check-radio').removeClass('error');
            $('#gender-female').parent('.radio-item').find('.check-radio').removeClass('error');
        }
        
        if($('#resident-yes').prop("checked")==false && $("#resident-no").prop("checked")==false) 
        {
            error += '<p>'+$('#resident-yes').attr("msg-require")+'</p>';
            $('#resident-yes').parent('.radio-item').find('.check-radio').addClass('error');
            $('#resident-no').parent('.radio-item').find('.check-radio').addClass('error');
        }
        else
        {
            $('#resident-yes').parent('.radio-item').find('.check-radio').removeClass('error');
            $('#resident-no').parent('.radio-item').find('.check-radio').removeClass('error');
        }

        if($('#tk-canhan').prop("checked")==false && $("#tk-smart-ac").prop("checked")==false && $("#tk-zero").prop("checked")==false) 
        // if($('#tk-canhan').prop("checked")==false && $("#tk-smart-ac").prop("checked")==false && $("#tk-zero").prop("checked")==false && $("#tk-phu-nu").prop("checked")==false) 
        {
            error += '<p>'+$('#tk-canhan').attr("msg-require")+'</p>';
            $('#tk-canhan').parent('.radio-item').find('.check-radio').addClass('error');
            $('#tk-smart-ac').parent('.radio-item').find('.check-radio').addClass('error');
            $('#tk-zero').parent('.radio-item').find('.check-radio').addClass('error');
            $('#tk-phu-nu').parent('.radio-item').find('.check-radio').addClass('error');
            focusid = focusid?focusid:'tk-canhan';
        }
        else
        {
            $('#tk-canhan').parent('.radio-item').find('.check-radio').removeClass('error');
            $('#tk-smart-ac').parent('.radio-item').find('.check-radio').removeClass('error');
            $('#tk-zero').parent('.radio-item').find('.check-radio').removeClass('error');
            $('#tk-phu-nu').parent('.radio-item').find('.check-radio').removeClass('error');
        }

        if($('#iphiddenib').val()=="yes")
        {
            var check = $('.jsInternetNameAccount');
            if(check.val()=="")
            {
                check.addClass('error');
                error += '<p>'+check.attr("msg-require")+'</p>';
                focus = focus?focus:check;
                check.parent('div').find('.msg-note').text(check.attr("msg-require"));
                check.parent('div').find('.msg-note').show();
            }
            else
                check.removeClass('error');

            if($('#accuracy-mb').prop("checked")==false && $("#accuracy-email").prop("checked")==false) 
            {
                error += '<p>'+$('#accuracy-mb').attr("msg-require")+'</p>';
                $('#accuracy-mb').parent('.radio-item').find('.check-radio').addClass('error');
                $('#accuracy-email').parent('.radio-item').find('.check-radio').addClass('error');
                $('#accuracy-mb').parents('.option-ib').find('.msg-note').text($('#accuracy-mb').attr("msg-require"));
                $('#accuracy-mb').parents('.option-ib').find('.msg-note').show();
                focusid = focusid?focusid:'accuracy-mb';
            }
            else
            {
                $('#accuracy-mb').parent('.radio-item').find('.check-radio').removeClass('error');
                $('#accuracy-email').parent('.radio-item').find('.check-radio').removeClass('error');
            }

            if($("#servise-basic").prop("checked")==false && $("#servise-vip").prop("checked")==false) 
            {
                error += '<p>'+$('#servise-basic').attr("msg-require")+'</p>';
                $('#servise-basic').parent('.radio-item').find('.check-radio').addClass('error');
                $('#servise-vip').parent('.radio-item').find('.check-radio').addClass('error');
                focusid = focusid?focusid:'servise-basic';
            }
            else
            {
                $('#servise-basic').parent('.radio-item').find('.check-radio').removeClass('error');
                $('#servise-vip').parent('.radio-item').find('.check-radio').removeClass('error');
            }


            if($("#accuracy-mb").prop("checked")==true)
            {
                var check = $('.jsInternetMobile');
                if(check.val()=="")
                {
                    check.addClass('error');
                    error += '<p>'+check.attr("msg-require")+'</p>';
                    focus = focus?focus:check;
                    check.parent('div').find('.msg-note').text(check.attr("msg-require"));
                    check.parent('div').find('.msg-note').show();
                }
                else
                {
                    if(!(check.val().length>9 && check.val().length<12))
                    {
                        check.addClass('error');
                        error += '<p>'+check.attr("msg-invalid")+'</p>';
                        focus = focus?focus:check;
                        check.parent('div').find('.msg-note').text(check.attr("msg-invalid"));
                        check.parent('div').find('.msg-note').show();
                    }
                    else
                        check.removeClass('error');
                }
            }
            if($("#accuracy-email").prop("checked")==true)
            {
                var check = $('.jsAccuracyEmail');
                if(check.val()=="")
                {
                    check.addClass('error');
                    error += '<p>'+check.attr("msg-require")+'</p>';
                    focus = focus?focus:check;
                    check.parent('div').find('.msg-note').text(check.attr("msg-require"));
                    check.parent('div').find('.msg-note').show();
                }
                else
                {
                    if(!validateTool.isEmail(check.val()))
                    {
                        check.addClass('error');
                        error += '<p>'+check.attr("msg-invalid")+'</p>';
                        focus = focus?focus:check;
                        check.parent('div').find('.msg-note').text(check.attr("msg-invalid"));
                        check.parent('div').find('.msg-note').show();
                    }
                    else
                        check.removeClass('error');
                }
                    
            }
        }
        else
        {
            $('#accuracy-mb').parent('.radio-item').find('.check-radio').removeClass('error');
            $('#accuracy-email').parent('.radio-item').find('.check-radio').removeClass('error');
            $('#servise-basic').parent('.radio-item').find('.check-radio').removeClass('error');
            $('#servise-vip').parent('.radio-item').find('.check-radio').removeClass('error');
        }

        // if($('#iphiddenib').val()=="")
        // {
        //     error += '<p>'+$('#iphiddenib').attr("msg-require")+'</p>';
        //     $('.tab-ib .item-ib').addClass('error');
        // }
        // else
        // {
        //     $('.tab-ib .item-ib').removeClass('error');
        // }

        if($('#iphiddensms').val()=="yes")
        {
            var check = $('.jsSMSMobile');
            if(check.val()=="")
            {
                check.addClass('error');
                error += '<p>'+check.attr("msg-require")+'</p>';
                focus = focus?focus:check;
                check.parent('div').find('.msg-note').text(check.attr("msg-require"));
                check.parent('div').find('.msg-note').show();
            }
            else
            {
                if(!(check.val().length>9 && check.val().length<12))
                {
                    check.addClass('error');
                    error += '<p>'+check.attr("msg-invalid")+'</p>';
                    focus = focus?focus:check;
                    check.parent('div').find('.msg-note').text(check.attr("msg-invalid"));
                    check.parent('div').find('.msg-note').show();
                }
                else
                    check.removeClass('error');
            }
        }

        if($('#the-vang').prop("checked")==false && $("#the-chuan").prop("checked")==false && $("#the-zero").prop("checked")==false) 
        // if($('#the-vang').prop("checked")==false && $("#the-chuan").prop("checked")==false && $("#the-zero").prop("checked")==false && $("#the-phu-nu").prop("checked")==false) 
        {
            error += '<p>'+$('#the-vang').attr("msg-require")+'</p>';
            $('#the-vang').parent('.radio-item').find('.check-radio').addClass('error');
            $('#the-chuan').parent('.radio-item').find('.check-radio').addClass('error');
            $('#the-zero').parent('.radio-item').find('.check-radio').addClass('error');
            $('#the-phu-nu').parent('.radio-item').find('.check-radio').addClass('error');
            focusid = focusid?focusid:'the-vang';
        }
        else
        {
            $('#the-vang').parent('.radio-item').find('.check-radio').removeClass('error');
            $('#the-chuan').parent('.radio-item').find('.check-radio').removeClass('error');
            $('#the-zero').parent('.radio-item').find('.check-radio').removeClass('error');
            $('#the-phu-nu').parent('.radio-item').find('.check-radio').removeClass('error');
        }

        if($('#check-accept').prop("checked")==false) 
        {
            error += '<p>'+$('#check-accept').attr("msg-require")+'</p>';
            $('#check-accept').parent('.check-box').find('.check-btn').addClass('error');
        }
        else
        {
            $('#check-accept').parent('.check-box').find('.check-btn').removeClass('error');
        }

        if($('#check-read').prop("checked")==false) 
        {
            error += '<p>'+$('#check-read').attr("msg-require")+'</p>';
            $('#check-read').parent('.check-box').find('.check-btn').addClass('error');
        }
        else
        {
            $('#check-read').parent('.check-box').find('.check-btn').removeClass('error');
        }
        
        // error ="";
        // alert(error);

        
        var captcha = "";
        $('.g-recaptcha').each(function() {
            captcha = grecaptcha.getResponse();
            if( captcha == "") {
                $('.g-recaptcha').addClass('js-error');
                error = "Please check captcha";
            }else{
                $('.g-recaptcha').removeClass('js-error');
            }
        });

        if(!error)
        {
            var haveRecaptcha = 0;
            $('.g-recaptcha').each(function() {
                haveRecaptcha = 1;
                if( captcha != "") {
                    var token = $('.grecaptchaResponse').val();
                    loading.show();
                    serverCall.callFunc(window.location.href, function (response) {   
                        loading.hide();
                        // console.log(response);
                        if(response.success == 1)
                        {
                            $('#FrmOpenAccount').submit();
                        }
                    }, "POST", "JSON", {op:'recaptcha', token:token});
                }
            });

            if(haveRecaptcha == 0)
                $('#FrmOpenAccount').submit();
        }
        else
        {
            console.log(focusid);
            if(focusid)
            {
                $('html, body').animate({
                    scrollTop: $("#" + focusid).offset().top - 250
                }, 700);
            }
            else
                if(focus)
                    focus.focus();
            return false;
        }
        
    },
};

var NEWSLETTER = {
    init: function (webRoot)
    {
        $('.btn-reg-be').on("click",NEWSLETTER.registration);
    },
    registration:function(s)
    {
        s.preventDefault();
        var input = $(this).parent('.copy').find('input');
        var mail = $(this).parent('.copy').find('input').val();
        var error = "";
        var focus = "";
        var urlRequest = siteUrl;

        if(mail=="")
        {
            error += '<p>'+$('.jsErrorEmail').attr("msg-require")+'</p>';
            $('.helpfull .content-right .copy input').addClass('error');
            focus = focus?focus:$('.helpfull .content-right .copy input');
        }
        else
        {
            if(!validateTool.isEmail(mail))
            {
                error += '<p>'+$('.jsErrorEmail').attr("msg-invalid")+'</p>';
                $('.helpfull .content-right .copy input').addClass('error');
                focus = focus?focus:$('.helpfull .content-right .copy input');
            }
            else
                $('.helpfull .content-right .copy input').removeClass('error');
        }
        if(!error)
        {
            loading.show();
            serverCall.callFunc(urlRequest, function (response) {   
                loading.hide();                                     
                if(response.status == 1)
                {
                    //location.reload();
                    input.val('');
                    alert("Bạn đã đăng ký nhận thông tin từ NCB thành công.");

                }
                else
                {
                    alert(response.msg);
                }
                $('.formhash:last').val(response.formhash);
            }, "POST", "JSON", {op:'ajax', mail:mail, formhash:$('.formhash:last').val()});
        }
        else{
            // alert(error);
            if(focus)
                focus.focus();
        }
        return false;
    },

};

var EXCHANGERATES = {
    init: function (webRoot)
    {
        $('.js-exchangerates').on("click",EXCHANGERATES.exchangerates);
    },
    exchangerates:function(s)
    {
        var dateValue = $('.js-txtDate').val();
        loading.show();
        serverCall.callFunc(window.location.href, function (response) {   
            loading.hide();                                     
            $('.js-listcontent').html(response);           
        }, "POST", "html", {op:'ajax', date:dateValue});
        return false;
    },
};

var JOB = {
    init: function (webRoot)
    {
        $('.js-search-job').on("click",JOB.find);
    },
    find:function(s)
    {
        var vitri = $('#jsViTri').val();
        var thanhpho = $('#thanhpho .selected a').attr('data-value');
        var matuyendung = $('#jsMaTuyenDung').val();
        loading.show();
        serverCall.callFunc(window.location.href, function (response) {   
            loading.hide();                                     
            $('.js-listcontent').html(response);           
        }, "POST", "html", {op:'ajax', vitri:vitri,thanhpho:thanhpho,matuyendung:matuyendung});
        return false;
    },
};

var NEWS = {
    init: function (webRoot)
    {
        $('#filter-news ul li a').on("click",NEWS.find);
    },
    find:function(s)
    {
        // alert($(this).attr('href'));
        window.location.href = $(this).attr('href');
        // return true;
    },
};

var NETWORK = {
    init: function (webRoot)
    {
        $('.js-load-network ul li').on("click",NETWORK.find);
        $('.btnpointtomap').on("click",NETWORK.tomap);
    },
    find:function(s)
    {
        var chinhanh = $('#filter-chinhanh .selected a').attr('data-value');
        var provinces = $('#add-fiter .selected a').attr('data-value');
        loading.show();
        serverCall.callFunc(window.location.href, function (response) {   
            loading.hide();   
            if(response.status == 1)
            {
                $('.js-listcontent').html(response.html);
                initialize(response.marker);  
                NETWORK.init();
                $('.filter-content').tinyscrollbar();
            }
            else
            {
                alert(response.msg);
            }
        }, "POST", "JSON", {op:'ajax', chinhanh:chinhanh,provinces:provinces});
        return false;
    },
    tomap:function(s)
    {
        var stt = parseInt($(this).attr("rel"));
        gotopoint(arrMakers[stt], stt);
        return false;
    },
};

var CONTACT = {
    init: function (webRoot)
    {
        $('.btn-submitContact').on("click",CONTACT.submit);
        $('.contact .group-contact input[type=text], textarea').on("keyup",CONTACT.checkvalidate);
        $('.btnSubmitContactPriority').on("click",CONTACT.submitpriority);
    },
    checkvalidate:function(s)
    {
        var ob = $(this);
        if(ob.val() != "")
        {
            if(ob.attr('id')=='phoneContact')
            {
                if(!(ob.val().length>9 &&ob.val().length<12))
                    ob.addClass('error');
                else
                    ob.removeClass('error');
            }
            else if (ob.attr('id')=='telephoneContact') 
            {
                if(!(ob.val().length>=8 &&ob.val().length<12))
                    ob.addClass('error');
                else
                    ob.removeClass('error');
            }
            else if (ob.attr('id')=='mailContact') 
            {
                if(!validateTool.isEmail(ob.val()))
                    ob.addClass('error');
                else
                    ob.removeClass('error');
            }
            else
                ob.removeClass('error');
        }
        else
        {
            ob.addClass('error');
        }
        // return false;
    },

    submit:function(s)
    {
        var username = $('#usernameContact').val();
        var address = $('#addressContact').val();
        var phone = $('#phoneContact').val();
        var telephone = $('#telephoneContact').val();
        var mail = $('#mailContact').val();
        var topic = $('.js-topic .selected a').attr('data-value');
        var content = $('#contentContact').val();
        var formhashValue = $('.formhash').val();
        var error = "";
        var focus = "";

        if(username=="")
        {
            error += '<p>'+$('#usernameContact').attr("msg-require")+'</p>';
            $('#usernameContact').addClass('error');
            focus = focus?focus:$('#usernameContact');
        }
        else
            $('#usernameContact').removeClass('error');
        if(address=="")
        {
            error += '<p>'+$('#addressContact').attr("msg-require")+'</p>';
            $('#addressContact').addClass('error');
            focus = focus?focus:$('#addressContact');
        }
        else
            $('#addressContact').removeClass('error');
        if(phone=="")
        {
            error += '<p>'+$('#phoneContact').attr("msg-require")+'</p>';
            $('#phoneContact').addClass('error');
            focus = focus?focus:$('#phoneContact');
        }
        else
        {
            if(!(phone.length>9 &&phone.length<12))
            {
                error += '<p>'+$('#phoneContact').attr("msg-invalid")+'</p>';
                $('#phoneContact').addClass('error');
                focus = focus?focus:$('#phoneContact');
            }
            else
                $('#phoneContact').removeClass('error');
        }
        if(telephone=="")   
        {
            error += '<p>'+$('#telephoneContact').attr("msg-require")+'</p>';
            $('#telephoneContact').addClass('error');
            focus = focus?focus:$('#telephoneContact');
        }
        else
        {
            if(!(telephone.length>=8 &&telephone.length<12))
            {
                error += '<p>'+$('#telephoneContact').attr("msg-invalid")+'</p>';
                $('#telephoneContact').addClass('error');
                focus = focus?focus:$('#telephoneContact');
            }
            else
                $('#telephoneContact').removeClass('error');
        }
        if(mail=="")  
        {
            error += '<p>'+$('#mailContact').attr("msg-require")+'</p>';
            $('#mailContact').addClass('error');
            focus = focus?focus:$('#mailContact');
        }
        else
        {
            if(!validateTool.isEmail(mail))
            {
                error += '<p>'+$('#mailContact').attr("msg-invalid")+'</p>';
                $('#mailContact').addClass('error');
                focus = focus?focus:$('#mailContact');
            }
            else
                $('#mailContact').removeClass('error');
        }
        if(topic=="" || typeof topic === "undefined")  
        {
            error += '<p>'+$('.js-topic').attr("msg-require")+'</p>';
            $('.js-topic').find('span').addClass('error');
        }
        else
            $('.js-topic').find('span').removeClass('error');
        if(content=="")   
        {
            error += '<p>'+$('#contentContact').attr("msg-require")+'</p>';
            $('#contentContact').addClass('error');
            focus = focus?focus:$('#contentContact');
        }
        else
            $('#contentContact').removeClass('error');
        if(!error)
        {
            var params = {
                op          : 'ajax',
                username    : username,
                address     : address,
                phone       : phone,
                telephone   : telephone,
                mail        : mail,
                topic       : topic,
                content     : content,
                formhash    : formhashValue
            }
            loading.show();
            serverCall.callFunc(window.location.href, function (response) {   
                loading.hide();  
                alert(response.msg); 
                $('.formhash').val(response.formhash);  
                if(response.status == 1)
                {
                    $('#usernameContact').val('');
                    $('#addressContact').val('');
                    $('#phoneContact').val('');
                    $('#telephoneContact').val('');
                    $('#mailContact').val('');
                    $('#contentContact').val('');
                }                               
            }, "POST", "JSON", params);
            
        }
        else
        {
            // alert(error);
            if(focus)
                focus.focus();
        }
        return false;
    },
    submitpriority:function(s)
    {
        var username = $('#usernameContact').val();
        var phone = $('#phoneContact').val();
        var mail = $('#mailContact').val();
        var content = $('#contentContact').val();
        var formhashValue = $('.formhash').val();
        var error = "";
        var focus = "";

        if(username=="")
        {
            error += '<p>'+$('#usernameContact').attr("msg-require")+'</p>';
            $('#usernameContact').addClass('error');
            focus = focus?focus:$('#usernameContact');
        }
        else
            $('#usernameContact').removeClass('error');

        if(phone=="")
        {
            error += '<p>'+$('#phoneContact').attr("msg-require")+'</p>';
            $('#phoneContact').addClass('error');
            focus = focus?focus:$('#phoneContact');
        }
        else
        {
            if(!(phone.length>9 &&phone.length<12))
            {
                error += '<p>'+$('#phoneContact').attr("msg-invalid")+'</p>';
                $('#phoneContact').addClass('error');
                focus = focus?focus:$('#phoneContact');
            }
            else
                $('#phoneContact').removeClass('error');
        }
        
        if(mail=="")  
        {
            error += '<p>'+$('#mailContact').attr("msg-require")+'</p>';
            $('#mailContact').addClass('error');
            focus = focus?focus:$('#mailContact');
        }
        else
        {
            if(!validateTool.isEmail(mail))
            {
                error += '<p>'+$('#mailContact').attr("msg-invalid")+'</p>';
                $('#mailContact').addClass('error');
                focus = focus?focus:$('#mailContact');
            }
            else
                $('#mailContact').removeClass('error');
        }

        if(content=="")   
        {
            error += '<p>'+$('#contentContact').attr("msg-require")+'</p>';
            $('#contentContact').addClass('error');
            focus = focus?focus:$('#contentContact');
        }
        else
            $('#contentContact').removeClass('error');
        if(!error)
        {
            var params = {
                op          : 'ajax',
                username    : username,
                phone       : phone,
                mail        : mail,
                content     : content,
                formhash    : formhashValue
            }
            loading.show();
            serverCall.callFunc(window.location.href, function (response) {   
                loading.hide();  
                alert(response.msg); 
                $('.formhash').val(response.formhash);  
                if(response.status == 1)
                {
                    $('#usernameContact').val('');
                    $('#phoneContact').val('');
                    $('#mailContact').val('');
                    $('#contentContact').val('');
                }                               
            }, "POST", "JSON", params);
            
        }
        else
        {
            // alert(error);
            if(focus)
                focus.focus();
        }
        return false;
    },
};

var loading = {    
    tagLoading: Object,
    imgLoading: '/website/static/images/loadingscreen.gif',
    bgLoading: '/website/static/images/loadingscreen.png',
    init: function ()
    {

        $("html body").append('<div id="loading"><span class="csloading"></div></div>');
        loading.tagLoading = $("#loading");
        loading.tagLoading.css({
            'width': "100%",
            'height': "100%",
            'background': "url(" + loading.bgLoading + ") repeat",
            'position': "fixed",
            'top': "0",
            'left': "0",
            'z-index': "999999",
            'display': "none"
        });
        loading.tagLoading.find('.csloading').css({
            width: "100%",
            height: "100%",
            position: 'fixed',
            background: "url(" + loading.imgLoading + ") center center no-repeat"
        });
    },
    show: function () {
       loading.tagLoading.show();
    },
    hide: function () {
       loading.tagLoading.hide();
    } 
};

var serverCall = {
    requestUrl:  "",
    isProcessing: false,
    callFunc: function (url, func, type, dataType, post) {        
        if (!serverCall.isProcessing) {
            serverCall.isProcessing = true;
            if (type === undefined) {
                type = "GET";
            }
            if (post === undefined) {
                post = {};
            }
            if (dataType === undefined) {
                dataType = "text";
            }
            post.op = typeof post.op===undefined?'ajax':post.op;
            post.language = $("#siteLanguage").val();
            $.ajax({
                type: type,
                url: serverCall.requestUrl + url,
                data: post,
                cache: false,
                dataType: dataType,               
                success: function (response) {                                
                    serverCall.isProcessing = false;
                    func(response);
                },
                error: function (response) {                   
                    serverCall.isProcessing = false;
                }
            });
        } else {
           /// Message.alert("Searchingâ€¦.please wait");
        }
    }
};

var message = {
    error: function (msg, callBack) {
        alert(msg);
    },
    alert: function (msg, callBack) {
        alert(msg);
    },
    warning: function (msg, callBack) {
        alert(msg);
    }
};
var validateTool = {
    regExForEmail: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]{2,4}$/,
    
    isUndefined: function (strObj) {
        return typeof strObj == 'undefined' ? true : false;
    },
    isPrice: function(){        
        var  regezx= /^[0-9.,]+$/;        
        var isNumber = regezx.test(String.fromCharCode(((event||window.event).which||(event||window.event).which)));                    
            if (!isNumber || this.value.length>7) 
                return false;
    },     
    isPriceFloat: function(){
        if (!parseFloat(this.value)){
            this.value = 0;
        }
        else{
             this.value = parseFloat(this.value).toFixed(2);
        }
    },
    isEmail: function (sEmail) {
        sEmail = sEmail.trim();
        if (sEmail.search(this.regExForEmail) != -1)
            return true;
        return false;
    },
    stripcodeNumber: function(str){ 
        var str = $(this).val();
        if(!$.isNumeric(str))
        {
            str = str.toLowerCase().replace(/[^0-9']/g, '');
            $(this).val(str);
        }
    },
    stripcode: function (str) {
        var str = $(this).val();
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/-/g, " ");
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|$|_|\-/g, "");
        // tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự
        str = str.replace(/-+-/g, "-"); //thay thế 2- thành 1- 
        str = str.replace(/^\-+|\-+$/g, "");
        str = str.replace("--", "-");
        //cắt bỏ ký tự - ở đầu và cuối chuỗi  
        // document.getElementById(slugid).value = str;
        $(this).val(str);
        // return str;
    },
    stripcodeEmail: function (str) {
        var str = $(this).val();
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        // str = str.replace(/-/g, " ");
        str = str.replace(/!|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\:|\;|\'|\"|\&|\#|\[|\]|~|$|_/g, "");
        // tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự
        str = str.replace(/-+-/g, "-"); //thay thế 2- thành 1- 
        // str = str.replace(/^\-+|\-+$/g, "");
        str = str.replace("--", "-");
        //cắt bỏ ký tự - ở đầu và cuối chuỗi  
        // document.getElementById(slugid).value = str;
        $(this).val(str);
        // return str;
    }
}
