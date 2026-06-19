export const SITE = {
  name: "Beautiful Teachers",
  whatsappNumber: "18019097340",
  whatsappDisplay: "+1 801 909 7340",
  email: "hello@beautifulteachers.com",
};

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
