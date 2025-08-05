import axios from "axios";

const API_URL = "http://localhost:3064/";

let stateAccessToken: string | null = null;

export function setAccessToken(token: string) {
  stateAccessToken = token;
}

const accessToken =
  stateAccessToken ||
  (typeof window !== "undefined" && localStorage.getItem("accessToken"));

export async function get(path: string, urlParams: object) {
  let accessToken = stateAccessToken || localStorage.getItem("accessToken");
  let FULL_URL = API_URL + path;
  let headers = { Authorization: accessToken };
  console.log("headers", headers);
  let options = { headers: headers, params: urlParams };
  return axios.get<any>(FULL_URL, options);
}

export async function post(path: string, data: object) {
  const accessToken = stateAccessToken || localStorage.getItem("accessToken");
  const FULL_URL = API_URL + path;
  const headers = { Authorization: accessToken };
  const options = { headers: headers };
  return axios
    .post(FULL_URL, data, options)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      if (err.statusCode == 401) {
        localStorage.setItem("accessToken", "");
      }
    });
}

export async function patch(path: string, data: object) {
  const accessToken = stateAccessToken || localStorage.getItem("accessToken");

  const FULL_URL = API_URL + path;
  const headers = { Authorization: accessToken };
  const options = { headers: headers };
  return axios
    .patch(FULL_URL, data, options)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function put(path: string, data: object) {
  const accessToken = stateAccessToken || localStorage.getItem("accessToken");
  const FULL_URL = API_URL + path;
  const headers = { Authorization: accessToken };
  const options = { headers: headers };
  return axios
    .put(FULL_URL, data, options)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function login(path: string, data: object) {
  const FULL_URL = API_URL + path;
  const headers = { Authorization: accessToken };
  const options = { headers: headers };
  return axios
    .post(FULL_URL, data, options)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      if (err.statusCode == 401) {
        localStorage.setItem("id_token", "");
      }
    });
}

export async function getProfile() {
  const accessToken = stateAccessToken || localStorage.getItem("accessToken");

  const FULL_URL = API_URL + "getProfile";
  const headers = { Authorization: accessToken };
  const options = { headers: headers };
  return axios
    .get(FULL_URL, options)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      if (err && accessToken) {
        localStorage.setItem("accessToken", "");
        // navigate("/login");
        // window.location.replace("/login");
      }
    });
}

export async function register(path: string, data: object) {
  const FULL_URL = API_URL + path;
  const headers = { Authorization: accessToken };
  const options = { headers: headers };
  return axios
    .post(FULL_URL, data, options)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      if (err.statusCode == 401) {
        localStorage.setItem("id_token", "");
      }
    });
}
