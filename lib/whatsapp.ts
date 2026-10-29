import { siteConfig } from "@/site.config";

export function whatsappUrl(message: string = siteConfig.whatsappMessages.default) {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
