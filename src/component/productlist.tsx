import { link } from "fs";
import Link from "next/link";
const products = [
  {
    id: 1,
    name: "Rebook Shoe",
    inr: 12000.0,
    des: "My Description",
    img1: "https://i5.walmartimages.com/asr/ec61137d-08a6-4124-abb2-ad3b7d78e3e9.9571442bba853fc0fd2ee15ed21306de.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    img2: "https://i.ebayimg.com/images/g/tmwAAOSw41FjE1Ya/s-l1200.webp",
    link:"/Rebook Shoe"
  },
  {
    id: 2,
    name: "Peak-Tree Shirt",
    inr: 450.0,
    des: "My Description",
    img1: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/5/i/x/s-700-grey-shopyclick-original-imagzzffkgfgaqhw.jpeg?q=20&crop=false",
    img2: "https://rukminim2.flixcart.com/image/850/1000/kx7vc7k0/fabric/t/y/t/no-2-35-m-unstitched-na-cuff-collar-fabric-famentic-original-imag9q6ctbxan5hu.jpeg?q=20&crop=false",
    link:"/Peak-Tree Shirt"
  },
  {
    id: 1,
    name: "Rebook Shoe",
    inr: 12000.0,
    des: "My Description",
    img1: "https://i5.walmartimages.com/asr/ec61137d-08a6-4124-abb2-ad3b7d78e3e9.9571442bba853fc0fd2ee15ed21306de.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    img2: "https://i.ebayimg.com/images/g/tmwAAOSw41FjE1Ya/s-l1200.webp",
    link:"/Rebook Shoe"
  },
  {
    id: 2,
    name: "Peak-Tree Shirt",
    inr: 450.0,
    des: "My Description",
    img1: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/5/i/x/s-700-grey-shopyclick-original-imagzzffkgfgaqhw.jpeg?q=20&crop=false",
    img2: "https://rukminim2.flixcart.com/image/850/1000/kx7vc7k0/fabric/t/y/t/no-2-35-m-unstitched-na-cuff-collar-fabric-famentic-original-imag9q6ctbxan5hu.jpeg?q=20&crop=false",
    link:"/Peak-Tree Shirt"
  },
  {
    id: 1,
    name: "Rebook Shoe",
    inr: 12000.0,
    des: "My Description",
    img1: "https://i5.walmartimages.com/asr/ec61137d-08a6-4124-abb2-ad3b7d78e3e9.9571442bba853fc0fd2ee15ed21306de.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    img2: "https://i.ebayimg.com/images/g/tmwAAOSw41FjE1Ya/s-l1200.webp",
    link:"/Rebook Shoe"
  },
  {
    id: 2,
    name: "Peak-Tree Shirt",
    inr: 450.0,
    des: "My Description",
    img1: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/5/i/x/s-700-grey-shopyclick-original-imagzzffkgfgaqhw.jpeg?q=20&crop=false",
    img2: "https://rukminim2.flixcart.com/image/850/1000/kx7vc7k0/fabric/t/y/t/no-2-35-m-unstitched-na-cuff-collar-fabric-famentic-original-imag9q6ctbxan5hu.jpeg?q=20&crop=false",
    link:"/Peak-Tree Shirt"
  },
];
const ProductList = () => {
    return (
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 rounded-lg">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.link}
              className=" flex flex-col gap-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full h-60 relative">
                <img
                  src={product.img1}
                  alt=""
                  sizes="(max-width: 640px) 25vw, (max-width: 768px) 3vw, 20vw"
                  className="object-contain absolute rounded-md h-full w-full z-10 hover:opacity-0 transition-opacity ease-linear duration-500"
                />
                <img
                  src={product.img2}
                  alt=""
                  sizes="(max-width: 640px) 25vw, (max-width: 768px) 33vw, 20vw"
                  className="object-contain absolute rounded-md h-full w-full"
                />
              </div>
              <div className="flex justify-between px-4 py-2">
                <span className="font-medium">{product.name}</span>
                <span className="font-semibold">₹{product.inr}</span>
              </div>
              <div className="text-sm text-gray-500 px-4 py-1">{product.des}</div>
              <div className="flex justify-start px-4 py-2">
                <button className="rounded-2xl ring-1 ring-mette text-mette py-2 px-4 text-xs hover:bg-mette hover:text-white hover:scale-110 hover:transition-all hover:ease-linear hover:duration-300 hover:shadow-xl">
                  Add to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      );
};

export default ProductList;
