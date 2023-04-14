import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/authContext";
export const RegisterPage = () => {
  const [value, setValue] = useState({
    username: "",
    password: "",
    repassword: "",
  });
  const [error, setError] = useState({
    username: false,
    password: false,
    repassword:false
  });
  const navigate = useNavigate();

  const constraints = {
    username: /[A-Za-z0-9!\-\_']{3,20}/g,
    password: /[A-Za-z0-9\-\_?!.#$].{5,30}/g,
  };
  const errorMessages = {
    username: "Invalid username",
    password: "Invalid password",
    repassword:"Password doesn't match"
  };

  const checkForPasswordMatch = (e)=>{
  
  if(e.target.value!==value.password){
    setError((state) => ({ ...state, repassword: true }));
  }else{
    setError((state) => ({ ...state, repassword: false }));
  }
}

  const checkForError = (e) => {
    if (!constraints[e.target.name].test(e.target.value)) {
      setError((state) => ({ ...state, [e.target.name]: true }));
    } else {
      setError((state) => ({ ...state, [e.target.name]: false }));
    }

  };

  const onChange = (e) => {
    setValue((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  const { onRegister } = useContext(AuthContext);

  const onRegisterHandler = () => {
    if (
      Object.values(error).some((x) => x) ||
      Object.values(value).some((x) => x === "")
    ) {
      return;
    }

    onRegister(value);
    navigate("/");
  };

  return (
    <section className="dark:bg-gray-900 mt-2">
      <div className="flex flex-col items-center justify-start px-6 py-8 mx-auto  lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Registration
            </h1>
            <form className="space-y-4 md:space-y-6 " method="POST">
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  onBlur={checkForError}
                  value={value.username}
                  onChange={onChange}
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ivan Ivanov.."
                  required=""
                />
                {error.username && (
                  <p className=" absolute text-xl bg-green-400 rounded text-red-600">
                    {errorMessages.username}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  onBlur={checkForError}
                  value={value.password}
                  onChange={onChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
                {error.password && (
                   <p className=" absolute text-xl bg-green-400 rounded text-red-600">
                    {errorMessages.password}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="repassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Repeat Password
                </label>
                <input
                  onBlur={checkForPasswordMatch}
                  value={value.repassword}
                  onChange={onChange}
                  type="password"
                  name="repassword"
                  id="repassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
                    {error.repassword && (
                   <p className=" absolute text-xl bg-green-400 rounded text-red-600">
                    {errorMessages.repassword}
                  </p>
                )}
              </div>
              <input
                onClick={onRegisterHandler}
                className="border-solid border-2 md:text-2xl font-bold text-gray-900 dark:text-white border-gray-300 pr-1 pl-1 bg-gray-50 rounded"
                type="button"
                value="Register"
              />

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
