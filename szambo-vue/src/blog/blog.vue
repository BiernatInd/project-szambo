<template>
    <MainHeader />
        <div class="home">
            <div class="home-content">
                <div class="home-heading">
                    <h1>Witaj na naszym blogu!</h1>
                    <p>Znajdziesz tutaj wszystkie nasze artykuły!</p>
                </div>
                <div class="home-main">
                    <div class="home-left">
                        <div class="home-box-container" v-for="(group, index) in groupedBlogList" :key="index">
                            <div class="home-box" v-for="blog in group" :key="blog.id">
                                <div class="home-img">
                                    <img :src="getImagePath(blog.slug)" alt="">
                                </div>
                                <div class="home-box-content">
                                    <h2>{{ blog.article_title }}</h2>
                                    <p>{{ blog.article_meta_description }}</p>
                                </div>
                                <div class="home-box-button">
                                    <button class="home-box-btn" @click="goToArticle(blog.slug)">Czytaj więcej</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="home-right">
                        <div class="home-box-container">
                            <h2>Popularne wpisy</h2>
                            <div class="home-box" v-for="blog in recentPosts" :key="blog.id" @click="goToArticle(blog.slug)">
                                <div class="home-box-left">
                                    <img :src="getImagePath(blog.slug)" alt="">
                                </div>
                                <div class="home-box-right">
                                    <h2>{{ blog.article_title }}</h2>
                                    <p>{{ formatData(blog.created_at) }}</p>
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
            blogList: [],
            blogImages: []
        }
    },
    methods: {
         goToArticle(slug) {
            this.$router.push({ path: `/artykul/${slug}` });
        },
        async fetchBlogData() {
            try {
                const response = await axios.get('http://localhost:8000/api/blog-download-all-data');
                this.blogList = response.data.blogList;
                this.blogImages = response.data.blogImages;
            } catch (error) {
                console.error('Błąd podczas pobierania danych bloga:', error);
            }
        },
        getImagePath(slug) {
            const image = this.blogImages.find(img => img.slug === slug);
            return image ? image.image_path : '';
        },
        formatData(isoDateTime) {
            const dateObject = new Date(isoDateTime);
            return dateObject.toLocaleString();
        },
    },
    computed: {
        groupedBlogList() {
            let groupSize = 2;
            return this.blogList.reduce((accumulator, current, index) => {
                const chunkIndex = Math.floor(index / groupSize);

                if (!accumulator[chunkIndex]) {
                    accumulator[chunkIndex] = [];
                }

                accumulator[chunkIndex].push(current);

                return accumulator;
            }, []);
        },
        recentPosts() {
            return this.blogList.slice(-3);
        },
    },
    created() {
        this.fetchBlogData();
    },
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
                    margin-bottom: 1rem;
                    span {
                        color: var(--blue);
                    }
                }
                p {
                    font-size: 24px;
                }
            }
            .home-main {
                display: flex;
                justify-content: space-between;
                padding-top: 2rem;
                padding-bottom: 2rem;
                .home-left {
                    width: 60%;
                    .home-box-container:not(:last-child) {
                        margin-bottom: 2rem;
                    }
                    .home-box-container {
                        display: flex;
                        justify-content: space-between;
                        .home-box {
                            width: 48%;
                            border: 1px solid var(--shadow);
                            border-radius: 25px;
                            .home-img {
                                padding: 1rem;
                                img {
                                    display: block;
                                    width: 100%;
                                    height: 250px;
                                    border-radius: 25px;
                                }
                            }
                            .home-box-content {
                                padding-left: 1rem;
                                padding-right: 1rem;
                                margin-bottom: 1rem;
                                h2 {
                                    font-size: 24px;
                                    font-weight: 600;
                                    margin-bottom: 1rem;
                                }
                                p {
                                    font-size: 16px;
                                }
                            }
                            .home-box-button {
                                padding-left: 1rem;
                                padding-right: 1rem;
                                padding-bottom: 1rem;
                                .home-box-btn {
                                    height: 40px;
                                    width: 260px;
                                    font-size: 16px;
                                    border-radius: 10px;
                                    background-color: var(--blue);
                                    color: var(--white);
                                    border: 2px solid var(--blue);
                                    cursor: pointer;
                                    transition: 0.5s;
                                    &:hover {
                                        color: var(--blue);
                                        background-color: var(--white);
                                    }
                                }
                            }
                        }
                    }
                }
                .home-right {
                    width: 30%;
                    border: 1px solid var(--shadow);
                    border-radius: 25px;
                    .home-box-container {
                        padding: 1rem;
                        h2 {
                            font-size: 24px;
                            font-weight: 600;
                            margin-bottom: 1rem;
                        }
                        .home-box:not(:last-child) {
                            margin-bottom: 2rem;
                        }
                        .home-box {
                            padding: 1rem;
                            display: flex;
                            justify-content: space-between;
                            border-radius: 10px;
                            border: 1px solid var(--shadow);
                            cursor: pointer;
                            .home-box-left {
                                height: 80px;
                                width: 80px;
                                img {
                                    border-radius: 10px;
                                    display: block;
                                    width: 80px;
                                    height: 80px;
                                }
                            }
                            .home-box-right {
                                width: 80%;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                h2 {
                                    font-size: 20px;
                                    font-weight: 600;
                                }
                                p {
                                    font-size: 16px;
                                }
                            }
                        }
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
                    p {
                        font-size: 20px;
                    }
                }
                .home-main {
                    flex-direction: column;
                    .home-left {
                        flex-direction: column;
                        width: 100%;
                        .home-box {
                            margin-bottom: 2rem;
                        }
                        .home-box {
                            width: 100%;
                            .home-box-button {
                                .home-box-btn {
                                    width: 100%;
                                }
                            }
                        }
                    }
                    .home-right {
                        width: 100%;
                        .home-box-container {
                            .home-box {
                                flex-direction: column;
                                .home-box-left {
                                    margin-bottom: 1rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>