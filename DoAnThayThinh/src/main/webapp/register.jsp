
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Basic Page Needs -->
    <meta charset="UTF-8" >
    <title>Xpoge</title>

    <!-- Mobile Specific Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link type="image/x-icon" href="template/images/fav-icon.png" rel="icon">

    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="template/css/xpoge.css">
    <link rel="stylesheet" type="text/css" href="template/css/responsive.css">
    <link href="assets/fontawesome-free-5.15.4-web/css/all.css" rel="stylesheet">

    <!-- Global site tag (gtag.js) - Google Analytics -->
<%--    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-142494086-2"></script>--%>
<%--    <script>--%>
<%--        window.dataLayer = window.dataLayer || [];--%>

<%--        function gtag() {--%>
<%--            dataLayer.push(arguments);--%>
<%--        }--%>
<%--        gtag('js', new Date());--%>

<%--        gtag('config', 'UA-142494086-2');--%>
<%--    </script>--%>
</head>

<body>
    <!-- Start preloader -->
    <div id="preloader"></div>
    <!-- End preloader -->

    <!-- Search Screen start -->
    <div class="sidebar-search-wrap">
        <div class="sidebar-table-container">
            <div class="sidebar-align-container">
                <div class="search-closer right-side"></div>
                <div class="search-container">
                    <form method="get" id="search-form">
                        <input type="text" id="s" class="search-input" name="s" placeholder="Start Searching">
                    </form>
                    <span>Search and Press Enter</span>
                </div>
            </div>
        </div>
    </div>
    <!-- Search Screen end -->

    <div class="main">
        <!-- Header start -->
        <header id="header">
            <div class="container">
                <div class="row m-0">
                    <div class="col-lg-3 col-md-4 col-4 p-0">
                        <div class="navbar-header">
                            <a class="navbar-brand page-scroll" href="index.jsp">
				                	<img alt="xpoge" src="template/images/logo.png">
				                </a>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-8 col-8 p-0">
                        <div class="right-side">
                            <button data-target=".navbar-collapse" data-toggle="collapse" class="navbar-toggle d-block d-lg-none d-xl-none" type="button"><i class="fa fa-bars"></i>
					        	</button>
                            <div class="overlay"></div>
                            <div id="menu" class="navbar-collapse collapse">
                                <ul class="nav navbar-nav">
                                    <li class="level">
                                        <a href="index.jsp" class="nav-link">Home</a>
                                    </li>
                                    <li class="level dropdown">
                                        <span class="opener plus"></span>
                                        <a href="shop.html" class="nav-link">Men</a>
                                        <div class="megamenu mobile-sub-menu">
                                            <div class="megamenu-inner-top">
                                                <ul class="sub-menu-level1">
                                                    <li class="level2 "> <a href="shop.html"><span>Men Cloths</span></a>
                                                        <ul class="sub-menu-level2">
                                                            <li class="level3"><a href="shop.html"><span>■</span>Navy Blazer</a></li>
                                                            <li class="level3"><a href="shop.html"><span>■</span>Sport Jeans</a></li>
                                                            <li class="level3"><a href="shop.html"><span>■</span>Sleeveless Shirt</a></li>
                                                            <li class="level3"><a href="shop.html"><span>■</span>Trousers</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="level2"> <a href="shop.html"><span>Men Fashion</span></a>
                                                        <ul class="sub-menu-level2 ">
                                                            <li class="level3"><a href="shop.html"><span>■</span>Purse</a></li>
                                                            <li class="level3"><a href="shop.html"><span>■</span>Sport Shoes</a></li>
                                                            <li class="level3"><a href="shop.html"><span>■</span>Wallets</a></li>
                                                            <li class="level3"><a href="shop.html"><span>■</span>Belt</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="level2"> <a href="shop.html"><span>Accessories</span></a>
                                                        <ul class="sub-menu-level2 ">
                                                            <li class="level3"><a href="shop.html"><span>■</span>Sunglasses</a></li>
                                                            <li class="level3"><a href="shop.html"><span>■</span>Pocket Watch</a></li>
                                                            <li class="level3"><a href="shop.html"><span>■</span>Gloves</a></li>
                                                            <li class="level3"><a href="shop.html"><span>■</span>Socks</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="level">
                                        <a href="shop.html" class="nav-link">Women</a>
                                    </li>
                                    <li class="level">
                                        <a href="shop.html" class="nav-link">Juniors</a>
                                    </li>
                                    <li class="level dropdown">
                                        <span class="opener plus"></span>
                                        <a href="blog-left-col.html">Blog</a>
                                        <div class="megamenu mobile-sub-menu">
                                            <div class="megamenu-inner-top">
                                                <ul class="sub-menu-level1">
                                                    <li class="level2 ">
                                                        <ul class="sub-menu-level2">
                                                            <li class="level3"><a href="blog-left-col.html"><span>■</span>Blog Left-Sidebar</a></li>
                                                            <li class="level3"><a href="blog-right-col.html"><span>■</span>Blog Right-Sidebar</a></li>
                                                            <li class="level3"><a href="blog-detail.html"><span>■</span>Singal Blog</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="level dropdown">
                                        <span class="opener plus"></span>
                                        <a href="#" class="nav-link">Pages</a>
                                        <div class="megamenu mobile-sub-menu">
                                            <div class="megamenu-inner-top">
                                                <ul class="sub-menu-level1">
                                                    <li class="level2 ">
                                                        <ul class="sub-menu-level2">
                                                            <li class="level3"><a href="contact.html"><span>■</span>Contact</a></li>
                                                            <li class="level3"><a href="checkout.html"><span>■</span>Checkout</a></li>
                                                            <li class="level3"><a href="wishlist.html"><span>■</span>Wishlist</a></li>
                                                            <li class="level3"><a href="404.html"><span>■</span>404</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="header-right-link">
                                <ul>
                                    <li class="search-box">
                                        <a href="#"><span></span></a>
                                    </li>
                                    <li class="account-icon">
                                        <a href="#"><span></span></a>
                                        <div class="header-link-dropdown account-link-dropdown">
                                            <ul class="link-dropdown-list">
                                                <li> <span class="dropdown-title">Default welcome msg!</span>
                                                    <ul>
                                                        <li><a href="login.html">Sign In</a></li>
                                                        <li><a href="register.jsp">Create an Account</a></li>
                                                    </ul>
                                                </li>
                                                <li> <span class="dropdown-title">Language :</span>
                                                    <ul>
                                                        <li><a class="active" href="#">English</a></li>
                                                        <li><a href="#">French</a></li>
                                                        <li><a href="#">German</a></li>
                                                    </ul>
                                                </li>
                                                <li> <span class="dropdown-title">Currency :</span>
                                                    <ul>
                                                        <li><a class="active" href="#">USD</a></li>
                                                        <li><a href="#">AUD</a></li>
                                                        <li><a href="#">EUR</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="cart-icon">
                                        <a href="#"> <span> <small class="cart-notification">2</small> </span> </a>
                                        <div class="cart-dropdown header-link-dropdown">
                                            <ul class="cart-list link-dropdown-list">
                                                <li> <a class="close-cart"><i class="fa fa-times-circle"></i></a>
                                                    <figure> <a href="product-page.html" class="pull-left"> <img alt="Xpoge" src="template/images/1.jpg"></a>
                                                        <figcaption> <span><a href="product-page.html">Men's Full Sleeves Collar Shirt</a></span>
                                                            <p class="cart-price">$14.99</p>
                                                            <div class="product-qty">
                                                                <label>Qty:</label>
                                                                <div class="custom-qty">
                                                                    <input type="text" name="qty" maxlength="8" value="1" title="Qty" class="input-text qty">
                                                                </div>
                                                            </div>
                                                        </figcaption>
                                                    </figure>
                                                </li>
                                                <li> <a class="close-cart"><i class="fa fa-times-circle"></i></a>
                                                    <figure> <a href="product-page.html" class="pull-left"> <img alt="Xpoge" src="template/images/2.jpg"></a>
                                                        <figcaption> <span><a href="product-page.html">Women's Cape Jacket</a></span>
                                                            <p class="cart-price">$14.99</p>
                                                            <div class="product-qty">
                                                                <label>Qty:</label>
                                                                <div class="custom-qty">
                                                                    <input type="text" name="qty" maxlength="8" value="1" title="Qty" class="input-text qty">
                                                                </div>
                                                            </div>
                                                        </figcaption>
                                                    </figure>
                                                </li>
                                            </ul>
                                            <p class="cart-sub-totle"> <span class="pull-left">Cart Subtotal</span> <span class="pull-right"><strong class="price-box">$29.98</strong></span> </p>
                                            <div class="clearfix"></div>
                                            <div class="mt-20"> <a href="cart.html" class="btn-color btn">Cart</a> <a href="checkout.html" class="btn-color btn right-side">Checkout</a> </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Header end -->

        <!-- Register contant start -->
