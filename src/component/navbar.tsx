import Link from "next/link";
import Menu from "./menu";
import SearchBar from "./searchbar";
import NavIcons from "./navicons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/*Mobile*/}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">Peak-Tree</div>
        </Link>
        <Menu />
      </div>
      {/*Screens*/}
      <div className="hidden md:flex items-center justify-center pt-5">
        {/*Left*/}
        <div className="w-1/3 xl:w-1/2">
          <div className="flex items-center gap-12">
            <Link href="/">
              <div className="flex gap-2">
                <img
                  src="https://t3.ftcdn.net/jpg/06/97/41/38/360_F_697413879_nW2lZwN1ebsgrQ01xCytNTR9oKcAdmKW.jpg"
                  alt="/"
                  width={28}
                  height={28}
                />
                <div className="text-2xl tracking-wide">Peak~Tree</div>
              </div>
            </Link>
            <div className="flex gap-4">
              <Link href="/">Home</Link>
              <Link href="/">Shop</Link>
              <Link href="/">Deals</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
            </div>
          </div>
        </div>
        {/*Right*/}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
