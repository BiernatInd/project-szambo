<template>
    <div class="header">
        <div class="nav">
            <div class="nav-left">
                <img src="@assets/logo.webp" alt="">
            </div>
            <div class="nav-right">
                <font-awesome-icon class="icon" :icon="['fa', 'user']" @click="toggleAuthMenu" />
                <div class="wrapper-menu" :class="{ active: wrapperMenuActive }" @click="toggleWrapperMenu">
                    <div class="line-menu half start"></div>
                    <div class="line-menu"></div>
                    <div class="line-menu half end"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="admin-menu" :class="{ active: wrapperMenuActive }">
        <div class="admin-menu-content">
            <router-link to="/uzytkownicy-lista">
                <div class="admin-menu-link">
                    <p>Lista użytkowników</p>
                </div>
            </router-link>
            <router-link to="#">
                <div class="admin-menu-link" @click="toggleBlog">
                    <p href="#">Blog</p>
                    <svg :class="{ active: blogChild }" class="icon" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" ref="productsIcon" @click="toggleProducts">
                        <path d="M1 0.999999L9 9L17 0.999998" stroke="#222222"/>
                    </svg>
                </div>
            </router-link>
            <router-link to="/blog-lista">
                <div class="admin-menu-link-child" v-if="blogChild">
                    <p href="#">Lista wpisów</p>
                </div>
            </router-link>
            <router-link to="/blog-dodaj-post">
                <div class="admin-menu-link-child" v-if="blogChild">
                    <p href="#">Dodawanie wpisu</p>
                </div>
            </router-link>
            <router-link to="/ustawienia-administrator">
                <div class="admin-menu-link">
                    <p href="#">Ustawienia</p>
                </div>
            </router-link>
        </div>
    </div>

    <div class="admin-auth-menu" :class="{ active: authMenuActive }">
        <div class="admin-auth-menu-content">
            <div class="admin-auth-menu-link" @click="logout">
                <a href="#">Wyloguj się</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blogChild: false,
            wrapperMenuActive: false,
            authMenuActive: false,
        }
    },
    methods: {
        toggleBlog() {
            this.blogChild = !this.blogChild;
        },
        toggleWrapperMenu() {
            this.wrapperMenuActive = !this.wrapperMenuActive;
            this.authMenuActive = false;
        },
        toggleAuthMenu() {
            this.authMenuActive = !this.authMenuActive;
            this.wrapperMenuActive = false; 
        },
        logout() {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userRole');

            this.isLoggedIn = false;

            this.$router.push({ path: '/' });
        },
    }
}
</script>

<style lang="scss" scoped>
    .header {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--shadow);
        position: fixed;
        top: 0;
        width: 100%;
        max-width: 1920px;
        background-color: var(--white);
        .nav {
            width: 95%;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .nav-left {
                img {
                    width: 200px;
                }
            }
            .nav-right {
                display: flex;
                .icon {
                    font-size: 25px;
                    cursor: pointer;
                    margin-right: 2rem;
                }
                .wrapper-menu {
             width: 25px;
             height: 25px;
             display: flex;
             flex-direction: column;
             justify-content: space-between;
             cursor: pointer;
             transition: transform 330ms ease-out;
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
    }

    .admin-menu {
        background-color: var(--white);
        margin-left: auto;
        margin-right: auto;
        transition: 0.5s;
        padding-bottom: 1rem;
        border-bottom-right-radius: 25px;
        border-bottom-left-radius: 25px;
        position: fixed;
        right: -100%;
        width: 20%;
        top: 77px;
        height: 100%;
        border-left: 1px solid var(--shadow);
        max-width: 1920px;
        z-index: 999;
        &.active {
            right: 0;
        }
        .admin-menu-content {
            width: 95%;
            margin-left: auto;
            margin-right: auto;
            a {
                text-decoration: none;
                .admin-menu-link, .admin-menu-link-child {
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                    border-radius: 25px;
                    padding-top: 1rem;
                    padding-bottom: 1rem;
                    border: 1px solid var(--shadow);
                    transition: 0.5s;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
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
                    .icon {
                        margin-right: 2rem;
                        transition: 0.5s;
                        &.active {
                            transform: rotate(180deg);
                        }
                    }
                }
            }
        }
    }

    .admin-auth-menu {
        background-color: var(--white);
        margin-left: auto;
        margin-right: auto;
        transition: 0.5s;
        padding-bottom: 1rem;
        border-bottom-right-radius: 25px;
        border-bottom-left-radius: 25px;
        position: fixed;
        right: -100%;
        width: 20%;
        top: 77px;
        max-width: 1920px;
        height: 100%;
        border-left: 1px solid var(--shadow);
        z-index: 999;
        &.active {
            right: 0;
        }
        .admin-auth-menu-content {
            width: 95%;
            margin-left: auto;
            margin-right: auto;
            .admin-auth-menu-link {
                margin-top: 1rem;
                margin-bottom: 1rem;
                border-radius: 25px;
                padding-top: 1rem;
                padding-bottom: 1rem;
                border: 1px solid var(--shadow);
                transition: 0.5s;
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
                user-select: none;
                a {
                    padding-left: 2rem;
                    color: var(--black);
                    text-decoration: none;
                    font-size: 16px;
                    font-weight: 500;
                }
                &:hover {
                    background-color: var(--grey);
                }
                .icon {
                    margin-right: 2rem;
                    transition: 0.5s;
                    &.active {
                        transform: rotate(180deg);
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1200px) {
        .header {
            .nav {
                width: 90%;
                .nav-left {
                    img {
                        width: 80%;
                    }
                }
                .nav-right {
                    .icon {
                        margin-right: 1rem;
                    }
                }
            }
        }

        .admin-menu {
            width: 100%;
            .admin-menu-content {
                width: 90%;
            }
        }
        
        .admin-auth-menu {
            width: 100%;
            .admin-auth-menu-content {
                width: 90%;
            }
        }
    }
</style>