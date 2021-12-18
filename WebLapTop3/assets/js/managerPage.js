const addProductForm = document.querySelector('.addProduct')
const tableProductForm = document.querySelector('.TableProdct')
const tableCustomerForm = document.querySelector('.TableCustomer')
const tablePurchasedForm = document.querySelector('.TablePurchased')
const viewProfile = document.querySelector('.viewProfileDetails')
const viewBillDetails = document.querySelector('.TableBillDetails')

const addProductLink= document.querySelector('.addProductLink')
const tableProductLink= document.querySelector('.tableProductLink')
const tableCustomerLink= document.querySelector('.tableCustomerLink')
const tablePurchasedLink= document.querySelector('.tablePurchasedLink')
const paginationDiv = document.querySelector('.pagination')

document.querySelector('.header__navbar-item-link-register').classList.add('de-active')
document.querySelector('.header__navbar-item-link-login').classList.add('de-active')
document.querySelector('li.header__navbar-user').classList.remove('de-active')
var adminAccount = sessionStorage.getItem("adminAccount");
var adminID = sessionStorage.getItem("adminID");
$('.header__navbar-item-user-name').html(adminAccount);
firstLoad()
categoryLinkClicked()
function firstLoad(){
    tableProductForm.classList.add("de-active")
    tableCustomerForm.classList.add("de-active")
    tablePurchasedForm.classList.add("de-active")
    viewProfile.classList.add("de-active")
    viewBillDetails.classList.add("de-active")
    paginationDiv.classList.add("de-active")


    renderFirstTimeDaysOption()
    renderMonthOption()
    renderYearOption()

}

function categoryLinkClicked(){

    tableProductLink.addEventListener("click",e=>{

      $("#table-product-data tr").remove(); 
        tableProductForm.classList.remove("de-active")

        addProductForm.classList.add("de-active")
        tableCustomerForm.classList.add("de-active")
        tablePurchasedForm.classList.add("de-active")
        viewProfile.classList.add("de-active")
        viewBillDetails.classList.add("de-active")
        paginationDiv.classList.remove("de-active")
        loadProducts()

    })

    tableCustomerLink.addEventListener("click",e=>{

      $("#table-customer-data tr").remove(); 
        tableCustomerForm.classList.remove("de-active")

        addProductForm.classList.add("de-active")
        tableProductForm.classList.add("de-active")
        tablePurchasedForm.classList.add("de-active")
        viewProfile.classList.add("de-active")
        viewBillDetails.classList.add("de-active")
        paginationDiv.classList.remove("de-active")

        loadCustomers()


    })

    tablePurchasedLink.addEventListener("click",e=>{
      $("#table-bill-data tr").remove(); 
        tablePurchasedForm.classList.remove("de-active")

        addProductForm.classList.add("de-active")
        tableCustomerForm.classList.add("de-active")
        tableProductForm.classList.add("de-active")
        viewProfile.classList.add("de-active")
        viewBillDetails.classList.add("de-active")
        paginationDiv.classList.remove("de-active")

        loadAllBills()
    })

    addProductLink.addEventListener("click",e=>{
        addProductForm.classList.remove("de-active")

        tableProductForm.classList.add("de-active")
        tableCustomerForm.classList.add("de-active")
        tablePurchasedForm.classList.add("de-active")
        viewProfile.classList.add("de-active")
        viewBillDetails.classList.add("de-active")
        paginationDiv.classList.add("de-active")

        $('#product-name').val('');
        $('#product-brand').val('');
        $('#product-oldPrice').val('');   
        $('#product-newPrice').val('');   
        $('#product-origin').val('');
        document.querySelector('.product-picture__background').style.backgroundImage= `url('')`
    })
}


const image_input=document.querySelector("#imageInput");
var upload_image=""

image_input.addEventListener("change",function(){
  const reader=new FileReader();
  reader.addEventListener('load',()=>{
      upload_image=reader.result;
      document.querySelector('.product-picture__background').style.backgroundImage= `url(${upload_image})`
    //   document.querySelector('#userImgInfo').src=upload_image
  })
  reader.readAsDataURL(this.files[0])
})

    var btn = document.querySelector("#save")
        btn.addEventListener('click', async (e)=>{
            e.preventDefault();
            var name = $("#product-name").val();
            var imgSrc =  $("#imageSrc").val();
            var oldPrice = $("#product-oldPrice").val();
            var currentPrice = $("#product-newPrice").val();
            var brand = $("#product-brand").val();
            var originName = $("#product-origin").val();
            var formData = { name,imgSrc,oldPrice,currentPrice,brand,originName }
            await uploadImage(formData)
            addProductAPI(formData)
        })       


