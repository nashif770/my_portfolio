import Link from "next/link";

const NavLink = ({ href, title }) => {

  console.log("href", href)
  console.log("title", title)

  return (
    <Link
      href={href}
      className="block py-2 pl-3 text-[#ADB7BE] h-[30px] sm:text-xl rounded md:p-0 hover:text-white"
    >
      <h1>{title}</h1>
    </Link>
  );
};


export default NavLink;