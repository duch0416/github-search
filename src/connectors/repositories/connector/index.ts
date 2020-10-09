import queryString from "query-string"

import api from "../../../config/configAxios";
import { IRepositoriesParams } from "./../models/index";

export const getRepositoris = (key: string, params: IRepositoriesParams) =>
  api.get(`/search/repositories?${queryString.stringify(params)}`);
