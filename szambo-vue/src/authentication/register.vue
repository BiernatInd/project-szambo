<template>
    <MainHeader />
        <div class="home">
            <div class="home-content">
                <div class="home-form">
                    <h1>Rejestracja</h1>
                    <div class="home-input">
                        <input v-model="user_name" type="text" placeholder="Nazwa użytkownika" required>
                        <input v-model="email" type="email" placeholder="Adres E-mail" required>
                        <input v-model="password" type="password" placeholder="Hasło" required>
                        <input v-model="password_confirmation" type="password" placeholder="Powtórz hasło" required>
                    </div>
                    <div class="home-button">
                        <button class="home-btn" @click="register">Zarejestruj się</button>
                    </div>
                    <div class="home-validation">
                        <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
                    </div>
                    <div class="home-links">
                        <router-link to="/logowanie">Masz już konto?</router-link>
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
            user_name: '',
            email: '',
            password: '',
            password_confirmation: '',
            validationMessage: '',
        }
    },
    methods: {
        async register() {

            this.validationMessage = '';

            if (!this.user_name || !this.email || !this.password || !this.password_confirmation) {
                this.validationMessage = 'Wszystkie pola muszą zostać wypełnione.';
                return;
            }

            const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordRegex.test(this.password)) {
                this.validationMessage = 'Hasło musi mieć co najmniej 8 znaków, zawierać dużą literę, liczbę i jeden znak specjalny.';
                return;
            }

            if (this.password !== this.password_confirmation) {
                this.validationMessage = 'Hasła do siebie nie pasują.';
                return;
            }

            try {
                const response = await axios.post('http://localhost:8000/api/register', {
                    user_name: this.user_name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                });
                this.$router.push('/logowanie');
            } catch (error) {
                console.error(error.response.data);
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