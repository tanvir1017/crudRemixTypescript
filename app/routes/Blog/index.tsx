import { useLoaderData } from "@remix-run/react";
import * as React from "react";
import { db } from "~/util/dbConncet.server";
import type { postDatatype } from "~/util/type.server";

export const loader = async () => {
  const data = {
    posts: await db.post.findMany(),
  };
  return data;
};

const Index = () => {
  const data = useLoaderData();
  return (
    <>
      {data.posts.map((post: postDatatype) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.profile} alt="" />
        </div>
      ))}
    </>
  );
};

export default Index;
