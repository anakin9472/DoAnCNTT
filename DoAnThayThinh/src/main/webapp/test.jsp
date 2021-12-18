<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Register</title>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

</head>
<style>
    .login{
        border: 0.25px solid green;
        padding: 20px 30px 20px 30px;
        width:520px;
        position: static;
    }
    .Register{
        margin: auto;
        border: 0.25px solid green;
        padding: 20px 30px 20px 30px;
        width:520px;

    }
    h1{

        background-color: #DCDCDC;
        border-color: #DCDCDC;
    }

    .Aflogin{


        font-size: 40px

    }

    #button{
        padding: 20px 30px 20px 30px;
        width:500px;
        position: static;
        font-size: 40px;
        color: #fff;

        background-color: #228B22;
        border-color: #228B22;
    }
   .register form input{
        width: 500px;
        height: 55px;
        margin: 5px 0 10px;
    }


    div {
        display: block;
    }
</style>
<body>
<div class ="Register">
    <h1>Register </h1>
    <form method ="post" class = "registerform" name="form">
        <input type ="text" name ="firstName" id ="firstName" placeholder="First Name"/><BR>
        <input type ="text" name ="lastName"id ="lastName" placeholder="Last Name"/><BR>
        <input type ="text" name ="email" id ="email" placeholder="Email" /><BR>
        <input type ="password" name ="password" id ="password" placeholder="Password" /><BR>
        <input type ="password" name ="repassword" id ="b" placeholder="Re Pasword" /><BR>
<button name="submit" type="button" class="btn-color right-side" id="btn-submit" onclick="validate()">Sign up</button>
        <a href="Login.jsp" target="_blank"id ="a">Click here to Login</a>
    </form>
</div>

<script>
    $('#btn-submit').click(function(e)
    {
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
    })



</script>
</body>
</html>