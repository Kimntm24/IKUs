import { memo, useEffect, useState } from "react";
import "./style.scss";
import { MdOutlineFacebook, MdOutlineWhereToVote } from "react-icons/md";
import { FaInstagram, FaRegUser, FaTwitter } from "react-icons/fa";
import { IoCall, IoMail } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import {
    AiOutlineDownCircle,
  AiOutlineMenu,
  AiOutlinePhone,
  AiOutlineShoppingCart,
  AiOutlineUpCircle,
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { ROUTERS } from "utils/router";
//import { formatter } from "utils/formater";

 export const categories = [
  "Sách Kinh Tế",
  "Sách Văn Học Trong Nước",
  "Sách Văn Học Nước Ngoài",
  "Sách Phát Triển Bản Thân",
  "Sách Tin Học Ngoại Ngữ",
  "Sách Chuyên Ngành",
  "Sách Giáo Khoa - Giáo Trình",
  "Sách Phát Hành 2024",
  "Sách Mới 2025",
  "Review Sách",
];

const Header = () => {
  const location = useLocation();
  const [isShowHumberger, setShowHumberger] = useState(false);
  const [isHome, setIsHome] = useState(location.pathname.length <= 1);
  const [isShowCategories, setShowCategories] = useState(isHome);
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
        { name: "Tiếp thị liên kết", path: "" },
      ],
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

  

  useEffect(() => {
    const isHome = location.pathname.length <= 1;
    setIsHome(isHome);
    setShowCategories(isHome);
  }, [location])

  return (
    <>
    <div className={`humberger_menu_overlay${isShowHumberger ? " active " : ""}`}
    onClick={()=> setShowHumberger(false)}></div>

    <div className={`humberger_menu_wrapper${isShowHumberger ? " show " : ""}`}>
        <div className="header_logo">
            <h1>BOOK SHOP</h1>
        </div>
        <div className="humberger_menu_cart">
            <ul>
                <li>
                    <Link to={""}>
                    <AiOutlineShoppingCart/> <span>0</span>
                    </Link>
                </li>
            </ul>
            <div className="header_cart_price">
                Giỏ hàng
            </div>
        </div>
        <div className="humberger_menu_widget">
           <div className="header_top_right_auth">
            <Link to={""}>
            <BiUser /> Đăng nhập
            </Link>
           </div>
        </div>
        <div className="humberger_menu_nav">
            <ul>
                {
                    menus.map((menu, menuKey) =>(
                        <li key={menuKey} to={menu.path}>
                            <Link to={menu.path}
                            onClick={() => {
                                const newMenus = [...menus];
                                newMenus[menuKey].isShowSubmenu = !newMenus[menuKey].isShowSubmenu;
                                setMenus(newMenus);
                            }}>
                            {menu.name}
                            {menu.child &&
                            (menu.isShowSubmenu ? (
                                <AiOutlineDownCircle/>
                            ) : (
                                <AiOutlineUpCircle/>
                            ))}
                            </Link>
                            {menu.child && (
                                <ul className={`header_menu_dropdown ${menu.isShowSubmenu ? " show_submenu" : ""}`}>
                                    {menu.child.map((childItem, childKey) =>(
                                        <li key={`${menuKey}-${childKey}`}>
                                            <Link to={childItem.path}>{childItem.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className="header_top_right_social">
                <Link to="">
                    <MdOutlineFacebook />
                  </Link>
                  <Link to="">
                    <FaInstagram />
                  </Link>
                  <Link to="">
                    <FaTwitter />
                  </Link>
                  <Link to="">
                    <IoCall />
                  </Link>
                  
        </div>
        <div className="humberger_menu_contact">
            <ul>
                <li>
                <IoMail /> bookshop@gmail.com
                </li>
                <li>
                <MdOutlineWhereToVote />Đống Đa, Hà Nội, Việt Nam</li>
            </ul>
        </div>
    </div>
    

      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-6 header_top_left">
              <ul>
                <li>
                  <IoMail />
                  bookshop@gmail.com
                </li>
                <li>
                  <MdOutlineWhereToVote />
                  Đống Đa, Hà Nội, Việt Nam
                </li>
              </ul>
            </div>
            <div className="col-6 header_top_right">
              <ul>
                <li>
                  <Link to="">
                    <MdOutlineFacebook />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <IoCall />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <FaRegUser />
                  </Link>{" "}
                  <span>ĐĂNG NHẬP</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="header_logo">
              <h1>BOOK SHOP</h1>
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="header_menu">
              <ul>
                {menus.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                    <Link to={menu.path || "#"}>{menu.name}</Link>
                    {menu.child && (
                      <ul className="header_menu_dropdown">
                        {menu.child.map((childItem, childKey) => (
                          <li key={`${menuKey}-${childKey}`}>
                            <Link to={childItem.path || "#"}>
                              {childItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="header_cart">
              <ul>
                <li>
                  <Link to={ROUTERS.USER.SHOPPING_CART}>
                    <AiOutlineShoppingCart /> <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="humberger_open">
              <AiOutlineMenu onClick={() => setShowHumberger(true)} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hero_categories_container">
          <div className="col-lg-3 col-sm-12 col-md-12 col-xs-12 hero_categories">
            <div
              className="hero_categories_all"
              onClick={() => setShowCategories(!isShowCategories)}
            >
              <AiOutlineMenu />
              Tất Cả Danh Mục
            </div>

            <ul className={isShowCategories ? "" : "hidden"}>
              {categories.map((category, key) =>(
                 <li key={key}>
                 <Link to={ROUTERS.USER.PRODUCTS}>{category}</Link>
               </li>
              ))}
              
              
            </ul>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 hero_search_container">
            <div className="hero_search">
              <div className="hero_search_form">
                <form>
                  <input type="text" placeholder="Bạn đang tìm gì?" />
                  <button type="submit">Tìm Kiếm</button>
                </form>
              </div>
              <div className="hero_search_phone">
                <div className="hero_search_phone_icon">
                  <AiOutlinePhone />
                </div>
                <div className="hero_search_phone_text">
                  <p>0763.068.172</p>
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>
            {isHome && (
              <div className="hero_item">
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
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
