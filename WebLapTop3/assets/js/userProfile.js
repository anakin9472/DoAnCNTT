
// CHOSE BIRTH DAY  -start
var setYear = 0;
var setMonth = 0;
var dayArray = new Array(
  "31",
  "28",
  "31",
  "30",
  "31",
  "30",
  "31",
  "31",
  "30",
  "31",
  "30",
  "31"
);

function onChangeMonth(val) {
  setMonth = val;
  var dayOption = '<option value="">Ngày</option>';
  // dayArray[val-1];
  if (setYear != 0) {
    if (setYear % 4 == 0 && val == 2) {
      for (var i = 1; i <= parseInt(dayArray[val - 1]) + 1; i++) {
        dayOption += '<option value="' + i + '">' + i + "</option>";
      }
    } else {
      for (var i = 1; i <= dayArray[val - 1]; i++) {
        dayOption += '<option value="' + i + '">' + i + "</option>";
      }
    }
    $("#choseDays").html(dayOption);
  } else {
    for (var i = 1; i <= dayArray[val - 1]; i++) {
      dayOption += '<option value="' + i + '">' + i + "</option>";
    }
    $("#choseDays").html(dayOption);
  }
}

function onChangeYear(val) {
  setYear = val;
  var dayOption = '<option value="">Ngày</option>';
  // dayArray[val-1];
  if (setMonth != 0) {
    if (val % 4 == 0 && setMonth == 2) {
      for (var i = 1; i <= parseInt(dayArray[setMonth - 1]) + 1; i++) {
        dayOption += '<option value="' + i + '">' + i + "</option>";
      }
    } else {
      for (var i = 1; i <= parseInt(dayArray[setMonth - 1]); i++) {
        dayOption += '<option value="' + i + '">' + i + "</option>";
      }
    }
    $("#choseDays").html(dayOption);
  } else {
    for (var i = 1; i <= 31; i++) {
      dayOption += '<option value="' + i + '">' + i + "</option>";
    }
    $("#choseDays").html(dayOption);
  }
}


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready()
}
function ready() {

    var userEmail = sessionStorage.getItem("userAccount")
    console.log(userEmail)
    var customerid = sessionStorage.getItem("userID");

    {
      document.querySelector('.side-header__info-user-name').innerText=userEmail
      document.querySelector('#user-email').value=userEmail
      document.querySelector('#user-email').disabled = true
    }
    
    formData = {customerid}
    getCustomerFromID(formData)
    
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

              $('#user-username').val(response.username);
              $('#user-phone').val(response.phone);
              $('#user-address').val(response.address);
              var gender = JSON.stringify(response.gender);          
              if (gender == "\"female\"")
              {
                document.getElementById("female-btn").checked = true;
              }
              else if (gender == "\"male\"")
              {
                  document.getElementById("male-btn").checked = true;
              }
              //  const bdate = JSON.stringify(response.birthdate);
              var date =''
              var month =''
              var year =''
                for (i = 0;i<response.birthdate.length;i++)
                {
                    if ( response.birthdate[i] == '/')
                    {
                      for (j = i+1; j <response.birthdate.length; j++)
                      {
                        if ( response.birthdate[j] == '/')
                        {
                          for (k = j+1;k<response.birthdate.length;k++)
                          {
                            year += response.birthdate[k]
                          }
                          break
                        }
                        month += response.birthdate[j]
                      }
                      break
                    }
                    date += response.birthdate[i]
                }
                $('#choseDays').val(date);
                $('#choseMonths').val(month);
                $('#choseYears').val(year);

                temp = JSON.stringify(response.image)
                if (temp != null)
                $("#userImgDetail").attr("src",  response.image);
                $("#userImgInfo").attr("src",  response.image);
                // console.log(response.image)

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


// var btn = document.querySelector("#btnAddUser")
// btn.addEventListener('click', async (e)=>
// {
// e.preventDefault();
// var customerid = sessionStorage.getItem("userID");
// var username = $('#user-username').val()
// var phone =  $('#user-phone').val()
// var address =  $('#user-address').val()
// var gender
// var temp = document.getElementById("female-btn").checked
//   if (temp == true)
//   {
//     gender = "female"
//   }
//   else
//   {
//     gender = "male"
//   }
//   var bdate = $('#choseDays').val();
//   var month = $('#choseMonths').val();
//   var year = $('#choseYears').val();
//   var birthdate = bdate + "/" + month + "/" + year
//   var formData = { customerid, username, phone,address,gender,birthdate }

//   await uploadImage(formData)
//   addCustomerAPI(formData)
// })  


const firebaseConfig = 
{
  apiKey: "AIzaSyCqdlDgBHLBu-LS2Ulri9XLJIJHmUOJENQ",
  authDomain: "webproject-614c4.firebaseapp.com",
  projectId: "webproject-614c4",
  storageBucket: "webproject-614c4.appspot.com",
  messagingSenderId: "325432954070",
  appId: "1:325432954070:web:6be2d75a01059a95b08d77",
  measurementId: "G-BJSF39LZK1"
};
firebase.initializeApp(firebaseConfig);

async function uploadImage(formData)
 {
  const ref = firebase.storage().ref()
  const file = document.querySelector('#imageInput').files[0];
  if (file != undefined)
  {
    const metadata = {
      contentType: file.type
    };
    const name = file.name;
    const uploadIMG = ref.child(name).put(file, metadata);
   await uploadIMG.then(snapshort => snapshort.ref.getDownloadURL()).then(url => {
  
      formData["image"] = url;
     
  })
    .catch(console.error)   
  }
 
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
const image_input=document.querySelector("#imageInput");
var upload_image=""

image_input.addEventListener("change",function(){
  const reader=new FileReader();
  reader.addEventListener('load',()=>{
      upload_image=reader.result;
      document.querySelector('#userImgDetail').src=upload_image
      // document.querySelector('#userImgInfo').src=upload_image
  })
  reader.readAsDataURL(this.files[0])
})

var btnUpdate = document.querySelector("#btnUpdateUser")
btnUpdate.addEventListener('click', async (e)=>
{
  e.preventDefault();
  var customerid = sessionStorage.getItem("userID");
  var username = $('#user-username').val()
  var phone =  $('#user-phone').val()
  var address =  $('#user-address').val()
  var gender
  var temp = $('input[name="female-btn"]:checked').val();


  var temp = document.getElementById("female-btn").checked
    if (temp == true)
    {
      gender = "female"
    }
    else
    {
      gender = "male"
    }
    var bdate = $('#choseDays').val();
    var month = $('#choseMonths').val();
    var year = $('#choseYears').val();
    var birthdate = bdate + "/" + month + "/" + year
    var image = document.getElementById("userImgDetail").src
    var formData = { customerid, username, phone,address,gender,birthdate,image }

  await uploadImage(formData)
  uploadCustomerAPI(formData)

})  

function uploadCustomerAPI(formData)
{       
    $.ajax({
        url: 'http://localhost:8080/myweb/CustomerAPIServlet',
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        dataType: 'json',
        success: function (response) 
        {
            console.log(response);                  
            const myJSON = JSON.stringify(response);
            if (myJSON != "false")
            {
              console.log("Chỉnh sửa thành công")
              var customerid = response.customerid
              sessionStorage.setItem("customerid", customerid);
              window.location.href = "/userPage.html"
            }
            else
            {
                console.log("Chỉnh sửa không thành công")
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


