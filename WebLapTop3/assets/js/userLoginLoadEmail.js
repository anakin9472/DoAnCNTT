if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready()
}
function ready() {
    var userEmail = sessionStorage.getItem("userAccount")
    if(userEmail != null  &&  userEmail != ""){
        document.querySelector('.header__navbar-item-link-register').classList.add('de-active')
        document.querySelector('.header__navbar-item-link-login').classList.add('de-active')
        document.querySelector('li.header__navbar-user').classList.remove('de-active')
        document.querySelector('.header__navbar-item-user-name').innerText = userEmail
        
        var customerid=sessionStorage.getItem("userID")
        if(customerid != null  &&  customerid != ""){

            var formData= {customerid}
            getCustomerFromID(formData)
        }
    }

    function getCustomerFromID(formData) {
        $.ajax({
            url: 'http://localhost:8080/myweb/SelectedCustomerAPIServlet',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            dataType: 'json',
            success: function (response) {
                if(response !== false){
                    temp = JSON.stringify(response.image)
                    if (temp != null){

                      
                        $(".header__navbar-user-img").attr("src",  response.image);
                    }

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
}