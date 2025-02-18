import { memo, useState } from 'react';
import "./style.scss"
import { MdOutlineFacebook, MdOutlineWhereToVote } from 'react-icons/md';
import { FaInstagram, FaRegUser, FaTwitter } from 'react-icons/fa';
import { IoCall, IoMail } from 'react-icons/io5';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { ROUTERS } from 'utils/router';

const Header = () => {
    const [menus, setMenus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa Hàng",
            path: ROUTERS.USER.PRODUCTS,
        },
        {
            name: "Hợp tác",
            path: "",
            isShowSubmenu: false,
            child: [
                { name: "Hợp tác xuất bản", path: "" },
                { name: "Đại Lý - Bán Sỉ", path: "" },
                { name: "Tiếp thị liên kết", path: "" }
            ]
        },
        {
            name: "Bài viết",
            path: "",
        },
        {
            name: "Liên Hệ",
            path: "",
        },
    ]);

    return (
        <>
            <div className='header_top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 header_top_left'>
                            <ul>
                                <li><IoMail />bookshop@gmail.com</li>
                                <li><MdOutlineWhereToVote />Đống Đa, Hà Nội, Việt Nam</li>
                            </ul>
                        </div>
                        <div className='col-6 header_top_right'>
                            <ul>
                                <li><Link to=""><MdOutlineFacebook /></Link></li>
                                <li><Link to=""><FaInstagram /></Link></li>
                                <li><Link to=""><FaTwitter /></Link></li>
                                <li><Link to=""><IoCall /></Link></li>
                                <li><Link to=""><FaRegUser /></Link> <span>ĐĂNG NHẬP</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-3'>
                        <div className='header_logo'>
                            <h1>BOOK SHOP</h1>
                        </div>
                    </div>
                    <div className='col-xl-6'>
                        <nav className='header_menu'>
                            <ul>
                                {menus.map((menu, menuKey) => (
                                    <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                        <Link to={menu.path || "#"}>{menu.name}</Link>
                                        {menu.child && (
                                            <ul className='header_menu_dropdown'>
                                                {menu.child.map((childItem, childKey) => (
                                                    <li key={`${menuKey}-${childKey}`}>
                                                        <Link to={childItem.path || "#"}>{childItem.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className='col-xl-3'>
                        <div className='header_cart'>
                            <ul>
                                <li>
                                    <Link to="">
                                        <AiOutlineShoppingCart /> <span>0</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Header);
