"use sever";

import { backendUrl } from "@/data/url";


export const getAllBlogs = async () => {
  return await fetch(`${backendUrl}/api/v1/articles`, {
    next: { revalidate: 120, tags: ["blog"] },
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data.reverse();
    });
};

export const getBlog = async ({ blogs, slug }) => {
  const Blog = blogs?.find((b) => b.slug === slug);

  if (Blog) {
    return { exist: true, data: Blog };
  }

  return { exist: false, data: {} };
};
