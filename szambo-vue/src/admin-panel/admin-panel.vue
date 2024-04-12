<template>
    <AdminHeader />
    <div class="home">
        <div class="home-content">
            <div class="home-top">
                <div class="home-left">
                    <h1>Ostatnio dodane posty</h1>
                    <div v-for="(group, index) in recentPosts" :key="index" class="home-box-container">
                        <div class="home-box" v-for="blog in group" :key="blog.id">
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
                <div class="home-right">
                    <h2>Konta użytkowników</h2>
                    <div class="home-right-login" v-for="user in userList" :key="user.id">
                        <h3>{{ user.user_name }}</h3>
                        <p>{{ formatData(user.created_at) }}</p>
                    </div>
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
            blogList: [],
            blogImages: [],
            userList: [],
        }
    },
    methods: {
        async fetchBlogData() {
            try {
                const response = await axios.get('https://szambonalata.pl/server/api/blog-download-all-data');
                this.blogList = response.data.blogList;
                this.blogImages = response.data.blogImages;
            } catch (error) {
                console.error('Błąd podczas pobierania danych bloga:', error);
            }
        },
        async fetchUserData() {
            try {
                const response = await axios.get('https://szambonalata.pl/server/api/users-list');
                this.userList = response.data.users;
            } catch (error) {
                console.error('Błąd podczas pobierania danych użytkowników:', error);
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
        checkUserRole() {
            const userRole = localStorage.getItem('userRole');
            
            if (userRole !== 'admin') {
                this.$router.push('/logowanie');
            }
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
            let groupSize = 2;
            let lastEightPosts = this.blogList.slice(-8);
            return lastEightPosts.reduce((accumulator, current, index) => {
                const chunkIndex = Math.floor(index / groupSize);

                if (!accumulator[chunkIndex]) {
                    accumulator[chunkIndex] = [];
                }

                accumulator[chunkIndex].push(current);

                return accumulator;
            }, []);
        },
    },
    mounted() {
        this.checkUserRole();
        this.fetchBlogData();
        this.fetchUserData();
    },
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
        .home-top {
            height: 100%;
            display: flex;
            justify-content: space-between;
            .home-left {
                height: 100%;
                width: 60%;
                border-radius: 25px;
                border: 1px solid var(--shadow);
                padding: 1rem;
                h1 {
                    font-size: 24px;
                    font-weight: 500;
                    margin-bottom: 1rem;
                }
                .home-box-container:not(:last-child) {
                    margin-bottom: 1rem;
                }
                .home-box-container {
                    display: flex;
                    justify-content: space-between;
                    .home-box {
                        width: 45%;
                        display: flex;
                        justify-content: space-between;
                        border: 1px solid var(--shadow);
                        border-radius: 10px;
                        padding: 1rem;
                        .home-box-left {
                            width: 70px;
                            height: 70px;
                            img {
                                border-radius: 10px;
                                display: block;
                                width: 70px;
                                height: 70px;
                            }
                        }
                        .home-box-right {
                            width: 80%;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            h2 {
                                font-size: 20px;
                                font-weight: 500;
                            }
                            p {
                                font-size: 16px;
                            }
                        }
                    }
                }
            }
            .home-right {
                height: 100%;
                width: 30%;
                border-radius: 25px;
                border: 1px solid var(--shadow);
                padding: 1rem;
                h2 {
                    font-size: 24px;
                    font-weight: 500;
                    margin-bottom: 1rem;
                }
                .home-right-login {
                    padding: 1rem;
                    border: 1px solid var(--shadow);
                    border-radius: 10px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    h3 {
                        font-size: 20px;
                        font-weight: 500;
                    }
                    p {
                        font-size: 20px;
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
            .home-top {
                flex-direction: column;
                .home-left {
                    width: 100%;
                    margin-bottom: 2rem;
                    .home-box-container:not(:last-child) {
                        margin-bottom: 0;
                    }
                    .home-box-container {
                        flex-direction: column;
                        .home-box {
                            margin-bottom: 1rem;
                            width: 100%;
                            .home-box-left {
                                width: 50px;
                                height: 50px;
                            }
                            .home-box-right {
                                width: 60%;
                            }
                        }
                    }
                }
                .home-right {
                    width: 100%;
                    .home-right-login {
                        flex-direction: column;
                        align-items: start;
                        h3 {
                            margin-bottom: 1rem;
                        }
                    }
                }
            }
        }
    }
}
</style>