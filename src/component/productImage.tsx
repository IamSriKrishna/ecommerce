"use client";

import { useState } from "react";

const images = [
  {
    id: 1,
    img: "https://i5.walmartimages.com/asr/ec61137d-08a6-4124-abb2-ad3b7d78e3e9.9571442bba853fc0fd2ee15ed21306de.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
  },
  {
    id: 2,
    img: "https://i.ebayimg.com/images/g/tmwAAOSw41FjE1Ya/s-l1200.webp",
  },
  {
    id: 3,
    img: "https://images-cdn.ubuy.co.in/633fecf98696132c07229c0e-reebok-women-shoes-royal-bb4500-hi-strap.jpg",
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/71sw1WyqYfL._AC_UY900_.jpg",
  },
];
const ProductImage = () => {
  const [Current, setImage] = useState(0);
  return (
    <div>
      <div className="h-[500px] relative">
        <img
          src={images[Current].img}
          alt=""
          sizes="50vw"
          className="object-contain rounded-md w-full h-full"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
          <div
            key={img.id}
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            onMouseOver={() => setImage(i)}
          >
            <img
              src={img.img}
              alt=""
              sizes="30vw"
              className="object-contain rounded-md w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
