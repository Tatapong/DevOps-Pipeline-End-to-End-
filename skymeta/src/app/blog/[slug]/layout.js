import Footer from "@/components/footer";
import Header from "@/components/header";
import { getAllBlogs, getBlog } from "@/functions/blog";
import { revalidateTag } from "next/cache";



export async function generateMetadata({ params }) {
  const blogs = await getAllBlogs();
  const { slug } = params;
  const Blog = await getBlog({ blogs, slug });


  let mainblogImage = {
    url: Blog.data.image,
    width: 800,
    height: 600,
    alt: Blog.data.title || "Main blog Image",
    type: "image/jpeg",
  };

  if (!Blog.exist) {
    return {
      title: "blog Not Found - Lachofit blog",
      description:
        "Explore our range of blogs as this one couldn’t be found.",
      openGraph: {
        title: "blog Not Found - Lachofit blog",
        description:
          "Unable to locate the blog in our inventory. Discover more at Lachofit!",
        url: "https://www.skymeta.co/blog/",
      },
      twitter: {
        card: "summary",
        site: "@Lachofitblog",
        title: "blog Not Found - Lachofit blog",
        description:
          "Couldn't find the blog? Explore other top choices at Lachofit!",
        image:
          "https://skymeta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0eeab95a.jpeg&w=640&q=75",
        imageAlt: "blog Not Found",
      },
    };
  }

  const truncatedDescription =
    Blog.data.intro.length > 157
      ? Blog.data.intro.substring(0, 157) + "..."
      : Blog.data.intro;

  return {
    title: `${Blog.data.title} - Buy Now at Lachofit blog`,
    description: truncatedDescription,
    canonical: `https://www.skymeta.co/blog/${Blog.data.slug}/`,
    keywords: Blog.data.category,
    images: [mainblogImage],
    image: mainblogImage,
    openGraph: {
      title: `${Blog.data.title} - Available at Lachofit blog`,
      description: truncatedDescription,
      url: `https://www.skymeta.co/blog/${Blog.data.slug}/`,
      price: Blog.data.price,
      priceCurrency: "XAF",
      availability: "https://schema.org/InStock",
      condition: "https://schema.org/NewCondition",
      retailerItemId: Blog.data.id.toString(),
      category: Blog.data.category,
      tag: Blog.data.category,
      images: [mainblogImage],
      image: mainblogImage,
      blog: {
        category: Blog.data.category,
        tag: Blog.data.category,
      },
    },
    twitter: {
      card: "summary_large_image",
      site: "@Lachofitblog",
      title: `${Blog.data.title} - Available Now at Lachofit`,
      description: truncatedDescription,
      image:
        Blog.data.image ||
        "https://skymeta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0eeab95a.jpeg&w=640&q=75",
      imageAlt: Blog.data.title || "blog Image",
    },
  };
}

export default function BlogLayout({ children }) {
  revalidateTag("blog")
  return (
    <html lang="en">

      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
