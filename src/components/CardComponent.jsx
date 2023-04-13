import { Link } from "react-router-dom";

export const CardComponent = ({url,id}) => {
  return (
    <Link to={`/${id}`}>
    <div className=" h-96 w-60 border-2 border-gray-300 flex flex-col">
    
     <img
        className=" h-full w-full"
        src={url}
        alt=""
      />
    
    </div>
    </Link>
  );
};
