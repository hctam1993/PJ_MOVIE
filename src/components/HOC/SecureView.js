import React, { useEffect } from "react";
import { localService } from "../../services/localService";
import { useNavigate } from "react-router-dom";

export default function SecureView({ children }) {
  const navigate = useNavigate();
  let userLocal = localService.user.get();
  // console.log("userLocal: ", userLocal);
  useEffect(() => {
    if (!userLocal) {
      navigate("/login");
    }
  }, []);

  return !userLocal ? <div></div> : <div>{children}</div>;
}
