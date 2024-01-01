<template>
    <AdminHeader />
    <div class="home">
        <div class="home-content">
            <div class="home-heading">
                <h1>Dodawanie meta tagów</h1>
            </div>
            <div class="home-main">
                <div class="home-form">
                    <h2>Dodawanie meta tagów</h2>
                    <div class="home-input">
                        <input type="text" v-model="articleMetaTitle" placeholder="Wprowadź meta title">
                        <textarea v-model="articleMetaDescription" placeholder="Wprowadź meta description"></textarea>
                    </div>
                    <div class="home-button">
                        <button class="home-btn" @click="addBlogMeta">Dodaj meta tagi</button>
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
            articleMetaTitle: '',
            articleMetaDescription: '',
            slug: null
        }
    },
    methods: {
        addBlogMeta() {

            if (!this.articleMetaTitle || !this.articleMetaDescription) {
                alert('Wszystkie pola muszą zostać wypełnione.');
                return;
            }

            let formData = new FormData();
            formData.append('article_meta_title', this.articleMetaTitle);
            formData.append('article_meta_description', this.articleMetaDescription);

            axios.post(`http://localhost:8000/api/blog-add-meta/${this.slug}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(response => {
                alert('Meta tagi dodane pomyślnie');
                this.$router.push(`/blog-dodaj-tresc/${this.slug}`);
            })
            .catch(error => {
                console.error('Błąd podczas aktualizacji wpisu:', error);
            });
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
        this.slug = this.$route.params.slug;
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
            .home-form {
                width: 50%;
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
                    input {
                        width: 100%;
                        height: 40px;
                        border: none;
                        border-bottom: 1px solid var(--blue);
                        font-size: 16px;
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
                .home-form {
                    width: 100%;
                    .home-button {
                        .home-btn {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
}
</style>