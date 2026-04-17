// utils/whatsapp.js

const CLIENT_PHONE_NUMBER = import.meta.env.VITE_CLIENT_PHONE_NUMBER;

export const openWhatsApp = (message) => {
  window.open(
    `https://wa.me/91${CLIENT_PHONE_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};