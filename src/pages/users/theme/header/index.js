import { memo } from 'react';
import "./style.scss"
import { MdOutlineFacebook, MdOutlineWhereToVote } from 'react-icons/md';
import { FaInstagram, FaRegUser, FaTwitter } from 'react-icons/fa';
import { IoCall, IoMail } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header_top'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 header_top_left'>
                        <ul>
                            <li><IoMail />bookshop@gmail.com</li>
                            <li><MdOutlineWhereToVote />Đống Đa, Hà Nội</li>
                        </ul>
                    </div>
                    <div className='col-6 header_top_right'>
                        <ul>
                            <li><Link to={""}><MdOutlineFacebook /></Link></li>
                            <li><Link to={""}><FaInstagram /></Link></li>
                            <li><Link to={""}><FaTwitter /></Link></li>
                            <li><Link to={""}><IoCall /></Link></li>
                            <li><Link to={""}><FaRegUser /></Link> <span>Đăng nhập</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default memo(Header);