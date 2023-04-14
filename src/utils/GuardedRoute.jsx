import React, { useContext, useEffect, useState } from "react";
import { getOne } from "../services/cardServices";
import { AuthContext } from "../contexts/authContext";
import { useParams } from "react-router-dom";

export const GuardedRoute = ({
  component: Component,
  defaultComponent: DefaultComponent,
}) => {
  const [value, setValue] = useState({});
  const { token } = useContext(AuthContext);
  const { cardId } = useParams();

  useEffect(() => {
    if(cardId){
    getOne(cardId).then((v) => setValue(v));
    }
  }, []);

  let auth;
  if (cardId) {
    auth = token?.id === value._ownerId;
  } else {
    auth = token !== null;
  }
  
  if (auth) {
    return <Component />;
  } else {
    return <DefaultComponent />;
  }
};
