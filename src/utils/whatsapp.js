import { SITE_CONFIG } from "../config/siteConfig.js";

/**
 * Generates and opens a pre-filled WhatsApp inquiry URL.
 * Works seamlessly on mobile devices (WhatsApp App) and desktop (WhatsApp Web).
 */
export function getWhatsAppUrl({
  propertyTitle = "",
  city = "",
  roomType = "",
  moveInMonth = "",
  location = "",
  customMessage = ""
} = {}) {
  const rawPhone = SITE_CONFIG.whatsappNumber || "919110155081";
  const basePhone = rawPhone.replace(/\D/g, "");
  let text = customMessage;

  if (!text) {
    if (propertyTitle) {
      text = `Hi Yealth, I am interested in booking/visiting "${propertyTitle}". Please share pricing, availability, and room details.`;
    } else if (location || roomType || moveInMonth || city) {
      const parts = [];
      if (roomType && roomType !== "All Types") parts.push(`a ${roomType}`);
      else parts.push("a student room");

      if (location) parts.push(`in ${location}`);
      else if (city && city !== "All Cities") parts.push(`in ${city}`);

      if (moveInMonth) parts.push(`moving in by ${moveInMonth}`);

      text = `Hi Yealth, I am looking for ${parts.join(" ")}. Can you please share available options and schedule a visit?`;
    } else {
      text = SITE_CONFIG.defaultWhatsAppMessage || "Hi Yealth! I am looking for student accommodation. Please share options.";
    }
  }

  const encoded = encodeURIComponent(text);
  return `https://wa.me/${basePhone}?text=${encoded}`;
}

export function openWhatsAppInquiry(options = {}) {
  const url = getWhatsAppUrl(options);
  window.open(url, "_blank", "noopener,noreferrer");
  return url;
}
