const API_URL = "http://localhost/bookshop_api";

export const getCategories = async () => {
    try {
        const response = await fetch(`${API_URL}/getCategories.php`);
        if (!response.ok) throw new Error("Lỗi API");
        return await response.json();
    } catch (error) {
        console.error("Lỗi khi lấy danh mục:", error);
        return [];
    }
};

export const getProducts = async () => {
    try {
        const response = await fetch(`${API_URL}/getProducts.php`);
        if (!response.ok) throw new Error("Lỗi API");
        return await response.json();
    } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
        return [];
    }
};
