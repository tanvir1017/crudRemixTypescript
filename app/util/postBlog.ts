import { db } from "./dbConncet.server";
import type { postDatatype } from "./type.server";

export const postBlog = async (post: postDatatype) => {
  const newBlog = await db.post.create({
    data: {
      title: post.title,
      body: post.body,
      profile: post.profile,
      slug: post.slug,
    },
  });
  console.log(newBlog);
};

// export const getAllBlog = async (getBlog) => {

// }
