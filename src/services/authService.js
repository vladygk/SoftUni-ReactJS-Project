const baseUrl = "http://localhost:3030/users";

export const login = async (body) => {
  const response = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: body.username,
      password: body.password,
    }),
  });
  if (response.status === 403) {
    return null;
  }
  const token = await response.json();
  return token;
};

export const register = async (body) => {
  const response = await fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: body.username,
      password: body.password,
    }),
  });

  const token = await response.json();


await fetch("http://localhost:3030/data/favorites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": `${token.accessToken}`,
    },
    body: JSON.stringify({
     userId: token._id,
     favorites:[]
    }),
  });

  return token;
};

export const logout = async (token) => {
  await fetch(`${baseUrl}/logout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": `${token}`,
    },
  });
};
