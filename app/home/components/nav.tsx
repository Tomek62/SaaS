import { getSession } from "@/lib/auth";

export default async function Nav() {
  const session = await getSession();

  return (
    <div className="navbar md:px-20 ">
      <div className="navbar-start">
        <div className="dropdown">
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
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <a>Accueil</a>
            </li>
            <li>
              <a>Plans</a>
              <ul className="p-2">
                <li>
                  <a>Basic</a>
                </li>
                <li>
                  <a>Prenium</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Demos</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>A propos de nous</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold text-light-brand-emphasis md:text-title">
          FoodPoint
        </a>
      </div>
      <div className="navbar-center hidden items-center font-bold text-black  lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <a>Accueil</a>
          </li>
          <li>
            <details>
              <summary>Plans</summary>
              <ul className="p-2">
                <li>
                  <a>Basic</a>
                </li>
                <li>
                  <a>Prenium</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Demos</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>A propos de nous</a>
          </li>
        </ul>
      </div>
      {session ? (
        <>
        <a>{session.user.name}</a>
        </>
      ) : (
        <>
          <div className="navbar-end">
            <a
              className="mr-6 cursor-pointer font-bold text-black"
              href="http://app.localhost:3000/login"
            >
              Login
            </a>
            <a className="btn btn-sm text-light-brand-inverted">Sign Up</a>
          </div>
        </>
      )}
    </div>
  );
}
