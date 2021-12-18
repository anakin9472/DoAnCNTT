// Test base - start


// Test base - end

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
      error: function (jqXHR) {
          // log the error to the console
          console.log("The following error occured: " + textStatus, errorThrown);
      },
      complete: function () {
        //   console.log("Incomplete");
      }
  })

  return data;
}


if(document.readyState =='loading'){
    document.addEventListener('DOMContentLoaded',ready)
} else{
    ready()
}

function ready(){

    //-----------------------------------------------------------------
    
    renderAll()
         async function renderAll() {   

            sessionStorage.removeItem("productImgSrc")
          

            var productItemList = await selectProducts()
            
            // PAGINATION - start

            var cloneProductItemList = [...productItemList]
            var testClone =[...productItemList] 
           
            // RENDER AND PAGINATION - variables
      
            let perPage=10;
            let currentPage=1;
            let start=0;
            let end =perPage;
            let totalPages =Math.ceil(productItemList.length/perPage)
            let listPageNumbers=`
            <li class="pagination-item pagination-item--active pagination-item-number">
               <a href="#" class="pagination-item__link">1</a>
            </li>
            `
            let btnPrevious=document.querySelectorAll('.pagination-item__link--previous')
            let btnNext=document.querySelectorAll('.pagination-item__link--next')
        
            // SORT PRODUCT - variables
            var productField = document.querySelector('.grid__row-product')
            var productLi =Array.from(productField.children);
            var select = document.querySelectorAll('.select-input__link');
            var ar = []; 
        
            renderProduct()
            //PRODUCT CART - variables

            var cartList = sessionStorage.getItem("cartList")
            var cartQuantity = sessionStorage.getItem("cartQuantity")
            if(cartList !=null){

                document.querySelector('.header__cart-list').innerHTML=cartList
                document.querySelector('.header__cart-notice').innerHTML=cartQuantity
            }

            var removeCartItemButton = document.querySelectorAll('.header__cart-item-remove');
            var addToCartButtons = document.querySelectorAll('.home-product-item__order-btn');
            checkClickRemoveCartItem()
            checkClickAddCartItem()
        
            // SELECT SORT FILTER - variables 
        
            let  inputSelectDEC= document.getElementById('select-input__link--decrease')
            let  inputSelectINC= document.getElementById('select-input__link--increase')
            let  inputSelectDEF= document.getElementById('select-input__link--default')
        
            renderListPage()
            changePage()
            function checkLoaded() {
                return document.readyState === "complete";
              }
            function LoadAndRender(){
               
                             
                renderProduct()    
                if(checkLoaded()){
                    $(".loader-wrapper").fadeOut("slow");
                }
            }
            function getCurrentPage(currentPage){
                start =(currentPage-1)*perPage;
                end= currentPage*perPage;
            }
            function renderListPage(){
                for(let i=2;i <= totalPages;i++){
                    listPageNumbers+=`
                    <li class="pagination-item pagination-item-number">
                      <a href="#" class="pagination-item__link">${i}</a>
                    </li>`
                }
                document.querySelector('.pagination-item-list-number').innerHTML=listPageNumbers
            }
            function changePage(){
        
                const numberList=document.querySelectorAll('.pagination-item-number')
                for( let i = 0; i < numberList.length;i++){
                    numberList[i].addEventListener("click",()=>{
                        $(".loader-wrapper").fadeIn("slow");                            
                        let value=i+1;
                        currentPage=value    
        
                        for( let i = 0; i < numberList.length;i++){
                            numberList[i].classList.remove('pagination-item--active')
                        }
                        numberList[i].classList.add('pagination-item--active')
                      
                        checkActiveAndDisablePaginationBtn()
                        getCurrentPage(currentPage)      
                        LoadAndRender()
                    })
                }  
            }
            function renderProduct(){
                var productItemContents=``;
                var lastIndex = end
                var startIndex=start
                const pagination__margin=document.querySelector(".pagination");
                var productItemContentList=document.querySelector('.grid__row-product')
                if( end > cloneProductItemList.length){
                    lastIndex=cloneProductItemList.length
                }
                if(cloneProductItemList.length>0){
                    for(let i =startIndex ; i< lastIndex; i++)
                    {                  
                            productItemContents +=`
                            <div class="grid__column-2-4" data-old-price="" data-price="">
                                    <div style="position:relative">
                                        <a class="home-product-item" href="#">
                                            <div class="home-product-item__img" 
                                                style="background-image: url(${cloneProductItemList[i].imgSrc});">
                                                <h4 class="home-product-item__name">${cloneProductItemList[i].name}
                                                </h4>
                                                <span style="display: none;" class="home-product-item__id">${cloneProductItemList[i].productId}</span>                        
                                                <div class="home-product-item__price">
                                                    <span class="home-product-item__price-old">${cloneProductItemList[i].oldPrice}</span>
                                                    <span class="home-product-item__price-current">${cloneProductItemList[i].currentPrice}</span>
                                                </div>
                                                <div class="home-product-item__action">
                                                    <span class="home-product-item__like home-product-item__like--liked">
                                                        <i class="home-product-item__like-icon-empty far fa-heart"></i>
                                                        <i class="home-product-item__like-icon-fill fas fa-heart "></i>
                    
                                                    </span>
                                                    <div class="home-product-item__rating">
                                                        <i class="home_product-item__start--gold fas fa-star"></i>
                                                        <i class="home_product-item__start--gold fas fa-star"></i>
                                                        <i class="home_product-item__start--gold fas fa-star"></i>
                                                        <i class="home_product-item__start--gold fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                    <span class="home_product-item__sold">${cloneProductItemList[i].sold}</span>                         
                                                </div>
                                                <div class="home-product-item__origin">
                                                    <span class="home-product-item__brand">${cloneProductItemList[i].brand}</span>
                                                    <span class="home-product-item__origin-name">${cloneProductItemList[i].originName}</span>
                                                </div>
                                                <!-- Order to cart-->
                                            
                                                <!-- Sale off -->
                                                <div class="home-product-item__sale-off">
                                                    <span class="home-product-item__sale-off-percent"></span>
                                                    <span class="home-product-item__sale-off-label">GIẢM</span>                        
                                                </div> 
                                            </div>
                                        </a>
                                        <div class="home-product-item__order home-product-item__order-btn">
                                            <i class="home-product-item__order-icon fas fa-shopping-cart"></i>
                                        </div>
                                </div>
                            </div>`   
                        
                    }
                    productItemContentList.innerHTML=productItemContents
                    
                    productField = document.querySelector('.grid__row-product')
                    productLi =Array.from(productField.children);
                    // ar=[]
                    setDataPrice()
            
                    autoCalcSaleOf()
            
                    removeCartItemButton = document.querySelectorAll('.header__cart-item-remove');
                    addToCartButtons = document.querySelectorAll('.home-product-item__order-btn');
                    checkClickRemoveCartItem()
                    checkClickAddCartItem()
                    
                    pagination__margin.style.display="flex"
                    document.querySelector(".pagination").style.margin="48px 0 32px 0"
        
                    document.querySelector(".home-filter___page-current").innerText=currentPage
                    document.querySelector(".home-filter___page-total").innerText="/"+totalPages

                    alinkProduct=document.querySelectorAll('.home-product-item')
                    redirectToProductDetail()
        
                }
                else{
                    productItemContentList.innerHTML=``
                    pagination__margin.style.display="none"
                    document.querySelector(".home-filter___page-current").innerText=""
                    document.querySelector(".home-filter___page-total").innerText="NaN"
                }
                
            }
            function removeAndAddActiveForBtn(Case){
                if(Case==="NextClicked")
                {
                    if(currentPage ===totalPages){
                        for (let i =0;i < btnNext.length;i++){
                            btnNext[i].classList.add('pagination-item__link-btn--disable')
                        }
                        
                    }
        
                    for (let i =0;i < btnPrevious.length;i++){
                        btnPrevious[i].classList.remove('pagination-item__link-btn--disable')
                    }
                }
                else if (Case==="PreviousClicked"){
                    if(currentPage ===1){
                           for (let i =0;i < btnPrevious.length;i++){
                               btnPrevious[i].classList.add('pagination-item__link-btn--disable')
                           }
                    }
        
                    for (let i =0;i < btnNext.length;i++){
                           btnNext[i].classList.remove('pagination-item__link-btn--disable')
                    }
                }
                const numberList=document.querySelectorAll('.pagination-item-number')
                const nextNumber =numberList[currentPage-1]
                for( let i = 0; i < numberList.length;i++){
                    numberList[i].classList.remove('pagination-item--active')           
                }
                nextNumber.classList.add('pagination-item--active')
           }
           function currentPageRender(){
                getCurrentPage(currentPage)
                LoadAndRender()
           }
            for (let i =0;i < btnNext.length;i++){
        
                btnNext[i].addEventListener("click",()=>{
                    $(".loader-wrapper").fadeIn("slow");  
                    currentPage++;
            
                    if(currentPage > totalPages){
                        currentPage=totalPages
                    }
                    removeAndAddActiveForBtn("NextClicked")
                    currentPageRender()
                })
            }
            
            for (let i =0;i< btnPrevious.length;i++){
                btnPrevious[i].addEventListener("click",()=>{
                    $(".loader-wrapper").fadeIn("slow");  
                    currentPage--;
                    
                    if(currentPage <= 1){
                        currentPage=1
                    }
                    removeAndAddActiveForBtn("PreviousClicked")
                    currentPageRender()
                })
            }
            
            //---------------------------------------------------------------------
            // SELECT SORT FILTER - start 
        
            inputSelectDEC.addEventListener("click",(e)=>{
                $(".loader-wrapper").fadeIn("slow");  
                e.preventDefault();
                document.getElementById('select-input-field').value=inputSelectDEC.innerHTML;
        
                cloneProductItemList = cloneProductItemList.sort((a,b)=> parseFloat(a.currentPrice) - parseFloat(b.currentPrice))
                LoadAndRender() 
            })
            
            inputSelectINC.addEventListener("click",(e)=>{
                $(".loader-wrapper").fadeIn("slow");  
        
                e.preventDefault();
                document.getElementById('select-input-field').value=inputSelectINC.innerHTML;
        
                cloneProductItemList =cloneProductItemList.sort((a,b)=> parseFloat(b.currentPrice) - parseFloat(a.currentPrice))
                LoadAndRender()
            })
        
            inputSelectDEF.addEventListener("click",(e)=>{
                $(".loader-wrapper").fadeIn("slow");  
        
                e.preventDefault();
                document.getElementById('select-input-field').value=inputSelectDEF.innerHTML;
                cloneProductItemList = [...testClone]
                LoadAndRender()
            })
            
            // SELECT SORT FILTER - end
            
            // PAGINATION - end
        
            //----------------------------------------------------------------- 
        
            // FILTER by Danh mục- start
            function checkActiveAndDisablePaginationBtn(){
                if(currentPage===1){
                    for (let i =0;i < btnPrevious.length;i++){
                        btnPrevious[i].classList.add('pagination-item__link-btn--disable')
                        
                    }
                }
                else{
                    for (let i =0;i < btnPrevious.length;i++){
                        btnPrevious[i].classList.remove('pagination-item__link-btn--disable')
                    }
                }
        
                if(currentPage===totalPages){
                    for (let i =0;i < btnNext.length;i++){
                        btnNext[i].classList.add('pagination-item__link-btn--disable')
                    }
                }
                else{
                    for (let i =0;i < btnNext.length;i++){
                        btnNext[i].classList.remove('pagination-item__link-btn--disable')
                    }
                }
            }
            function reRender(){
                cloneProductItemList=[...testClone]
                currentPage=1
                totalPages =Math.ceil(cloneProductItemList.length/perPage)
                listPageNumbers=`
                                <li class="pagination-item pagination-item--active pagination-item-number">
                                <a href="#" class="pagination-item__link">1</a>
                                </li>
                                `
                renderListPage()
        
                getCurrentPage(currentPage)
                
                changePage()
                checkActiveAndDisablePaginationBtn()
                LoadAndRender()
                
            }
            sortByFilter()
        
            function sortByFilter(){
                var checkExistProduct=false;
                const pagination__margin=document.querySelector(".pagination");
                const filterBtns= document.querySelectorAll(".category-item__link");
                const categoryFilterList= document.querySelectorAll(".category-item__link")
                // let storeProducts = document.querySelectorAll(".home-product-item");
                for( let i = 0 ;i < filterBtns.length;i++){    
                    filterBtns[i].addEventListener("click",(e)=>{
                        $(".loader-wrapper").fadeIn("slow");  
                        testClone=[]
                        const filter=e.target.dataset.filter;
                        
                        for(let i =0 ; i <categoryFilterList.length ; i++){
                            if(filter !==categoryFilterList[i].dataset.filter)
                            {
                                categoryFilterList[i].parentElement.classList.remove('category-item--active')
                            }
                            else{
                                categoryFilterList[i].parentElement.classList.add('category-item--active')
                            }
                        }
        
                        if(filter==="all"){
                            checkExistProduct=true
                            testClone=[...productItemList]
                            
                            reRender()
                            return
                        }
                        for(let i=0 ;i<productItemList.length;i++){
                            if(productItemList[i].name.trim().toLowerCase().indexOf(filter) !==-1){
                                testClone.push(productItemList[i])
                                checkExistProduct=true
                            }
                        }
                        if(checkExistProduct){
                            
                            reRender()
                        }
                        else{
                            cloneProductItemList=[]
                            reRender()
                            pagination__margin.style.margin="48px 0 32px 0"
                            for (let i =0;i < btnNext.length;i++){
                                btnNext[i].classList.add('pagination-item__link-btn--disable')
                            }
                        }
                    })
                    
                }
                
            }
            
            
            //filterSelect()
            
            // function filterSelect(){
            //     const filterBtn= document.querySelectorAll(".category-item__link");
            //     let storeProducts = document.querySelectorAll(".home-product-item");
            //     for( let i = 0 ;i < filterBtn.length;i++){    
            //         filterBtn[i].addEventListener("click",(e) => {
            //             storeProducts = document.querySelectorAll(".home-product-item");
            //             e.preventDefault();
            //             var checkIfHaveProduct = false;
            //             const filter=e.target.dataset.filter;
            //             const pagination__margin=document.querySelector(".pagination");
                
            //             storeProducts.forEach((product) => {
        
            //                 if(filter === "all"){    
        
            //                     product.parentElement.style.display="block"
            //                     checkIfHaveProduct= true;
            //                 } else{
            //                     if(product.firstElementChild.firstElementChild.innerHTML.trim().toLowerCase().indexOf(filter) !==-1){
        
            //                         product.parentElement.style.display="block"
            //                         checkIfHaveProduct= true;
            //                     }
            //                     else{
            
            //                         product.parentElement.style.display="none"
            //                     }
            //                 } 
            //             })
            //             if(checkIfHaveProduct===false){
            //                 pagination__margin.style.margin="365px 0 32px 0"
            //             }
                              
            //             else {
            //                 pagination__margin.style.margin="48px 0 32px 0"
            //             }
            //         })
            //     }
            // }
            // FILTER by Danh mục- end 
            
            //-----------------------------------------------------------------
        
            //FILTER by Sắp xếp theo - start
            
        
            //FILTER by Sắp xếp theo - end
            //-----------------------------------------------------------------
        
            // SEARCH FILTER - start
            
            
            const searchBar= document.querySelector('.header__search-btn')
            searchBar.addEventListener("click",(e) =>{
              
                e.preventDefault();
                $(".loader-wrapper").fadeIn("slow");
                testClone=[]
                const search = document.getElementById("header__search-input");
                const searchValue =search.value.toLowerCase().trim();
                const pagination__margin=document.querySelector(".pagination");
                var checkExistProduct=false;
                
                for(let i=0 ;i<productItemList.length;i++){
                    if(productItemList[i].name.trim().toLowerCase().indexOf(searchValue) !==-1){
                        testClone.push(productItemList[i])
                        checkExistProduct=true
                    }
                }
                if(checkExistProduct){  
                    reRender()
                }
                else{
                    cloneProductItemList=[]
                    reRender()
                    pagination__margin.style.margin="48px 0 32px 0"
                }
        
            })
            
            // SEARCH FILTER - end
            
           
            
            //------------------------------------------------------------------------
            // SORT PRODUCT - start
            
            // setDataPrice()
            
            function setDataPrice(){       
                for( let i of productLi){
                    const priceCurrent = i.querySelector('.home-product-item__price-current')
                    const priceOld =i.querySelector('.home-product-item__price-old')
                    const x = priceCurrent.textContent.trim().replaceAll('.','').replace('đ','').replace('₫','');
                    const y = Number(x);
                    const a = priceOld.textContent.trim().replaceAll('.','').replace('đ','').replace('₫','');
                    const b = Number(a);
                    i.setAttribute("data-price",y);
                    i.setAttribute("data-old-price",b);
                    // ar.push(i);
                }
            }
            // function sortProduct(){
            //     this.run = () =>{
            //         addEvent(); 
            //     }
            //     function addEvent(){
            //         for( i= 0 ; i< select.length; i++){
            //             select[i].addEventListener("click",(e)=>{
            //                 this.value=document.querySelector('.select-input-field').value
            //                 sortingValue();
            //             })
            //         }
            //     }
            //     function sortingValue(){
            //         if(this.value ==='mặc định'){
            //             while(productField.firstChild){
            //                 productField.removeChild(productField.firstChild);
            //             }
            //             productField.append(...ar);
            //         }
            //         if(this.value ==='thấp đến cao'){
            //             SortElem(productField,productLi,true);
            //         }
            //         if(this.value ==='cao đến thấp'){
            //             SortElem(productField,productLi,false);
            //         }
            //     }
            //     function SortElem(productField,productLi,asc){
            //         let dm, sortLi;           
            //         dm = asc ? 1 : -1;
            //         sortLi = productLi.sort((a,b) => {
            //             const ax =a.getAttribute('data-price');
            //             const bx =b.getAttribute('data-price');
            //             return ax - bx > 0 ? (1*dm) : (-1*dm);
            //         })
            //         while(productField.firstChild){
            //             productField.removeChild(productField.firstChild);
            //         }
            //         productField.append(...sortLi);
            //     }
            // }
            //new sortProduct().run();
            //sortProduct()
            // --------------------------------------------------------------------------
        
            // --------------------------------------------------------------------------
            // AUTO-CALC SALE-OFF PERCENTAGE - start
           
            autoCalcSaleOf()
            function autoCalcSaleOf(){
                for( let i = 0; i < productLi.length ; i++){
                    const ax =productLi[i].getAttribute('data-price');
                    const bx =productLi[i].getAttribute('data-old-price');
                    const saleOffPercent=Math.round((bx-ax)*100/bx)
                    productLi[i].querySelector('.home-product-item__sale-off-percent').innerHTML=saleOffPercent+'%'
                }
            }
        
        
            // AUTO-CALC SALE-OFF PERCENTAGE - end
        
            // --------------------------------------------------------------------------
        
            //PRODUCT CART - start
            function checkClickRemoveCartItem(){
                for( let i= 0 ; i < removeCartItemButton.length ; i++){
                    var button = removeCartItemButton[i]
                    button.addEventListener('click',removeCartItem)
                }
            }
            function checkClickAddCartItem(){
                for( let j= 0 ; j < addToCartButtons.length ; j++){
                    var button = addToCartButtons[j]
                    button.addEventListener("click",addToCartClicked) 
                   
                }
            }
            
            function noItemImg(){
                if(document.querySelector('.header__cart-notice').innerText==0){
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
            noItemImg()
            function resetSessionStorage(){
                var cartList = document.querySelector('.header__cart-list').innerHTML
                var cartQuantity = document.querySelector('.header__cart-notice').innerHTML
                sessionStorage.setItem('cartList',cartList)
                sessionStorage.setItem('cartQuantity',cartQuantity)
            }
            function addToCartClicked(e){
               
                var button = e.target
                var shopItem = button.parentElement.parentElement
                var title =shopItem.querySelector('.home-product-item__name').innerHTML
                var price = shopItem.querySelector('.home-product-item__price-current').innerHTML
               
                var imageSrc = shopItem.querySelector('.home-product-item__img')
                var imageUrl=getDivImgUrl(imageSrc)

                var id = shopItem.querySelector('.home-product-item__id').innerText
                
                var brand =shopItem.querySelector('.home-product-item__brand').innerText
                var origin =shopItem.querySelector('.home-product-item__origin-name').innerText

                addItemToCart(title,price,imageUrl,id,brand,origin)
                document.querySelector('.header__cart-notice').innerHTML=document.querySelector('.header__cart-list-item').childElementCount
                noItemImg()
                updateCartTotal()
                resetSessionStorage()

                
                
            }
            function addItemToCart(title,price,imageUrl,id,brand,origin){
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
                                <input class="header__cart-item-quantity" type="text" value="1" disabled="disabled"></input>
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

            // var cartQuantityArray=[]
            var cartListArray =[]
            document.querySelector('.header__navbar-user-item-alinkRecipe').addEventListener("click",sessionStorageBeforeRedirectToRecipePage)
            document.querySelector('.header__cart-view-cart').addEventListener("click",sessionStorageBeforeRedirectToRecipePage)
            
            function sessionStorageBeforeRedirectToRecipePage(){
                
                var cartNotice=document.querySelector('.header__cart-notice').innerText
                if(cartNotice =="0"){
                    alert("Giỏ hàng của bạn hiện tại đang trống!")
                    return
                }
                var userEmail = sessionStorage.getItem("userAccount")
                if(userEmail == null){
                    alert("Bạn cần phải đăng nhập trước khi vào xem giỏ hàng!")
                    return
                }
               
                var cartListElement =document.querySelectorAll('.header__cart-item')
                
                
                for(let i =0 ; i < cartListElement.length;i++){
                    
                    var id=cartListElement[i].querySelector('.header__cart-item-id').innerText
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
            
            var quantityInputs = document.querySelectorAll('.header__cart-item-quantity')
            for( let i= 0 ; i < quantityInputs.length ; i++){
                var input = quantityInputs[i]
                input.addEventListener('change',quantityChange)
            }
        
            function quantityChange(e){
                var input = e.target
                if(isNaN(input.value) || input.value<=0){
                    input.value=1
                }
                console.log(input.value)
                updateCartTotal()
                resetSessionStorage()
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

            function resetSessionStorage(){
                var cartList = document.querySelector('.header__cart-list').innerHTML
                var cartQuantity = document.querySelector('.header__cart-notice').innerHTML
                sessionStorage.setItem('cartList',cartList)
                sessionStorage.setItem('cartQuantity',cartQuantity)
            }
           
            //PRODUCT CART - end
            // --------------------------------------------------------------------------
        
            // CLICK IN TO PRODUCT  - start
            var alinkProduct=document.querySelectorAll('.home-product-item')
            redirectToProductDetail()
            function redirectToProductDetail(){
                for(let i=0 ; i< alinkProduct.length;i++){
                    alinkProduct[i].addEventListener('click',function(){

                        var id = alinkProduct[i].querySelector('.home-product-item__id').innerText
                        var name = alinkProduct[i].querySelector('.home-product-item__name').innerText
                        var oldPrice = alinkProduct[i].querySelector('.home-product-item__price-old').innerText
                        var currentPrice = alinkProduct[i].querySelector('.home-product-item__price-current').innerText
                        var sale = alinkProduct[i].querySelector('.home-product-item__sale-off-percent').innerText
                        var brand = alinkProduct[i].querySelector('.home-product-item__brand').innerText
                        var origin = alinkProduct[i].querySelector('.home-product-item__origin-name').innerText
                        var imageUrl=getDivImgUrl(alinkProduct[i].querySelector('.home-product-item__img'))

                        var cartList = document.querySelector('.header__cart-list').innerHTML
                        var cartQuantity = document.querySelector('.header__cart-notice').innerHTML
                      
                        sessionStorage.setItem('productId',id)
                        sessionStorage.setItem('cartList',cartList)
                        sessionStorage.setItem('cartQuantity',cartQuantity)
                        sessionStorage.setItem('productImgSrc',imageUrl)
                        sessionStorage.setItem('productName',name)
                        sessionStorage.setItem('productOldPrice',oldPrice)
                        sessionStorage.setItem('productCurrentPrice',currentPrice)
                        sessionStorage.setItem('productSale',sale)
                        sessionStorage.setItem('productBrand',brand)
                        sessionStorage.setItem('productOrigin',origin)

                        window.location.href="./productPage.html"
                        
                    })

                }
            }
           
            // CLICK IN TO PRODUCT  - end
        
            // --------------------------------------------------------------------------
            // UPLOAD IMG TO FIREBASE -start
            // const uploadBtn = document.querySelector('#upload')
            // uploadBtn.addEventListener('click',function(){
        
            //     const ref = firebase.storage().ref()
            //     // console.log(document.querySelector('#avatar'));
            //     const file = document.querySelector('#avatar').files[0];
            //     const metadata = {
            //     contentType: file.type
            //     };
            //     const name = file.name;
            //     const uploadIMG = ref.child(name).put(file, metadata);
            //     uploadIMG.then(snapshort => snapshort.ref.getDownloadURL())
            //     .then(url => {
            //     // data["avatar"] = url;
            //     console.log(url)
            //     })
            //     .catch(console.error)
            //     console.log("Url chua tra ve!")
            // })
            // UPLOAD IMG TO FIREBASE -end
        
            

      }
}


    // const formRegister = document

    //Cách 01 gọi Event Click button
    //Login Form Click Function
//     var btnsubmit = document.querySelector("#btn-submit-login")
//     console.log(btnsubmit);
//     btnsubmit.addEventListener('click', (e)=>{
//     e.preventDefault();
//     console.log('Da click');
//     alert('Da click');
// })

//Cách 02 gọi Event Click button
// $("#btn-submit-login").click(function()
// {
//     // console.log('Da click');
//     // alert('Da click');
//     var email = $('#login-form_email').val();
//     var password = $('#login-form_password').val();
//     var formData = {email, password};


// $.ajax({
//     url: 'http://localhost:8080/LoginAPIServlet/*',
//     type: 'POST',
//     contentType: 'application/json',
//     data: JSON.stringify(formData),
//     dataType: 'json',
//     success: function (response) {
//         console.log(response);   
        
//         const myJSON = JSON.stringify(response);
//         console.log(myJSON);

//         var str= myJSON.replace(/['"]+/g, '')
//         console.log(str);
//         //render sau khi đăng nhập thành công
//         if (myJSON != "\"false\"")
//         {
//         //tắt form Login
//         document.querySelector('.auth-form-login').classList.remove('activeBlock');
        
//         //tắt cả modal
//         document.querySelector('.modal').classList.remove('activeFlex');



//         alert(str);
//         }
//         else
//         {
//             document.querySelector('.auth-form-notification-label').classList.remove('de-active')
//             $('.auth-form-notification-label').html(`
//             Đăng nhập không hợp lệ`)
//         }
//     },
//     error: function (jqXHR) {
//         // log the error to the console
//         console.log("The following error occured: " + textStatus, errorThrown);
//     },
//     complete: function () {
//         console.log("Incomplete");
//     }
// })




// })