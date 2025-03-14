import { memo } from 'react';
import Breadcrumb from '../theme/breadcrumb';
import "./style.scss";
import featured1Img from "../../../assets/users/images/featured/cam-bay-bat-ngo.jpg";
import { AiOutlineCopy, AiOutlineEye, AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';
import { formatter } from 'utils/formater';
import { ProductCard } from 'component';
import { featProducts } from 'utils/common';
import Quantity from 'component/Quantity';


const ProductDetailPage = () => {
//const imgs = [featured1Img]

    return (
        <>
        
        <Breadcrumb name="Chi tiết sản phẩm"/>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-xl-12 col-md-12 col-sm-12 col-xs-12 product_detail_pic'>
                    <img src={featured1Img} alt='product_pic' />
                    <div className='main'>

                    </div>
                </div>
                <div className='col-lg-6 col-xl-12 col-md-12 col-sm-12 col-xs-12 product_detail_text'>
                    <h2>Cạm Bẫy Bất Ngờ</h2>
                    <div className='seen-icon'>
                        <AiOutlineEye />
                        {` 10 (lượt đã xem) `}
                    </div>
                    <h3>{formatter(188100)}</h3>
                    <p></p>
                    <Quantity />
                    <ul>
                        <li>
                            <b>Tình trạng:</b> <span>Còn hàng</span>
                        </li>
                        <li>
                            <b>Số lượng:</b> <span>20</span>
                        </li>
                        <li>
                            <b>Chia sẻ:</b>{""} 
                            <span>
                                <AiOutlineFacebook/>
                                <AiOutlineLinkedin/>
                                <AiOutlineCopy/>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            
           <div className='product_detail_tab'>
    <h4>Mô tả sản phẩm</h4>
    <div>
        <p><strong>Cạm Bẫy Bất Ngờ</strong></p>
        <ul>
            <li>
                <p>
                    Sau khi Triệu Tùy Phong tìm được tuyến đường tránh camera giám sát, chúng tôi lặng lẽ tiến công từ mé phía nam, xuyên qua bụi cây nhỏ ở phía đông của công ty bảo vệ Thiên Kiếm, đi thẳng một mạch đến cạnh mấy cây hòe già san sát.
                </p>
            </li>
            <li>
                <p>
                    Trụ sở của Thiên Kiếm trước đây là một ngôi trường tiểu học, diện tích rất rộng, tòa nhà giảng dạy bốn tầng được giữ lại có khả năng đã trở thành văn phòng làm việc của công ty hiện giờ. Nhìn từ ngoài vào, tính số lượng cửa sổ sau khi được cải tạo có thể thấy, mỗi phòng học ban đầu được chia lại thành hai, bốn tầng có tổng cộng hơn năm mươi phòng, cửa sổ cũ được nâng cao, toàn bộ rèm cửa được đổi thành loại rèm lá ngang.
                </p>
            </li>
            <li>
                <p>
                    Tôi nói: “Bóng đen rất giỏi sử dụng biện pháp che mắt, đây có thể là sự sắp đặt có chủ ý cốt để chúng ta mất phương hướng. Hiện giờ chúng ta không còn manh mối nào khác, chỉ có thể bắt đầu từ đây. Tuy nhiên, tòa nhà này có đến vài chục căn phòng, Lý Tiểu Bào sẽ bị giam ở đâu? Chiếc bẫy thực sự nằm ở đâu?”
                </p>
            </li>
        </ul>
    </div>

    <div className='product-info'>
        <p><strong>Mã hàng:</strong> 8936230471155</p>
        <p><strong>Nhà Cung Cấp:</strong> 1980 Books</p>
        <p><strong>Tác giả:</strong> Đàn Thanh</p>
        <p><strong>NXB:</strong> Thanh Niên</p>
        <p><strong>Kích Thước Bao Bì:</strong> 20.5 x 14 x 2.3 cm</p>
    </div>
</div>
            <div className='section-title'>
                <h2>Sản phẩm tương tự </h2>
            </div>
            <div className='row'>
                {featProducts.all.products.map((item, key)=>(
                    <div key={key} className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                    <ProductCard img={item.img} name={item.name} price={item.price} />
                </div>
                ))}
                
            </div>

        </div>
        
        </>
    );
};
export default memo(ProductDetailPage);