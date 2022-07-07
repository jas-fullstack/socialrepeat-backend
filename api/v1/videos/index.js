/*
 * @file: index.js
 * @description: It's combine all teams routers.
 * @author: Jaswinder Kumar
 */

import addvideo from "./addvideo";
import getvideo from "./getvideo";
import deletevideo from "./deletevideo";
import updatevideo  from "./updatevideo";
import getsinglevideo  from "./getsinglevideo";

export default [
  addvideo,
  getvideo,
  deletevideo,
  updatevideo,
  getsinglevideo
];
