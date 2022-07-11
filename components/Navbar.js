import Link from "next/link";
const Navbar = () => (
  <header className="w-full py-6 bg-transparent backdrop-blur-lg flex justify-center items-center fixed z-[2]">
    <nav>
      <Link href="/">
        <a className="my-4 mx-8 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-50 duration-500 hover:opacity-100 hover:duration-500 py-2 px-4 rounded-md shadow-md font-bold">
          Home
        </a>
      </Link>
      <Link href="/blog">
        <a className="my-4 mx-8 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-50 duration-500 hover:opacity-100 hover:duration-500 py-2 px-4 rounded-md shadow-md font-bold">
          Blog
        </a>
      </Link>
      <Link href="/github">
        <a className="my-4 mx-8 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-50 duration-500 hover:opacity-100 hover:duration-500 py-2 px-4 rounded-md shadow-md font-bold">
          Github
        </a>
      </Link>
    </nav>
  </header>
);
export default Navbar;
