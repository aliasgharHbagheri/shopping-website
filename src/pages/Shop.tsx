import ProductItem from "../components/ProductItem";
import productItems from "../data/Products.json";

const Shop = () => {
  return (
    <div className="w-full sm:w-11/12 mx-auto flex flex-col items-center justify-start">
      <h1 className="text-2xl text-slate-500 border-b-2 border-blue-500 py-3 mt-3">
        Shop
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 items-center justify-start py-5">
        {/* Products list */}
        {productItems.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
        ;
      </div>
    </div>
  );
};

export default Shop;
