import { Link } from "react-router-dom";
export const HomePage = () => {
  return (
    <div className=" relative">
      <h1 className=" text-6xl text-center">Welcome to Yu-Gi-Oh DB</h1>
      <h2 className="text-5xl mb-10 text-center">It's time to d-u-u-uel</h2>
      <Link to="/catalog">
        <img
          className="hover:scale-105 absolute left-1/4 w-1/2 rounded-3xl"
          src="/home-bg.jpg"
          alt="home-image"
        />
      </Link>
    </div>
  );
};
