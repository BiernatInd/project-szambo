<template>
    <div class="top-bar">
        <div class="top-bar-content">
            <div class="top-bar-left">
                <div class="top-bar-icon">
                    <font-awesome-icon class="icon" :icon="['fab', 'facebook']" />
                    <p>Szambo Betonowe Na Lata</p>
                </div>
            </div>
            <div class="top-bar-right">
                <div class="top-bar-icon">
                    <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
                    <p>biuro.szambonalata@gmail.com</p>
                </div>
                <div class="top-bar-icon">
                    <font-awesome-icon class="icon" :icon="['fas', 'phone']" />
                    <p>+48 724 746 553</p>
                </div>
            </div>
        </div>
    </div>
    <div class="header" :class="{ 'active': isScrolled }">
        <div class="nav">
            <div class="nav-logo">
                <router-link to="/">
                    <img src="@assets/logo.webp" alt="">
                </router-link>
            </div>
            <div class="nav-menu">
                <div class="nav-menu-link">
                    <router-link to="/" class="underline">Strona główna</router-link>
                </div>
                <div class="nav-menu-link">
                    <router-link to="/piwniczki-ogrodowe" class="underline">Piwniczki ogrodowe</router-link>
                </div>
                <div class="nav-menu-link">
                    <router-link to="/oferta" class="underline">Oferta</router-link>
                </div>
                <div class="nav-menu-link">
                    <router-link to="/cennik" class="underline">Cennik</router-link>
                </div>
                <div class="nav-menu-link">
                    <router-link to="/o-naszej-firmie" class="underline">O naszej firmie</router-link>
                </div>
                <div class="nav-menu-link">
                    <router-link to="/blog" class="underline">Blog</router-link>
                </div>
                <div class="nav-menu-link">
                    <router-link to="/kontakt" class="underline">Kontakt</router-link>
                </div>
            </div>
            <div class="wrapper-menu" @click="toggleMenu" :class="{ 'active': isMenuActive }">
                <div class="line-menu half start"></div>
                <div class="line-menu"></div>
                <div class="line-menu half end"></div>
            </div>
        </div>
    </div>

    <div class="main-menu" :class="{ 'active': isMenuActive }">
        <div class="main-menu-content">
            <router-link to="/">                
                <div class="main-menu-link">
                    <p>Strona główna</p>
                </div>
            </router-link>
            <router-link to="/piwniczki-ogrodowe">
                <div class="main-menu-link">
                    <p>Piwniczki ogrodowe</p>
                </div>
            </router-link>
            <router-link to="/oferta">
                <div class="main-menu-link">
                    <p>Oferta</p>
                </div>
            </router-link>
            <router-link to="/cennik">
                <div class="main-menu-link">
                    <p>Cennik</p>
                </div>
            </router-link>
            <router-link to="/o-naszej-firmie">
                <div class="main-menu-link">
                    <p>O naszej firmie</p>
                </div>
            </router-link>
            <router-link to="/blog">
                <div class="main-menu-link">
                    <p>Blog</p>
                </div>
            </router-link>
            <router-link to="/kontakt">
                <div class="main-menu-link">
                    <p>Kontakt</p>
                </div>
            </router-link>
            
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            isMenuActive: false,
            isScrolled: false,
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuActive = !this.isMenuActive;
        },
        handleScroll() {
            this.isScrolled = window.scrollY > 0;
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
}
</script>

