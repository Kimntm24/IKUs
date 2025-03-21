import { memo } from 'react';
import { ROUTERS } from 'utils/router';
import "./style.scss"
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineLogout, AiOutlineShoppingCart } from 'react-icons/ai';

const HeaderAd = ({children, ...props}) => {
    const location = useLocation();
    const Navigate = useNavigate();
    const navItems = [
        {
            path: ROUTERS.ADMIN.ORDERS,
            onclick: () => Navigate(ROUTERS.ADMIN.ORDERS),
            label: "Đặt hàng",
            icon: <AiOutlineShoppingCart />
        },
        {
            path: ROUTERS.ADMIN.LOGOUT,
            onclick: () => {},
            label: "Đăng xuất",
            icon: <AiOutlineLogout />
        },
    ]
    return (
        <div className='admin_header container' {...props}>
           <nav className='admin_header_nav'>
            {navItems.map(({path, onclick, label, icon}) =>(
                <div 
                key={path}
                className={`admin_header_nav-item ${
                    location.pathname.includes(path)
                    ? "admin_header_nav-item--active"
                    :""
                }`}
                onclick={onclick}
                >
                    <span className='admin_header_nav-icon'>{icon}</span>
                    <span>{label}</span>
                </div>
            ))}
           </nav>
       </div> 
    );
};
export default memo(HeaderAd);