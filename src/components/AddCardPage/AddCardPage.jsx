export const AddCardPage = () => {
  return (
    <form className=" bg-white   mt-2 mx-auto  flex flex-col items-center border-solid border-2 w-1/2 pb-10 pt-10 rounded-3xl">
      <h1 className=" mb-10 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
       Add card to DB
      </h1>

      <div className="mb-6">
        <label
          htmlFor="card-name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Card Name
        </label>
        <input
          type="text"
          id="card-name"
          className="bg-gray-50 border w-96  h-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="card-image"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Card Image Url
        </label>
        <input
          type="text"
          id="card-image"
          className="bg-gray-50 border w-96  h-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="small-input"
          className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white"
        >
          Card description/Effect
        </label>
        <textarea
          rows={4}
          id="small-input"
          className="block resize-none  p-2 w-96  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <input className=" mt-3 px-1 border-solid border-2 md:text-2xl font-bold text-gray-900 dark:text-white border-gray-300 bg-gray-50 rounded" type="submit" value="Add"/>
    </form>
  );
};
