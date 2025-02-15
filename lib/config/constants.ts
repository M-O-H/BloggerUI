export const SITE_CONFIG = {
  title: 'Your Site',
  description: 'Site description',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL
};

export const NAVIGATION_LINKS = [
  { label: "Published Works", link: "articles" },
  { label: "Reading Lists", link: "list" },
  { label: "Comments", link: "comments" },
  { label: "About", link: "about" }
]; 