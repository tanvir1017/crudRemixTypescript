import { Outlet } from "@remix-run/react";
import NestedRoute from "./Blog/nestedRoute";
const Blog = () => {
  return (
    <div className="mx-auto max-w-sm pt-2">
      <h1 className="bg-sky-500 p-3 rounded hover:bg-sky-600 text-white first-letter:text-2xl font-semibold">
        This is blog
      </h1>
      <NestedRoute>
        <Outlet />
      </NestedRoute>
    </div>
  );
};

export default Blog;
