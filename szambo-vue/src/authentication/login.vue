<template>
    <MainHeader />
        <div class="home">
            <div class="home-content">
                <div class="home-form">
                    <h1>Logowanie</h1>
                    <div class="home-input">
                        <input type="email" v-model="email" placeholder="Adres E-mail">
                        <input type="password" v-model="password" placeholder="Hasło">
                    </div>
                    <div class="home-validation">
                        <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
                    </div>
                    <div class="home-button">
                        <button class="home-btn" @click="login">Zaloguj się</button>
                    </div>
                    <div class="home-links">
                        <router-link to="/odzyskiwanie-hasla">Zapomniałeś hasła?</router-link>
                        <router-link to="/rejestracja">Utwórz konto</router-link>
                    </div>
                </div>
            </div>
        </div>
    <MainFooter />
</template>

<script>
import MainHeader from '@main-components/main-header.vue'
import MainFooter from '@main-components/main-footer.vue'
import axios from 'axios'

export default {
    components: {
        MainHeader,
        MainFooter
    },
    data() {
            return {
                email: '',
                password: '',
                userRole: '',
                userName: '',
                validationMessage: '',
            };
        },
        methods: {
            async login() {

                this.validationMessage = '';

            if (!this.email || !this.password) {
                this.validationMessage = 'Wszystkie pola muszą zostać wypełnione.';
                return;
            }

            try {
                const response = await axios.post('https://szambonalata.pl/server/api/login', {
                email: this.email,
                user_name: this.user_name,
                password: this.password,
            });

            localStorage.setItem('isLoggedIn', 'true');

            localStorage.setItem('userRole', response.data.user.role);
            localStorage.setItem('userName', response.data.user.user_name)

            if (response.data.user.role === 'admin') {
                this.$router.push('/panel-administratora');
                } else if (response.data.user.role === 'user') {
                    this.$router.push('/')
                }
            } catch (error) {
                this.validationMessage = ("Nieprawidłowe dane logowania. Spróbuj ponownie.")
                console.error('Błąd logowania:', error.response.data);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .home {
        padding-top: 11.438rem;
        padding-bottom: 2rem;
        .home-content {
            width: 95%;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            justify-content: center;
            .home-form {
                width: 25%;
                border-radius: 10px;
                padding: 1rem;
                border: 1px solid var(--shadow);
                h1 {
                    font-size: 32px;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }
                .home-input {
                    display: flex;
                    flex-direction: column;
                    input {
                        margin-bottom: 1rem;
                        height: 40px;
                        border: none;
                        border-bottom: 1px solid var(--blue);
                        font-size: 16px;
                    }
                }
                .home-button {
                    margin-bottom: 1rem;
                    .home-btn {
                        height: 40px;
                        width: 100%;
                        background-color: var(--blue);
                        font-size: 16px;
                        color: var(--white);
                        border: 2px solid var(--blue);
                        transition: 0.5s;
                        cursor: pointer;
                        border-radius: 10px;
                        &:hover {
                            background-color: var(--white);
                            color: var(--blue);
                        }
                    }
                }
                .home-validation {
                    p {
                        margin-bottom: 1rem;
                        color: var(--red)
                    }
                }
                .home-links {
                    display: flex;
                    flex-direction: column;
                    a:not(:last-child) {
                        margin-bottom: 1rem;
                    }
                    a {
                        font-size: 16px;
                        color: var(--black);
                        text-underline-offset: 4px;
                        transition: 0.5s;
                        &:hover {
                            color: var(--blue);
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1200px) {
        .home {
            padding-top: 6.75rem;
            .home-content {
                width: 90%;
                .home-form {
                    width: 100%;
                }
            }
        }
    }
</style>