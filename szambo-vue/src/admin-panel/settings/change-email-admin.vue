<template>
    <AdminHeader />
    <div class="home">
        <div class="home-content">
            <div class="home-form">
                <h1>Zmiana adresu E-mail</h1>
                <div class="home-input">
                    <input type="e-mail" v-model="newEmail" placeholder="Nowy adres E-mail">
                    <input type="password" v-model="password" placeholder="Hasło">
                </div>
                <div class="home-button">
                    <button class="home-btn" @click="changeEmail">Zmień adres E-mail</button>
                </div>
                <div class="home-validation">
                    <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
                </div>
            </div>
        </div>
    </div>
    <AdminFooter />
</template>

<script>
import AdminHeader from '@admin-components/admin-header.vue'
import AdminFooter from '@admin-components/admin-footer.vue'
import axios from 'axios' 

export default {
    components: {
        AdminHeader,
        AdminFooter,
    },
    data() {
        return {
            newEmail: '',
            password: '',
            validationMessage: '',
        }
    },
        methods: {
            changeEmail() {

                this.validationMessage = '';
                if (!this.newEmail || !this.password) {
                    this.validationMessage = ('Wszystkie pola muszą zostać wypełnione.');
                    return;
                }
            
                const userId = this.$route.params.id;
                axios.put(`http://localhost:8000/api/change-email-admin/${userId}`, {
                    new_email: this.newEmail, 
                    password: this.password
                })
                .then(response => {
                    alert("Adres E-mail został pomyślnie zmieniony.")
                    this.clearFields()
                    this.$router.push('/ustawienia-konta');
                })
                .catch(error => {
                    console.error(error.response.data.error);
                
                    if (error.response.status === 401) {
                        this.validationMessage = ('Wprowadź poprawne hasło.'); 
                    }
                });
            },
            checkUserRole() {
                const userRole = localStorage.getItem('userRole'); 
                
                if (userRole !== 'admin') {
                    this.$router.push('/logowanie');
                }
            },
            clearFields() {
                this.newEmail = '';
                this.password = '';
            },
        },
        mounted() {
            this.checkUserRole();
        }
}
</script>

<style lang="scss" scoped>
.home {
    padding-top: 6.813rem;
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
        .home-content {
                width: 90%;
                .home-form {
                    width: 100%;
                }
            }
    }
}
</style>