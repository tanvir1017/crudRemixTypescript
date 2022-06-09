import { Link } from "@remix-run/react";
export function Navigation({ children }: { children: any }) {
  return (
    <>
      <div className="dark:bg-sky-500 bg-gray-500  p-3 ">
        <ul className="dark:text-white mx-auto max-w-sm flex items-center space-x-4">
          <li className="  hover:bg-sky-700 hover:translate-x-2 ease-in duration-300 px-4 py-2 rounded">
            <Link to="/">Home </Link>
          </li>
          <li className="  hover:bg-sky-700 hover:translate-x-2 ease-in duration-300 px-4 py-2 rounded">
            <Link to="/Blog">Blog </Link>
          </li>
          <li className="  hover:bg-sky-700 hover:translate-x-2 ease-in duration-300 px-4 py-2 rounded">
            <Link to="/about">About Us</Link>
          </li>
          <li className="  hover:bg-sky-700 hover:translate-x-2 ease-in duration-300 px-4 py-2 rounded">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </>
  );
}
