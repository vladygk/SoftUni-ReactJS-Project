const baseUrl = "http://localhost:3030/data/cards";

export const create = async (body, token) => {

  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization":`${token}`
    },
    body:JSON.stringify({
        name:body.name, 
        url:body.url, 
        attribute:body.attribute, 
        description:body.description
    })
  });
  const data = await response.json();
  return data;
};

export const getAll = async ()=>{
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
}