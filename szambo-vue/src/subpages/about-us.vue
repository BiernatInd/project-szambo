<template>
    <MainHeader />
    <div class="home">
        <div class="home-content">
            <div class="home-heading">
                <h1><span>Odkryj naszą niezwykłą historię - </span>Jak zaczynaliśmy, by stać się liderem w produkcji szamb betownowych o najwyższej jakości!</h1>
            </div>
            <div class="home-main">
                <div class="home-left">
                    <p>Nasza firma została założona wiele lat temu przez pasjonata, który zauważył brak jakościowych i trwałych szamb betonowych oraz zbiorników na deszczówkę na rynku. Postanowił wtedy założyć własną firmę, która skupi się na produkcji tych produktów.</p>
                    <p>Na początku, firma koncentrowała się na produkcji szamb betonowych, oferując klientom produkty o doskonałej jakości i trwałości. Wkrótce zyskała reputację wśród klientów, którzy docenili jakość produktów oraz fachowość i zaangażowanie z jakim firma podejście do realizacji każdego zlecenia.</p>
                    <p>W odpowiedzi na rosnące zainteresowanie klientów ochroną środowiska, firma postanowiła rozszerzyć swoją ofertę o zbiorniki na deszczówkę. Produkty te szybko zyskały uznanie wśród klientów, którzy szukali ekologicznych rozwiązań.</p>
                </div>
                <div class="home-right"></div>
            </div>
            <div class="home-main">
                <div class="home-text">
                    <p>Dzięki stałemu dążeniu do doskonałości i innowacyjności, firma stała się liderem w branży. Jej szambo betonowe są znane ze swojej wysokiej jakości i trwałości, a zbiorniki na deszczówkę cieszą się popularnością wśród klientów, którzy szukają ekologicznych rozwiązań.</p>
                    <p>Dzięki ciągłej pracy nad doskonaleniem procesów produkcyjnych i wprowadzaniu innowacji, firma zdobyła zaufanie klientów z całego kraju. Obecnie jest liderem sprzedaży szamb betonowych i zbiorników na deszczówkę, oferując swoim klientom najwyższej jakości produkty oraz profesjonalną obsługę i doradztwo.</p>
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
        .home-main {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 2rem;
            padding-bottom: 2rem;
            .home-left {
                width: 44%;
                padding-top: 2rem;
                p:not(:last-child) {
                    margin-bottom: 2rem;
                }
                p {
                    font-size: 20px;
                    margin-bottom: 2rem;
                }
            }
            .home-right {
                width: 50%;
                background-image: url('@assets/14.webp');
                height: 400px;
                background-repeat: no-repeat;
                background-size: cover;
                margin-top: 2rem;
                margin-bottom: 2rem;
            }
        }
        .home-text {
            p {
                font-size: 20px;
                margin-bottom: 2rem;
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
                padding-top: 0;
                padding-bottom: 0;
                .home-left {
                    width: 100%;
                    p {
                        margin-bottom: 0;
                    }
                }
                .home-right {
                    width: 100%;
                    background-size: cover;
                }
            }
        }
    }
}
</style>