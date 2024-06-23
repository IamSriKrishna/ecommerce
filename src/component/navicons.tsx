"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModel from "./cartmodel";

const NavIcons = () => {
  const router = useRouter();
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const LoggedIn = false;

  const handleProfile = () => {
    if (!LoggedIn) {
      router.push("/login");
    }
  };
  return (
    <div className="items-center flex gap-4 xl:gap-6 relative">
      <img
        src="https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid"
        alt="/"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={() => setProfileOpen((prep) => !prep)}
      />
      {isProfileOpen && (
        <div className="w-max absolute p-4 rounded-md left-0 bg-white top-12 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 gap-2 flex flex-col" >
          <div className="cursor-pointer">Profile</div>
          <div className="cursor-pointer" onClick={handleProfile}>
            Logout
          </div>
        </div>
      )}
      <img
        src="https://icons.veryicon.com/png/o/object/material-design-icons/notifications-1.png"
        alt="/"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div>
        <img
          src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-2048x2047-gv68pvgw.png"
          alt="/"
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={() => setCartOpen((prep) => !prep)}
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-mette rounded-full text-sm items-center flex justify-center text-white">
          2
        </div>
      </div>
      {isCartOpen && <CartModel />}
    </div>
  );
};

export default NavIcons;
