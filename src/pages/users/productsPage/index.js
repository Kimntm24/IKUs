import { memo } from 'react';
import Breadcrumb from '../theme/breadcrumb';
import "./style.scss";
import { Link } from 'react-router-dom';
import { categories } from '../theme/header';
import { ROUTERS } from 'utils/router';
import featured1Img from "../../../assets/users/images/featured/cam-bay-bat-ngo.jpg";
import featured2Img from "../../../assets/users/images/featured/kiem-tien-bang-video-ngan.webp";
import featured3Img from "../../../assets/users/images/featured/em-tap-to-mau.webp";
import featured4Img from "../../../assets/users/images/featured/loi-nguyen-ke-thang-cuoc.webp";
import featured5Img from "../../../assets/users/images/featured/nag-molalisa-cuoicung.webp";
import featured6Img from "../../../assets/users/images/featured/tam-tri-tu-chua-lanh.webp";
import featured7Img from "../../../assets/users/images/featured/truy-tim-bong-den.jpg";
import featured8Img from "../../../assets/users/images/featured/tu_chua_lanh_cam_xuc_xau.webp";
import featured9Img from "../../../assets/users/images/featured/tu_nhan.webp";
import { ProductCard } from 'component';

const ProductsPage = () => {
    const sorts =[
        "Giá thấp đến cao",
        "Giá cao đến thấp",
        "Mới đến cũ",
        "Cũ đến mới",
        "Bán chạy nhất",
        "Đang giảm giá",
    ];
    const products= [
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

    return (
        <>
        
        <Breadcrumb name="Danh sách sản phẩm"/>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
                    <div className='sidebar'>
                    <div className='sidebar_item'>
                        <h2>Tìm kiếm</h2>
                        <input type='text' />
                    </div>
                    <div className='sidebar_item'>
                        <h2>Mức giá</h2>
                        <div className='price-range-wrap'>
                            <div>
                                <p>Từ</p>
                                <input type='number' min={0} />
                            </div>
                            <div>
                                <p>Đến</p>
                                <input type='number' min={0} />
                            </div>
                        </div>
                    </div>
                    <div className='sidebar_item'>
                        <h2>Sắp xếp</h2>
                        <div className='tags'>
                        {sorts.map((item, key) => (
                            <div className={`tag ${key === 0 ? "active" : ""}`} key={key}>
                                {item}
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className='sidebar_item'>
                        <h2>Thể loại khác</h2>
                        <ul>
                            {categories.map((name, key) =>(
                                <li key={key}>
                                    <Link to={ROUTERS.USER.PRODUCTS}>{name}</Link>
                                </li>
                            ))}
                            
                        </ul>
                    </div>
                    </div>
                </div>
                <div className='col-lg-9 col-md-12 col-sm-12 col-xs-12'>
                    <div className='row'>
                        {products.map((item, key) =>(
                            <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12' key={key}>
                            <ProductCard name={item.name} img={item.img} price={item.price}/>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
};
export default memo(ProductsPage);