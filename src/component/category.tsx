import Link from "next/link";

const category = [
  {
    id: 1,
    name: "shoe",
    image:
      "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25816194/2023/11/9/7f4df898-da1c-42f9-8dcd-90a189e7c4691699531243608ReebokUnisexRoyalBb45901.jpg",
  },
  {
    id: 2,
    name: "Shirt",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20240109/0Po8/659d45b254c30e62769f3a2a/-473Wx593H-466113483-white-MODEL5.jpg",
  },
  {
    id: 3,
    name: "T-Shirt",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2021/7/KU/YI/VT/44196072/product-jpeg.jpg",
  },
  {
    id: 4,
    name: "IPhone",
    image:
      "https://www.zdnet.com/a/img/resize/b0e465c973f821a8908982e76d6d09ee2beb519a/2023/10/03/3c2fe324-f16a-4921-91fe-8ecc27c3b004/iphone-15-pro-and-pro-max.jpg?auto=webp&fit=crop&height=900&width=1200",
  },
  {
    id: 5,
    name: "laptop",
    image:
      "https://media.wired.com/photos/64daad6b4a854832b16fd3bc/master/pass/How-to-Choose-a-Laptop-August-2023-Gear.jpg",
  },
];

const Categories = () => {
  return (
    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 rounded-lg items-center">
      {category.map((cat) => (
        <Link href={cat.name} key={cat.id} className="h-full w-full rounded-lg overflow-hidden block relative group hover:scale-110 transition-all ease-in cursor-pointer">
            <div className="h-full w-full flex items-center justify-center">
              <img
                src={cat.image}
                alt={cat.name}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-all duration-300"
              />
            </div>
            <h1 className="text-lg font-medium text-center mt-2 absolute left-[38%] bottom-0 text-mette">{cat.name}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
