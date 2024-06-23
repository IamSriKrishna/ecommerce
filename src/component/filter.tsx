const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      {/*Left*/}
      <div className="flex gap-6 flex-wrap">
        {/*Type*/}
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs bg-[#EBEDED] outline-none"
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="difital">Digtial</option>
        </select>
        {/*min*/}
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400 outline-none"
        />
        {/*max*/}
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400 outline-none"
        />
        {/*Size*/}
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs bg-[#EBEDED] outline-none"
        >
          <option>Size</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
          <option value="xxl">XXL</option>
        </select>
        {/*Color*/}
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs bg-[#EBEDED] outline-none"
        >
          <option>Color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="white">White</option>
          <option value="black">Black</option>
        </select>
        {/*Category*/}
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs bg-[#EBEDED] outline-none"
        >
          <option>Category</option>
          <option value="physical">Physical</option>
          <option value="difital">Digtial</option>
        </select>
        {/*All Filters*/}
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs bg-[#EBEDED] outline-none"
        >
          <option>All Filters</option>
          <option value="physical">Physical</option>
          <option value="difital">Digtial</option>
        </select>
      </div>
      {/*Right*/}
      <div className="">
        {/*Sort By*/}
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs bg-[#EBEDED] outline-none"
        >
          <option>Sort By</option>
          <option value="">Price (Low to High)</option>
          <option value="">Price (High to Low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
