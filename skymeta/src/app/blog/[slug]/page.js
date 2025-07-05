import BlogBody from "@/components/blogBody";
import BlogBodyHeader from "@/components/blogBodyHeader";
import NoData from "@/components/nodata";
import { getAllBlogs, getBlog } from "@/functions/blog";
import { revalidateTag } from "next/cache";



export default async function Home({ params }) {
  const blogs = await getAllBlogs();
  const { slug } = params;
  const Blog = await getBlog({ blogs, slug });

  revalidateTag("blog");


  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative grid-background">
      <div className="fixed top-[-25vw] right-[-25vw] rotate-45 w-[50vw] h-[50vw] bg-[var(--primary20)] rounded-3xl z-0 "></div>
      <div className="fixed top-[-22vw] right-[-25vw] rotate-45 w-[50vw] h-[50vw] bg-[var(--primary10)] rounded-3xl z-0"></div>
      {!Blog.exist ? (
        <NoData text={"No data to show"} />
      ) : (
        <>
          <BlogBodyHeader blog={Blog.data} />
          <BlogBody blog={Blog.data} />
        </>
      )}
    </main>
  )
}
