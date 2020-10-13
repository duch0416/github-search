import queryString from "query-string";

import api from "../../../config/configAxios";
import { IRepositoriesParams } from "./../models/index";

export const getRepositoris = (key: string, params: IRepositoriesParams) =>{
  console.log("ok")
  return api.get(`/search/repositories?${queryString.stringify(params)}`);
}
  
