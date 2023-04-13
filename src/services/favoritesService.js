const baseUrl = "http://localhost:3030/data/favorites";

export const getAllFavorites = async ()=>{
    

    const response = await fetch(`${baseUrl}`);
    const data = await response.json();
   
    return data;

}

export const add = async (favId,token,newFavorites) => {
  
  const response = await fetch(`${baseUrl}/${favId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": `${token}`,
    },
    body: JSON.stringify({ favorites: newFavorites }),
  });
  const data = await response.json();
  return data;
};
