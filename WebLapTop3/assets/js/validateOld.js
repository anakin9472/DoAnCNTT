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
    console.log(options)

    // lưu lại các rules của selector
    var selectorRules={};
    console.log('heelo')

    //hàm thực hiện validate
    function validate(inputElement, rule){
        //var errorElement = getParent(inputElement,'form-group')
        //var errorElement=getParent(inputElement,options.formGroupSelector).querySelector(options.errorSelector[0])//('.form-message');

        console.log(inputElement)
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
            e.preventDefault();

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
// Validator({
//     form:['#auth-form auth-form-login','#auth-form auth-form-register'],
//     errorSelector:'.form-message',
//     rules:[
//         Validator.isRequired('#passwordLogin','Vui lòng nhập mật khẩu!'),
//         Validator.isRequired('#passwordRegister','Vui lòng nhập mật khẩu!'),
//         Validator.isRequired('#emailLogin','Vui lòng nhập email của bạn!'),
//         Validator.isRequired('#emailRegister','Vui lòng nhập email của bạn!'),
//         Validator.isRequired('#confirmPassword','Vui lòng nhập lại mật khẩu xác nhận!'),
//         Validator.minLength('#passwordLogin',6),
//         Validator.minLength('#passwordRegister',6),
//         // Validator.isConfirmed('#confirmPassword',function(){
//         //      return document.querySelector('#auth-form auth-form-register #passwordRegister').value;
//         // }, 'Mật khẩu nhập lại không chính xác'),
//         Validator.isEmail('#emailLogin'),
//         Validator.isEmail('#emailRegister'),
//     ]
//     ,
//    // onSubmit:function(data){ console.log(data); }
// });