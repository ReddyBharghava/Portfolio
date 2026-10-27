// import { Link } from "react-router-dom";

// interface NavbarProps {
//   activePage: "home" | "about" | "projects" | "gallery" | "contact";
// }

// const Navbar = ({ activePage }: NavbarProps) => {
//   const menus = [
//     { name: "Home", href: "/", key: "home" },
//     { name: "About", href: "/about", key: "about" },
//     { name: "Projects", href: "/projects", key: "projects" },
//     { name: "Gallery", href: "/gallery", key: "gallery" },
//     { name: "Contact", href: "/contact", key: "contact" },
//   ];

//   return (
//     <nav className="bg-[#111111] py-8">
//       <div className="max-w-6xl mx-auto">
//         <ul className="flex justify-center items-center gap-14">
//           {menus.map((menu) => (
//             <li key={menu.key}>
//               <Link to={menu.href} className={`text-sm font-medium transition-colors duration-300 ${
//                      activePage === menu.key ? "text-[#D8FF2F]" : "text-white hover:text-[#D8FF2F]"}`}>
//                       {menu.name}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  activePage: "home" | "about" | "projects" | "gallery" | "contact";
}

const Navbar: React.FC<NavbarProps> = ({ activePage }) => {
  const menus = [
    { name: "Home", href: "/", key: "home" },
    { name: "About", href: "/about", key: "about" },
    { name: "Projects", href: "/projects", key: "projects" },
    { name: "Gallery", href: "/gallery", key: "gallery" },
    { name: "Contact", href: "/contact", key: "contact" },
  ] as const;

  return (
    <nav className="w-full bg-[#111111] px-4 py-5 sm:px-6 sm:py-6 md:py-8">
      <div className="mx-auto w-full max-w-6xl">
        <ul
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-5
            gap-y-4
            sm:gap-x-8
            md:gap-x-10
            lg:gap-x-14
          "
        >
          {menus.map((menu) => {
            const isActive = activePage === menu.key;

            return (
              <li key={menu.key}>
                <Link
                  to={menu.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                    inline-block
                    text-sm
                    font-medium
                    transition-colors
                    duration-300
                    sm:text-base
                    ${
                      isActive
                        ? "text-[#D8FF2F]"
                        : "text-white hover:text-[#D8FF2F]"
                    }
                    focus-visible:rounded
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-[#D8FF2F]
                  `}
                >
                  {menu.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;