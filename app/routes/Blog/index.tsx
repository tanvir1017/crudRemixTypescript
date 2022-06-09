import { useLoaderData } from "@remix-run/react";
import { db } from "~/util/dbConncet.server";
import type { postDatatype } from "~/util/type.server";

export const loader = async () => {
  const data = {
    posts: await db.post.findMany({
      select: { id: true, title: true, profile: true, body: true },
    }),
  };
  console.log(data.posts);
  return data;
};

const Index = () => {
  const { posts } = useLoaderData();
  return (
    <>
      {posts.map((post: postDatatype) => (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.profile} alt="" />
        </>
      ))}
    </>
  );
};

export default Index;
