const axios = require("axios");

const userList = () => {
  return axios.get("https://randomuser.me/api/?results=50&nat=us");
}

module.exports= { userList }