import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { update, getOne } from "../services/cardServices.js";
import { AuthContext } from "../contexts/authContext.jsx";

export const EditCardPage = () => {
  const [value, setValue] = useState({
    name: "",
    url: "",
    attribute: "",
    description: "",
  });
  const [error, setError] = useState({
    name: false,
    url: false,
    attribute:false,
    description:false
  });

const {cardId} = useParams();
useEffect(()=>{
    
    getOne(cardId).then(v=>setValue(v));
},[])

  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  const onChange = (e) => {
    setValue((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  const checkForError = (e) => {
    if (e.target.value==="") {
      setError((state) => ({ ...state, [e.target.name]: true }));
    } else {
      setError((state) => ({ ...state, [e.target.name]: false }));
    }

  };

  const onEditHandler = async (e) => {
    if(Object.values(value).some(x=>x==="")){
      return;
    }
    await update(cardId, token.token,value);
    navigate(`/catalog/${cardId}`);
  };
 


  return (
    <form className=" bg-[url('/edit-bg.png')] bg-no-repeat bg-cover  mt-2 mx-auto  flex flex-col items-center border-solid border-2 w-1/2 pb-10 pt-10 rounded-3xl">
      <h1 className=" mb-10 text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
        Edit card
      </h1>

      <div className="mb-6">
      <label
          htmlFor="card-image"
          className="block mb-2 text-lg font-medium text-white text-end dark:text-white"
        >
          Card Name
        </label>
        <input
        onBlur={checkForError}
          name="name"
          onChange={onChange}
          value={value.name}
          type="text"
          id="card-name"
          className="bg-gray-50 border w-96  h-10 border-gray-300 text-2xl text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
           {error.name  && (
                  <p className=" absolute text-xl bg-green-400 rounded text-red-600">
                    Name is required
                  </p>
                )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="card-image"
          className="block mb-2 text-lg text-end font-medium text-white dark:text-white"
        >
          Card Image Url
        </label>
        <input
         onBlur={checkForError}
          name="url"
          onChange={onChange}
          value={value.url}
          type="text"
          id="card-image"
          className="bg-gray-50 border w-96  h-10 border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
           {error.url  && (
                   <p className=" absolute text-xl bg-green-400 rounded text-red-600">
                    Url is required
                  </p>
                )}
      </div>
      <div>
        <label
          htmlFor="small-input"
          className="block mb-2 text-lg font-medium text-end text-white dark:text-white"
        >
          Card Attribute
        </label>
        <input
         onBlur={checkForError}
          name="attribute"
          onChange={onChange}
          value={value.attribute}
          type="text"
          id="card-image"
          className="bg-gray-50 border w-96  h-10 border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
           {error.attribute  && (
                  <p className=" absolute text-xl bg-green-400 rounded text-red-600">
                    Attribute is required
                  </p>
                )}
      </div>
      <div>
        <label
          htmlFor="small-input"
          className="block mb-2 text-lg text-end font-medium text-white dark:text-white"
        >
          Card description/Effect
        </label>
        <textarea
         onBlur={checkForError}
          name="description"
          onChange={onChange}
          value={value.description}
          rows={4}
          id="small-input"
          className="block resize-none  p-2 w-96  text-gray-900 border text-2xl border-gray-300 rounded-lg bg-gray-50  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
           {error.description  && (
                   <p className=" absolute text-xl bg-green-400 rounded text-red-600">
                    Description is required
                  </p>
                )}
      </div>
      <input
        type="button"
        defaultValue="Update"
        onClick={onEditHandler}
        className="mt-3 px-1 border-solid border-2 md:text-2xl font-bold text-gray-900 dark:text-white border-gray-300 bg-gray-50 rounded"
      />
    </form>
  );
};
