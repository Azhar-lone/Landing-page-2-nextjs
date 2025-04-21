import {
  FacebookIcon,
  InstagramIcon,
  ShieldCheckIcon,
  HelpCircleIcon,
  TruckElectricIcon,
  TwitterIcon,
} from "lucide-react";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about-us", label: "About Us" },
  { href: "#contact-us", label: "Contact Us" },
];

type ShoeType = {
  thumbnail: string;
  image: string;
}[];

export const shoes: ShoeType = [
  {
    thumbnail: "/images/thumbnail-shoe1.svg",
    image: "/images/big-shoe1.png",
  },
  {
    thumbnail: "/images/thumbnail-shoe2.svg",
    image: "/images/big-shoe2.png",
  },
  {
    thumbnail: "/images/thumbnail-shoe3.svg",
    image: "/images/big-shoe3.png",
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: "/images/shoe4.svg",
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: "/images/shoe5.svg",
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: "/images/shoe6.svg",
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: "/images/shoe7.svg",
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

export const services = [
  {
    Icon: TruckElectricIcon,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    Icon: ShieldCheckIcon,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    Icon: HelpCircleIcon,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: "/images/customer.jpg",
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: "/images/customer.jpg",
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "link 1", link: "/" },
      { name: "Test Link 2", link: "/" },
      { name: "Test Link 3", link: "/" },
      { name: "This is link 4", link: "/" },
      { name: "Link 5", link: "/" },
      { name: "Another link", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@test.com", link: "mailto:customer@test.com" },
      { name: "+12345678901", link: "tel:+12345678901" },
    ],
  },
];

export const socialMedia = [
  { Icon: FacebookIcon },
  { Icon: TwitterIcon },
  { Icon: InstagramIcon },
];
