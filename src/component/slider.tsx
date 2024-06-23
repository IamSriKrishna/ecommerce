"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Summer Sales Collection",
    des: "Sale! Up To 50% off!",
    img: "https://images.ctfassets.net/69ywg46tbhs3/2dqfSRoGoDBuytrsbhgxdN/9c07dace1811ff748ad4619923f33a93/shopping-homepage-sqaure-img-_1__.jpg?w=1116&h=768&fit=scale&q=100&fm=webp",
    url: "/list",
    bg: "bg-gradient-to-r from-contrast_blue-50 to-contrast_blue-50",
  },
  {
    id: 2,
    title: "Peak-Tree Collection",
    des: "Get Up To 50% Voucher",
    img: "https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2024/05/22da9-malls-in-mumbai.jpg?fit=1000%2C678&ssl=1",
    url: "/list",
    bg: "bg-gradient-to-r from-yellow-50 to-yellow-500",
  },
  {
    id: 3,
    title: "Summer Sales Collection",
    des: "Sale! Up To 50% off!",
    img: "https://island.lk/wp-content/uploads/2022/08/shop1.png",
    url: "/list",
    bg: "bg-gradient-to-r from-contrast_blue-50 to-contrast_blue-50",
  },
];
const Slider = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/*Text Container */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative flex items-center justify-center gap-8 flex-col text-center 2xl:gap-12">
              <h1 className="text-xl lg:text-xl 2xl:text-5xl">{slide.des}</h1>
              <h2 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h2>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4 transition-all duration-200 ease-in-out hover:bg-black hover:shadow-2xl hover:shadow-black hover:scale-110">
                  Shop Now
                </button>
              </Link>
            </div>
            {/*Image Container */}
            <div className="relative w-1/2">
              <img
                src={slide.img}
                alt=""
                sizes="100%"
                className="object-cover w-full h-full "
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-3">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
