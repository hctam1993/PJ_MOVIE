import React, { useEffect } from "react";
import { localService } from "../../services/localService";

export default function SecureView({ children }) {
  useEffect(() => {
    let userLocal = localService.user.get();
    if (!userLocal) {
      window.location.href = "/login";
    }
  }, []);
  return <div>{children}</div>;
}
