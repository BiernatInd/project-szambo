<template>
    <MainHeader />
    <div class="home">
        <div class="home-content">
            <div class="home-heading">
                <h1><span>Zapomnij o problemach z odpadami - </span>Sprawdź naszą ofertę szamb betonowych o najwyższej jakości!</h1>
            </div>
            <div class="home-main-first">
                <div class="home-left">
                    <p>Oferujemy wysokiej jakości szamba betonowe, idealne do gromadzenia i magazynowania odpadów komunalnych oraz innych cieczy i substancji płynnych. Nasze szamba wykonane są z betonu najwyższej jakości, co gwarantuje trwałość i odporność na uszkodzenia mechaniczne oraz działanie czynników atmosferycznych.</p>
                </div>
                <div class="home-right">
                    <img src="@assets/8.webp" alt="">
                </div>
            </div>
            <div class="home-main-second">
                <div class="home-left">
                    <img src="@assets/9.webp" alt="">
                </div>
                <div class="home-right">
                    <p>Oferujemy szamba o różnych pojemnościach, dostosowane do indywidualnych potrzeb klientów. Nasze produkty spełniają najwyższe standardy jakościowe i są wyposażone w odpowiednie przepusty i komory, co ułatwia proces przetwarzania odpadów.</p>
                </div>
            </div>
            <div class="home-main-first">
                <div class="home-left">
                    <p>Wysoka jakość naszych produktów idzie w parze z konkurencyjnymi cenami. Zapewniamy atrakcyjne rabaty dla klientów, którzy zamawiają większe ilości szamb. Ponadto, nasz zespół specjalistów dba o to, aby każde szambo spełniało najwyższe standardy jakościowe.</p>
                </div>
                <div class="home-right">
                    <img src="@assets/10.webp" alt="">
                </div>
            </div>
            <div class="home-main-second">
                <div class="home-left">
                    <img src="@assets/11.webp" alt="">
                </div>
                <div class="home-right">
                    <p>Dodatkowo, oferujemy również usługi związane z instalacją szamb oraz ich transportem na miejsce. Nasz zespół specjalistów zapewnia szybką i bezpieczną instalację, co daje naszym klientom pełne zadowolenie i gwarancję długotrwałego użytkowania szamba.</p>
                </div>
            </div>
            <div class="home-main-first">
                <div class="home-left">
                    <p>Zapewniamy również obsługę posprzedażową, która stanowi integralną część naszej oferty. Naszym celem jest zapewnić naszym klientom kompleksową opiekę, aby nasze produkty służyły im przez wiele lat bezawaryjnie i niezawodnie.</p>
                </div>
                <div class="home-right">
                    <img src="@assets/12.webp" alt="">
                </div>
            </div>
            <div class="home-main-second">
                <div class="home-left">
                    <img src="@assets/13.webp" alt="">
                </div>
                <div class="home-right">
                    <p>Jeśli szukasz solidnego i wytrzymałego szamba betonowego, skontaktuj się z nami już dziś. Nasi eksperci pomogą Ci wybrać odpowiednią pojemność i dostarczą szambo na wskazane przez Ciebie miejsce w krótkim czasie.</p>
                </div>
            </div>
        </div>
    </div>
    <MainFooter />
</template> 

<script>
import MainHeader from '@main-components/main-header.vue'
import MainFooter from '@main-components/main-footer.vue'

export default {
    components: {
        MainHeader,
        MainFooter
    }
}
</script>

<style lang="scss" scoped>
    .home {
        padding-top: 9.438rem;
        .home-content {
            width: 95%;
            margin-left: auto;
            margin-right: auto;
            .home-heading {
                padding-top: 1rem;
                padding-bottom: 1rem;
                text-align: center;
                border-bottom: 1px solid var(--shadow);
                h1 {
                    width: 80%;
                    margin-right: auto;
                    margin-left: auto;
                    font-size: 32px;
                    color: var(--black);
                    font-weight: 600;
                    span {
                        color: var(--blue);
                    }
                }
            }
            .home-main-first {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-top: 2rem;
                padding-bottom: 2rem;
                .home-left {
                    width: 60%;
                    p {
                        font-size: 24px;
                    }
                }
                .home-right {
                    width: 30%;
                    img {
                        width: 60%;
                        display: block;
                    }
                }
            }
            .home-main-second {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-top: 2rem;
                padding-bottom: 2rem;
                .home-left {
                    width: 30%;
                    img {
                        width: 100%;
                        display: block;
                        border-radius: 25px;
                    }
                }
                .home-right {
                    width: 60%;
                    p {
                        font-size: 24px;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1200px) {
        .home {
            padding-top: 4.75rem;
            .home-content {
                width: 90%;
                .home-heading {
                    h1 {
                        font-size: 24px;
                    }
                }
                .home-main-first {
                    flex-direction: column;
                    padding-top: 0;
                    padding-bottom: 0;
                    .home-left {
                        width: 100%;
                        padding-top: 2rem;
                        padding-bottom: 2rem;
                        p {
                            font-size: 20px;
                        }
                    }
                    .home-right {
                        width: 100%;
                        padding-top: 2rem;
                        padding-bottom: 2rem;
                        display: flex;
                        justify-content: center;
                    }
                }
                .home-main-second {
                    flex-direction: column;
                    padding-top: 0;
                    padding-bottom: 0;
                    .home-left {
                        width: 100%;
                        padding-top: 2rem;
                        padding-bottom: 2rem;
                        display: flex;
                        justify-content: center;
                    }
                    .home-right {
                        width: 100%;
                        padding-top: 2rem;
                        padding-bottom: 2rem;
                        p {
                            font-size: 20px;
                        }
                    }
                }
            }
        }
    }
</style>