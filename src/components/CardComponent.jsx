import { Link } from "react-router-dom";

export const CardComponent = ({url,id}) => {
  return (
    <Link to={`/catalog/${id}`}>
    <div className=" hover:scale-105 h-96 w-60 border-2 border-gray-300 mx-5 my-2 flex flex-col">
    
     <img
        className=" h-full w-full"
        src={url}
        alt=""
      />
    
    </div>
    </Link>
  );
};
