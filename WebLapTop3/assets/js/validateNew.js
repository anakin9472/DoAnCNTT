if(document.readyState =='loading')
{
    document.addEventListener('DOMContentLoaded',ready)
} 
else
{
    ready()
}

function ready()
{
    addAccount()
    loginAccount()

}

function addAccount()
    {
        var btnsubmit = document.querySelector("#btn-submit-register")
        btnsubmit.addEventListener('click', async (e)=>{
            e.preventDefault();
        
            var email = $("#register-form_email").val();
            var password = $("#register-form_pass").val();
            var repassword = $("#register-form_repass").val();
            var checkMail = await checkAvailableMail()
            // console.log(checkMail)
            // get return ajax object
            // var ajaxObj  = checkAvailableMail();
        
            // var ajaxResponse = ajaxObj.responseText;
            // console.log(ajaxResponse);
            if (email === "" || password === "" || repassword === "")
            {
                document.querySelector('.auth-form-notification-label').classList.remove('de-active');
                $('.auth-form-notification-label').html(`Vui lòng điền đầy đủ thông tin`);
            }
            else if (password != repassword)
            {
                document.querySelector('.auth-form-notification-label').classList.remove('de-active');
                $('.auth-form-notification-label').html(`Xác nhận mật khẩu không hợp lệ`);
            }
            else if (!validMail(email))
            {
                document.querySelector('.auth-form-notification-label').classList.remove('de-active');
                $('.auth-form-notification-label').html(`Mail không hợp lệ`);
            }
            // else if (ajaxResponse === "\"true\"")
            else if (checkMail == true)
            {
                document.querySelector('.auth-form-notification-label').classList.remove('de-active');
                $('.auth-form-notification-label').html(`Mail này đã được sử dụng`);
            }
            else
            {   
                //Validate xong
                $('.auth-form-notification-label').html(``);
                var formData = { email, password }
                addAccountAPI(formData);
                
    
            }
               
        })
    }

    function validMail(mailAddress)
    {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(mailAddress);
    }


    async function checkAvailableMail()
    {
        var result
        var email = $("#register-form_email").val();
        var formData = {email};
        var result;
        await  $.ajax({
            url: 'http://localhost:8080/myweb/CheckMailAPIServlet',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            dataType: 'json'
        }).then(data => result = data)
        .catch(error => console.log(error)) 
        return result
    }

    function addAccountAPI(formData)
    {       
        $.ajax({
            url: 'http://localhost:8080/myweb/AccountAPIServlet',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            dataType: 'json',
            success: function (response) {
                // console.log(response);                  
                const myJSON = JSON.stringify(response);
                // console.log(myJSON);   
                //render sau khi đăng nhập thành công
                if (myJSON != "false")
                {
                    document.querySelector('.auth-form-notification-label').classList.remove('de-active');
                    $('.auth-form-notification-label').html(`Chúc mừng! Bạn đã đăng ký thành công`);
                    document.querySelector("#register-form_email").value=""
                    document.querySelector("#register-form_pass").value=""
                    document.querySelector("#register-form_repass").value=""

                    var customerid = response.id
                    var username = ""
                    var phone =""
                    var address =""
                    var gender =""
                    var birthdate =""
                    var image = "https://firebasestorage.googleapis.com/v0/b/weblaptop.appspot.com/o/Avatar-Facebook-tr%E1%BA%AFng.jpg?alt=media&token=e0153d96-b14c-4cf7-b303-42142a607413"
                    var formData = { customerid, username, phone,address,gender,birthdate, image }
                    addCustomerAPI(formData)

                }
                else
                {
                    document.querySelector('.auth-form-notification-label').classList.remove('de-active');
                    $('.auth-form-notification-label').html(`Đăng ký không thành công`);
                }
            },
            error: function (jqXHR) {
                // log the error to the console
                console.log("The following error occured: " + textStatus, errorThrown);
            },
            complete: function () {
                console.log("Incomplete");
            }
        })
    }


    // KIỂM TRA ĐĂNG NHẬP
function loginAccount() {
    $("#btn-submit-login").click(function () {
        // console.log('Da click');
        // alert('Da click');
        var email = $('#login-form_email').val();
        var password = $('#login-form_password').val();
        var formData = { email, password };


        $.ajax({
            url: 'http://localhost:8080/myweb/LoginAPIServlet/*',
            // url: 'http://3.219.197.153:8080/myweb/api-login',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            dataType: 'json',
            success: function (response) {
                // const myJSON = JSON.stringify(response);
                // var str = myJSON.replace(/['"]+/g, '')
                //render sau khi đăng nhập thành công
               
                if (response != false) 
                {
                    //tắt form Login
                    document.querySelector('.auth-form-login').classList.remove('activeBlock');

                    //tắt cả modal
                    document.querySelector('.modal').classList.remove('activeFlex');

                    var role = JSON.stringify(response.role);
                    if (role == "\"admin\"")
                    {
                        sessionStorage.setItem("adminAccount", email);
                        sessionStorage.setItem("adminID", response.id);
                        window.location.href = '/managerPage.html';
                    }
                    else
                    {
                        sessionStorage.setItem("userAccount", email);
                        var userId=response.id
                        sessionStorage.setItem("userID", userId);

                    //    document.querySelector('li.header__navbar-user').classList.remove('de-active')
                    //    document.querySelector('.header__navbar-item-link-register').classList.add('de-active')
                    //    document.querySelector('.header__navbar-item-link-login').classList.add('de-active')
                    //    document.querySelector('.header__navbar-item-user-name').innerText = email


                         if(window.location.pathname ==="/productPage.html"){

                            window.location.href = '/productPage.html';
                            return
                         }  

                         window.location.href = '/index.html';
                      
                    }

                }
                else 
                {
                    document.querySelector('.login-form-notification-label').classList.remove('de-active');
                    $('.login-form-notification-label').html(`Đăng nhập không hợp lệ`)
                }
            },
            error: function (jqXHR) {
                // log the error to the console
                console.log("The following error occured: " + textStatus, errorThrown);
            },
            complete: function () {
                console.log("Incomplete");
            }
        })
    })
}






function addCustomerAPI(formData)
{       
    $.ajax({
        url: 'http://localhost:8080/myweb/CustomerAPIServlet',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        dataType: 'json',
        success: function (response) 
        {
            console.log(response);                  
            const myJSON = JSON.stringify(response);
            if (myJSON != "false")
            {
              console.log("Đăng ký thành công")
              var customerid = response.customerid
              sessionStorage.setItem("customerid", customerid);
            }
            else
            {
                console.log("Đăng ký không thành công")
            }
        },
        error: function (jqXHR) {
            // log the error to the console
            console.log("The following error occured: " + textStatus, errorThrown);
        },
        complete: function () {
            console.log("Incomplete");
        }
    })
}