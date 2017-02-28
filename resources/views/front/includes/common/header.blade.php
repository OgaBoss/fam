<header>
    <div class="tag-line">
        <div class="container">
            <div class="row">
                <div class="header_logo col-xs-12 col-sm-5 col-md-7">
                    <a href="index.html"><img src="images/logo.png" alt="Logo"></a>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-3">
                    <div class="header-address">
								<span class="address_icon image-icons">
									<img src="images/address.png" alt="address icon">
								</span>
                        <span class="normal-title">123 QuickSale Street</span>
                        <span class="bold-title">Chicago, IL 60606</span>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-3 col-md-2">
                    <div class="header-call-us-now">
								<span class="image-icons">
									<img src="images/call.png" alt="call icon">
								</span>
                        <span class="normal-title">Call us now</span>
                        <span class="bold-title">215-123-4567</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="home-page-two slider">
        <div id="sliderCarousel" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#sliderCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#sliderCarousel" data-slide-to="1"></li>
                <li data-target="#sliderCarousel" data-slide-to="2"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img src="images/slider1.jpg" alt="Slider1">
                    <div class="nivo-caption-inner">
                        <div class="container">
                            <h1>
                                <span class="slider-left-headeing">Fully Furnished &amp; mortgage available </span>
                            </h1>
                            <a href="#" class="caption-learn-more">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img src="images/slider2.jpg" alt="Slider2">
                </div>
                <div class="item">
                    <img src="images/slider3.jpg" alt="Slider3">

                </div>
            </div>
        </div>
        <div class="main-menu">
            <nav class="navbar navbar-default">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav nav_link">
                            <li class="active"><a href="/" class="">Home</a></li>
                            <li><a href="#" class="">Gallery</a></li>
                            <li><a href="#" class="">About Us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#" class="schedule-visit-btn">SCHEDULE A VISIT</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        <div class="schedule-visit-form-container">
            <div class="container">
                <div class="schedule-visit-form-inner">
                    <span class="first-line">SCHEDULE A VISIT TO</span>
                    <span class="second-line">YOUR DREAM HOUSE</span>
                    <form class="shedule-visit" name="contact_form" method="post" action="functions.php" id="agnet-contact-form">
                        <input type="text" name="full_name" placeholder="Full Name" required/>
                        <input type="tel" name="phone_number" placeholder="Phone Numebr" required/>
                        <input type="email" name="email_address" placeholder="Email" required/>
                        <textarea placeholder="Message" name="message" required></textarea>
                        <input type="hidden" name="shedule_visit" value="shedule_visit"/>
                        <input type="submit" name="sendmessage" class="send-message" value="SUBMIT NOW" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</header>
