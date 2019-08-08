// utils/API.js

import axios from "axios";

export default axios.create({
  baseURL: process.env.BASE_URL,
  headers: {'X-Api-Key': process.env.API_KEY}
});

//https://www.youtube.com/watch?v=IkOVe40Sy0U
//https://medium.com/@griko/exploring-undocumented-getinitialprops-properties-on-next-js-1265a6abc652
// https://jaketrent.com/post/environment-variables-in-nextjs/
