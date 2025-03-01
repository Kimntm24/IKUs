import { memo } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import cat1Img from "../../../assets/users/images/categories/cat1.jpeg";
import cat2Img from "../../../assets/users/images/categories/cat2.jpeg";
import cat3Img from "../../../assets/users/images/categories/cat3.jpg";
import cat4Img from "../../../assets/users/images/categories/cat4.jpg";
import cat5Img from "../../../assets/users/images/categories/cat5.jpeg";
import cat6Img from "../../../assets/users/images/categories/cat6.jpg";
import featured1Img from "../../../assets/users/images/featured/cam-bay-bat-ngo.jpg";
import featured2Img from "../../../assets/users/images/featured/kiem-tien-bang-video-ngan.webp";
import featured3Img from "../../../assets/users/images/featured/em-tap-to-mau.webp";
import featured4Img from "../../../assets/users/images/featured/loi-nguyen-ke-thang-cuoc.webp";
import featured5Img from "../../../assets/users/images/featured/nag-molalisa-cuoicung.webp";
import featured6Img from "../../../assets/users/images/featured/tam-tri-tu-chua-lanh.webp";
import featured7Img from "../../../assets/users/images/featured/truy-tim-bong-den.jpg";
import featured8Img from "../../../assets/users/images/featured/tu_chua_lanh_cam_xuc_xau.webp";
import featured9Img from "../../../assets/users/images/featured/tu_nhan.webp";
import banner1Img from "../../../assets/users/images/banner/banner-1.webp";
import banner2Img from "../../../assets/users/images/banner/banner-2.webp";
import "./style.scss"
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { AiOutlineEye, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { formatter } from 'utils/formater';

const HomePage = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const sliderItems = [
        {
            bgImg: cat1Img,
        },
        {
            bgImg: cat2Img,
        },
        {
            bgImg: cat3Img,
        },
        {
            bgImg: cat4Img,
        },
        {
            bgImg: cat5Img,
        },
        {
            bgImg: cat6Img,
        },
    ]

    const featProducts = {
        all: {
            title: "Tất cả",
            products: [
                {
                    img: featured1Img,
                    name: "Cạm Bẫy Bất Ngờ",
                    price: 188100,
                },
                {
                    img: featured2Img,
                    name: "Kiếm Tiền Bằng Video Ngắn",
                    price: 197100,
                },
                {
                    img: featured3Img,
                    name: "Em Tập Tô Màu",
                    price: 12000,
                },
                {
                    img: featured4Img,
                    name: "Lời Nguyền Kẻ Thắng Cuộc",
                    price: 180000,
                },
                {
                    img: featured5Img,
                    name: "Nàng Mona Lisa Cuối Cùng",
                    price: 152100,
                },
                {
                    img: featured6Img,
                    name: "Tâm Trí Tự Chữa Lành",
                    price: 175500,
                },
                {
                    img: featured7Img,
                    name: "Truy Tìm Bóng Đen",
                    price: 188100,
                },
                {
                    img: featured8Img,
                    name: "Tự Chữa Lành cảm xúc Xấu",
                    price: 107100,
                },
                {
                    img: featured9Img,
                    name: "Tù Nhân",
                    price: 148500,
                },

            ]
        },
        kinhte: {
            title: "Kinh tế",
            products: [
                {
                    img: featured2Img,
                    name: "Kiếm Tiền Bằng Video Ngắn",
                    price: 197100,
                },
                {
                    img: featured4Img,
                    name: "Lời Nguyền Kẻ Thắng Cuộc",
                    price: 180000,
                }
            ]
        },
        vanhoc: {
            title: "Văn học",
            products: [
                {
                    img: featured9Img,
                    name: "Tù Nhân",
                    price: 148500,
                },
                {
                    img: featured1Img,
                    name: "Cạm Bẫy Bất Ngờ",
                    price: 188100,
                },
                {
                    img: featured7Img,
                    name: "Truy Tìm Bóng Đen",
                    price: 188100,
                },
                {
                    img: featured5Img,
                    name: "Nàng Mona Lisa Cuối Cùng",
                    price: 152100,
                }
            ]
        },
        tamly: {
            title: "Tâm lý",
            products: [
                {
                    img: featured6Img,
                    name: "Tâm Trí Tự Chữa Lành",
                    price: 175500,
                },
                {
                    img: featured8Img,
                    name: "Tự Chữa Lành cảm xúc Xấu",
                    price: 107100,
                },
            ]
        },
        thieunhi: {
            title: "Thiếu Nhi",
            products: [
                {
                    img: featured3Img,
                    name: "Em Tập Tô Màu",
                    price: 12000,
                }
            ]
        },
    }

    const renderFeaturedProducts = (data) => {
        const tabList = [];
        const tabPanels = [];

        Object.keys(data).forEach((key, index) => {
            tabList.push(<Tab key={index}>{data[key].title}</Tab>)
            const tabPanel = [];


            data[key].products.forEach((item, j) => {
                tabPanel.push(
                    <div className='col-lg-3' key={j}>
                        <div className='featured_item'>
                            <div className='featured_item_pic' style={{
                                backgroundImage: `url(${item.img})`
                            }}>
                                <ul className='featured_item_pic_hover'>
                                    <li>
                                        <AiOutlineEye />
                                    </li>
                                    <li>
                                        <AiOutlineShoppingCart />
                                    </li>
                                </ul>
                            </div>
                            <div className='featured_item_text'>
                                <h6>
                                    <Link to="">{item.name}</Link>
                                </h6>
                                <h5>{formatter(item.price)}</h5>
                            </div>
                        </div>
                    </div>
                )
            })
            tabPanels.push(tabPanel)

        })

        return (
            <Tabs>
                <TabList>
                    {tabList}
                </TabList>
                {
                    tabPanels.map((item, key) => (
                        <TabPanel key={key}>
                            <div className='row'>{item}</div>
                        </TabPanel>
                    ))
                }



            </Tabs>
        )
    }
    return (
        <>
            {/* Categories Begin */}
            <div className='container container_categories_slider'>

                <Carousel responsive={responsive} className='categories_slider'>
                    {
                        sliderItems.map((item, key) => (
                            <div className='categories_slider_item'
                                style={{ backgroundImage: `url(${item.bgImg})` }}
                                key={key}>
                                {/* <p> Sách Truyện Tiếng Anh </p> */}
                            </div>
                        ))
                    }


                </Carousel>
            </div>
            {/* Categories End */}

            {/* Featured Begin */}
            <div className='container'>
                <div className='featured'>
                    <div className='section-title'>
                        <h2>Sản Phẩm Nổi Bật</h2>
                    </div>
                    {renderFeaturedProducts(featProducts)}

                </div>
            </div>
            {/* Featured End */}
            {/* Banner Begin */}
            <div className='container'>
                <div className='banner'>
                    <div className='banner_pic'>
                        <img src={banner1Img} alt='banner' />
                    </div>
                    <div className='banner_pic'>
                        <img src={banner2Img} alt='banner' />
                    </div>
                </div>
            </div>
            {/* Banner End */}

        </>
    );
};
export default memo(HomePage);