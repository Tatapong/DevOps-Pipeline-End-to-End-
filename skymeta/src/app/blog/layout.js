export const metadata = {
  title: `Skymeta - Blogs`,
  description: "Dive into our insightful blogs, where we unravel the latest trends, share expert insights, and explore the dynamic landscape of technology, development, and cybersecurity. From industry updates to practical tips, our blog is your gateway to staying informed and inspired. Join us as we navigate the digital realm, one engaging post at a time.",
  canonical: `https://skymeta.co/blog/`,
  keywords: [
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
  image: {
    url: "https://skymeta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0eeab95a.jpeg&w=640&q=75",
    width: 600,
    height: 500,
    alt: "Awesome and innovative Technologies",
    type: "image/jpeg",
  },
  openGraph: {
    title: `skymeta - Blog`,
    description: "Dive into our insightful blogs, where we unravel the latest trends, share expert insights, and explore the dynamic landscape of technology, development, and cybersecurity. From industry updates to practical tips, our blog is your gateway to staying informed and inspired. Join us as we navigate the digital realm, one engaging post at a time.",
    url: `https://skymeta.co/blog/`,
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
    images: [
      {
        url: "https://skymeta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0eeab95a.jpeg&w=640&q=75",
        width: 600,
        height: 500,
        alt: "Awesome and innovative Technologies",
        type: "image/jpeg",
      },
    ],
    image: {
      url: "https://skymeta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0eeab95a.jpeg&w=640&q=75",
      width: 600,
      height: 500,
      alt: "Awesome and innovative Technologies",
      type: "image/jpeg",
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@skymeta",
    title: `Skymeta - Blogs`,
    description: "",
    image: "https://skymeta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0eeab95a.jpeg&w=640&q=75",
    imageAlt: "Blogs Image",
  },
}

export default function Layout({ children }) {

  return (
    <main>
      {children}
    </main>
  )
}
