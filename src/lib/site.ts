export const SITE = {
  name: "Beautiful Teachers",
  whatsappNumber: "2348166358607",
  whatsappDisplay: "+234 816 635 8607",
  email: "hello@beautifulteachers.com",
};

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
