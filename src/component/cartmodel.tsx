import { useRouter } from "next/navigation";

const CartModel = () => {
  const router = useRouter();
  const cartItem = true;
  const nav = () => {
    router.push("/puma");
  };
  return (
    <div className="w-max absolute p-4 rounded-md top-12 bg-white right-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 gap-6 flex flex-col">
      {!cartItem ? (
        <div className="">Cart Is Empty</div>
      ) : (
        <div className="gap-4 flex flex-col">
          Shopping Cart
          <div className="gap-4 flex">
            <img
              src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/376542/01/fnd/AUS/fmt/png/Better-Foam-Prowl-Slip-On-Women's-Running-Shoes"
              alt=""
              width={72}
              height={96}
              className="object-cover rounded-md cursor-pointer"
              onClick={nav}
            />
            <div className="flex flex-col justify-between w-full">
              {/*Top*/}
              <div className="">
                {/*Title*/}
                <div className="flex items-center justify-between gap-8">
                  <h3 className="font-semibold">Puma</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">₹12000.00</div>
                </div>
                {/*Desc*/}
                <div className="text-sm text-green-500">available</div>
              </div>
              {/*Bottom*/}
              <div className="flex justify-between w-full">
                <span>Qty. 2</span>
                <span className="text-gray-500 rounded-sm text-xs cursor-pointer">
                  Remove
                </span>
              </div>
            </div>
          </div>
          <div className="gap-4 flex">
            <img
              src="https://assets.adidas.com/images/w_600,f_auto,q_auto/0cf53065f4e443f0a0c245cdbccbb43d_9366/GRIP-ED_RUN_SHOES_Black_IQ8998_01_standard.jpg"
              alt=""
              width={72}
              height={96}
              className="object-cover rounded-md cursor-pointer"
              onClick={nav}
            />
            <div className="flex flex-col justify-between w-full">
              {/*Top*/}
              <div className="">
                {/*Title*/}
                <div className="flex items-center justify-between gap-8">
                  <h3 className="font-semibold">Addidas</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">₹14000.00</div>
                </div>
                {/*Desc*/}
                <div className="text-sm text-green-500">available</div>
              </div>
              {/*Bottom*/}
              <div className="flex justify-between w-full">
                <span>Qty. 2</span>
                <span className="text-gray-500 rounded-sm text-xs cursor-pointer">
                  Remove
                </span>
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-2 mb-4">
            Shipping and taxes calculated at checkout
          </p>
          <div className="flex justify-between text-sm">
            <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
            <button className="rounded-md py-3 px-4 bg-mette text-white">Check Out</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModel;
