import {
  applyCloudinaryTransform,
  buildCloudinaryUrl,
  isCloudinaryUrl,
} from "./cloudinary.util";

const PRODUCT_TRANSFORM =
  "c_fill,w_600,h_686,g_auto,f_auto,q_auto";

const toCloudinary = (value) => {
  if (!value) return value;
  if (isCloudinaryUrl(value)) {
    return applyCloudinaryTransform(value, PRODUCT_TRANSFORM);
  }
  return buildCloudinaryUrl(value, { transformations: PRODUCT_TRANSFORM });
};

const toBooleanFlag = (value) => {
  const normalized = String(value ?? "").trim().toLowerCase();
  return normalized === "true" || normalized === "yes" || normalized === "1";
};

const buildImagePaths = (item) => {
  const rawImages =  item.product_images|| item.images;
  if (!rawImages) return [];

  const folder =
    item.folder ||
    item.image_folder ||
    item.product_folder ||
    "";

  return rawImages
    .split(",")
    .map((img) => img.trim())
    .filter(Boolean)
    .map((img) => {
      if (!folder) return img;
      if (isCloudinaryUrl(img) || img.includes("/")) return img;
      return `v1/products/${folder}/${img}`;
    });
};

export const transformProduct = (item) => ({
  id: item.id || item.product_id || "",
  name: item.name || item.product_name || "",
  description: item.description || item.product_description || "",
  type: item.type || item.product_type || "",
  price: Number(item.price || item.product_price) || 0,
  trending: toBooleanFlag(item.trending ?? item.is_trending),
  images: buildImagePaths(item)
    .map((img) => toCloudinary(img))
    .filter(Boolean),
});

