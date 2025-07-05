export const metadata = {
  title: `Skymeta - project`,
  description: "Dive into a showcase of our cutting-edge projects, where innovation meets functionality, and design seamlessly intertwines with security. Each project in our portfolio is a testament to our prowess in full-stack web and mobile development, coupled with our commitment to delivering secure, client-centric solutions. Journey through a collection of digital experiences that not only meet but exceed expectations, crafted with a meticulous blend of technical expertise and creative finesse. From robust applications to impenetrable security implementations, our projects embody the essence of Skymeta's dedication to transforming visions into reality. Witness the future of digital excellence, one project at a time.",
  canonical: `https://skymeta.co/projects/`,
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
    title: `skymeta - Projects`,
    description: "Dive into a showcase of our cutting-edge projects, where innovation meets functionality, and design seamlessly intertwines with security. Each project in our portfolio is a testament to our prowess in full-stack web and mobile development, coupled with our commitment to delivering secure, client-centric solutions. Journey through a collection of digital experiences that not only meet but exceed expectations, crafted with a meticulous blend of technical expertise and creative finesse. From robust applications to impenetrable security implementations, our projects embody the essence of Skymeta's dedication to transforming visions into reality. Witness the future of digital excellence, one project at a time.",
    url: `https://skymeta.co/projects/`,
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
    title: `Skymeta - project`,
    description: "",
    image: "https://skymeta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0eeab95a.jpeg&w=640&q=75",
    imageAlt: "project Image",
  },
}

export default function Layout({ children }) {

  return (
    <main>
      {children}
    </main>
  )
}
