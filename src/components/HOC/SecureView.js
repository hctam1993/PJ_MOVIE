import React, { useEffect } from "react";
import { localService } from "../../services/localService";

export default function SecureView({ children }) {
  let userLocal = localService.user.get();
  // console.log("userLocal: ", userLocal);
  if (!userLocal) {
    window.location.href = "/login";
  }

  return <div>{children}</div>;
}
