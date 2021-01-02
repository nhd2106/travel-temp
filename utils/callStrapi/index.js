import axios from "axios";

const { API_URL } = process.env;

export const fetchStrapi = (endUrl) => {
  return axios.request({
    method: "GET",
    url: `${API_URL}/${endUrl}`,
  });
};
