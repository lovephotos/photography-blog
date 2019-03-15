Vue.component('header-template', {
    template: `
    <div>

        <div class="site-mobile-menu">
            <div class="site-mobile-menu-header">
            <div class="site-mobile-menu-close mt-3">
                <span class="icon-close2 js-menu-toggle"></span>
            </div>
            </div>
            <div class="site-mobile-menu-body"></div>
        </div>
        



        <header class="site-navbar py-3" role="banner">

            <div class="container-fluid">
            <div class="row align-items-center">
                
                <div class="col-6 col-xl-2" data-aos="fade-down">
                <h1 class="mb-0"><router-link :to="getRealPath('/')" class="text-black h2 mb-0">Photon</router-link></h1>
                </div>
                <div class="col-10 col-md-8 d-none d-xl-block" data-aos="fade-down">
                <nav class="site-navigation position-relative text-right text-lg-center" role="navigation">

                    <ul class="site-menu js-clone-nav mx-auto d-none d-lg-block">
                    <li class="active"><router-link :to="getRealPath('/')">Home</router-link></li>
                    <li class="has-children">
                        <router-link :to="getRealPath('/single')">Gallery</router-link>
                        <ul class="dropdown">
                        <li><a href="#">Nature</a></li>
                        <li><a href="#">Portrait</a></li>
                        <li><a href="#">People</a></li>
                        <li><a href="#">Architecture</a></li>
                        <li><a href="#">Animals</a></li>
                        <li><a href="#">Sports</a></li>
                        <li><a href="#">Travel</a></li>
                        <li class="has-children">
                            <a href="#">Sub Menu</a>
                            <ul class="dropdown">
                            <li><a href="#">Menu One</a></li>
                            <li><a href="#">Menu Two</a></li>
                            <li><a href="#">Menu Three</a></li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    <li><router-link :to="getRealPath('/services')">Services</router-link></li>
                    <li><router-link :to="getRealPath('/about')">About</router-link></li>
                    <li><router-link :to="getRealPath('/contact')">Contact</router-link></li>
                    </ul>
                </nav>
                </div>

                <div class="col-6 col-xl-2 text-right" data-aos="fade-down">
                <div class="d-none d-xl-inline-block">
                    <ul class="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0" data-class="social">
                    <li>
                        <a href="#" class="pl-0 pr-3"><span class="icon-facebook"></span></a>
                    </li>
                    <li>
                        <a href="#" class="pl-3 pr-3"><span class="icon-twitter"></span></a>
                    </li>
                    <li>
                        <a href="#" class="pl-3 pr-3"><span class="icon-instagram"></span></a>
                    </li>
                    <li>
                        <a href="#" class="pl-3 pr-3"><span class="icon-youtube-play"></span></a>
                    </li>
                    </ul>
                </div>

                <div class="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style="position: relative; top: 3px;"><a href="#" class="site-menu-toggle js-menu-toggle text-black"><span class="icon-menu h3"></span></a></div>

                </div>

            </div>
            </div>
            
        </header>
    </div>
    `,

    data() {
        return {
            Globals
        }
    },

    methods: {
        getRealPath(url) {
            return `${this.Globals.leadingURL}${url}`;
        }
    }
});
