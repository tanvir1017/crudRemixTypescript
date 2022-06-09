import { Link } from "@remix-run/react";
const NestedRoute = ({ children }: { children: any }) => {
  return (
    <div>
      <ul className="bg-gray-800 text-white mx-auto   max-w-sm  items-center  flex space-x-4 p-2 rounded-t-md mt-2">
        <li>
          <Link to="/Blog">Main</Link>
        </li>
        <li>
          <Link to="/Blog/post">Post Blog</Link>
        </li>
        <li>
          <Link to="/Blog/tech">Tech</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default NestedRoute;
