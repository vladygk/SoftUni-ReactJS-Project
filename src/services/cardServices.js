const baseUrl = "http://localhost:3030/data/cards";

export const create = async (body, token) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": `${token}`,
    },
    body: JSON.stringify({
      name: body.name,
      url: body.url,
      attribute: body.attribute,
      description: body.description,
    }),
  });
  const data = await response.json();
  return data;
};

export const getAll = async () => {
  const response = await fetch(baseUrl);
  if (response.status === 404) {
    
    return {};
  }
  const data = await response.json();
  return data;
};

export const getOne = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`);
  const data = await response.json();
  return data;
};

export const remove = async (id, token) => {
  await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": `${token}`,
    }
  });
};

export const update = async (id, token, body) => {
  await fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": `${token}`,
    },
    body: JSON.stringify({
      name: body.name,
      url: body.url,
      attribute: body.attribute,
      description: body.description,
    }),
  });
};

