import axios from "axios";
import { localService } from "./localService";

export const baseURL = "https://movienew.cybersoft.edu.vn";

export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNCIsIkhldEhhblN0cmluZyI6IjA1LzAzLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3Nzk3NDQwMDAwMCIsIm5iZiI6MTY1NDEwMjgwMCwiZXhwIjoxNjc4MTIyMDAwfQ.FunqYipkHrCbBATBzuJXyjGpZZxDekx1oY2qxW3_yfw";

export const https = axios.create({
  baseURL: baseURL,
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
    Authorization: "Bearer " + localService.user.get()?.accessToken,
  },
});
