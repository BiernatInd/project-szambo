<template>
    <AdminHeader />
    <div class="home">
        <div class="home-content">
            <div class="home-heading">
                <h1>Ustawienia konta</h1>
            </div>
            <div class="home-main">
                <div class="home-left">
                    <h2>Aktualne dane konta</h2>
                    <p>Nazwa użytkownika: {{ admin.length > 0 ? admin[0].user_name : 'Brak danych' }}</p>
                    <p>Adres E-mail: {{ admin.length > 0 ? admin[0].email : 'Brak danych' }}</p>
                </div>
                <div class="home-right">
                    <h2>Zmiana danych</h2>
                    <router-link v-if="admin.length > 0" :to="{ name: 'change-email-admin', params: { id: admin[0].id }}">Zmień adres E-mail</router-link>
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
          admin: []
        }
    },
    methods: {
        fetchData() {
            axios.get('http://localhost:8000/api/admin-account')
            .then(response => {
              this.admin = response.data.admin
            })
            .catch(error => {
              console.error('Błąd pobierania danych:', error)
            })
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
            .home-left {
                width: 48%;
                padding: 1rem;
                border-radius: 10px;
                border: 1px solid var(--shadow);
                h2 {
                    font-size: 24px;
                    font-weight: 500;
                    margin-bottom: 1rem;
                }
                p:not(:last-child) {
                    margin-bottom: 1rem;
                }
            }
            .home-right {
                width: 48%;
                border: 1px solid var(--shadow);
                padding: 1rem;
                border-radius: 10px;
                h2 {
                    font-size: 24px;
                    font-weight: 500;
                    margin-bottom: 1rem;
                }
                a {
                    color: var(--black);
                    transition: 0.5s;
                    text-underline-offset: 4px;
                    &:hover {
                        color: var(--blue);
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
                .home-left {
                    width: 100%;
                    margin-bottom: 2rem;
                }
                .home-right {
                    width: 100%;
                }
            }
        }
    }
}
</style>