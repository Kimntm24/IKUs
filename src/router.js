import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";
import ProfilePage from "./pages/users/profilePage";

const RouterCustom = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage />
        },
    ];

    return (
        <MasterLayout>
        <Routes>
            {userRouters.map((item, key) => (
                <Route key={key} path={item.path} element={item.component} />
            ))}
        </Routes>
        </MasterLayout>
    );
};

export default RouterCustom;
