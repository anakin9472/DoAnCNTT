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
   activeAuthForm() 
}
function activeAuthForm() {
    // ACTIVE AND DE-ACTIVE AUTH-FORM - start 

    const loginHeaderBtn = document.querySelector('.header__navbar-item-link-login')
    const backBtns = document.querySelectorAll('.auth-form__controls-back')
    const registerHeaderBtn = document.querySelector('.header__navbar-item-link-register')
    const loginSwitchBtn = document.querySelector('.auth-form__switch-btn-to-login')
    const registerSwitchBtn = document.querySelector('.auth-form__switch-btn-to-register')
    const logoutHeaderUserList = document.querySelector('.header__navbar-user-item-link--logout')

    loginHeaderBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.modal').classList.add('activeFlex');
        document.querySelector('.auth-form-login').classList.add('activeBlock');
        authFormActivation();
        document.querySelector("#login-form_email").value=""
        document.querySelector("#login-form_password").value=""
     
    })

    registerHeaderBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.modal').classList.add('activeFlex');
        document.querySelector('.auth-form-register').classList.add('activeBlock');
        authFormActivation();
        document.querySelector("#register-form_email").value=""
        document.querySelector("#register-form_pass").value=""
        document.querySelector("#register-form_repass").value=""
    })
    function authFormActivation() {

        loginSwitchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.auth-form-register').classList.remove('activeBlock');
            document.querySelector('.auth-form-login').classList.add('activeBlock');
        })

        registerSwitchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.auth-form-login').classList.remove('activeBlock');
            document.querySelector('.auth-form-register').classList.add('activeBlock');
        })


        for (i = 0; i < backBtns.length; i++) {
            backBtns[i].addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.auth-form-login').classList.remove('activeBlock');
                document.querySelector('.auth-form-register').classList.remove('activeBlock');
                document.querySelector('.modal').classList.remove('activeFlex');
                document.querySelector('.auth-form-notification-label').classList.add('de-active')
            })
        }
    }

    logoutHeaderUserList.addEventListener("click", (e) => {
        document.querySelector('li.header__navbar-user').classList.add('de-active')
        document.querySelector('.header__navbar-item-link-register').classList.remove('de-active')
        document.querySelector('.header__navbar-item-link-login').classList.remove('de-active')
        sessionStorage.removeItem("userAccount")
        sessionStorage.removeItem("cartListArray")
        sessionStorage.removeItem("totalPrice")
        sessionStorage.removeItem('cartList')
        sessionStorage.removeItem('cartQuantity')

        var cartList=`
        <img src="https://firebasestorage.googleapis.com/v0/b/weblaptop.appspot.com/o/chua-co-san-pham.png?alt=media&token=fefcc81c-bb95-4d71-8d51-4f0f70c5864b" alt="" class="header__cart-no-cart-img">
        <h4 class="header__cart-list-heading">
            Sản phẩm đã thêm
        </h4>
        <ul class="header__cart-list-item">
          
        </ul>
        <div class="header__cart-view">
            <a href="#" class="header__cart-view-cart btn btn--primary">Xem giỏ hàng</a>
            <div class="header__cart-view-total-cart">
                <span class="header__cart-view-total-cart-label">Tổng cộng:</span>
                <span class="header__cart-view-total-cart-price"></span>
            </div>                                  
        </div>
    `
        var cartQuantity="0"
        sessionStorage.setItem('cartList',cartList)
        sessionStorage.setItem('cartQuantity',cartQuantity)
        // if(window.location.pathname =="/userPage.html")
        // {
           
        // }
        window.location.href="/index.html"
    })
    // ACTIVE AND DE-ACTIVE AUTH-FORM - end
}  