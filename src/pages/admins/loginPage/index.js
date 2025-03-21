import { memo } from 'react';
import "./style.scss"
import { useNavigate } from 'react-router-dom';
import { ROUTERS } from 'utils/router';
const LoginPage = () => {
    const navigate = useNavigate();
    const hanldeSubmit = (e) => {
        e.preventDefault();
        navigate(ROUTERS.ADMIN.ORDERS)
    }
    return (
        <>
        <div className='login'>
            <div className='login_container'>
                <h2 className='login_title'>ĐĂNG NHẬP</h2>
                <form className='login_form' onSubmit={hanldeSubmit}>
                    <div className='login_form-group'>
                        <label htmlFor='username' className='login_label'>
                            Tên đăng nhập
                        </label>
                        <input type='text' id='username' name='username' required />
                    </div>
                    <div className='login_form-group'>
                        <label htmlFor='password' className='login_label'>
                             Mật khẩu
                        </label>
                        <input type='password' id='username' name='password' required />
                    </div>
                    <button type='submit' className='login_button'>
                        ĐĂNG NHẬP
                    </button>
                </form>
            </div>
        </div>       
        </>
    );
};
export default memo(LoginPage);