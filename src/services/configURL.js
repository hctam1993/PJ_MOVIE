import axios from "axios";

export const baseURL = "https://movienew.cybersoft.edu.vn";

export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNCIsIkhldEhhblN0cmluZyI6IjIwLzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3Njg1MTIwMDAwMCIsIm5iZiI6MTY1NDEwMjgwMCwiZXhwIjoxNjc2OTk4ODAwfQ.QYLXMgjth5hQh9opZbNS7JEDPZGWA3o_95kR_VyLix8";

export const httpsGET = axios.create({
  baseURL: baseURL,
  method: "GET",
  headers: {
    TokenCyberSoft: TOKEN_CYBERSOFT,
  },
});

export const httpsPOST = (model) => {
  return axios.create({
    baseURL: baseURL,
    method: "POST",
    data: model,
    headers: { Authorization: "Bearer" + TOKEN_CYBERSOFT },
  });
};
export const httpsPUT = (model) => {
  return axios.create({
    baseURL: baseURL,
    method: "PUT",
    data: model,
    headers: { Authorization: "Bearer" + TOKEN_CYBERSOFT },
  });
};
export const httpsDELETE = (model) => {
  return axios.create({
    baseURL: baseURL,
    method: "DELETE",
    data: model,
    headers: { Authorization: "Bearer" + TOKEN_CYBERSOFT },
  });
};
