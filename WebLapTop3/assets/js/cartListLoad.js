if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready()
}
function ready() {
    
    // Prepare for load cart list
    var cartList = sessionStorage.getItem("cartList")
    var cartQuantity = sessionStorage.getItem("cartQuantity")
    if(cartList !== null && cartList !==""){

        document.querySelector('.header__cart-list').innerHTML=cartList
        document.querySelector('.header__cart-notice').innerHTML=cartQuantity
    }
    noItemImg()
    var addToCartButtons = document.querySelectorAll('.product-detail__addToCart--buton');
    var removeCartItemButton = document.querySelectorAll('.header__cart-item-remove');
    var quantityInputs = document.querySelectorAll('.header__cart-item-quantity')
    // Load cart list
    
    quantityCheck(quantityInputs)
    checkClickRemoveCartItem(removeCartItemButton)
    if(addToCartButtons != undefined){
        checkClickAddCartItem(addToCartButtons)
    }  
    
}

function checkClickRemoveCartItem(removeCartItemButton){
    for( let i= 0 ; i < removeCartItemButton.length ; i++){
        var button = removeCartItemButton[i]
        button.addEventListener('click',removeCartItem)
    }
}
function checkClickAddCartItem(addToCartButtons){
    for( let i= 0 ; i < addToCartButtons.length ; i++){
        var button = addToCartButtons[i]
        button.addEventListener("click",addToCartClicked) 
    }
}

function noItemImg(){
    if(document.querySelector('.header__cart-notice').innerHTML==0){
        document.querySelector('.header__cart-no-cart-img').classList.add('activeBlock')
        document.querySelector('.header__cart-list-heading').classList.add('de-active')
        document.querySelector('.header__cart-view-total-cart-price').innerHTML=''
        document.querySelector('.header__cart-view').style.display="none"
    }
    else{
        document.querySelector('.header__cart-no-cart-img').classList.remove('activeBlock')
        document.querySelector('.header__cart-list-heading').classList.remove('de-active')
        document.querySelector('.header__cart-view').style.display="flex"            
    }
}


