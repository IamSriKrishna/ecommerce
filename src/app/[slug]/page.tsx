import Add from "@/component/add";
import CustomizedProduct from "@/component/customizedProduct";
import ProductImage from "@/component/productImage";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/*Image*/}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImage />
      </div>
      {/*Text*/}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Rebook Shoe</h1>
        <p className="text-gray-500">
          Reebok keeps innovating, and it's likely they have a new shoe on the
          horizon, but details are scarce. However, we can look at recent
          releases to speculate. Perhaps it's a classic silhouette with a modern
          twist, like the Club C Legacy with its recycled materials
        </p>
        <div className="h-[2px] bg-gray-200" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">₹12000.00</h3>
          <h3 className=" font-medium text-2xl">₹6000.00</h3>
        </div>
        <div className="h-[2px] bg-gray-200" />
        <CustomizedProduct />
        <Add />
        <div className="h-[2px] bg-gray-200" />
        <div className="flex flex-col   gap-4">
          <h4>Product Info</h4>
          <p className="text-gray-500">
            Reebok keeps innovating, and it's likely they have a new shoe on the
            horizon, but details are scarce. However, we can look at recent
            releases to speculate. Perhaps it's a classic silhouette with a
            modern twist, like the Club C Legacy with its recycled materials
          </p>
          <h4>Return and Refund policy</h4>
          <p className="text-gray-500">
            Unsatisfied? We've got you covered! You can return most unused items
            within [Number] days of purchase with receipt for a full refund.
            Items must be in original packaging with tags attached. For opened
            or used items, we offer [store credit/exchange] at our discretion.
            Some exclusions may apply (e.g., sale items, downloads). See full
            policy details [link/location] or contact us at [phone/email] for
            more info.
          </p>
          <h4>Shipping Info</h4>
          <p className="text-gray-500">
            We offer fast and reliable shipping to get your goodies to you ASAP!
            Shipping times may vary depending on your location and chosen
            method. Rates are calculated at checkout based on your order's
            weight and destination.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
