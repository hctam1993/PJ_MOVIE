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
        return JSON.parse(jsonData);
      } else {
        return null;
      }
    },
    remove: () => {
      localStorage.removeItem(USER);
    },
  },
};
