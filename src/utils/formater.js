export const formatter = (number) => {
    return new Intl.NumberFormat('vi_VN', {
        style: "currency",
        currency: "VND",
}).format(number);
}