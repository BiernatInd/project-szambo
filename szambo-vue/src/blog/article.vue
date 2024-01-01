<template>
    <MainHeader />
        <div class="home">
            <div class="home-content">
                <div class="home-img" v-if="blogImages.length > 0">
                    <img :src="blogImages[0].image_path" alt="">
                </div>
                <div v-for="content in blogContents" :key="content.id">
                    <h2 v-if="content.article_type === 'header'">{{ content.article_text }}</h2>
                    <p v-else-if="content.article_type === 'paragraph'">{{ content.article_text }}</p>
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
            slug: this.$route.params.slug,
            blogContents: [],
            blogImages: [],
        }
    },
    methods: {
        fetchData() {
            axios.get('http://localhost:8000/api/blog-download-article/' + this.slug)
            .then(response => {
                this.blogContents = response.data.blogContents;
                this.blogImages = response.data.blogImages;
            })
            .catch(error => {
                console.error('Błąd podczas pobierania danych:', error);
            });
        },
        clearFields() {
            this.articleText = '';
        },
    },
    mounted() {
        this.fetchData();
    }
}
</script>

<style lang="scss" scoped>
    .home {
        padding-top: 11.438rem;
        .home-content {
            width: 95%;
            margin-left: auto;
            margin-right: auto;
            .home-img {
                display: flex;
                justify-content: center;
                margin-bottom: 2rem;
                img {
                    width: 400px;
                    height: 400px;
                    border-radius: 25px;
                }
            }
            h1 {
                font-size: 32px;
                font-weight: 600;
                margin-bottom: 2rem;
            }
            p {
                font-size: 20px;
                margin-bottom: 2rem;
            }
            h2 {
                font-size: 24px;
                font-weight: 600;
                margin-bottom: 2rem;
            }
        }
    }

    @media screen and (max-width: 1200px) {
        .home {
            padding-top: 6.75rem;
            .home-content {
                width: 90%;
                .home-img {
                    margin-bottom: 2rem;
                    img {
                        width: 80%;
                        height: 100%;
                    }
                }
                h1 {
                    font-size: 24px;
                }
            }
        }
    }
</style>