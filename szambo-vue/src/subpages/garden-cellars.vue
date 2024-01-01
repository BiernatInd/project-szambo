<template>
    <MainHeader />
    <div class="home">
        <div class="home-content">
            <div class="home-heading">
                <h1><span>Piwniczka ogrodowa - </span>Doskonałe rozwiązanie dla miłośników ogrodnictwa i wypoczynku na świeżym powietrzu</h1>
            </div>
            <div class="home-main">
                <div class="home-left">
                    <p>Jeśli szukasz miejsca, gdzie możesz przechowywać swoje warzywa i owoce w sposób naturalny i bezpieczny, to piwniczka ogrodowa może być idealnym rozwiązaniem dla Ciebie! Piwniczki ogrodowe to małe, podziemne pomieszczenia, które zapewniają ciemność, chłód i wilgotność - idealne warunki do przechowywania żywności przez długi czas.</p>
                    <p>Dlaczego warto kupić piwniczkę ogrodową? Przede wszystkim pozwoli Ci to na zachowanie świeżości i smaku Twoich produktów przez wiele miesięcy. Nie tylko oszczędzisz na zakupach, ale także będziesz mieć dostęp do zdrowych, naturalnych produktów przez cały rok. Ponadto, piwniczki ogrodowe to świetne rozwiązanie dla osób, które chcą uniknąć konserwantów i innych sztucznych dodatków w swojej żywności.</p>
                    <p>Innymi słowy, piwniczka ogrodowa to inwestycja w zdrowie i jakość Twojego jedzenia. Aby cieszyć się jej korzyściami, wystarczy znaleźć odpowiednie miejsce w ogrodzie i postawić ją zgodnie z instrukcjami producenta. Po krótkim czasie będziesz mógł cieszyć się swoimi własnymi, świeżymi produktami, które przechowujesz w idealnych warunkach.</p>
                </div>
                <div class="home-right">
                    <img src='@/assets/7.webp' alt="">
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
        MainFooter,
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
                    font-size: 32px;
                    color: var(--black);
                    font-weight: 600;
                    span {
                        color: var(--blue);
                    }
                }
            }
            .home-main {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .home-left {
                    width: 45%;
                    margin-left: auto;
                    margin-right: auto;
                    p {
                        font-size: 20px;
                    }
                    p:nth-child(1) {
                        margin-bottom: 2rem;
                    }
                    p:nth-child(2) {
                        margin-bottom: 2rem;
                    }
                }
                .home-right {
                    width: 50%;
                    padding-top: 4rem;
                    padding-bottom: 4rem;
                    border-left: 1px solid var(--shadow);
                    img {
                        display: block;
                        width: 60%;
                        margin: 0 auto;
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
                .home-main {
                    flex-direction: column;
                    .home-left {
                        width: 100%;
                        padding-top: 2rem;
                        border-bottom: 1px solid var(--shadow);
                        p:last-child {
                            margin-bottom: 2rem;
                        }
                    }
                    .home-right {
                        width: 100%;
                        border-left: 0;
                    }
                }
            }
        }
    }
</style>