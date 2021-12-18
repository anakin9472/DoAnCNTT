if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
}
else {
  ready()
}
function ready(){


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
  renderFirstTimeDaysOption()
  renderMonthOption()
  renderYearOption()
  document.querySelector('.header__search-input').disabled=true
  var userEmail = sessionStorage.getItem("userAccount")
  if(userEmail == null){
    window.location.href="/errorPage.html"
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


  

function renderFirstTimeDaysOption(){
    let dayOptions = '<option value="">Ngày</option>';
      for (let i = 1; i <= 31; i++) {
        dayOptions += '<option value="' + i + '">' + i + "</option>";
      }
      $("#choseDays").html(dayOptions)
}

function renderMonthOption(){
    let monthOptions = '<option value="">Tháng</option>';
      for (let i = 1; i <= 12; i++) {
        monthOptions += '<option value="' + i + '"> Tháng ' + i + "</option>";
      }
      $("#choseMonths").html(monthOptions)
}

function renderYearOption(){
    let d = new Date();
    let yearOptions = '<option value="">Năm</option>';
      for (let i = d.getFullYear(); i >= 1930; i--) {
        yearOptions += '<option value="' + i + '">' + i + "</option>";
      }
      $("#choseYears").html(yearOptions)
}
// CHOSE BIRTH DAY  -start
// CHOSE IMAGE - start
// const image_input=document.querySelector("#imgInput");
// var upload_image=""

// image_input.addEventListener("change",function(){
//   const reader=new FileReader();
//   reader.addEventListener('load',()=>{
//       upload_image=reader.result;
//       document.querySelector('#userImgDetail').src=upload_image
//       document.querySelector('#userImgInfo').src=upload_image
//   })
//   reader.readAsDataURL(this.files[0])
// })



// CHOSE IMAGE - end

//UPLOAD IMAGE
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCqdlDgBHLBu-LS2Ulri9XLJIJHmUOJENQ",
//   authDomain: "webproject-614c4.firebaseapp.com",
//   projectId: "webproject-614c4",
//   storageBucket: "webproject-614c4.appspot.com",
//   messagingSenderId: "325432954070",
//   appId: "1:325432954070:web:6be2d75a01059a95b08d77",
//   measurementId: "G-BJSF39LZK1"
// };

// firebase.initializeApp(firebaseConfig);
// var image;
// $('#btnUpdateUser').click(function (e) 
// {
 

//   var imgSrc;
//   var name = "Laptop Asus Vivobook F512J R564JA-UH31T - Intel Core i3"
//   var oldPrice = "14.990.000đ"
//   var currentPrice = "12.690.000đ"
//   var sold = 10
//   var brand = "Asus"
//   var originName = "Trung Quốc"
//   var formData = {imgSrc,name,oldPrice,currentPrice,sold,brand,originName}
//   uploadImage(formData);
//   // var image = $('imageInput').val()
// })

// async function uploadImage(formData)
//  {
//   const ref = firebase.storage().ref()
//   console.log(document.querySelector('#imageInput'));
//   const file = document.querySelector('#imageInput').files[0];
//   const metadata = {
//     contentType: file.type
//   };
//   const name = file.name;
//   const uploadIMG = ref.child(name).put(file, metadata);
//   uploadIMG.then(snapshort => snapshort.ref.getDownloadURL()).then(url => {

//     formData["imgSrc"] = url;
//     console.log(formData)
//     addProduct(formData)
//     // document.querySelector("#testspan").innerText=image
// })
//           .catch(console.error)    
// }


// function addProduct(formData)
// {       
//     $.ajax({
//         url: 'http://localhost:8080/myweb/ProductAPIServlet',
//         type: 'POST',
//         contentType: 'application/json',
//         data: JSON.stringify(formData),
//         dataType: 'json',
//         async: !1,
//         success: function (response) 
//         {
//             console.log(response);                  
//         },
//         error: function (jqXHR) {
//             // log the error to the console
//             console.log("The following error occured: " + textStatus, errorThrown);
//         },
//         complete: function () {
//             console.log("Incomplete");
//         }
//     })
// }

}