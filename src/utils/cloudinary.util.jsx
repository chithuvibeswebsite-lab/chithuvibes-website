const DEFAULT_TRANSFORMATIONS = "q_auto,f_auto";

const getBaseUrl = (resourceType = "image") => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const baseOverride = import.meta.env.VITE_CLOUDINARY_BASE_URL;

  if (baseOverride) {
    const normalized = baseOverride.replace(/\/$/, "");
    return `${normalized}/${resourceType}/upload`;
  }

  if (!cloudName) {
    return "";
  }

  return `https://res.cloudinary.com/${cloudName}/${resourceType}/upload`;
};

export const isCloudinaryUrl = (url) =>
  typeof url === "string" && url.includes("res.cloudinary.com");

export const buildCloudinaryUrl = (
  publicId,
  { resourceType = "image", transformations } = {}
) => {
  if (!publicId) return "";

  const baseUrl = getBaseUrl(resourceType);
  if (!baseUrl) return publicId;

  if (transformations === null) {
    return `${baseUrl}/${publicId}`;
  }

  const transformValue = transformations ?? DEFAULT_TRANSFORMATIONS;
  return `${baseUrl}/${transformValue}/${publicId}`;
};

export const applyCloudinaryTransform = (
  url,
  transformations = DEFAULT_TRANSFORMATIONS
) => {
  if (!isCloudinaryUrl(url) || transformations === null) return url;

  return url.replace(
    /\/image\/upload\//,
    `/image/upload/${transformations}/`
  );
};
