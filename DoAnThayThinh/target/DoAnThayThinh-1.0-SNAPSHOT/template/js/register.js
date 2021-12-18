var btnsubmit = document.querySelector("#btn-submit");
// btnsubmit.onclick = testAPI();
btnsubmit.onclick = function(e)
{
    // e.preventDefault();
    // //Tạo biến để lưu dữ liệu cần submit
    // var data = {};
    // //Mã hóa tập hợp các phần tử trong resiter-form dưới dạng một mảng các name và value
    // var formData = $('#register-form').serializeArray();
    // //lặp qua từng phần tử của jQuery object (ở đây là formData)
    // //cú pháp
    // //index để quy định lặp qua từng thuộc tính của 1 object
    // $.each(formData, function (index, value) {
    //     data["" + value.name + ""] = value.value;
    // });
    // +addAccount(data);

    //Kiểm tra thử xem event click có hoạt động hay không
    //alert('The button has been clicked');

    //Lấy giá trị của dữ liệu điền vào
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var email = $('#email').val();
    var password = $('#password').val();

    var formData = {firstName, lastName, email, password};


    $.ajax(
        {
            url: 'http://localhost:9000//AccountAPIServlet/*',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            dataType: 'json',
            success: function (response)
            {
                console.log(response);
                console.log("Successfully Added!");
            },
            error: function (jqXHR)
            {
                // log the error to the console
                console.log("The following error occured: " + textStatus, errorThrown);
            },
            complete: function ()
            {
                console.log("Incomplete");
            }
        })
}


//Hàm xử lý API để giao tiếp với Back-end
    function addAccount(data) {
        $.ajax(
            {
                url: 'http://localhost:9000//AccountAPIServlet/*',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(data),
                dataType: 'json',
                success: function (response)
                {
                    console.log(response);
                    console.log("Successfully Added!");
                },
                error: function (jqXHR)
                {
                    // log the error to the console
                    console.log("The following error occured: " + textStatus, errorThrown);
                },
                complete: function ()
                {
                    console.log("Incomplete");
                }
            })
    }