<%--        <form id="register-form">--%>
            <div class="contant">
                <div id="banner-part" class="banner inner-banner">
                    <div class="container">
                        <div class="bread-crumb-main">
                            <h1 class="banner-title">Register</h1>
                            <div class="breadcrumb">
                                <ul class="inline">
                                    <li><a href="index.jsp">Home</a></li>
                                    <li>Register</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ptb-100">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-6 col-lg-8 col-md-8 ">




                                <form class="main-form full" id="register-form">
                                    <div class="row">
                                        <div class="col-12 mb-20">
                                            <div class="heading-part align-center">
                                                <h2 class="heading">Create account</h2>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="f-name">First Name</label>
                                                <input type="text" id="f-name"  placeholder="First Name">
                                                <div class="invalid-Message">
                                                    <span class="form-message"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="l-name">Last Name</label>
                                                <input type="text" id="l-name"  placeholder="Last Name">
                                                <div class="invalid-Message">
                                                    <span class="form-message"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="res-email">Email address</label>
                                                <input id="res-email" type="text"  placeholder="Email Address">
                                                <div class="invalid-Message">
                                                    <span class="form-message"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="res-pass">Password</label>
                                                <input id="res-pass" type="password"  placeholder="Enter your Password">
                                                <div class="invalid-Message">
                                                    <span class="form-message"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="res-re-enter-pass">Re-enter Password</label>
                                                <input id="res-re-enter-pass" type="password"  placeholder="Re-enter your Password">
                                                <div class="invalid-Message">
                                                    <span class="form-message"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="mb-30 dit w-100">
                                                <div class="check-box left-side mt-15">
