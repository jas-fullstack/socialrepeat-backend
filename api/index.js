/*
 * @file: index.js
 * @description: It's combine all routers.
 * @author: Jaswinder Kumar
 */

import user from "./v1/user";
import videos from "./v1/videos";
/*********** Combine all Routes ********************/
export default [
    ...user,
    ...videos
];
