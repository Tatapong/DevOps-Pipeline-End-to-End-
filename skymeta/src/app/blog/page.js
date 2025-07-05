import BlogHeader from "@/components/blogHeader";
import Blogs from "@/components/blogs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { getAllBlogs } from "@/functions/blog";
import { revalidateTag } from "next/cache";





export default async function Home() {
  revalidateTag("blog");

  const blogs = await getAllBlogs()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative grid-background overflow-x-hidden">
      <div className="absolute top-[-25vw] right-[-25vw] rotate-45 w-[50vw] h-[50vw] bg-[var(--primary20)] rounded-3xl z-0 "></div>
      <div className="absolute top-[-22vw] right-[-25vw] rotate-45 w-[50vw] h-[50vw] bg-[var(--primary10)] rounded-3xl z-0"></div>
      <Header />
      <BlogHeader />
      <Blogs blogs={blogs}/>
      <Footer />
    </main>
  )
}
