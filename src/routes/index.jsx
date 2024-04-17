import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/public/LoginPage";
import RegisterPages from "../pages/public/RegisterPages";
import LayoutPublic from "../layouts/LayoutPublic";
import NotFound from "../pages/404NotFound";
import ForgotPassword from "../pages/public/ForgotPasswordPage";
import VerifyEmail from "../pages/private/VerifyEmailPage";
import RestorePassword from "../pages/private/RestorePasswordPage";
import VerifyQuestion from "../pages/private/VerifyQuestionPage";
import LayoutPrivate from "../layouts/LayoutPrivate";
import AppPage from "../pages/private/AppPage";

export const route = createBrowserRouter([
    {
        path:'/',
        element:<LayoutPublic />,
        errorElement:<NotFound />,
        children:[
            {
                path:'/',
                element:<LoginPage />
            },
            {
                path:'/register',
                element:<RegisterPages />
            },
            {
                path:'reset-password',
                element:<ForgotPassword />

            },{
                path:'/',
                element:<LayoutPrivate />,
                children:[
                    {
                        path:'/App',
                        element:<AppPage />
                    },
                    {
                        path:'/verify-email',
                        element:<VerifyEmail />
        
                    },
                    {
                        path:'/restore-password',
                        element:<RestorePassword />
                    },
                    {
                        path:'/verify-question',
                        element:<VerifyQuestion />
                    }
                ]
            }
        ]
    }
])