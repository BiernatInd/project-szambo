<template>
    <MainHeader />
        <div class="home">
            <div class="home-content">
                <div class="home-form">
                    <h1>Resetowanie hasła</h1>
                    <div class="home-input">
                        <input type="password" v-model="password" placeholder="Nowe hasło">
                        <input type="password" v-model="confirmPassword" placeholder="Powtórz nowe hasło">
                    </div>
                    <div class="home-button">
                        <button class="home-btn" @click="resetPassword">Zresetuj hasło</button>
                    </div>
                    <div class="home-validation">
                        <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
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
                password: '',
                confirmPassword: '',
                validationMessage: '',
                token: null,
            };
        },
        methods: {
        resetPassword() {

            this.validationMessage = '';

            if (!this.password || !this.confirmPassword) {
                this.validationMessage = ('Wszysktie pola muszą zostać wypełnione.');
                return;
            }

            const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordRegex.test(this.password)) {
                this.validationMessage = 'Hasło musi mieć co najmniej 8 znaków, zawierać dużą literę, liczbę i jeden znak specjalny.';
                return;
            }

            if (this.password !== this.confirmPassword) {
                this.validationMessage = ('Hasła nie są takie same');
                return;
            }

            if (!this.token) {
                this.validationMessage = ('Nieprawidłowy token');
                return;
            }

            axios.post(`https://szambonalata.pl/server/api/reset-password/${this.token}`, {
                password: this.password
            })
            .then(response => {
                alert(response.data.message);
                this.$router.push('/logowanie');
            })
            .catch(error => {
                alert('Wystąpił błąd: ' + error.response.data.message);
            });
        }
    },
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
                        margin-top: 1rem;
                        color: var(--red)
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