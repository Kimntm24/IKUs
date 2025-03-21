import { memo, useEffect, useState } from 'react';
import "./style.scss"
import { formatter } from 'utils/formater';

const STATUS = {
    ORDERED: {
        key: "ORDERED",
        label: "Đã đặt",
        className: "orders_dropdown-item",
    },
    PREPARING: {
        key: "PREPARING",
        label: "Lên đơn",
        className: "orders_dropdown-item",
    },
    DELIVERED: {
        key: "DELIVERED",
        label: "Đã giao hàng",
        className: "orders_dropdown-item",
    },
    CANCELLED: {
        key: "CANCELLED",
        label: "Hủy đơn",
        className: "orders_dropdown-item orders_dropdown-item--danger",
    },
};

const OrderPage = () => {
    const orders = [
        {
            id: 1,
            total: 200000,
            customername: "Nguyễn Văn A",
            date: "2024-12-10",
            status: "Đã đặt",
        },
        {
            id: 2,
            total: 200000,
            customername: "Nguyễn Văn B",
            date: "2024-12-10",
            status: "Đã giao hàng",
        },
    ];

    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const isDropdown = event.target.closest(".orders_dropdown");
            if (!isDropdown) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <div className='container'>
                <div className='orders'>
                    <h2>Quản lý đơn hàng</h2>
                    <div className='orders_content'>
                        <table className='orders_table'>
                            <thead>
                                <tr>
                                    <th>Mã đơn hàng</th>
                                    <th>Tổng đơn</th>
                                    <th>Khách hàng</th>
                                    <th>Ngày đặt</th>
                                    <th>Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <span>{item.id}</span>
                                        </td>
                                        <td>{formatter(item.total)}</td>
                                        <td>{item.customername}</td>
                                        <td>{new Date(item.date).toLocaleDateString()}</td>
                                        <td>
                                            <div className='orders_dropdown'>
                                                <button className={`orders_action-button`}
                                                    onClick={() => setActiveDropdown(item.id)}>
                                                    {Object.values(STATUS).find((s) => s.label === item.status)?.label || "Không xác định"}
                                                    <span className='arrow'>▼</span>
                                                </button>
                                                {activeDropdown === item.id && (
                                                    <div className='orders_dropdown-menu'>
                                                        {Object.values(STATUS).map((status) => (
                                                            <button key={status.key} className={status.className}
                                                                onClick={() => setActiveDropdown(null)}>
                                                                {status.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className='orders_footer'>
                        <div className='orders_pagination'>
                            <div className='orders_page-number'>
                                <button className='orders_page-btn'>←</button>
                                <button className='orders_page-btn orders_page-btn--active'>1</button>
                                <button className='orders_page-btn'>2</button>
                                <button className='orders_page-btn'>3</button>
                                <button className='orders_page-btn'>4</button>
                                <button className='orders_page-btn'>5</button>
                                <button className='orders_page-btn'>→</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(OrderPage);
