function header(logoimg) {
    document.write(` <header>
            <nav>
                <div class="logo">
                    <img src="/Png/${logoimg}.png" alt="pizza"/>
                    <h2>Foody</h2>
                </div>
                <ul>
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="#feed_page">PAGE</a></li>
                    <li><a href="#dish">MENU</a></li>
                    <li><a href="#gallery">GALLERY</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
            <div class="heading">
                <h1>Choose Best Food</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, minus neque nostrum delectus eius maxime expedita.
                </p>
                <button>Book a table</button>
            </div>
        </header>`);
}

function discover(profile_img,dis_img) {
    document.write(`<section class="discover">
            <div class="discover_text">
                <h1>Discover</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt, dignissimos!
                </p>
                <div class="dis_profile">
                    <img
                        src="/Images/People/${profile_img}.jpg"
                        alt="abdul hasan"
                        width="60px"
                    />
                    <div class="data">
                        <h4>ABDUL HASAN</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div class="discover_img">
                <img src="/Images/Discover/${dis_img}.png" alt="discover image" />
            </div>
        </section>`);
}

function feed(img1,img2,img3) {
    document.write(`<section class="feed_page" id="feed_page">
            <div class="navbar">
                <ul>
                    <li><a href="#">All</a></li>
                    <li><a href="#">Vine & Drinks</a></li>
                    <li><a href="#">Dessert & Shakes</a></li>
                    <li><a href="#">Fish & Sea Fod</a></li>
                    <li><a href="#">Meat & Meals</a></li>
                    <li><a href="#">Salads & Lettuces</a></li>
                </ul>
            </div>
            <div class="feed">
                <img src="/Images/Feed/${img1}.jpg" alt="feed1" />
                <img src="/Images/Feed/${img2}.jpg" alt="feed2" class="blur_img" />
                <img src="/Images/Feed/${img3}.jpg" alt="feed3" />
                <div class="fee_txt">
                    <h2>Chicken Roast</h2>
                    <h4>Meat & Meal</h4>
                </div>
            </div>
        </section>`);
}

function meals(img) {
    document.write(
        `<div class="meal_box" > <img width='70px' src = 'Images/Dish/${img}.jpg' alt="meal"> <div class='meal_name'> <h4>CHINESS EGG CAKE </h4> <p>Chiness/ Mustard/ Maynnise </p></div> <div class='price'><h3>$9.4</h3></div></div> `
    );
}

function reservation() {
    document.write(`<section class="reservation_page">
            <h1>Make a Reservation</h1>
            <div class="form_box">
                <input type="date" placeholder="Date" />
                <input type="time" placeholder="Time" />
                <input type="number" placeholder="Person" />
                <button>Find Table</button>
            </div>
        </section>`);
}

function card(img, name) {
    document.write(
        `<div class='card'> <div class='card_profile'> <img src='Images/People/${img}.jpg' alt='profile' ></div> <h4>${name}</h4><p>Chief Co Founder</p> <div class='social_icons'><i class="fa-brands fa-facebook" style="color: #0561ff;"></i><i class="fa-brands fa-instagram" style="color: #ff0000;"></i><i class="fa-brands fa-twitter" style="color: #005eff;"></i><i class="fa-brands fa-behance" style="color: #ff0000;"></i></div> </div>`
    );
}

function subscribe() {
    document.write(`<section class="subscribe_page">
            <h1>SUBSCRIBE NOW</h1>
            <p>This help us</p>
            <div class="input_btn">
                <input type="text" placeholder="Enter Your Email " />
                <button>
                    Subscribe <i class="fa-regular fa-paper-plane"></i>
                </button>
            </div>
            <div class="icons">
                <i class="fa-brands fa-facebook" style="color: #0561ff"></i>
                <i class="fa-brands fa-instagram" style="color: #ff0000"></i>
                <i class="fa-brands fa-twitter" style="color: #005eff"></i>
                <i class="fa-brands fa-behance" style="color: #ff0000"></i>
            </div>
        </section>`);
}


function footer(){
    document.write(`<footer>
            <div class="footer_icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-behance"></i>
            </div>
            <p>Copyright &copy 2023 themseleved all right reserved</p>
            <div class="footer_details">
                <div class="get_touch">
                    <h2>Get In touch</h2>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <br />
                    <textarea
                        name="texarea"
                        id="textarea"
                        cols="23"
                        rows="2"
                        placeholder="Write Message"
                    ></textarea>
                    <br />
                    <button>Send Message</button>
                </div>
                <div class="spa_info" id="contact">
                    <p class="pera_heading">contact with us</p>
                    <h2>Spa info</h2>
                    <div class="address">
                        <i
                            class="fa-solid fa-location-dot"
                            style="color: #ffffff"
                        ></i>
                        <p>Address : Suthari, Ghaziabad Uttar Pradesh 201206</p>
                    </div>
                    <div class="phone">
                        <i class="fa-solid fa-phone" style="color: #ffffff"></i>
                        <p>+91 9568705781</p>
                    </div>

                    <div class="email">
                        <i
                            class="fa-solid fa-paper-plane"
                            style="color: #ffffff"
                        ></i>
                        <p>codebyamit@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>`);
}