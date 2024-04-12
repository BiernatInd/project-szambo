import { createRouter, createWebHistory } from "vue-router"
import axios from 'axios'

import MainPage from '@subpages/main-page.vue'
import GardenCellars from '@subpages/garden-cellars.vue'
import Offer from '@subpages/offer.vue'
import PriceList from '@subpages/price-list.vue'
import AboutUs from '@subpages/about-us.vue'
import Contact from '@subpages/contact.vue'
import Blog from '@blog/blog.vue'
import Article from '@blog/article.vue'
import PolicyPrivacy from '@documents/policy-privacy.vue'
import Login from '@auth/login.vue'
import Register from '@auth/register.vue'
import RecoverPassword from '@auth/recover-password.vue'
import ResetPassword from '@auth/reset-password.vue'
import AdminPanel from '@admin-panel/admin-panel.vue'
import BlogList from '@admin-blog/blog-list.vue'
import BlogAddPost from '@admin-blog/blog-add-post.vue'
import BlogAddPhoto from '@admin-blog/blog-add-photo.vue'
import BlogAddMeta from '@admin-blog/blog-add-meta.vue'
import BlogAddContent from '@admin-blog/blog-add-content.vue'
import BlogEditContent from '@admin-blog/blog-edit-content.vue'
import SettingsAdmin from '@admin-settings/settings-admin.vue'
import ChangeEmailAdmin from '@admin-settings/change-email-admin.vue'
import UsersList from '@admin-users/users-list.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainPage,
            name: "main-page",
            meta: {
                title: "Szambo Na Lata - Najlepsza oferta na szamba | Sprzedaż i montaż",
                description: "Zapraszamy do skorzystania z naszej najlepszej oferty na szamba na lata. Oferujemy sprzedaż i montaż szamb o najwyższej jakości. Zaufaj profesjonalistom i wybierz naszą firmę, by zapewnić sobie trwałe i niezawodne rozwiązania z zakresu szamb",
            },
        },
        {
            path: '/piwniczki-ogrodowe',
            component: GardenCellars,
            name: "garden-cellars",
            meta: {
                title: "Piwniczki Ogrodowe - Doskonałe rozwiązania na przechowywanie w ogrodzie | Montaż i oferta",
                description: "Odkryj naszą ofertę piwniczek ogrodowych, idealnych do przechowywania w Twoim ogrodzie. Zapewniamy montaż i wysoką jakość. Zainwestuj w piwniczkę, która spełni wszystkie Twoje potrzeby.",
            },
        },
        {
            path: '/oferta',
            component: Offer,
            name: "offer",
            meta: {
                title: "Nasza Oferta - Szamba, Piwniczki Ogrodowe i Zbiorniki Retencyjne | Wybierz jakość",
                description: "Poznaj naszą szeroką ofertę, która obejmuje szamba, piwniczki ogrodowe i zbiorniki retencyjne. Oferujemy najwyższą jakość i profesjonalny montaż. Wybierz nas, by spełnić swoje potrzeby.",
            },
        },
        {
            path: '/cennik',
            component: PriceList,
            name: "price-list",
            meta: {
                title: "Cennik - Szamba, Piwniczki Ogrodowe i Zbiorniki Retencyjne | Sprawdź nasze atrakcyjne ceny",
                description: "Znajdź nasze konkurencyjne ceny dla szamb, piwniczek ogrodowych i zbiorników retencyjnych. Oferujemy atrakcyjne koszty, które pomogą Ci zrealizować swoje projekty.",
            },
        },
        {
            path: '/o-naszej-firmie',
            component: AboutUs,
            name: "about-us",
            meta: {
                title: "O Naszej Firmie - Doświadczenie i Profesjonalizm w Branży | Poznaj nas lepiej",
                description: "Dowiedz się więcej o naszej firmie i naszym doświadczeniu w branży szamb, piwniczek ogrodowych i zbiorników retencyjnych. Oto dlaczego możesz nam zaufać.",
            },
        },
        {
            path: '/kontakt',
            component: Contact,
            name: "contact",
            meta: {
                title: "Kontakt - Skontaktuj się z nami w sprawie szamb, piwniczek ogrodowych i więcej",
                description: "Masz pytania lub potrzebujesz pomocy? Skontaktuj się z nami w sprawie szamb, piwniczek ogrodowych lub zbiorników retencyjnych. Jesteśmy do Twojej dyspozycji.",
            },
        },
        {
            path: '/blog',
            component: Blog,
            name: "blog",
            meta: {
                title: "Blog - Ciekawe artykuły o szambach, piwniczkach ogrodowych i retencji wody",
                description: "Przeczytaj nasz blog, aby dowiedzieć się więcej na temat szamb, piwniczek ogrodowych i zbiorników retencyjnych. Znajdziesz tu ciekawe artykuły i porady.",
            },
        },
        {
            path: '/artykul/:slug',
            component: Article,
            name: "article",
            meta: {
                title: "",
                description: "",
            },
        },
        {
            path: '/polityka-prywatnosci',
            component: PolicyPrivacy,
            name: "policy-privacy",
            meta: {
                title: "Polityka Prywatności - Ochrona Twoich danych osobowych",
                description: "Właścicielem strony internetowej szambonalata.pl jest firma MOKRO-BET s.c. Fijałkowski Maciej Zaremba Michal, która jest administratorem Twoich danych osobowych",
            },
        },
        {
            path: '/logowanie',
            component: Login,
            name: "login",
            meta: {
                title: "Logowanie - Dostęp do Twojego konta | Zarządzaj swoimi zamówieniami",
                description: "Zaloguj się, aby uzyskać dostęp do swojego konta. Zarządzaj swoimi zamówieniami na szamba, piwniczki ogrodowe i zbiorniki retencyjne.",
            },
        },
        {
            path: '/rejestracja',
            component: Register,
            name: "register",
            meta: {
                title: "Rejestracja - Załóż konto i korzystaj z naszych usług | Prosty proces rejestracji",
                description: "Zarejestruj się, aby korzystać z naszych usług. Prosty proces rejestracji pozwoli Ci skorzystać z naszej oferty na szamba, piwniczki ogrodowe i zbiorniki retencyjne.",
            },
        },
        {
            path: '/odzyskiwanie-hasla',
            component: RecoverPassword,
            name: "recover-password",
            meta: {
                title: "Odzyskiwanie Hasła - Proces przywracania dostępu do Twojego konta",
                description: "Aby odzyskać dostęp do swojego konta, wprowadź swój adres e-mail, a my wyślemy Ci link do resetowania hasła. Proszę podać swoje dane, aby rozpocząć proces odzyskiwania konta.",
            },
        },
        {
            path: '/resetowanie-hasla/:token',
            component: ResetPassword,
            name: "reset-password",
            meta: {
                title: "Resetowanie Hasła - Opcje odzyskiwania dostępu do Twojego konta",
                description: "Zapomniałeś hasła? Skorzystaj z naszych opcji resetowania hasła, aby odzyskać dostęp do swojego konta. Wprowadź swoje dane lub wybierz jedną z dostępnych opcji odzyskiwania, aby kontynuować korzystanie z naszych usług.",
            },
        },
        {
            path: '/panel-administratora',
            component: AdminPanel,
            name: "admin-panel",
            meta: {
                title: "",
                description: "",
                content: 'noindex, nofollow',
            },
        },
        {
            path: '/blog-lista',
            component: BlogList,
            name: "blog-list",
            meta: {
                title: "",
                description: "",
                content: 'noindex, nofollow',
            },
        },
        {
            path: '/blog-dodaj-post',
            component: BlogAddPost,
            name: "blog-add-post",
            meta: {
                title: "",
                description: "",
                content: 'noindex, nofollow',
            },
        },
        {
            path: '/blog-dodaj-zdjecie/:slug',
            component: BlogAddPhoto,
            name: "blog-add-photo",
            meta: {
                title: "",
                description: "",
                content: 'noindex, nofollow',
            },
        },
        {
            path: '/blog-dodaj-meta/:slug',
            component: BlogAddMeta,
            name: "blog-add-meta",
            meta: {
                title: "",
                description: "",
                content: 'noindex, nofollow',
            },
        },
        {
            path: '/blog-dodaj-tresc/:slug',
            component: BlogAddContent,
            name: "blog-add-content",
            meta: {
                title: "",
                description: "",
                content: 'noindex, nofollow',
            },
        },
        {
            path: '/blog-edytuj-tresc/:slug',
            component: BlogEditContent,
            name: "blog-edit-content",
            meta: {
                title: "",
                description: "",
                content: 'noindex, nofollow',
            },
        },
        {
            path: '/ustawienia-administrator',
            component: SettingsAdmin,
            name: "settings-admin",
            meta: {
                title: "",
                description: "",
                content: 'noindex, nofollow',
            },
        },
        {
            path: '/zmiana-email-administrator/:id',
            component: ChangeEmailAdmin,
            name: "change-email-admin",
            meta: {
                title: "",
                description: "",
                content: 'noindex, nofollow',
            },
        },
        {
            path: '/uzytkownicy-lista',
            component: UsersList,
            name: "users-list",
            meta: {
                title: "",
                description: "",
                content: 'noindex, nofollow',
            },
        },
    ]
});

router.beforeEach(async (to, from, next) => {

    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    }
    
    if (to.name === 'article') {
        const slug = to.params.slug;
        console.log('Article Name:', slug);

        try {
            const response = await axios.get(`https://szambonalata.pl/server/api/blog-download-meta/${slug}`);
            const article = response.data.article;

            if (article.article_meta_title) {
                document.title = article.article_meta_title;
            }

            if (article.article_meta_description) {
                const descriptionMetaTag = document.querySelector('meta[name="description"]');
                if (descriptionMetaTag) {
                    descriptionMetaTag.setAttribute('content', article.article_meta_description);
                }
            }
        } catch (error) {
            console.error('Error:', error);
            next({ name: '404' });
            return;
        }
    }

    next();
});


export default router