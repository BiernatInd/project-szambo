<template>
    <AdminHeader />
    <div class="home">
        <div class="home-content">
            <div class="home-heading">
                <h1>Edytowanie treści</h1>
            </div>
            <div class="home-main">
                <div class="home-form">
                    <h2>Edytowanie treści</h2>
                    <div class="home-input">
                        <input type="number" v-model="articleNumber" placeholder="Wprowadź numer nagłówka lub paragrafu">
                        <textarea v-model="newArticleText" placeholder="Wprowadź nową treść"></textarea>
                    </div>
                    <div class="home-button">
                        <button class="home-btn" @click="editBlogContent">Edytuj treść</button>
                    </div>
                </div>
                <div class="home-current-content">
                    <h2>Aktualna treść wpisu:</h2>
                    <div v-for="content in blogContents" :key="content.id">
                        <h2 v-if="content.article_type === 'header'">{{ content.article_text }}</h2>
                        <p v-else-if="content.article_type === 'paragraph'">{{ content.article_text }}</p>
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
import axios from 'axios';

export default {
    components: {
        AdminHeader,
        AdminFooter,
    },
    data() {
        return {
            slug: this.$route.params.slug,
            blogContents: [],
            articleNumber: null,
            newArticleText: '',
        }
    },
    methods: {
        editBlogContent() {
        axios.put('https://szambonalata.pl/server/api/blog-edit-content/' + this.slug, {
            article_number: this.articleNumber,
            article_text: this.newArticleText,
        })
        .then(response => {
                alert('Treść edytowana pomyślnie.');
                this.clearFields();
                this.fetchData();
            })
        .catch(error => {
            console.error('Błąd podczas aktualizacji:', error);
        });
    },
        fetchData() {
            axios.get('https://szambonalata.pl/server/api/blog-download-content/' + this.slug)
            .then(response => {
                this.blogContents = response.data;
            })
            .catch(error => {
                console.error('Błąd podczas pobierania danych:', error);
            });
        },
        clearFields() {
            this.articleNumber = '';
            this.newArticleText = '';
        },
        checkUserRole() {
            const userRole = localStorage.getItem('userRole'); 
            
            if (userRole !== 'admin') {
                this.$router.push('/logowanie');
            }
        },
    },
    mounted() {
        this.checkUserRole();
        this.fetchData();
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
        .home-heading {
            margin-bottom: 2rem;
            h1 {
                font-size: 32px;
                font-weight: 500;
            }
        }
        .home-main {
            display: flex;
            justify-content: space-between;
            .home-form {
                width: 48%;
                padding: 1rem;
                border-radius: 10px;
                border: 1px solid var(--shadow);
                h2 {
                    font-size: 24px;
                    font-weight: 500;
                    margin-bottom: 1rem;
                }
                .home-input {
                    margin-bottom: 1rem;
                    select {
                        width: 100%;
                        height: 40px;
                        border: none;
                        border-bottom: 1px solid var(--blue);
                        font-size: 16px;
                        cursor: pointer;
                        margin-bottom: 1rem;
                    }
                    input {
                        width: 100%;
                        height: 40px;
                        border: none;
                        border-bottom: 1px solid var(--blue);
                        font-size: 16px;
                        resize: none;
                        margin-bottom: 1rem;
                    }
                    textarea {
                        width: 100%;
                        height: 140px;
                        border: none;
                        border-bottom: 1px solid var(--blue);
                        font-size: 16px;
                        resize: none;
                    }
                }
                .home-button {
                    .home-btn {
                        height: 40px;
                        width: 300px;
                        font-size: 16px;
                        border-radius: 10px;
                        border: 2px solid var(--blue);
                        background-color: var(--blue);
                        color: var(--white);
                        transition: 0.5s;
                        cursor: pointer;
                        &:hover {
                            background-color: var(--white);
                            color: var(--blue);
                        }
                    }
                }
            }
            .home-current-content {
                width: 48%;
                border: 1px solid var(--shadow);
                padding: 1rem;
                border-radius: 10px;
                h2 {
                    font-size: 24px;
                    font-weight: 500;
                    margin-bottom: 1rem;
                }

                div {
                    h3 {
                        font-size: 20px;
                        margin-bottom: 1rem;
                        font-weight: 500;
                    }
                    
                    p {
                        font-size: 16px;
                        margin-bottom: 1rem;
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
           .home-heading {
                h1 {
                    font-size: 24px;
                }
            }
            .home-main {
                flex-direction: column;
                margin-bottom: 2rem;
                .home-form {
                    width: 100%;
                    .home-button {
                        .home-btn {
                            width: 100%;
                        }
                    }
                }
                .home-current-content {
                    width: 100%;
                }
            }
        }
    }
}
</style>