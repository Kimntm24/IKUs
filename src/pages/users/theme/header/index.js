import { memo, useState } from 'react';
import "./style.scss"
import { MdOutlineFacebook, MdOutlineWhereToVote } from 'react-icons/md';
import { FaInstagram, FaRegUser, FaTwitter } from 'react-icons/fa';
import { IoCall, IoMail } from 'react-icons/io5';
import { AiOutlineMenu, AiOutlinePhone, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { ROUTERS } from 'utils/router';

const Header = () => {
    const [isShowCategories, setShowCategories] = useState(true);
    const [menus] = useState([
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
            <div className='container'>
                <div className='row hero_categories_container'>
                    <div className='col-lg-3 hero_categories'>
                        <div className='hero_categories_all' onClick={() => setShowCategories(!isShowCategories)}>
                            <AiOutlineMenu />
                            Tất Cả Danh Mục
                            </div>
                        
                            <ul className={isShowCategories ? "" : "hidden"}>
                            <li>
                                <Link to={"#"}>Sách Kinh Tế</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Sách Văn Học Trong Nước</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Sách Văn Học Nước Ngoài</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Sách Phát Triển Bản Thân</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Sách Tin Học Ngoại Ngữ</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Sách Chuyên Ngành</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Sách Giáo Khoa - Giáo Trình</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Sách Phát Hàng 2024</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Sách Mới 2025</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Review Sách</Link>
                            </li>
                        </ul>
                        
                        
                    </div>
                    <div className='col-lg-9 hero_search_container'>
                        <div className='hero_search'>
                            <div className='hero_search_form'>
                                <form>
                                    <input type='text' placeholder='Bạn đang tìm gì?' />
                                    <button type='submit'>Tìm Kiếm</button>
                                </form>
                            </div>
                            <div className='hero_search_phone'>
                                <div className='hero_search_phone_icon'>
                                    <AiOutlinePhone />
                                </div>
                                <div className='hero_search_phone_text'>
                                    <p>0763.068.172</p>
                                    <span>Hỗ trợ 24/7</span>
                                </div>
                            </div>
                        </div>
                        <div className='hero_item'>
                            {/* <div className='hero_text'>
                                <span>Ngày Hội Siêu Sale</span>
                                <h2>Đồng Giảm <br/> 
                                       70%</h2>
                                       <p>Miễn phí giao hàng tận nơi</p>
                                       <Link to="" className='primary-btn'>
                                       Săn Ngay
                                       </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Header);
