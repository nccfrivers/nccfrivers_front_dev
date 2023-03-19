

class NavHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav>
                    <div class="nav_container container">
                        <div class="logo">
                            <img class="img1" src="./img/nccf_logo.png" alt="NCCF logo">
                            <img class="img2" src="./img/nysc_logo.png" alt="NYSC logo" srcset="">
                        </div>
                        <!-- toggle btn -->
                        <div class="nav-toggle" id="nav-toggle">
                            <img class="menu" src="./icon/Menu2.svg" alt="image">
                        </div>
                        <div class="nav_menu_item" id="nav_menu_item">
                            <div class="nav_menu">
                                <ul class="menu">
                                    <li class="menu_list"><a href="/index.html" class="menu_links active">HOME</a></li>
                                    <li class="menu_list"><a href="/about.html" class="menu_links">ABOUT US</a></li>
                                    <li class="menu_list"><a href="/executive.html" class="menu_links">EXCOS</a></li>
                                    <li class="menu_list"><a href="/units.html" class="menu_links">UNITS</a></li>
                                    <li class="menu_list"><a href="/zone.html" class="menu_links">ZONES</a></li>
                                    
                                    <li class="menu_list"><a href="/contact.html" class="menu_links">CONTACT US</a></li>
                                </ul>
                                <div class="donate">
                                    <a href="/donate.html" class="donate_btn">DONATE</a>
                                </div>
                            </div>
                            <div class="nav-close" id="nav-close">
                                <img src="./icon/close.svg" alt="image">
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
    `
    }
}

customElements.define('nav-header', NavHeader)

class NavFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <section class="footer_container container">
            <div class="title">
                <div class="logo">
                    <img class="img1" src="./img/nccf_logo.png" alt="image">
                    <img class="img2" src="./img/nysc_logo.png" alt="image" srcset="">
                </div>
                <div class="text"><h1>NCCF RIVERS STATE CHAPTER</h1></div>
            </div>
            <div class="footer_links">
                <ul class="menu">
                    <li class="menu_list"><a href="/index.html" class="menu_links active">HOME</a></li>
                    <li class="menu_list"><a href="/about.html" class="menu_links">ABOUT US</a></li>
                    <li class="menu_list"><a href="/executive.html" class="menu_links">EXCOS</a></li>
                    <li class="menu_list"><a href="/units.html" class="menu_links">UNITS</a></li>
                    <li class="menu_list"><a href="/zone.html" class="menu_links">ZONES</a></li>
                    
                    <li class="menu_list"><a href="/contact.html" class="menu_links">CONTACT US</a></li>
                    
                </ul>
                <div class="contact">
                    <p class="cont_us">CONTACT US</p>
                    <p>Email: info@nccfrivers.org</p>
                    <p>Phone: (+234) 803 631 8551</p>
                    <p>Address: 206A, Ordinance Road, Trans-Amadi, Port Harcourt</p>
                </div>
                <div class="socials">
                <a href="https://www.instagram.com/nccf_rivers/"> <div class="social_link">
                       <img src="./img/instagram_colored.png" alt="image" srcset="">
                        <p>Instagram</p>
                        </div>
                        </a>
                        <a href="https://www.facebook.com/NCCFRIVERS"> <div class="social_link">
                    <img src="./img/facebook_colored.png" alt="image" srcset=""> 
                    <p>Facebook</p>
                    </div>
                    </a>
                    <a href="https://www.youtube.com/channel/UCWcwxylJ_jGzSX-w9X2-8Wg"> <div class="social_link">
                        <img src="./img/youtube-icon_colored.png" alt="image" srcset=""> 
                        <p>YouTube</p>
                        </div>
                        </a>
                </div>
            </div>

            <span class="footer_line"></span>

            <p class="reserved"><span>&copy</span> NCCF Rivers State Chapter | All Rights Reserved </p>
        </section>
    </footer>
    `
    }
}

customElements.define('nav-footer', NavFooter)