"use client";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <img
        src="/menu.png"
        alt="/"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prep) => !prep)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col gap-8 items-center justify-center text-xl z-10">
          <Link href="/">Homepage</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(19)</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
