import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between px-5 py-5 sm:px-10">
      <nav className="screen-max-width flex w-full justify-between">
        <img
          src={appleImg}
          alt="Apple"
          width={14}
          height={18}
          className="cursor-pointer transition-all duration-300 hover:scale-110"
        />

        <div className="flex justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="cursor-pointer px-5 text-sm text-gray transition-all hover:text-white"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <img
            src={searchImg}
            alt="search"
            width={18}
            height={18}
            className="cursor-pointer transition-all duration-300 hover:scale-110"
          />
          <img
            src={bagImg}
            alt="bag"
            width={18}
            height={18}
            className="cursor-pointer transition-all duration-300 hover:scale-110"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
