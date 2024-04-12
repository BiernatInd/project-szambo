<template>
    <MainHeader />
        <div class="home">
            <div class="home-content">
                <div class="home-form">
                    <h1>Odzyskiwanie hasła</h1>
                    <div class="home-input">
                        <input type="email" v-model="email" placeholder="Adres E-mail">
                    </div>
                    <div class="home-button">
                        <button class="home-btn" @click="recoverPassword">Wyślij link do resetowania hasła</button>
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
            email: '',
            validationMessage: '',
        }
    },
    methods: {
        async recoverPassword() {

            this.validationMessage = '';

            if (!this.email.trim()) {
                this.validationMessage = ('Pole musi zostać wypełnione.');
                return;
            }

            try {
                const response = await axios.post('https://szambonalata.pl/server/api/recover-password', {
                    email: this.email,
                });

                alert('E-mail z linkiem do resetowania hasła został wysłany.');

                this.$router.push('/logowanie');

            } catch (error) {
                this.validationMessage = ('Nieprawidłowy adres E-mail');
                console.error(error.response.data);
            }
        },
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