export const apiRequest = (url = "", headers = {}) => {
  return fetch(url, {
    headers,
  });
};
