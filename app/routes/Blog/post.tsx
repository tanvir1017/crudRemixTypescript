import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import * as React from "react";
import { postBlog } from "~/util/postBlog";

export const action: ActionFunction = async ({ request }) => {
  const values = await request.formData();
  const { title, body, profile, slug } = Object.fromEntries(values);
  console.log(title, body, profile, slug);
  const post = {
    title: title.toString(),
    body: body.toString(),
    profile: profile.toString(),
    slug: slug.toString(),
  };
  postBlog(post);
  return redirect("/blog");
};

const Post = () => {
  const [img, setImg] = React.useState<string>("");
  const handleImageUpload = async (e: any) => {
    const imageData = new FormData();
    imageData.set("key", "e5ee167159f68b03d09226e059961827");
    imageData.append("image", e.target.files[0]);
    const res = await window.fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: imageData,
    });
    const data = await res.json();
    setImg(data.data.url);
  };

  return (
    <div>
      <h1 className="bg-sky-500 mt-3 p-3 rounded hover:bg-sky-600 text-white  font-semibold">
        Post a blog page
      </h1>
      <div className="form-control mt-6">
        <Form method="post">
          <div>
            <label htmlFor="title">Blog title</label>
            <input
              type="text"
              placeholder="Blog title"
              name="title"
              className="p-2  bg-gray-200 ml-2 border-2 border-sky-500"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="blogBody">Blog body</label>
            <input
              type="text"
              placeholder="blog body"
              name="body"
              className="p-2 bg-gray-200 ml-2"
            />
          </div>{" "}
          <label htmlFor="imgUrl">Giv a slug</label>
          <input
            type="text"
            className="p-2 bg-gray-200 ml-2 mt-2 "
            name="slug"
          />
          <div>
            <label htmlFor="imgUrl">Blog img</label>
            <input
              type="text"
              className="p-2 bg-gray-200 ml-2 mt-2 "
              name="profile"
              defaultValue={img}
              readOnly
              onChange={() => console.log("hello Img")}
            />
          </div>
          <img src={img} alt="" />
          <br />
          <button
            disabled={Boolean(img === "" ? true : false)}
            type="submit"
            className="mt-6 text-center px-5 py-1 bg-sky-500 text-white rounded"
          >
            {" "}
            Post
          </button>
        </Form>
      </div>
      <label className="block">
        <span className="sr-only">Choose profile photo</span>
        <input
          type="file"
          className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100"
          onChange={handleImageUpload}
        />
      </label>
    </div>
  );
};

export default Post;