<style lang="scss" scoped>
    .top-bar {
        width: 100%;
        border-bottom: 1px solid var(--shadow);
        position: fixed;
        max-width: 1920px;
        background-color: var(--white);
        height: 60px;
        display: flex;
        .top-bar-content {
            width: 95%;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .top-bar-left {
                .top-bar-icon {
                    display: flex;
                    .icon {
                        margin-right: 1rem;
                    }
                    p {
                        font-weight: 500;
                    }
                }
            }
            .top-bar-right {
                display: flex;
                .top-bar-icon:not(:last-child) {
                    .icon {
                        margin-right: 1rem;
                    }
                    p {
                        margin-right: 1rem;
                    }
                }
                .top-bar-icon:last-child {
                    .icon {
                        margin-right: 1rem;
                    }
                }
                .top-bar-icon {
                    display: flex;
                    p {
                        font-weight: 500;
                    }
                }
            }
        }
    }

    .header {
        position: fixed;
        top: 60px;
        background-color: var(--white);
        width: 100%;
        max-width: 1920px;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--shadow);
        transition: 0.5s;
        z-index: 999;
        &.active {
            top: 0;
        }
        .nav {
            width: 95%;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .nav-menu {
                display: flex;
                align-items: center;
                .nav-menu-link:not(:last-child) {
                    margin-right: 2rem;
                }
                .nav-menu-link {
                    a {
                        font-size: 18px;
                        text-decoration: none;
                        color: var(--black);
                        font-weight: 500;
                        transition: 0.5s;
                        &:hover {
                            color: var(--blue);
                        }
                        &.underline {
                            position: relative;
                            display: inline-block;
                            &::after {
                                content: "";
                            position: absolute;
                            width: 100%;
                            height: 2px;
                            transform: scale(0);
                            bottom: -5px;
                            left: 0;
                            background-color: var(--blue);
                            transform-origin: bottom right;
                            transition: transform 0.25s ease-out;
                            }
                            &:hover::after {
                                transform: scaleX(1);
                                transform-origin: bottom left;
                            }
                        }
                    }
                }
            }
            .wrapper-menu {
             width: 25px;
             height: 25px;
             display: flex;
             flex-direction: column;
             justify-content: space-between;
             cursor: pointer;
             transition: transform 330ms ease-out;
             display: none;
           }
   
           .wrapper-menu.active {
             transform: rotate(-45deg);  
           }
   
           .line-menu {
             border-radius: 5px;
             width: 100%;
             height: 2px;
           }
   
           .line-menu:nth-child(1) {
             background-color: var(--black);
           }
           .line-menu:nth-child(2) {
             background-color: var(--black);
           }
           .line-menu:nth-child(3) {
             background-color: var(--black);
           }
   
           .line-menu.half {
             width: 50%;
           }
   
           .line-menu.start {
             transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
             transform-origin: right;
           }
   
           .active .line-menu.start {
             transform: rotate(-90deg) translateX(1px);
           }
   
           .line-menu.end {
             align-self: flex-end;
             transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
             transform-origin: left;
           }
   
           .active .line-menu.end {
             transform: rotate(-90deg) translateX(-1px);
           }
        }
    }

    .main-menu {
        position: fixed;
        top: 9.438rem;
        background-color: var(--white);
        width: 100%;
        max-width: 1920px;
        margin-left: auto;
        margin-right: auto;
        left: -100%;
        transition: 0.5s;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
        &.active {
            left: 0;
        }
        .main-menu-content {
            width: 95%;
            margin-left: auto;
            margin-right: auto;
            a {
                text-decoration: none;
                .main-menu-link {
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                    border-radius: 25px;
                    padding-top: 1rem;
                    padding-bottom: 1rem;
                    border: 1px solid var(--shadow);
                    transition: 0.5s;
                    user-select: none;
                    p {
                        padding-left: 2rem;
                        color: var(--black);
                        text-decoration: none;
                        font-size: 16px;
                        font-weight: 500;
                    }
                    &:hover {
                        background-color: var(--grey);
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1200px) {
        .top-bar {
            display: none;
        }

        .header {
            top: 0;
            .nav {
                width: 90%;
                .nav-logo {
                    img {
                        width: 200px;
                    }
                }
                .nav-menu {
                    display: none;
                }
                .wrapper-menu {
                    display: flex;
                }
            }
        }

        .main-menu {
            top: 4.78rem;
            .main-menu-content {
                width: 90%;
            }
        }
    }
</style>