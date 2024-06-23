import Categories from "@/component/category";
import ProductList from "@/component/productlist";
import Slider from "@/component/slider";

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Categories</h1>
        <Categories />
      </div>
      <div className="mt-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Product</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
