<template>
    <AdminHeader />
    <div class="home">
        <div class="home-content">
            <div class="home-heading">
                <h1>Lista wpisów</h1>
            </div>
            <div class="home-main">
                <table>
                <thead>
                    <tr>
                        <th>Numer</th>
                        <th>Nazwa wpisu</th>
                        <th>Data</th>
                        <th>Szczegóły</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="article in articles" :key="article.id">
                        <td data-label="Numer">{{ article.id }}</td>
                        <td data-label="Nazwa wpisu">{{ article.article_title }}</td>
                        <td data-label="Data">{{ formatData(article.created_at)}}</td>
                        <td data-label="Szczegóły">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"  @click="redirectToAddContent(article.slug)">
                                <path d="M9 1L9 16" stroke="" stroke-width="2" stroke-linecap="round"/>
                                <path d="M16 9L1 9" stroke="" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                            <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" @click="redirectToEditPage(article.slug)">
                                <circle cx="8" cy="2" r="1" stroke="" stroke-width="2" stroke-linecap="round"/>
                                <circle cx="2" cy="2" r="1" stroke="" stroke-width="2" stroke-linecap="round"/>
                                <circle cx="14" cy="2" r="1" stroke="" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg" @click="showConfirmation(article.slug)">
                                <path d="M8.14233 15.2188L8.14233 11.6972" stroke-linecap="round"/>
                                <path d="M13.7118 15.2188L13.7118 11.6972" stroke-linecap="round"/>
                                <path d="M0.901855 5.82812H20.9522V5.82812C19.165 5.82812 18.2714 5.82812 17.6967 6.35878C17.6577 6.39477 17.6202 6.4323 17.5842 6.47128C17.0535 7.04594 17.0535 7.93956 17.0535 9.72681V17.0883C17.0535 18.9739 17.0535 19.9168 16.4678 20.5025C15.882 21.0883 14.9392 21.0883 13.0535 21.0883H8.80054C6.91492 21.0883 5.97211 21.0883 5.38633 20.5025C4.80054 19.9168 4.80054 18.9739 4.80054 17.0883V9.72681C4.80054 7.93956 4.80054 7.04594 4.26989 6.47128C4.23389 6.4323 4.19636 6.39477 4.15738 6.35878C3.58273 5.82812 2.6891 5.82812 0.901855 5.82812V5.82812Z" stroke-linecap="round"/>
                                <path d="M8.14224 2.30696C8.14224 2.30696 8.6992 1.13281 10.927 1.13281C13.1548 1.13281 13.7118 2.30667 13.7118 2.30667" stroke-linecap="round"/>
                            </svg>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
    <div class="confirmation" :class="{ 'active': confirmationActive }">
      <div class="confirmation-content">
        <div class="confirmation-main">
            <div class="confirmation-top">
                <h2>Potwierdzenie</h2>
                <hr>
            </div>
            <div class="confirmation-bottom">
                <p>Czy napewno chcesz usunąć wpis?</p>
                <div class="confirmation-buttons">
                    <button class="confirmation-btn" :class="{ 'active': confirmationActive }" @click="hideConfirmation" ref="collection">Anuluj</button>
                    <button class="confirmation-btn" @click="deleteBlogArticle">Usuń</button>
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
            articles: [],
            confirmationActive: false,
        }
    },
    methods: {
        fetchData() {
                axios.get('http://localhost:8000/api/blog-list')
    .then(response => {
      this.articles = response.data.articles;
    })
    .catch(error => {
      console.error('Błąd pobierania danych:', error);
    });
},
formatData(isoDateTime) {
                const dateObject = new Date(isoDateTime);
                return dateObject.toLocaleString();
            },
      showConfirmation(slug) {
        this.confirmationActive = !this.confirmationActive;
        this.selectedSlug = slug; 
        document.body.classList.toggle('active', this.confirmationActive);
    },
    redirectToAddContent(slug) {
      this.$router.push(`/blog-dodaj-tresc/${slug}`);
    },
    redirectToEditPage(slug) {
      this.$router.push(`/blog-edytuj-tresc/${slug}`);
    },

    showConfirmation(slug) {
      this.confirmationActive = !this.confirmationActive;
      this.selectedSlug = slug; 
      document.body.classList.toggle('active', this.confirmationActive);
    },
    hideConfirmation() {
        this.confirmationActive = false;
        document.body.classList.remove('active');
    },

    deleteBlogArticle() {
        axios.delete(`http://localhost:8000/api/blog-delete-article/${this.selectedSlug}`)
            .then(response => {
                this.fetchData();
                this.hideConfirmation();
            })
            .catch(error => {
                console.error('Błąd usuwania artykułu:', error);
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
            table {
                width: 100%;
                border-radius: 15px;
                border-collapse: separate;
                border-spacing: 0;
                border: 1px solid var(--shadow);
                th {
                    padding: 12px;
                    text-align: center;
                    font-size: 20px;
                    font-weight: 500;
                }
                td {
                    padding: 12px;
                    text-align: center;
                    font-weight: 400;
                    white-space: normal;
                    font-size: 20px;
                    border-top: 1px solid var(--shadow);
                    font-weight: 400;
                    svg {
                        width: 20px;
                        margin-left: 0.5rem;
                        margin-right: 0.5rem;
                        cursor: pointer;
                        stroke: var(--black);
                        transition: 0.5s;
                        &:hover {
                            stroke: var(--blue);
                        }
                    }
                    svg:nth-child(2) {
                        position: relative;
                        bottom: 5px;
                    }
                    a {
                      color: var(--black);
                      text-underline-offset: 4px;
                    }
                }
            }
        }
    }
}

.confirmation {
        position: fixed;
        max-width: 1920px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.5s;
        z-index: 999;
        top: -100%;
        &.active {
            top: 0;
        }
        .confirmation-content {
            width: 40%;
            height: 25%;
            border-radius: 25px;
            background-color: var(--white);
            display: flex;
            align-items: center;
            justify-content: center;
            .confirmation-main {
                width: 90%;
                .confirmation-top {
                    margin-bottom: 1rem;
                    h2 {
                        font-size: 32px;
                        margin-bottom: 1rem;
                        font-weight: 500;
                    }
                    hr {
                    width: 50%;
                    height: 3px;
                    border: none;
                    border-radius: 10px;
                    background-color: var(--blue);
                    }
                }
                .confirmation-bottom {
                    p {
                        font-size: 20px;
                        margin-bottom: 1rem;
                        font-weight: 400;
                    }
                    .confirmation-buttons {
                        .confirmation-btn {
                            width: 220px;
                            height: 30px;
                            font-size: 16px;
                        }
                        .confirmation-btn:nth-child(1) {
                            margin-right: 1rem;
                            background-color: var(--white);
                            border: 2px solid var(--blue);
                            color: var(--blue);
                            border-radius: 10px;
                            cursor: pointer;
                            transition: 0.5s;
                            height: 40px;
                            &:hover {
                                background-color: var(--blue);
                                color: var(--white);
                            }
                        }
                        .confirmation-btn:nth-child(2) {
                            margin-right: 1rem;
                            background-color: var(--blue);
                            border: 2px solid var(--blue);
                            color: var(--white);
                            border-radius: 10px;
                            cursor: pointer;
                            transition: 0.5s;
                            height: 40px;
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
                table, thead, tbody, th, td, tr {
                      display: block;
                      border: none;
                  }
                  table {
                    border: 1px solid var(--shadow);
                      thead {
                        tr {
                            position: absolute;
                            top: -9999px;
                            left: -9999px;
                        }
                      }
                      tbody {
                          tr {
                            border-radius: 10px;
                            td {
                                border-top: none;
                                position: relative;
                                padding-left: 50%;
                                font-size: 12px;
                                text-align: right;
                                img {
                                  width: 16px;
                                }
                                svg:nth-child(2) {
                        position: relative;
                        bottom: 0px;
                    }
                            }
                            td {
                                position: relative;
                                padding-left: 50%;
                                font-size: 12px;
                                text-align: right;
                                img {
                                  width: 16px;
                                }
                            }
                            td:not(:last-child) {
                              border-bottom: 1px solid var(--shadow);
                            }
                            td:last-child {
                              display: flex;
                              align-items: center;
                              justify-content: flex-end;
                            }
                            tr {
                              border: 1px solid var(--shadow);
                              border-radius: 10px;
                            }
                            td::before {
                                content: attr(data-label);
                                position: absolute;
                                left: 0;
                                width: 50%;
                                padding-left: 15px;
                                font-weight: bold;
                                text-align: left;
                            }
                        }
                      }
                  }
            }
        }
    }
    .confirmation {
                .confirmation-content {
                    width: 90%;
                    height: 260px;
                    .confirmation-main {
                        .confirmation-top {
                            h2 {
                                font-size: 24px;
                            }
                        }
                        .confirmation-bottom {
                            p {
                                font-size: 16px;
                            }
                            .confirmation-buttons {
                                .confirmation-btn:nth-child(1) {
                                    margin-bottom: 1rem;
                                }
                                .confirmation-btn {
                                    width: 100%;
                                }
                            }
                        }
                    }
                }
            }
}
</style>