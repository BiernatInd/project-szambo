<template>
    <AdminHeader />
    <div class="home">
        <div class="home-content">
            <div class="home-heading">
                <h1>Dodawanie zdjęcia do wpisu</h1>
            </div>
            <div class="home-main">
                <div class="home-form">
                    <h2>Dodawanie zdjęcia do wpisu</h2>
                    <div class="home-input">
                        <input type="file" ref="articlePhoto" @change="handleFileUpload">
                    </div>
                    <div class="home-button">
                        <button class="home-btn" @click="addBlogPhoto">Dodaj zdjęcie</button>
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
        file: null,
        slug: null, 
    }
},
methods: {
    handleFileUpload() {
        this.file = this.$refs.articlePhoto.files[0];
    },
    addBlogPhoto() {
        let formData = new FormData();
        formData.append('photo', this.file);
        formData.append('slug', this.slug);

        axios.post('http://localhost:8000/api/blog-add-photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            alert('Zdjęcie dodane pomyślnie.')
            this.$router.push(`/blog-dodaj-meta/${this.slug}`); 
        })
        .catch(error => {
            console.error(error);
            alert('Wszystkie pola muszą zostać wypełnione.')
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
                        padding-top: 0.5rem;
                        padding-bottom: 0.5rem;
                        width: 100%;
                        border: none;
                        border-bottom: 1px solid var(--blue);
                        font-size: 16px;
                        cursor: pointer;
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