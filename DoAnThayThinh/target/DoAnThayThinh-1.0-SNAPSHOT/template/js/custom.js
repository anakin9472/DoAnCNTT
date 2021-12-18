// JavaScript Document
$(function() {
    "use strict";

    /*index : header animation*/
    $(window).on("scroll", function() {
         //khi thanh cuộn kéo xuống quá 94 pixel thì header sẽ được gán vị trí cố định
        if ($(this).scrollTop() > 94) {
            $("header").addClass("header-fixed");
        } else {
            $("header").removeClass("header-fixed");
        }
    });
    /*end header animation*/

    function responsive_dropdown() {

        /* ---- For Mobile Menu Dropdown JS Start ---- */
        $('#menu span.opener').on("click", function() {
            if ($(this).hasClass("plus")) {
                $(this).parent().find('.mobile-sub-menu').slideDown();
                $(this).removeClass('plus');
                $(this).addClass('minus');
            } else {
                $(this).parent().find('.mobile-sub-menu').slideUp();
                $(this).removeClass('minus');
                $(this).addClass('plus');
            }
            return false;
        });
        /* ---- For Mobile Menu Dropdown JS End ---- */
        /* ---- For Footer JS Start ---- */
        $('.footer-static-block .head-three, .footer-static-block span.opener').on("click", function() {
            if ($(this).parent('.footer-static-block').hasClass("active")) {
                if ($(window).width() < 768) {
                    $(this).parent().find('.footer-block-contant').slideUp();
                    $(this).parent('.footer-static-block').removeClass('active');
                    $(this).parent().find('span.opener').addClass('plus');
                    $(this).parent().find('span.opener').removeClass('minus');
                }
            } else {
                if ($(window).width() < 768) {
                    $(this).parent().find('.footer-block-contant').slideDown();
                    $(this).parent('.footer-static-block').addClass('active');
                    $('.footer-static-block.active span.opener').addClass('minus');
                    $('.footer-static-block.active span.opener').removeClass('plus');
                }
            }
            return false;
        });
        /* ---- For Footer JS End ---- */

        /* ---- For Navbar JS Start ---- */
        $('.navbar-toggle').on("click", function() {
            var menu_id = $('#menu');
            var nav_icon = $('.navbar-toggle i');
            if (menu_id.hasClass('menu-open')) {
                menu_id.removeClass('menu-open');
                nav_icon.removeClass('fa-close');
                nav_icon.addClass('fa-bars');
            } else {
                menu_id.addClass('menu-open');
                nav_icon.addClass('fa-close');
                nav_icon.removeClass('fa-bars');
            }
            return false;
        });
        /* ---- For Navbar JS End ---- */

        $('li.search-box').on('click', function() {
            $('.sidebar-search-wrap').addClass('open').siblings().removeClass('open');
            return false;
        });

        /*Search-box-close-button*/

        $('.search-closer').on('click', function() {
            var sidebar = $('.sidebar-navigation');
            var nav_icon = $('.navbar-toggle i');
            if (sidebar.hasClass('open')) {
                //sidebar.removeClass('open');
            } else {
                sidebar.addClass('open');
                nav_icon.addClass('fa-search-close');
                nav_icon.removeClass('fa-search-bars');
            }

            $('.sidebar-search-wrap').removeClass('open');
            return false;
        });

    }

    /* owl slider */
    if ($(".brand-slider").length > 0) {
        $(".brand-slider").owlCarousel({
            //loop: true,
            autoplay: true,
            dots: false,
            nav: false,
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                },
                575: {
                    items: 3,
                },
                767: {
                    items: 4,
                },
                1200: {
                    items: 6,
                },
            }
        });
    }

    if ($(".main-banner, .testimonial-slider").length > 0) {
        $(".main-banner, .testimonial-slider").owlCarousel({
            //loop: true,
            autoplay: false,
            dots: true,
            nav: false,
            items: 1,
            responsiveClass: true,
            responsive: {
                767: {
                    dots: false,
                    nav: true,
                },
            }
        });
    }

    if ($(".product-slider").length > 0) {
        $(".product-slider").owlCarousel({
            //loop: true,
            autoplay: false,
            dots: false,
            nav: true,
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                },
                420: {
                    items: 2,
                },
                767: {
                    items: 3,
                },
                991: {
                    items: 4,
                },
            }
        });
    }

    /*end owl slider*/

    function product_page_tab() {
        $("#tabs li a").on("click", function(e) {
            var title = $(e.currentTarget).attr("title");
            $("#tabs li a , .tab_content li div").removeClass("selected");
            $(".tab-" + title + ", .items-" + title).addClass("selected");
            $("#items").attr("class", "tab-" + title);

            return false;
        });
    }

    /* menu overlay start */
    $(".navbar-toggle").on("click", function() {
        if (!$(".navbar-collapse").hasClass("menu-open")) {
            $(".overlay").fadeIn("slow")
        }
    })
    $(".overlay").on("click", function() {

        $(this).fadeOut();
        $(".navbar-collapse").removeClass("in").addClass("collapse");
        $(".navbar-toggle").click();
        return false;
    })

    $('.nav-link').on('click', function(e) {
        $('a.nav-link').removeClass('active');
        $(this).addClass('active');
        if ($(window).width() < 991) {
            $(".navbar-toggle").click();
            $(".overlay").fadeOut();
            $(".navbar-collapse").removeClass("in").addClass("collapse");
        }
    });
    /* menu overlay end */


    $(document).ready(function() {
        responsive_dropdown();
        product_page_tab();
    });

});

