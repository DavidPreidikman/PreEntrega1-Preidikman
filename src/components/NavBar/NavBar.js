import bulma from 'bulma/css/bulma.css'
import CartWidget from '../CartWidget/CartWidget'
import icon from './icon/icon.png'

const NavBar = () => {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item">
                    <img src={icon} alt="goat-icon" width="30" height="45"/>
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                     <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                        ALL PRODUCTS
                    </a>

                    <a class="navbar-item">
                        STORES
                    </a>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                             MORE
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                ABOUT US
                            </a>
                            <a class="navbar-item">
                                CONTACT
                            </a>
                            <hr class="navbar-divider"/>
                            <a class="navbar-item">
                                OUR BRANDS
                            </a>
                         </div>
                     </div>
                 </div>

                 <div class="navbar-end">
                    <div class="navbar-item">
                         <div class="buttons">
                            <a class="navbar-item">
                                <CartWidget />
                            </a>
                            <a class="button is-black">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light">
                                Log in
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar