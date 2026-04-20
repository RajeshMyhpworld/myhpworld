import { SITE } from "@/data/site";

// Build a WhatsApp click-to-chat URL with a pre-filled message.
// Opens WhatsApp on mobile, web.whatsapp.com on desktop.
export function whatsappUrl(message = "") {
  const text = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsappClean}?text=${text}`;
}

// Message templates — change the wording here, updates everywhere.
export const waMessages = {
  general: () =>
    `Hi HP World, I'd like to know more about your products and services.`,

  productEnquiry: (product, pin, storeName) =>
    `Hi HP World, I'm interested in the ${product}.${
      pin ? ` My area PIN is ${pin}.` : ""
    }${
      storeName ? ` Is it available at ${storeName}?` : ""
    } Please share details.`,

  storeEnquiry: (storeName) =>
    `Hi HP World ${storeName}, I'd like to visit / know about products available. Please share details.`,

  business: (formData) =>
    `Hi HP World Business team,

I'd like to request a business quote.

Name: ${formData.name || "-"}
Company: ${formData.company || "-"}
City: ${formData.city || "-"}
Industry: ${formData.industry || "-"}
Product: ${formData.category || "-"}
Quantity: ${formData.quantity || "-"}
Email: ${formData.email || "-"}

Details: ${formData.message || "-"}`,

  bookDemo: (storeName) =>
    `Hi HP World ${storeName}, I'd like to book a demo. Please let me know available slots.`,

  service: (storeName) =>
    `Hi HP World ${storeName}, I need service support for my HP device. Please help.`,
};