$(window).on("load", function() {
    "use strict";
    /* -------- preloader ------- */
    $('#preloader').delay(2000).fadeOut(500);
    /*------End----------*/

});


/* validation start*/


//Đối tượng validator
function Validator(options)
{
    // function getParent(element, selector){
    //     while (element.parentElement){
    //         if(element.parentElement.matches(selector)){
    //             return element.parentElement;
    //         }
    //         element=element.parentElement;
    //     }
    // }
    // lưu lại các rules của selector
    var selectorRules={};

    //hàm thực hiện validate
    function validate(inputElement, rule){
        //var errorElement = getParent(inputElement,'form-group')
        // var errorElement=getParent(inputElement,options.formGroupSelector).querySelector(options.errorSelector[0])//('.form-message');

        var errorElement=inputElement.parentElement.querySelector(options.errorSelector[0]);

        //  lấy ra các rules của selector
        var rules = selectorRules[rule.selector];

        // lặp qua từng rule và kiểm tra
        // Nếu có lỗi thì dừng việc kiểm tra
        for(var i=0; i<rules.length; i++){

            errorMessage= rules[i](inputElement.value);

            if(errorMessage) break;
        }


        if(errorMessage)
        {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid-message');
            inputElement.classList.add('invalid-input')
            inputElement.classList.remove('valid-input');
            // headMessage.classList.add('active-Visible');

        }
        else
        {
            errorElement.innerText='';
            inputElement.classList.remove('invalid-input');
            inputElement.classList.add('valid-input');
            // headMessage.classList.remove('active-Visible');
        }
        return !errorMessage;
    }

    // var headMessage=document.querySelector(options.errorSelector[1])//('.message')

    //lấy elements của form cần validate
    var formElement= document.querySelector(options.form);
    if(formElement)
    {
        //chặn chế độ submit mặc định
        formElement.onsubmit =function(e){


            var isFormValid = true;

            //Thực hiện lặp qua từng rule và validate thẳng luôn khi người dùng bấm submit
            options.rules.forEach(function(rule){
                var inputElement=formElement.querySelector(rule.selector);
                var isValid=validate(inputElement,rule);
                if(!isValid)
                {
                    // chỉ cần một input invalid thì cả form sẽ invalid
                    isFormValid=false;
                }
            });

            if(!isFormValid)
            {
                e.preventDefault();
            }

            // if(isFormValid){
            //
            //     /*
            //
            //
            //     * if(typeof options.onSubmit=== 'function')
            //      {
            //          var enableInputs=formElement.querySelectorAll('[name]:not([disable])')
            //          var formValues = Array.from(enableInputs).reduce(function(values,input){
            //              return (values[input.name]=input.value) && values;
            //          },{});
            //
            //          options.onSubmit(formValues);
            //      }
            //      */
            //
            //     options.rules.forEach(function(rule){
            //         var inputElement=formElement.querySelector(rule.selector);
            //         inputElement.classList.remove('valid-input');
            //     });
            //     displayDetails();
            //
            // }
            // else{
            //     // headMessage.classList.add('active-Visible');
            // }

        }

        // Xử lý lập qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function(rule)
        {
            //  lưu lại các rules cho mỗi input

            //lần lập thứ 2 để ko bị ghi đè thì ta push giá trị vào để nó lưu lại
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            }
            else{ // lần lập đầu tiên thì sẽ gán bằng giá trị của 1 mảng có 1 phần tử
                selectorRules[rule.selector]=[rule.test]
            }


            // tìm trong formElement để tránh nhầm sang các form khác
            var inputElement=formElement.querySelector(rule.selector);

            // var errorElement=getParent(inputElement,options.formGroupSelector).querySelector(options.errorSelector[0]);
            var errorElement=inputElement.parentElement.querySelector(options.errorSelector[0]);

            // nếu tồn tại inputElements
            if(inputElement)
            {
                //onblur là khi dùng rê chuột ra khỏi input
                //xử lý trường hợp blur ra ngoài
                inputElement.onblur = function ()
                {
                    validate(inputElement,rule);
                }

                //xử lý trường hợp mỗi khi ngườI dùng băt đầu nhập input
                inputElement.oninput=function(){

                    errorElement.innerText='';
                    inputElement.classList.remove('invalid-input');
                    //headMessage.classList.remove('active-Visible');
                }
            }
        })
    }


}
//định nghĩa các rules
//Nguyên tắc:
/*
    1. khi có lỗi thì => message lỗi
    2. khi không có lỗi => ko trả ra gì cả (undefined)
*/
Validator.isRequired=function(selector, message)
{
    return {
        selector: selector,
        test: function (value){
            return value.trim() ? undefined:  message ||'Vui lòng nhập trường này!';
        }
    };
}
Validator.isEmail=function(selector, message)
{
    return {
        selector: selector,
        test: function (value) {
            console.log(value)
            var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined :  message || 'Trường này phải là email!';
        }
    };
}
Validator.minLength=function(selector,min, message)
{
    return {
        selector: selector,
        test: function (value) {

            return value.length >=min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    };
}
Validator.isConfirmed = function(selector, getConfirmValue, message){
    return{
        selector:selector,
        test: function(value){
            console.log(value)
            return value===getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}

/* execution validation */




/* validation end  */