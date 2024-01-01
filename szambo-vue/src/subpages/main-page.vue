<template>
<MainHeader />
    <div class="home">
        <div class="home-content">
            <div class="home-left">
                <h1><span>Szamba betonowe - </span>Trwałe i wytrzymałe zbiorniki na ścieki i deszczówkę</h1>
                <p>Szamba betonowe - dlaczego warto zdecydować się na betonowy zbiornik na ścieki? Trwałość, wytrzymałość i odporność na uszkodzenia mechaniczne</p>
                <p>Ze względu na ich trwałość, wytrzymałość i wysoką odporność na uszkodzenia mechaniczne.</p>
                <p>Gwarancja na szczelność</p>
                <div class="home-buttons">
                    <router-link to="/cennik">
                        <button class="home-btn">Zamów zbiornik</button>
                    </router-link>
                    <router-link to="/kontakt">
                        <button class="home-btn">Skontaktuj się znami</button>
                    </router-link>
                </div>
            </div>
            <div class="home-right">
                <img src="@assets/1.webp" alt="">
            </div>
        </div>
    </div>
    <div class="offer">
        <div class="offer-content">
            <div class="offer-heading">
                <h2>Nasza oferta</h2>
            </div>
            <div class="offer-main">
                <div class="offer-left">
                    <p>Jesteśmy firmą specjalizującą się w produkcji i dystrybucji szamb betonowych na terenie całej Polski. Z przyjemnością przedstawiamy naszą ofertę, która z pewnością zaspokoi Państwa potrzeby.</p>
                    <p>Zakupiony u nas zbiornik na szambo zostanie dostarczony własnym transportem, który nazywamy "transportem łączonym".</p>
                    <p>Dzięki temu, że łączymy zbiorniki dla kilku klientów w podobnych lokalizacjach, możemy zaproponować Państwu najkorzystniejszą cenę transportu. Oferujemy ten rodzaj transportu na terenie całej Polski.</p>
                </div>
                <div class="offer-right">
                    <img src="@assets/2.webp" alt="">
                </div>
            </div>
            <div class="offer-main">
                <div class="offer-left">
                    <img src="@assets/3.webp" alt="">
                </div>
                <div class="offer-right">
                    <p>Nasza firma działa na skalę całego kraju i posiada odziały w każdym województwie. Dzięki temu możemy zaoferować Państwu usługi najwyższej jakości na terenie całego kraju. Nasze szamba betonowe są wytwarzane samodzielnie, bez udziału podwykonawców, co gwarantuje ich solidność i trwałość.</p>
                    <p>Zakupiony u nas zbiornik na szambo zostanie dostarczony własnym transportem, który nazywamy "transportem łączonym". Dzięki temu, że łączymy zbiorniki dla kilku klientów w podobnych lokalizacjach, możemy zaproponować Państwu najkorzystniejszą cenę transportu. Oferujemy ten rodzaj transportu na terenie całej Polski.</p>
                    <p>Zachęcamy do skorzystania z naszej oferty i zapewniamy, że zadowolenie naszych klientów jest dla nas priorytetem.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="price">
        <div class="price-content">
            <div class="price-box-container">
                <div class="price-box">
                    <div class="price-box-content">
                        <h3>Szambo 4m<sup>3</sup> (4.000l)</h3>
                        <p>Realizacja od 1-3 dni roboczych</p>
                        <p>Najlepsza cena</p>
                        <p>Najlepsza jakość</p>
                        <p>Najlepsze zbiorniki na rynku!</p>
                        <h3>Wymiary:</h3>
                        <p>250 x 200 x 100</p>
                        <div class="price-button">
                            <router-link to="/kontakt">
                                <button class="price-btn">Zapytaj o szczegóły</button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="price-box">
                    <div class="price-box-content">
                        <h3>Szambo 9m<sup>3</sup> (9.000l)</h3>
                        <p>Realizacja od 1-3 dni roboczych</p>
                        <p>Najlepsza cena</p>
                        <p>Najlepsza jakość</p>
                        <p>Najlepsze zbiorniki na rynku!</p>
                        <h3>Wymiary:</h3>
                        <p>300 x 240 x 150</p>
                        <div class="price-button">
                            <router-link to="/kontakt">
                                <button class="price-btn">Zapytaj o szczegóły</button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="price-box">
                    <div class="price-box-content">
                        <h3>Szambo 12m<sup>3</sup> (12.000l)</h3>
                        <p>Realizacja od 1-3 dni roboczych</p>
                        <p>Najlepsza cena</p>
                        <p>Najlepsza jakość</p>
                        <p>Najlepsze zbiorniki na rynku!</p>
                        <h3>Wymiary:</h3>
                        <p>295 x 240 x 200</p>
                        <div class="price-button">
                            <router-link to="/kontakt">
                                <button class="price-btn">Zapytaj o szczegóły</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="opinion">
        <div class="opinion-content">
            <div class="opinion-heading">
                <h2>Opinie naszych klientów</h2>
            </div>
            <div class="opinion-main">
                <div class="opinion-box">
                    <div class="opinion-top">
                      <div class="opinion-left">
                        <img src="@assets/4.webp" alt="">
                      </div>
                      <div class="opinion-right">
                        <h3>Mariusz Kowalski</h3>
                        <h4>Styczeń, 02, 2023</h4>
                      </div>
                    </div>
                    <div class="opinion-mid">
                      <font-awesome-icon class="icon" :icon="['fa', 'star']" />
                      <font-awesome-icon class="icon" :icon="['fa', 'star']" />
                      <font-awesome-icon class="icon" :icon="['fa', 'star']" />
                      <font-awesome-icon class="icon" :icon="['fa', 'star']" />
                      <font-awesome-icon class="icon" :icon="['fa', 'star']" />
                    </div>
                    <div class="opinion-bottom">
                      <p>Jestem bardzo zadowolony z mojego zakupu szamba betonowego! Produkt wydaje się być bardzo solidny i dobrze wykonany, co daje mi pewność, że będzie służył przez wiele lat bezawaryjnej pracy.</p>
                    </div>
                </div>
                <div class="opinion-box">
                    <div class="opinion-top">
                      <div class="opinion-left">
                        <img src="@assets/5.webp" alt="">
                      </div>
                      <div class="opinion-right">
                        <h3>Marlena Maj</h3>
                        <h4>Marzec, 21, 2023</h4>
                      </div>
                    </div>
                    <div class="opinion-mid">
                      <font-awesome-icon class="icon" :icon="['fa', 'star']" />
                      <font-awesome-icon class="icon" :icon="['fa', 'star']" />
                      <font-awesome-icon class="icon" :icon="['fa', 'star']" />
                      <font-awesome-icon class="icon" :icon="['fa', 'star']" />
                      <font-awesome-icon class="icon" :icon="['fa', 'star']" />
                    </div>
                    <div class="opinion-bottom">
                      <p>Jestem bardzo zadowolona z zakupionego u Państwa szamba! Jako klient, otrzymał<a href="mailto:"></a> profesjonalną i skuteczną obsługę, a proces zakupu i instalacji szamba przebiegł bez żadnych problemów.</p>
                    </div>
                </div>
                <div class="opinion-box">
                  <div class="opinion-top">
                    <div class="opinion-left">
                        <img src="@assets/6.webp" alt="">
                    </div>
                    <div class="opinion-right">
                      <h3>Maciej Otręba</h3>
                      <h4>Maj, 12, 2023</h4>
                    </div>
                  </div>
                  <div class="opinion-mid">
                    <font-awesome-icon class="icon" :icon="['fa', 'star']" />
                    <font-awesome-icon class="icon" :icon="['fa', 'star']" />
                    <font-awesome-icon class="icon" :icon="['fa', 'star']" />
                    <font-awesome-icon class="icon" :icon="['fa', 'star']" />
                    <font-awesome-icon class="icon" :icon="['fa', 'star']" />
                  </div>
                  <div class="opinion-bottom">
                    <p>Jestem bardzo zadowolony z zakupionego u Państwa szamba! Proces instalacji przebiegł szybko i sprawnie, a szambo jest dokładnie takie, jakie oczekiwałem. Polecam, solidna i rzetelna firma.</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <div class="faq">
        <div class="faq-content">
            <div class="faq-heading">
                <h2>Faq</h2>
                <p>Znajdź odpowiedzi, których potrzebujesz</p>
            </div>
            <div class="faq-box-container">
                <div class="faq-box" v-for="(faq, index) in faqList" :key="index">
                    <div class="faq-box-top" @click="toggleFaq(index)" :class="{ 'active': faq.active }">
                        <p>{{ faq.question }}</p>
                        <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{ 'active': faq.active }">
                            <path d="M31 0.999999L16 16L0.999998 1" stroke="#33363F" stroke-width="2"/>
                        </svg>

                    </div>
                    <div class="faq-box-bottom" :class="{ 'active': faq.active }">
                        <p>{{ faq.answer }}</p>
                        <p>{{ faq.answer2 }}</p>
                        <p>{{ faq.answer3 }}</p>
                        <p>{{ faq.answer4 }}</p>
                        <p>{{ faq.answer5 }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
                                <p>Akceptuję <router-link to="/polityka-prywatnosci">politykę prywatności.</router-link> (Wymagane)</p>
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
    <div class="cookie-policy" v-if="!cookieAccepted">
        <div class="cookie-policy-content">
            <p>Strona korzysta z ciasteczek aby świadczyć usługi na najwyższym poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.</p>
            <router-link to="/polityka-prywatnosci"><a href="#">Polityka prywatności</a></router-link>
            <button @click="acceptCookies">Akceptuj</button>
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
            faqList: [
            {
                question: "Ile kosztuje zbiornik na szambo betonowe?",
                answer: "Koszt szamba jest zależny od jego wielkości.",
                active: false,
            },      
            {
              question: "Czy jest możliwość zamówienia kompleksowej usługi z transportem i wykopem?",
              answer: "Oferujemy również transport, oraz wykop miejsca na szambo, umieszczenie szamba w wykopie jest w gratisie naszych usług.",
              active: false,
            },
            {
              question: "Na jaką skale działamy?",
              answer: "Na rynku jesteśmy od 4 lat i mamy 98% zadowolonych klientów. Posiadamy oddziały w każdym mieście!",
              active: false,
            },
            {
              question: "Jak wybrać odpowiednie szambo?",
              answer: "Pomagamy z wyborem szamba oraz wybieramy najbardziej optymalne do ilości osób zamieszkanych w rezydencji.",
              active: false,
            },
            {
              question: "Jak wygląda płatność?",
              answer: "W pierwszym etapie, klient musi zakupić szambo w naszej firmie. Po udanej transakcji nasza firma przechodzi do wykopu oraz montażu i po wykonanej usłudze, finalizuje całą usługę.",
              active: false,
            },
        ],
        formData: {
                name: '',
                surname: '',
                email: '',
                phone: '',
                message: '',
                acceptTerms: false, 
            },
            validationMessage: '',
            cookieAccepted: false,
        }
    },
    methods: {
        toggleFaq(index) {
            this.faqList[index].active = !this.faqList[index].active;
        },
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
            },
            acceptCookies() {
                this.cookieAccepted = true;
            },
    },
    mounted() {
        this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    this.userRole = localStorage.getItem('userRole') || '';

    this.userName = localStorage.getItem('userName') || '';

    }
}
</script>

