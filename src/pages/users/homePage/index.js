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

import "./style.scss"
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

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

      const sliderItems =[
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
                    price: 188.100,
                },
                {
                    img: featured2Img,
                    name: "Kiếm Tiền Bằng Video Ngắn",
                    price: 197.100,
                }
            ]
        },
        kinhte: {
            title: "Kinh tế",
            products: [
                {
                    img: featured2Img,
                    name: "Kiếm Tiền Bằng Video Ngắn",
                    price: 197.100,
                }
            ]
        }
    }

    const renderFeaturedProducts =(data) => {
        const tabList = [];
        const tabPanels = [];

        Object.keys(data).forEach((key, index)=>{
            tabList.push(<Tab key={index}>{data[key].title}</Tab>)
            const tabPanel=[];

            
            data[key].products.forEach((item, j) => {
                tabPanel.push(
                    <div key={j}>{item.name}</div>
                )
            })
            tabPanels.push(tabPanel)

        })

        return(
            <Tabs>
                <TabList>
                    {tabList}
                </TabList>
                {
                    tabPanels.map((item, key) =>(
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
                    style={{backgroundImage: `url(${item.bgImg})`}}
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
        
        </>
    );
};
export default memo(HomePage);