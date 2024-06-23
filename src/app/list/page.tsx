import Filter from "@/component/filter";
import ProductList from "@/component/productlist";

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/*Campaign*/}
      <div className="hidden bg-gradient-to-r from-pink via-pinkvia via-80% to-pink2 sm:flex justify-between h-64 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="w-2/3 flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
              Grab up to 50% off on
            </h1>
            <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
              Selected Product
            </h1>
          </div>
          <button className="rounded-3xl bg-mette text-white w-max py-3 px-5 text-sm hover:scale-110 transition-all ease-in duration-300">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3 h-full">
          <img
            alt=""
            className="object-fill w-full h-full"
          />
        </div>
      </div>
      {/*Filter*/}
      <Filter/>
      {/*Product List*/}
      <h1 className="mt-12 text-xl">Product List</h1>
      <ProductList/>
    </div>
  );
};

export default ListPage;