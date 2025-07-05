import './globals.css'
import "../../public/Oxygen.css";
import 'react-toastify/dist/ReactToastify.css';
import "node_modules/flag-icons/css/flag-icons.min.css";
import { Providers } from '@/redux/provider';

export const metadata = {
  title: "Skymeta - Innovative Web and mobile Solutions, Security Experts.",
  description:
    "A premier software company specializing in cutting-edge full-stack web and mobile development, seamlessly integrating innovation and security. Our dedicated team excels in crafting client-centric solutions, ensuring every line of code serves a dual purpose of enhancing user experiences and fortifying digital fortresses. With expertise in penetration testing, we proactively secure your digital assets, offering impenetrable applications. As trailblazers in innovation and security, our solutions not only meet but anticipate and adapt to the evolving digital landscape. Collaborate with us to elevate your digital presence and embark on a future-proofed, SEO-optimized journey. Discover excellence at the intersection of development and security.",
  canonical: "https://www.skymeta.co/",
  openGraph: {
    url: "https://www.skymeta.co/",
    title:
      "Build awesome and innovative web and mobile applications with skymeta",
    description:
      "At Skymeta, discover comprehensive solutions encompassing innovative full-stack web and mobile development, coupled with expert penetration testing for robust, secure digital experiences",
    images: [
      {
        url: "https://skymeta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0eeab95a.jpeg&w=640&q=75",
        width: 600,
        height: 500,
        alt: "Awesome and innovative Technologies",
        type: "image/jpeg",
      },
    ],
    siteName: "Skymeta",
    availability: "https://schema.org/InStock",
    condition: "https://schema.org/NewCondition",
    category: "Digital Solutions and Security",
    tag: [
      "full stack development",
      "mobile app solutions",
      "penetration testing",
      "innovation in tech",
      "secure digital experiences",
      "client-centric solutions",
      "future-proof development",
      "web development experts",
      "user experience design",
      "digital security"
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@skymeta",
    title: `Skymeta`,
    description: "",
    image: "https://skymeta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0eeab95a.jpeg&w=640&q=75",
    imageAlt: "skymeta Image",
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="text-[var(--neutral-1)] overflow-x-hidden" style={{ fontFamily: "Oxygen, sans-serif" }}>
        <Providers>
          {children}
        </Providers>
      </body>

    </html>
  )
}