<%--                                                <span>--%>
<%--					                        <input type="checkbox" name="remember_me" id="remember_me" class="checkbox">--%>
<%--					                        <label for="remember_me" class="mb-0">Remember Me</label>--%>
<%--					                      </span>--%>
                                                </div>
                                                <button name="submit" type="submit" class="btn-color right-side" id="btn-submit" onclick="validate()">Sign up</button>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <hr>
                                            <div class="new-account align-center mt-20"> <span>Already have an account with us</span>
                                                <a class="link" title="Login Here" href="login.jsp">Login Here</a> </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<%--        </form>--%>

        <!-- Register contant end -->

        <!-- Newslatter section start -->
        <section class="newsletter-section align-center ptb-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-9 col-12">
                        <div class="newsletter-title">
                            <h2 class="main_title">Sign up for Newsletter </h2>
                            <p>Wants to get latest updates! sign up for Free </p>
                        </div>
                        <div class="newsletter-input">
                            <form>
                                <div class="form-group m-0">
                                    <input type="email" placeholder="Your email address" required="">
                                </div>
                                <button type="submit" class="btn btn-color"><span class="d-none d-sm-block">Subscribe</span> <i class="fa fa-send d-block d-sm-none"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Newslatter section end -->

        <!-- Footer section start -->
        <footer class="footer-part">
            <div class="container">
                <div class="footer-top ptb-100">
                    <div class="mb_-30">
                        <div class="row">
                            <div class="col-12 col-lg-3 col-md-6">
                                <div class="footer-about mb-sm-30">
                                    <div class="footer-logo">
                                        <a href="index.jsp">
												<img src="template/images/logo.png" alt="logo">
											</a>
                                    </div>
                                    <p class="footer-p">Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh mauris sit amet nibh. Donec sodales sagittis</p>
                                </div>
                            </div>
                            <div class="col-12 col-lg-3 col-md-6">
                                <div class="footer-static-block">
                                    <span class="opener plus"></span>
                                    <h3 class="head-three">Information</h3>
                                    <ul class="footer-menu footer-block-contant">
                                        <li><a href="contact.html">Contact Us</a></li>
                                        <li><a href="javascript:void(0)">Brands</a></li>
                                        <li><a href="blog-left-col.html">Blog</a></li>
                                        <li><a href="javascript:void(0)">Returns</a></li>
                                        <li><a href="javascript:void(0)">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-12 col-lg-3 col-md-6">
                                <div class="footer-static-block">
                                    <span class="opener plus"></span>
                                    <h3 class="head-three">My Account</h3>
                                    <ul class="footer-menu footer-block-contant">
                                        <li><a href="javascript:void(0)">Order History</a></li>
                                        <li><a href="wishlist.html">Wish List</a></li>
                                        <li><a href="javascript:void(0)">Newsletter</a></li>
                                        <li><a href="javascript:void(0)">Specials</a></li>
                                        <li><a href="javascript:void(0)">Gift Certificates</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-12 col-lg-3 col-md-6">
                                <div class="footer-static-block">
                                    <span class="opener plus"></span>
                                    <h3 class="head-three">Contact us</h3>
                                    <div class="contact-box footer-block-contant">
                                        <ul>
                                            <li>
                                                <div class="contact-thumb">
                                                    <img src="template/images/address-icon.svg" alt="xpoge">
                                                </div>
                                                <div class="contact-box-detail">
                                                    <p>869 Lexington Ave, New York, NY 10065, USA</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="contact-thumb">
                                                    <img src="template/images/phone-icon.svg" alt="xpoge">
                                                </div>
                                                <div class="contact-box-detail">
                                                    <p>+91 123 456 789 0</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="contact-thumb">
                                                    <img src="template/images/mail-icon.svg" alt="xpoge">
                                                </div>
                                                <div class="contact-box-detail">
                                                    <p><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="6b131b040c0e2b03025a595845080406">[email&#160;protected]</a></p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom align-center">
                    <div class="row">
                        <div class="col-12">
                            <div class="w-100">
                                <p class="mb-0">© Xpoge all Rights Reserverd theme by <a href="https://TemplatesCoder.com/" target="_blank" title="TemplatesCoder">TemplatesCoder</a></p>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="social-media">
                                <ul>
                                    <li><a href="javascript:void(0)"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="javascript:void(0)"><i class="fa fa-instagram"></i></a></li>
                                    <li><a href="javascript:void(0)"><i class="fa fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- Footer section end -->
    </div>


<%--    NHỮNG THẺ SCRIPT NẰM Ở ĐÂY--%>


    <script data-cfasync="false" src="template/js/email-decode.min.js"></script>
    <script src="template/js/jquery-3.4.1.min.js"></script>
    <script src="template/js/custom.js"></script>
    <script src="template/js/validation.js.js"></script>
    <script src="template/js/register.js"></script>
<%--    <script>--%>
<%--        Validator({--%>
<%--            form:'#register-form',--%>
<%--            formGroupSelector:'form-group',--%>
<%--            errorSelector:['.form-message','.warning-Message'],--%>
<%--            rules:[--%>
<%--                Validator.isRequired('#f-name','Please enter your first name!'),--%>
<%--                Validator.isRequired('#l-name','Please enter your last  name !'),--%>
<%--                Validator.isRequired('#res-pass','Please enter your password!'),--%>
<%--                Validator.isRequired('#res-email','Please enter your email!'),--%>
<%--                Validator.isRequired('#res-re-enter-pass','Please enter your password again!'),--%>
<%--                Validator.minLength('#res-pass',6,'please enter at least 6 characters'),--%>
<%--                Validator.isConfirmed('#res-re-enter-pass',function(){--%>
<%--                    return document.querySelector('#register-form #res-pass').value;--%>
<%--                }, 'Re-enter password is incorrect'),--%>
<%--                Validator.isEmail('#res-email','This must be an email!'),--%>
<%--            ]--%>
<%--            ,--%>
<%--            // onSubmit:function(data){ console.log(data); }--%>
<%--        });--%>
<%--    </script>--%>
</body>

</html>