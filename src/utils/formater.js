export const formatter = (number) => {
    return new Intl.NumberFormat('vi-VN', {  // Dùng 'vi-VN' thay vì 'vi_VN'
        style: "currency",
        currency: "VND",
    }).format(number);
};
