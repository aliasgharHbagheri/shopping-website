import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-[90vh] flex flex-col items-center justify-center gap-5 px-4 dark:bg-slate-800">
      <h1 className="font-bold text-xl md:text-4xl text-slate-700 text-center dark:text-slate-300">
        Welcome To Home Page
      </h1>
      <p className="text-center text-sm dark:text-slate-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, error.
      </p>
      <Link
        to="/shop"
        className="bg-blue-500 text-white text-xs font-bold py-3 px-5 rounded-lg"
      >
        Go To Shop
      </Link>
    </div>
  );
};

export default Home;
