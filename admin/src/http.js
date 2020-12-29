import axios from "axios";
// baseURL: "http://localhost:4000/api",
export default axios.create({
  baseURL: "https://polar-dusk-67788.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});