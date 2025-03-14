import { memo } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import cat1Img from "../../../assets/users/images/categories/cat1.jpeg";
import cat2Img from "../../../assets/users/images/categories/cat2.jpeg";
import cat3Img from "../../../assets/users/images/categories/cat3.jpg";
import cat4Img from "../../../assets/users/images/categories/cat4.jpg";
import cat5Img from "../../../assets/users/images/categories/cat5.jpeg";
import cat6Img from "../../../assets/users/images/categories/cat6.jpg";

import banner1Img from "../../../assets/users/images/banner/banner-1.webp";
import banner2Img from "../../../assets/users/images/banner/banner-2.webp";
import "./style.scss"
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
// import { AiOutlineEye, AiOutlineShoppingCart } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import { formatter } from 'utils/formater';
import { ProductCard } from 'component';
import { featProducts } from 'utils/common';

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

   

    const renderFeaturedProducts = (data) => {
        const tabList = [];
        const tabPanels = [];

        Object.keys(data).forEach((key, index) => {
            tabList.push(<Tab key={index}>{data[key].title}</Tab>)
            const tabPanel = [];


            data[key].products.forEach((item, j) => {
                tabPanel.push(
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12' key={j}>
                        <ProductCard name={item.name} img={item.img} price={item.price}/>
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