function addToCartClicked(e){
    var button = e.target
    var shopItem = button.parentElement.parentElement.parentElement.parentElement
    var title =shopItem.querySelector('.product-detail__description').innerText
    var price = shopItem.querySelector('.product-detail__price-oldPrice').innerText
   
    var imageSrc = shopItem.querySelector('.product-picture__background')
    var imageUrl=getDivImgUrl(imageSrc)
    var brand= document.querySelector('.product-detail-common__list-item--brand').innerText
    var origin= document.querySelector('.product-detail-common__list-item--origin').innerText
    var id = document.querySelector('.product-detail-common-id').innerText

    addItemToCart(id,title,price,imageUrl,brand,origin)
    document.querySelector('.header__cart-notice').innerHTML=document.querySelector('.header__cart-list-item').childElementCount
    noItemImg()
    updateCartTotal()
    resetSessionStorage()
   
}
function addItemToCart(id,title,price,imageUrl,brand,origin){
    var cartItem=document.createElement('li')
    cartItem.classList.add('header__cart-item')
    var cartItems=document.querySelector('.header__cart-list-item')
    var cartItemNames =cartItems.querySelectorAll('.header__cart-item-name')
    for( let i =0 ;i< cartItemNames.length; i++){
       
       
        var cartItemName=cartItemNames[i]
        if(cartItemName.innerHTML.replace(title,'').trim() === ''){
           
            alert('Sản phẩm đã được thêm vào giỏ hàng!')
            return
        }
    }
        var cartItemContents=`
        <img src="${imageUrl}" alt="" class="header__cart-img">
        <div class="header__cart-item-info">
            <div class="header__cart-item-head">
                <h5 class="header__cart-item-name">${title}
                </h5>
                <span style="display: none;" class="header__cart-item-id">${id}</span>
                <span style="display: none;" class="header__cart-item-brand">${brand}</span>
                <span style="display: none;" class="header__cart-item-origin">${origin}</span>
                <div class="header__cart-item-price-wrap">
                    <span class="header__cart-item-price">${price}</span>
                    <span class="header__cart-item-multiply">x</span>
                    <input class="header__cart-item-quantity" type="number" value="1"></input>
                </div>
            </div>
            <div class="header__cart-item-body">
                <span class="header__cart-item-description">
                    Phân loại hàng: bạc
                </span>
                <span class="header__cart-item-remove">Xoá</span>
            </div>
        </div>`
    cartItem.innerHTML=cartItemContents
    cartItems.append(cartItem)
    cartItem.querySelector('.header__cart-item-remove').addEventListener('click',removeCartItem)
    cartItem.querySelector('.header__cart-item-quantity').addEventListener('click',quantityChange)
    
   
}
function getDivImgUrl(element){
    style = element.currentStyle || window.getComputedStyle(element, false),
    bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    return bi
}
function removeCartItem(e){
    var buttonClicked = e.target
    buttonClicked.parentElement.parentElement.parentElement.remove()
    document.querySelector('.header__cart-notice').innerHTML=document.querySelector('.header__cart-list-item').childElementCount
    noItemImg()
    updateCartTotal()
    resetSessionStorage()
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
    }
}
function quantityChange(e){
    var input = e.target
    if(isNaN(input.value) || input.value<=0){
        input.value=1
    }
    updateCartTotal()
    resetSessionStorage()
}
class cartItem{
    constructor(id,imgSrc,name,price,brand,origin){
        this.id=id;
        this.imageSrc=imgSrc;
        this.name=name;
        this.price=price;
        this.brand=brand;
        this.origin=origin
    }
}
var cartListArray =[]
document.querySelector('.header__navbar-user-item-alinkRecipe').addEventListener("click",sessionStorageBeforeRedirectToRecipePage)
document.querySelector('.header__cart-view-cart').addEventListener("click",sessionStorageBeforeRedirectToRecipePage)
function sessionStorageBeforeRedirectToRecipePage(){
    var cartListElement =document.querySelectorAll('.header__cart-item')
    
    var cartNotice=document.querySelector('.header__cart-notice').innerText
    if(cartNotice =="0"){
        alert("Giỏ hàng của bạn hiện tại đang trống!")
        return
    }
    for(let i =0 ; i < cartListElement.length;i++){

        var id = cartListElement[i].querySelector('.header__cart-item-id').innerText
        var imgSrc =cartListElement[i].querySelector('.header__cart-img').src
        var name =cartListElement[i].querySelector('.header__cart-item-name').innerText
        var price =cartListElement[i].querySelector('.header__cart-item-price').innerText
        var brand =cartListElement[i].querySelector('.header__cart-item-brand').innerText
        var origin =cartListElement[i].querySelector('.header__cart-item-origin').innerText
        var cartListItem = new cartItem(id,imgSrc,name,price,brand,origin)
        
        cartListArray.push(cartListItem)

    
    }
    var cartListContainer= document.querySelector('.header__cart-list ')
    var totalPrice=cartListContainer.querySelector('.header__cart-view-total-cart-price').innerText
    sessionStorage.setItem('totalPrice',totalPrice)
    sessionStorage.setItem('cartListArray',JSON.stringify(cartListArray))
    window.location.href="/recipePage.html"
}



function updateCartTotal(){
    var cartItemContainer=document.querySelector('.header__cart-list-item')
    var cartItems=cartItemContainer.querySelectorAll('.header__cart-item')
    var total=0
    for( i= 0 ; i < cartItems.length ; i++){
        var cartItem = cartItems[i]
        var priceElement =cartItem.querySelector('.header__cart-item-price')
        var quantityElement = cartItem.querySelector('.header__cart-item-quantity')
        var price=priceElement.innerHTML.replaceAll('.','').replace('đ','').replace('₫','');
        var quantity=quantityElement.value;
        total=total +(price * quantity)
        document.querySelector('.header__cart-view-total-cart-price').innerHTML=(total)
        
    }
    if(cartItems.length>0){
        forceFormat()
    }
}
function forceFormat(){
    const value=document.querySelector('.header__cart-view-total-cart-price').innerHTML
    document.querySelector('.header__cart-view-total-cart-price').innerHTML=formatCash(value).replaceAll(',','.') +'đ';
}
function formatCash(str){
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
    })
}
