export const metadata = {
  title: `Skymeta - skills and tools`,
  description: "Discover the arsenal behind Skymeta's success. Our skills and tools page is a testament to the diverse skill set and cutting-edge technologies that power our projects. From programming languages to development frameworks, and security tools to design software, we utilize a comprehensive toolkit to ensure excellence in every aspect of our work. Explore the expertise and technology that set us apart in the digital landscape.",
  canonical: `https://skymeta.co/skills-and-tools/`,
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
    title: `skymeta - skills and tools`,
    description: "Discover the arsenal behind Skymeta's success. Our skills and tools page is a testament to the diverse skill set and cutting-edge technologies that power our projects. From programming languages to development frameworks, and security tools to design software, we utilize a comprehensive toolkit to ensure excellence in every aspect of our work. Explore the expertise and technology that set us apart in the digital landscape.",
    url: `https://skymeta.co/skills-and-tools/`,
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
    title: `Skymeta - skills and tools`,
    description: "",
    image: "https://skymeta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0eeab95a.jpeg&w=640&q=75",
    imageAlt: "skills-and-tools image",
  },
}

export default function Layout({ children }) {

  return (
    <main>
      {children}
    </main>
  )
}
