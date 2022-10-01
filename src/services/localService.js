const USER = "USER";

export const localService = {
  user: {
    set: (dataLogin) => {
      let jsonData = JSON.stringify(dataLogin);
      localStorage.setItem(USER, jsonData);
    },
    get: () => {
      let jsonData = localStorage.getItem(USER);

      if (jsonData) {
        JSON.parse(jsonData);
      } else {
        null;
      }
    },
    remove: () => {
      localStorage.removeItem(USER);
    },
  },
};
