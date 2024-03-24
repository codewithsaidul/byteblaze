import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  useEffect(() => {
    localStorage.setItem('theme', theme);

    const localTheme = localStorage.getItem('theme');

    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme]);

  const handleToggle = e => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  }
  
  return (
    <div>
      <div className="navbar bg-base-100 shadow-xl px-3 sm:px-5 md:px-10 fixed top-0 left-0 ring-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="text-2xl mr-3 lg:hidden">
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
              className="flex flex-col items-center gap-y-6 py-5 dropdown-content mt-6 z-[1] p-2 shadow bg-base-100 rounded-box w-60"
            >
              <NavLink>
                <a href="#" className="text-lg font-semibold">
                  Home
                </a>
              </NavLink>

              <NavLink>
                <a href="#" className="text-lg font-semibold text-primary">
                  Blog
                </a>
              </NavLink>

              <NavLink>
                <a href="#" className="text-lg font-semibold">
                  Bookmarks
                </a>
              </NavLink>
            </ul>
          </div>
          <NavLink
            to="/"
            className="text-xl sm:text-2xl text-secondary font-extrabold"
          >
            Byte<span className="text-primary">Blaze</span>
          </NavLink>
        </div>

        <div className="navbar-end ">
          <ul className="hidden lg:flex gap-x-10 px-1 mr-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold text-xl"
                  : "font-semibold text-xl"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold text-xl"
                  : "font-semibold text-xl"
              }
            >
              Blog
            </NavLink>

            <NavLink
              to="/bookmarks"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold text-xl"
                  : "font-semibold text-xl"
              }
            >
              Bookmarks
            </NavLink>
          </ul>

          <label className="cursor-pointer grid place-items-center">
            <input
              onChange={handleToggle}
              type="checkbox"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};