// "imgSrc":"https://firebasestorage.googleapis.com/v0/b/weblaptop.appspot.com/o/laptop_msi_ge75_raider_10sfs_076vn_.png?alt=media&token=38ccab7d-82b6-4900-a653-2061d7241734",
// "name": "Laptop MSI GE75 RAIDER 10SFS - 076VN (Cpu I9-10980HK, Ram 16GB, 512GB SSD +1TB, Vga RTX2070 SUPER 8GB, 17.3 inch, FHD 240HZ, WIN10)",
// "oldPrice": "120.190.000đ",
// "currentPrice":"120.900.000đ",
// "sold": "1",
// "brand":"MSI",
// "originName":"Melbourne"

function addProductAPI(formData)
{
    $.ajax({
        url: 'http://localhost:8080/myweb/ProductAPIServlet',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        dataType: 'json',
        success: function (response) 
        {
            if (response != false)
            {
                console.log("Them san pham thanh cong")
                // $("#table-product-data tr").remove(); 
                // loadProducts();
              
            }
            else
            {
                console.log("Them san pham khong thanh cong")
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







//UPLOAD IMAGE
//For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
//   console.log(document.querySelector('#imageInput'));
  const file = document.querySelector('#imageInput').files[0];
  if (file != undefined)
  {
    const metadata = {
      contentType: file.type
    };
    const name = file.name;
    const uploadIMG = ref.child(name).put(file, metadata);
    await uploadIMG.then(snapshort => snapshort.ref.getDownloadURL()).then(url => {
  
      formData["imgSrc"] = url;
      // document.querySelector("#testspan").innerText=image
  })
            .catch(console.error) 
  }  
}


async function loadProducts()
{
    var productItemList = await selectProducts()
    buildProductsTable(productItemList) 



}

async function selectProducts() {
    var data = []
     await $.ajax({
      url: 'http://localhost:8080/myweb/ProductAPIServlet',
      type: 'GET',
      contentType: 'application/json',
      dataType: 'json',
      // async: !1,
      success: function (response) {
          data = response
      },
      error: function (jqXHR) 
      {
          console.log("The following error occured: " + textStatus, errorThrown);
      },
      complete: function () 
      {
      }
  })
  return data;
}



function buildProductsTable(data) 
{
  var table = document.getElementById('table-product-data')
  for (var i = 0; i < data.length; i++)
  {
    var $button = "<button onclick='editProducts(this)'>" 
    +`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-pencil-square" viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
  </svg>`
    + "</button>";
    var $button2 = "<button onclick='deleteProducts(this)'>" 
    +`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg>`
    + "</button>";
    var row = `<tr>
            <td class="userid">${data[i].productId}</td>
           
            <td>${data[i].name}</td>
            <td>${data[i].oldPrice}</td>
            <td>${data[i].currentPrice}</td>
            <td>${data[i].brand}</td>
            <td>${data[i].originName}</td>
            <td>${$button}</td>    
            <td>${$button2}</td>        
          </tr>`
 

    table.innerHTML += row
  }
}

var productId
async function editProducts(td) 
{
    selectedRow = td.parentElement.parentElement
    productId = selectedRow.cells[0].innerHTML
    var formData = {productId}
    addProductForm.classList.remove("de-active")

    tableProductForm.classList.add("de-active")
    tableCustomerForm.classList.add("de-active")
    tablePurchasedForm.classList.add("de-active")
    viewProfile.classList.add("de-active")
    viewBillDetails.classList.add("de-active")
    paginationDiv.classList.add("de-active")

    var productItem = await selectProductsByID(formData)

    // render product
    $('#product-name').val(productItem.name);
    $('#product-brand').val(productItem.brand);
    $('#product-oldPrice').val(productItem.oldPrice);   
    $('#product-newPrice').val(productItem.currentPrice);   
    $('#product-origin').val(productItem.originName);
    document.querySelector('.product-picture__background').style.backgroundImage= `url(${productItem.imgSrc})`

}

async function deleteProducts(td) 
{
    selectedRow = td.parentElement.parentElement
    productId = selectedRow.cells[0].innerHTML
    var formData = {productId}
    deleteProductAPI(formData)

}





var btn = document.querySelector("#edit")
btn.addEventListener('click', async (e)=>{
e.preventDefault();
var name = $("#product-name").val();
var imgSrc =  $("#imageSrc").val();
var oldPrice = $("#product-oldPrice").val();
var currentPrice = $("#product-newPrice").val();
var brand = $("#product-brand").val();
var originName = $("#product-origin").val();
var imgSrc = document.querySelector('.product-picture__background').style.backgroundImage.slice(4, -1).replace(/"/g, "");
var formData = { productId, name,imgSrc,oldPrice,currentPrice,brand,originName }
await uploadImage(formData)
editProductAPI(formData)
// console.log(formData)
})      

async function selectProductsByID(formData) {
    var data = []
     await $.ajax({
      url: 'http://localhost:8080/myweb/AdvanceProductAPIServlet',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(formData),
      dataType: 'json',
      // async: !1,
      success: function (response) {
          data = response
      },
      error: function (jqXHR) 
      {
          console.log("The following error occured: " + textStatus, errorThrown);
      },
      complete: function () 
      {
      }
  })
  return data;
}

 
function editProductAPI(formData)
{
$.ajax({
url: 'http://localhost:8080/myweb/ProductAPIServlet',
type: 'PUT',
contentType: 'application/json',
data: JSON.stringify(formData),
dataType: 'json',
success: function (response) 
{
    if (response != false)
    {
        console.log("Sua san pham thanh cong")
        // window.location.href = '/managerPage.html'
        loadProducts()
    }
    else
    {
        console.log("Sua san pham khong thanh cong")
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

function deleteProductAPI(formData)
{
$.ajax({
url: 'http://localhost:8080/myweb/ProductAPIServlet',
type: 'DELETE',
contentType: 'application/json',
data: JSON.stringify(formData),
dataType: 'json',
success: function (response) 
{
    if (response != false)
    {
        console.log("Xoa san pham thanh cong")
        $("#table-product-data tr").remove(); 
        loadProducts();
    }
    else
    {
        console.log("Xoa san pham khong thanh cong")
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























async function loadCustomers()
{
    var customerList = await selectCustomers()
  buildCustomersTable(customerList) 
}


async function selectCustomers() {
    var data = []
     await $.ajax({
      url: 'http://localhost:8080/myweb/CustomerAPIServlet',
      type: 'GET',
      contentType: 'application/json',
      dataType: 'json',
      // async: !1,
      success: function (response) {
          data = response
      },
      error: function (jqXHR) 
      {
          console.log("The following error occured: " + textStatus, errorThrown);
      },
      complete: function () 
      {
      }
  })
  return data;
}


function buildCustomersTable(data) 
{
    var table = document.getElementById('table-customer-data')
    var row =``
    var $button = "<button onclick='viewCustomer(this)'>" +
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-pencil-square" viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
  </svg>` 
    + "</button>";
  for (var i = 0; i < data.length; i++)
  {
    row = `<tr>
            <td class="userid">${data[i].customerid}</td>
           
            <td>${data[i].username}</td>
            <td>${data[i].phone}</td>
            <td>${data[i].address}</td>
            <td>${data[i].gender}</td>
            <td>${data[i].birthdate}</td>
            <td>${$button}</td>         
          </tr>`

          table.innerHTML += row
  }
}



async function viewCustomer(td) 
{
    selectedRow = td.parentElement.parentElement
    var customerid = selectedRow.cells[0].innerHTML
    var userAccount = selectedRow.cells[1].innerHTML
    var formData = {customerid}

    addProductForm.classList.add("de-active")
    tableProductForm.classList.add("de-active")
    tableCustomerForm.classList.add("de-active")
    tablePurchasedForm.classList.add("de-active")
    viewProfile.classList.remove("de-active")
    viewBillDetails.classList.add("de-active")
    paginationDiv.classList.add("de-active")
    await getCustomerFromID(formData, userAccount)

    // // render product
    // $('#product-name').val(productItem.name);
    // $('#product-brand').val(productItem.brand);
    // $('#product-oldPrice').val(productItem.oldPrice);   
    // $('#product-newPrice').val(productItem.currentPrice);   
    // $('#product-origin').val(productItem.originName);
    // document.querySelector('.product-picture__background').style.backgroundImage= `url(${productItem.imgSrc})`
    await loadBills(formData)
}





async function getCustomerFromID(formData, userAccount) {
    await $.ajax({
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
              $('#user-email').val(userAccount);
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
                // console.log($('#choseDays').val())
                // console.log($('#choseMonths').val())
                // console.log($('#choseYears').val())
                $("#userImgDetail").attr("src",  response.image);
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

async function loadBills(formData)
{
    var billList = await selectBillByCustomerID(formData)
    buildBillTableCustomer(billList) 
}

async function selectBillByCustomerID(formData) {
    var data = []
     await $.ajax({
      url: 'http://localhost:8080/myweb/AdvanceBillDetailsServlet',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(formData),
      dataType: 'json',
      // async: !1,
      success: function (response) {
          console.log(response)
          data = response
      },
      error: function (jqXHR) 
      {
          console.log("The following error occured: " + textStatus, errorThrown);
      },
      complete: function () 
      {
      }
  })
  return data;
}

function buildBillTableCustomer(data) 
{
    var table = document.getElementById('table-product-customer-bill-data')
    var row =``
  for (var i = 0; i < data.length; i++)
  {
    row = `<tr>
            <td>${data[i].billDetailsId}</td>
            <td>${data[i].customerid}</td>
            <td>${data[i].productId}</td>
            <td>${data[i].productName}</td>
            <td>${data[i].singlePrice}</td>
            <td>${data[i].num}</td>
            <td>${data[i].totalPrice}</td>      
          </tr>`

          table.innerHTML += row
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


async function loadAllBills()
{
    var billList = await selectAllBills()
    buildBillTable(billList) 
}

async function selectAllBills() {
  var data = []
   await $.ajax({
    url: 'http://localhost:8080/myweb/BillAPIServlet',
    type: 'GET',
    contentType: 'application/json',
    dataType: 'json',
    // async: !1,
    success: function (response) {
        data = response
    },
    error: function (jqXHR) 
    {
        console.log("The following error occured: " + textStatus, errorThrown);
    },
    complete: function () 
    {
    }
})
return data;
}




function buildBillTable(data) 
{
    var table = document.getElementById('table-bill-data')
    var row =``
    var $button = "<button onclick='viewBillDetailsInfo(this)'>" +
   `
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
   `
    + "</button>";
  for (var i = 0; i < data.length; i++)
  {
    row = `<tr>
            <td>${data[i].billId}</td>     
            <td>${data[i].customerid}</td>
            <td>${data[i].totalPriceOfBill}</td>
            <td>${data[i].orderedDate}</td>
            <td>${$button}</td>         
          </tr>`

          table.innerHTML += row
  }
}



async function viewBillDetailsInfo(td) 
{
    selectedRow = td.parentElement.parentElement
    billDetailsId = selectedRow.cells[0].innerHTML
    var formData = {billDetailsId}
    addProductForm.classList.add("de-active")
    tableProductForm.classList.add("de-active")
    tableCustomerForm.classList.add("de-active")
    tablePurchasedForm.classList.add("de-active")
    viewProfile.classList.add("de-active")
    viewBillDetails.classList.remove("de-active")
    paginationDiv.classList.add("de-active")
    $("#table-bill-details-data tr").remove(); 
    var billItem = await getBillFromBillID(formData)
    buildBillDetailsTable(billItem)
}



async function getBillFromBillID(formData) 
{
  var data = []
  await $.ajax({
      url: 'http://localhost:8080/myweb/AdvanceBillAPIServlet',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(formData),
      dataType: 'json',
      success: function (response) {
          if(response !== false){
              data = response
          
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
  return data;
}


function buildBillDetailsTable(data) 
{
    var table = document.getElementById('table-bill-details-data')
    var row =``
  for (var i = 0; i < data.length; i++)
  {
    row = `<tr>
            <td>${data[i].billDetailsId}</td>
            <td>${data[i].customerid}</td>
            <td>${data[i].productId}</td>
            <td>${data[i].productName}</td>
            <td>${data[i].singlePrice}</td>
            <td>${data[i].num}</td>
            <td>${data[i].totalPrice}</td>             
          </tr>`

          table.innerHTML += row
  }
}