<template>
    <MainHeader />
    <div class="contact">
        <div class="contact-content">
            <div class="contact-heading">
                <h2>Kontakt</h2>
                <p>Skontaktuj sie z nami za pomocą formularza kontaktowego</p>
            </div>
            <div class="contact-main">
                <div class="contact-form">
                    <div class="contact-left">
                        <div class="contact-left-content">
                            <h3>Informacje</h3>
                            <p><span>Nazwa firmy:</span> SzamboNaLata</p>
                            <p><span>Kontakt telefoniczny:</span> +48 724 746 553</p>
                            <p><span>E-mail:</span> szambonalata@gmail.com</p>
                        </div>
                    </div>
                    <div class="contact-right">
                        <div class="contact-right-content">
                            <h3>Napisz do nas wiadomość</h3>
                            <div class="input-flex">
                                <input type="text" placeholder="Imię" v-model="formData.name">
                                <input type="text" placeholder="Nazwisko" v-model="formData.surname">
                            </div>
                            <div class="input-flex">
                                <input type="email" placeholder="E-mail" v-model="formData.email">
                                <input type="number" placeholder="Numer telefonu" v-model="formData.phone">
                            </div>
                            <div class="input-flex">
                                <textarea placeholder="Wiadomość i inne ważne informacje" v-model="formData.message"></textarea>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" v-model="formData.acceptTerms">
                                <p>Akceptuję politykę prywatności. (Wymagane)</p>
                            </div>
                            <div class="contact-buttons">
                                <button class="contact-btn" @click="sendForm">Wyślij wiadomość</button>
                                <button class="contact-btn" @click="clearFields">Zresetuj</button>
                            </div>
                            <div class="home-validation">
                                <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
                            </div>
                        </div>
                    </div>
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
            formData: {
                name: '',
                surname: '',
                email: '',
                phone: '',
                message: '',
                acceptTerms: false, 
            },
            validationMessage: '',
        }
    },
    methods: {
        sendForm() {

this.validationMessage = '';

    if (!this.formData.name || !this.formData.surname || !this.formData.email || !this.formData.phone || !this.formData.message) {
        this.validationMessage = ('Wszystkie pola muszą zostać wypełnione.')
    }

    if (this.formData.acceptTerms) {
        axios.post('http://localhost:8000/api/send-form', this.formData)
        .then(response => {
            alert("Wiadomość została wysłana. Wkrótce się z tobą skontaktujemy!");
          this.clearFields();
        })
        .catch(error => {
          console.error(error);
        });
    } else {
        this.validationMessage = ("Musisz zaakceptować politykę prywatności i regulamin sklepu.");
    }
},
clearFields() {
    this.formData.name = '';
    this.formData.surname = '';
    this.formData.email = '';
    this.formData.phone = '';
    this.formData.message = '';
    this.formData.acceptTerms = '';
}
    }
}
</script>


<style lang="scss" scoped>
.contact {
    padding-top: 9.438rem;
    padding-bottom: 2rem;
    .contact-content {
        width: 95%;
        margin-left: auto;
        margin-right: auto;
        .contact-heading {
            padding-top: 1rem;
            padding-bottom: 1rem;
            text-align: center;
            border-bottom: 1px solid var(--shadow);
            h2 {
                font-size: 32px;
                color: var(--black);
                text-transform: uppercase;
                font-weight: 600;
                margin-bottom: 1rem;
            }
            p {
                font-size: 24px;
                color: var(--black);
            }
        }
        .contact-main {
            padding-top: 2rem;
            .contact-form {
                width: 80%;
                margin-left: auto;
                margin-right: auto;
                border: 1px solid var(--shadow);
                border-radius: 25px;
                display: flex;
                justify-content: space-between;
                .contact-left {
                    width: 50%;
                    padding: 2rem;
                    border-right: 1px solid var(--blue);
                    background: url('@assets/logo-kontakt.webp');
                    background-repeat: no-repeat;
                    background-position: center;
                    .contact-left-content {
                        h3 {
                            margin-bottom: 2rem;
                            font-size: 24px;
                            font-weight: 600;
                        }
                        p:not(:last-child) {
                            margin-bottom: 2rem;
                        }
                        p {
                            font-size: 20px;
                            span {
                                font-weight: 600;
                                color: var(--blue);
                            }
                        }
                    }
                }
                .contact-right {
                    width: 50%;
                    padding: 2rem;
                    .contact-right-content {
                        h3 {
                            margin-bottom: 2rem;
                            font-size: 24px;
                            font-weight: 600;
                        }
                        .input-flex {
                            display: flex;
                            justify-content: space-between;
                            margin-bottom: 2rem;
                            input {
                                width: 48%;
                                height: 40px;
                                border: none;
                                border-bottom: 1px solid var(--blue);
                                font-size: 16px;
                            }
                            textarea {
                                width: 100%;
                                resize: none;
                                border: none;
                                border-bottom: 1px solid var(--blue);
                                height: 150px;
                                font-size: 16px;
                            }
                        }
                        .checkbox {
                            display: flex;
                            margin-bottom: 2rem;
                            input {
                                width: 15px;
                                cursor: pointer;
                                margin-right: 1rem;
                            }
                        }
                        .contact-buttons {
                            .contact-btn {
                                height: 40px;
                                padding-left: 3rem;
                                padding-right: 3rem;
                                border-radius: 10px;
                                background-color: var(--blue);
                                border: 2px solid var(--blue);
                                color: var(--white);
                                transition: 0.5s;
                                cursor: pointer;
                                font-size: 16px;
                                &:hover {
                                    background-color: var(--white);
                                    color: var(--blue);
                                }
                            }
                            .contact-btn:not(:last-child) {
                                margin-right: 1rem;
                            }
                        }
                        .home-validation {
                                p {
                                    margin-top: 2rem;
                                    color: var(--red)
                                }
                            }
                    }
                }
            }
        }
    }
}


@media screen and (max-width: 1200px) {
    .contact {
        padding-top: 4.75rem;
            .contact-content {
                width: 90%;
                .contact-heading {
                    h2 {
                        font-size: 24px;
                    }
                    p {
                        font-size: 20px;
                    }
                }
                .contact-main {
                    .contact-form {
                        flex-direction: column;
                        width: 100%;
                        .contact-left {
                            width: 100%;
                            border-right: 0;
                            border-bottom: 1px solid var(--blue);
                            padding: 1.5rem;
                            .contact-left-content {
                                h3 {
                                    font-size: 20px;
                                }
                                p {
                                    font-size: 16px;
                                }
                            }
                        }
                        .contact-right {
                            width: 100%;
                            padding: 1.5rem;
                            .contact-right-content {
                                h3 {
                                    font-size: 20px;
                                }
                                .input-flex {
                                    margin-bottom: 0;
                                    flex-direction: column;
                                    input {
                                        width: 100%;
                                        margin-bottom: 1rem;
                                    }
                                    textarea {
                                        height: 150px;
                                        margin-bottom: 1rem;
                                    }
                                }
                                .contact-buttons {
                                    display: flex;
                                    flex-direction: column;
                                    .contact-btn {
                                        width: 100%;
                                    }
                                    .contact-btn:not(:last-child) {
                                        margin-bottom: 1rem;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
}
</style>