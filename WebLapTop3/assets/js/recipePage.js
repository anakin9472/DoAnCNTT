document.querySelector('.header__search-input').disabled=true
var cartListArray=[]
cartListArray =sessionStorage.getItem('cartListArray')
var temp= JSON.parse(cartListArray)
console.log(temp)
var totalPrice=sessionStorage.getItem('totalPrice')
var totalPriceOfBill = totalPrice
loadRecipeProduct()
document.querySelector('.list-product-total-price').innerText=totalPrice
    //   formData["name"] = JSON.stringify(temp[i].name)


function loadRecipeProduct(){

    const tableProduct= document.querySelector('.list-product-data')

    var rowProduct =``
    for(let i =0;i<temp.length;i++){
        rowProduct+=`<tr class = "list-product-data-item">
        <th scope="row" class="list-product-data--name">${temp[i].name}</th>
        <td class = "list-product-data-id" style="display: none;">${temp[i].id}</td>
        <td class="list-product-data--img"><img src="${temp[i].imageSrc}" width=100px height="100px" alt=""></td>
        <td class="list-product-data--price">${temp[i].price}</td>
        <td class="list-product-data--brand">${temp[i].brand}</td>
        <td class="list-product-data--origin">${temp[i].origin}</td>
        <td class="list-product-data--quantity"><input class="list-product-data--quantity-input" id = "quantity-input" type="number" min="1" max="99" value="1"></td>
        <td class="list-product-data--options"><button class="list-product-data--options-btn">xoá</button></td>
      </tr>`;
    }
    tableProduct.innerHTML=rowProduct
}
var removeProductRowButton = document.querySelectorAll('.list-product-data--options-btn');
checkClickRemoveProductRow(removeProductRowButton)

var quantityInputs = document.querySelectorAll('.list-product-data--quantity-input')
var newQuantityInputs = quantityInputs
quantityCheck(quantityInputs)

var userEmail = sessionStorage.getItem("userAccount")
  if(userEmail == null){
    window.location.href="/errorPage.html"
  }


function checkClickRemoveProductRow(removeProductRowButton){
    for( let i= 0 ; i < removeProductRowButton.length ; i++){
        var button = removeProductRowButton[i]
        button.addEventListener('click',removeProductRow)
    }
}

function removeProductRow(e){
    var buttonClicked = e.target
    buttonClicked.parentElement.parentElement.remove()
    updateRecipeTotal()
    //resetSessionStorage()
}

function resetSessionStorage(){
    var cartList = document.querySelector('.header__cart-list').innerHTML
    var cartQuantity = document.querySelector('.header__cart-notice').innerHTML
    sessionStorage.setItem('cartList',cartList)
    sessionStorage.setItem('cartQuantity',cartQuantity)
}
  
function quantityCheck(quantityInputs){

    for( let i= 0 ; i < quantityInputs.length ; i++){
        var input = quantityInputs[i]
         input.addEventListener('change',quantityChange)
         newQuantityInputs[i] = quantityInputs[i]
    }
}
function quantityChange(e){
    var input = e.target
    if(isNaN(input.value) || input.value<=0){
        input.value=1
    }
    updateRecipeTotal()
    // resetSessionStorage()
}



function updateRecipeTotal(){
    var recipeContainer=document.querySelector('.list-product-data')
    var recipeItems=recipeContainer.querySelectorAll('.list-product-data-item')
    var total=0
    for( i= 0 ; i < recipeItems.length ; i++){
        var recipeItem = recipeItems[i]
        var priceElement =recipeItem.querySelector('.list-product-data--price')
        var quantityElement = recipeItem.querySelector('.list-product-data--quantity-input')
        
        var price=priceElement.innerHTML.replaceAll('.','').replace('đ','').replace('₫','');
        var quantity=quantityElement.value;
        total=total +(price * quantity)
        totalPriceOfBill = total
        document.querySelector('.list-product-total-price').innerText=(total)
        
    }
    if(recipeItems.length>0){
        forceFormat()
    }
    else{
        document.querySelector('.list-product-total-price').innerText="0đ"
    }
}
function forceFormat(){
    const value=document.querySelector('.list-product-total-price').innerText
    document.querySelector('.list-product-total-price').innerText=formatCash(value).replaceAll(',','.') +'đ';
}
function formatCash(str){
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
    })
}

async function getInfoBeforePay()
{
    var customerid = sessionStorage.getItem("userID")
    var data = {customerid}
    var formData = await getCustomerFromID(data)
}


var btnPay = document.querySelector("#btnPay")
btnPay.addEventListener('click', async (e)=>{   
e.preventDefault();
var temp= JSON.parse(cartListArray)
var customerid = sessionStorage.getItem("userID")
sessionStorage.setItem("userID",customerid)
totalPriceOfBill = String(totalPriceOfBill) 

if (totalPriceOfBill.slice(-1) != 'đ')
totalPriceOfBill = formatCash(totalPriceOfBill) + "đ"

var data = {customerid, totalPriceOfBill}
var billId = await addBillAPI(data,billId)
var billDetailsId = billId
var productId
var productName
var singlePrice
var totalPrice
var formData
for(let i =0;i<temp.length;i++){


    productId = JSON.stringify(temp[i].id)
    productId = productId.replace(/['"]+/g, '') 

    productName = JSON.stringify(temp[i].name)
    productName = productName.replace(/['"]+/g, '')
    productName = productName.trim()

    singlePrice = JSON.stringify(temp[i].price)
    singlePrice = singlePrice.replace(/['"]+/g, '')

    var num = newQuantityInputs[i].value

    totalPrice= singlePrice.replaceAll('.','').replace('đ','').replace('₫','');
    totalPrice = totalPrice * num;

    totalPrice = String(totalPrice) 
    totalPrice = formatCash(totalPrice) + "đ"


    var formData = {billDetailsId, customerid, productId, productName,singlePrice,num,totalPrice}
    addBillDetailsAPI(formData)



}


})  







async function addBillAPI(formData,billId)
{
    await $.ajax({
        url: 'http://localhost:8080/myweb/BillAPIServlet',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        dataType: 'json',
        success: function (response) 
        {
            if (response != false)
            {
                console.log("Them hoa don thanh cong")
                var temp = JSON.stringify(response.billId);
                temp = temp.replace(/['"]+/g, '')
                billId = temp
            }
            else
            {
                console.log("Them hoa don khong thanh cong")
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
    return billId
}


async function addBillDetailsAPI(formData)
{
    await $.ajax({
        url: 'http://localhost:8080/myweb/BillDetailsAPIServlet',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        dataType: 'json',
        success: function (response) 
        {
            if (response != false)
            {
                console.log("Them thong tin hoa don thanh cong")
                console.log(response)
            }
            else
            {
                console.log("Them thong tin hoa don khong thanh cong")
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







