if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready()
}

function ready() {
   
        var productId = sessionStorage.getItem("productId");
        var productImgSrc = sessionStorage.getItem("productImgSrc");
        var productName = sessionStorage.getItem("productName");
        var productOldPrice = sessionStorage.getItem("productOldPrice");
        var productCurrentPrice = sessionStorage.getItem("productCurrentPrice");
        var productSale = sessionStorage.getItem("productSale");
        var productBrand = sessionStorage.getItem("productBrand");
        var productOrigin = sessionStorage.getItem("productOrigin");
        
        document.querySelector('.product-detail-common-id').innerText=productId
        document.querySelector('.product-picture__background').style.backgroundImage = `url(${productImgSrc})`;
        document.querySelector('.header-link-brand').innerText=productBrand
        document.querySelector('.header-link-detail').innerText=productName
        document.querySelector('.product-detail__description').innerText=productName
        document.querySelector('.product-detail__price-oldPrice').innerText=productOldPrice
        document.querySelector('.product-detail__price-currentPrice').innerText=productCurrentPrice
        document.querySelector('.product-detail__price-Sale').innerText=productSale
        document.querySelector('.product-detail-common__list-item--brand').innerText=productBrand
        document.querySelector('.product-detail-common__list-item--origin').innerText=productOrigin

        document.querySelector('.header__search-input').disabled=true
    
    if(productImgSrc == null){
        window.location.href="/errorPage.html"
    }

    
}
