import HomePage from "../pages/Home/HomePage";
import ProductsPage from "../pages/Products/ProductsPage";
import SignInPage from "../pages/SignIn/SignInPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import ProductDetailPage from "../pages/ProductDetail/ProductDetailPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
export const routes = [
    {
        path:'/',
        name: HomePage,
        showHeader: true
    },

    {
        path:'/products',
        name: ProductsPage,
        showHeader: true
    },

    {
        path:'/sign-in',
        name: SignInPage,
        showHeader: false
    },

    {
        path:'/sign-up',
        name: SignUpPage,
        showHeader: false
    },

    {
        path:'/product-detail',
        name: ProductDetailPage,
        showHeader: true
    },

    {
        path:'*',
        name: NotFoundPage
    },

]