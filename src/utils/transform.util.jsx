export const transformProduct = (item) => ({
    id: item.id || item.product_id || "",
    name: item.name || item.product_name || "",
    description: item.description || item.product_description || "",
    type: item.type || item.product_type || "",
    price: Number(item.price || item.product_price) || 0,
    images: item.images || item.product_images
        ? (item.images || item.product_images)
            .split(",")
            .map((img) => img.trim())
            .filter(Boolean)
        : [],
});