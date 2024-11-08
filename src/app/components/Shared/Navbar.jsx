import Link from "next/link";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link href={"/"}> Home</Link>
      </li>
      <li>
        <Link href={"/acts"}> Acts</Link>
      </li>
      <li>
        <Link href={"/calculator"}> Calculate TAX</Link>
      </li>
      <li>
        <Link href={"/about"}> About us</Link>
      </li>
      <li>
        <Link href={"/contact"}> Contact us</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar mx-auto max-w-7xl h-20 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2 text-lg"
            >
              {navItems}
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost text-2xl">
            AR & Associates
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 text-lg">{navItems}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
