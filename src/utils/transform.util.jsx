const toCloudinary = (url) => {
  if (!url || !url.includes("res.cloudinary.com")) return url;
  return url.replace(
    /\/image\/upload\//,
    "/image/upload/c_fill,w_600,h_686,g_auto,f_auto,q_auto/"
  );
};

const toBooleanFlag = (value) => {
  const normalized = String(value ?? "").trim().toLowerCase();
  return normalized === "true" || normalized === "yes" || normalized === "1";
};

export const transformProduct = (item) => ({
  id: item.id || item.product_id || "",
  name: item.name || item.product_name || "",
  description: item.description || item.product_description || "",
  type: item.type || item.product_type || "",
  price: Number(item.price || item.product_price) || 0,
  trending: toBooleanFlag(item.trending ?? item.is_trending),
  images: item.images || item.product_images
    ? (item.images || item.product_images)
        .split(",")
        .map((img) => toCloudinary(img.trim()))
        .filter(Boolean)
    : [],
});