<style lang="scss" scoped>
    .home {
        padding-top: 13.438rem;
        padding-bottom: 4rem;
        .home-content {
            width: 95%;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .home-left {
                width: 48%;
                h1 {
                    font-size: 32px;
                    color: var(--black);
                    margin-bottom: 2rem;
                    font-weight: 600;
                    span {
                      color: var(--blue);
                    }
                }
                p {
                    font-size: 24px;
                    margin-bottom: 2rem;
                    font-weight: 400;
                    color: var(--black);
                }
                a:not(:last-child) {
                    margin-right: 1rem;

                }
                a {
                    .home-btn {
                        border-top-left-radius: 25px;
                        border-top-right-radius: 25px;
                        padding: 0.4rem 2rem;
                        background-color: var(--blue);
                        color: var(--white);
                        border: 1px solid var(--blue);
                        font-size: 20px;
                        cursor: pointer;
                        transition: 0.5s;
                        &:hover {
                          color: var(--blue);
                          background-color: var(--white);
                          border-top-left-radius: 0px;
                          border-top-right-radius: 0px;
                          border-bottom-left-radius: 25px;
                          border-bottom-right-radius: 25px;
                        }
                    }
                }
            }
            .home-right {
                width: 48%;
                img {
                    display: block;
                    width: 80%;
                    margin: 0 auto;
                }
            }
        }
    }

    .offer {
        .offer-content {
            width: 95%;
            margin-left: auto;
            margin-right: auto;
            .offer-heading {
                padding-top: 1rem;
                padding-bottom: 1rem;
                text-align: center;
                border-bottom: 1px solid var(--shadow);
                border-top: 1px solid var(--shadow);
                h2 {
                    font-size: 32px;
                    color: var(--black);
                    text-transform: uppercase;
                    font-weight: 600;
                }
            }
            .offer-main:not(:last-child) {
                padding-top: 2rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .offer-left {
                    width: 70%;
                    p {
                      font-size: 24px;
                      color: var(--black);
                      margin-bottom: 2rem;
                    }
                }
                .offer-right {
                  width: 25%;
                  img {
                    display: block;
                    width: 100%;
                  }
                }
            }
            .offer-main:last-child {
                padding-top: 2rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .offer-left {
                    width: 25%;
                    img {
                        display: block;
                        width: 100%;
                    }
                }
                .offer-right {
                    width: 70%;
                    p {
                      font-size: 24px;
                      color: var(--black);
                      margin-bottom: 2rem;
                    }
                }
            }
        }
    }

    .price {
        padding-top: 2rem;
        padding-bottom: 2rem;
        .price-content {
            width: 95%;
            margin-left: auto;
            margin-right: auto;
            .price-box-container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .price-box {
                    width: 350px;
                    border-radius: 25px;
                    border: 1px solid var(--shadow);
                    padding-top: 2rem;
                    padding-bottom: 2rem;
                    .price-box-content {
                        width: 70%;
                        margin-left: auto;
                        margin-right: auto;
                        h3 {
                            font-size: 24px;
                            font-weight: 600;
                            margin-bottom: 2rem;
                            text-align: center;
                        }
                        p {
                            font-size: 20px;
                            margin-bottom: 2rem;
                            text-align: center;
                        }
                        .price-button {
                            display: flex;
                            justify-content: center;
                            a {
                                .price-btn {
                                    background-color: var(--blue);
                                    padding: 0.4rem 2rem;
                                    border-radius: 10px;
                                    font-size: 16px;
                                    color: var(--white);
                                    border: 2px solid var(--blue);
                                    transition: 0.5s;
                                    cursor: pointer;
                                    &:hover {
                                        background-color: var(--white);
                                        color: var(--blue);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .opinion {
        .opinion-content {
            width: 95%;
            margin-left: auto;
            margin-right: auto;
            .opinion-heading {
                                padding-top: 1rem;
                padding-bottom: 1rem;
                text-align: center;
                border-bottom: 1px solid var(--shadow);
                border-top: 1px solid var(--shadow);
                h2 {
                    font-size: 32px;
                    color: var(--black);
                    text-transform: uppercase;
                    font-weight: 600;
                }
            }
            .opinion-main {
                display: flex;
      width: 95%;
      margin-left: auto;
      margin-right: auto;
      justify-content: space-between;
      .opinion-box {
        width: 480px;
        margin-top: 2rem;
        margin-bottom: 2rem;
        box-shadow: 2px 2px 10px 2px var(--grey);
        border-radius: 15px;
        padding-bottom: 2rem;
        .opinion-top {
          display: flex;
          align-items: center;
          width: 90%;
          margin-left: auto;
          margin-right: auto;
          margin-top: 1rem;
          margin-bottom: 1rem;
          .opinion-left {
            margin-right: 1rem;
          }
          .opinion-right {
            h3 {
              font-size: 20px;
              font-weight: 600;
              margin-bottom: 0.5rem;
            }
            h4 {
              font-size: 20px;
              font-weight: 300;
            }
          }
        }
        .opinion-mid {
          width: 90%;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 1rem;
          .icon {
            margin-right: 0.2rem;
            color: var(--yellow);
          }
        }
        .opinion-bottom {
          width: 90%;
          margin-left: auto;
          margin-right: auto;
          p {
            font-size: 16px;
            font-weight: 300;
          }
        }
      }
            }
        }
    }

    .faq {
        padding-bottom: 2rem;
        .faq-content {
            width: 95%;
            margin-left: auto;
            margin-right: auto;
            .faq-heading {
                padding-top: 1rem;
                padding-bottom: 1rem;
                text-align: center;
                border-bottom: 1px solid var(--shadow);
                border-top: 1px solid var(--shadow);
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
            .faq-box-container {
                margin-top: 2rem;
                .faq-box {
                    width: 80%;
                    margin-left: auto;
                    margin-right: auto;
                    border-radius: 10px;
                    border: 1px solid var(--shadow);
                    background-color: var(--white);
                    .faq-box-top {
                        display: flex;
                        justify-content: space-between;
                        padding-top: 1rem;
                        padding-bottom: 1rem;
                        width: 95%;
                        margin-left: auto;
                        margin-right: auto;
                        cursor: pointer;
                        align-items: center;
                        svg {
                            transition: 0.5s;
                            user-select: none;
                            z-index: 0;
                        }
                        p {
                            font-size: 24px;
                            font-weight: 500;
                        }
                        &.active {
                            svg {
                                transform: rotate(180deg);
                            }
                        }
                    }
                    .faq-box-bottom {
                        border-top: 1px solid var(--black);
                        width: 95%;
                        margin-left: auto;
                        margin-right: auto;
                        padding-top: 1rem;
                        display: none;
                        p {
                            font-size: 20px;
                            margin-bottom: 1rem;
                            font-weight: 400;
                        }
                        &.active {
                            display: block;
                        }
                    }
                }
                .faq-box:not(:last-child) {
                    margin-bottom: 2rem;
                }
            }
        }
    }
    .contact {
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
                border-top: 1px solid var(--shadow);
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

    .cookie-policy {
        position: fixed;
        bottom: 0;
        width: 100%;
        max-width: 1920px;
        background-color: var(--white);
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-top: 1px solid var(--shadow);
        .cookie-policy-content {
            width: 95%;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            p {
                font-weight: 400;
            }
            a {
                color: var(--black);
                text-underline-offset: 4px;
                transition: 0.5s;
                font-weight: 400;
                &:hover {
                    color: var(--blue);
                }
            }
            button {
                padding: 0.2rem 2rem;
                background-color: var(--blue);
                color: var(--white);
                border-radius: 25px;
                transition: 0.5s;
                cursor: pointer;
                color: var(--white);
                font-weight: 400;
                border: 2px solid var(--blue);
                font-size: 14px;
                &:hover {
                    background-color: var(--wjote);
                    border: 2px solid var(--blue);
                    color: var(--blue);
                }
            }
        }
    }

    @media screen and (max-width: 1200px) {
        .home {
            padding-top: 6.75rem;
            padding-bottom: 2rem;
            .home-content {
                width: 90%;
                flex-direction: column;
                .home-left {
                    width: 100%;
                    margin-bottom: 2rem;
                }
                .home-right {
                    width: 100%;
                    img {
                        width: 80%;
                    }
                }
            }
        }
        .offer {
            .offer-content {
                width: 90%;
                .offer-main:not(:last-child) {
                    flex-direction: column;
                    .offer-left {
                        width: 100%;
                    }
                    .offer-right {
                        width: 100%;
                        img {
                            width: 80%;
                            display: block;
                            margin: 0 auto;
                        }
                    }
                }
                .offer-main:last-child {
                    flex-direction: column;
                    .offer-left {
                        width: 100%;
                        img {
                            width: 80%;
                            display: block;
                            margin: 0 auto;
                        }
                    }
                    .offer-right {
                        width: 100%;
                        padding-top: 2rem;
                    }
                }
            }
        }
        .price {
            .price-content {
                width: 90%;
                .price-box-container {
                    flex-direction: column;
                    .price-box:not(:last-child) {
                        margin-bottom: 1rem;
                    }
                    .price-box {
                        width: 100%;
                    }
                }
            }
        }
        .opinion {
            .opinion-content {
                width: 90%;
                .opinion-heading {
                    h2 {
                        font-size: 24px;
                    }
                }
                .opinion-main {
                    flex-direction: column;
                    .opinion-box {
                        width: 100%;
                    }
                }
            }
        }
        .faq {
            .faq-content {
                width: 90%;
                .faq-heading {
                    h2 {
                        font-size: 24px;
                    }
                    p {
                        font-size: 20px;
                    }
                }
                .faq-box-container {
                    .faq-box {
                        width: 100%;
                        .faq-box-top {
                            p {
                                font-size: 16px;
                                width: 80%;
                            }
                            svg {
                                width: 20px;
                            }
                        }
                        .faq-box-bottom {
                            p {
                                font-size: 16px;
                            }
                        }
                    }
                }
            }
        }
        .contact {
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
        .cookie-policy {
            .cookie-policy-content {
                flex-direction: column;
                p {
                    margin-bottom: 1rem;
                    text-align: center;
                }
                a {
                    margin-bottom: 1rem;
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        .home {
            .home-content {
                .home-left {
                    h1 {
                        font-size: 24px;
                        margin-bottom: 1rem;
                    }
                    p {
                        font-size: 20px;
                        margin-bottom: 1rem;
                    }
                    .home-buttons {
                        .home-btn:not(:last-child) {
                            margin-bottom: 1rem;
                        }
                        .home-btn {
                            width: 100%;
                            font-size: 16px;
                        }
                    }
                }
                .home-right {
                    width: 100%;
                    img {
                        width: 80%;
                    }
                }
            }
        }

        .offer {
            .offer-content {
                width: 90%;
                .offer-heading {
                    h2 {
                        font-size: 24px;
                    }
                }
                .offer-main:not(:last-child) {
                    .offer-left {
                        p {
                            font-size: 20px;
                            margin-bottom: 1rem;
                        }
                    }
                }
                .offer-main:last-child {
                    padding-top: 1rem;
                    .offer-right {
                        padding-top: 1rem;
                        p {
                            font-size: 20px;
                            margin-bottom: 1rem;
                        }
                    }
                }
            }
        }

        .opinion {
            .opinion-content {
                .opinion-main {
                    padding-top: 2rem;
                    .opinion-box {
                        margin-bottom: 2rem;
                        margin-top: 0;
                        .opinion-top {
                            width: 100%;
                            flex-direction: column;
                            .opinion-left {
                                margin-right: 0;
                            }
                            .opinion-right {
                                h3 {
                                    text-align: center;
                                }
                            }
          }
          .opinion-mid {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .opinion-bottom {
            width: 100%;
            p {
              text-align: center;
              margin-left: 0.5rem;
              margin-right: 0.5rem;
            }
          }
        }
                }
            }
        }
    }
</style>