/*
 * @file: video.js
 * @description: It Contain function layer for user service.
 * @author: Jaswinder Kumar
 */

import Video from "../collections/video";
 
export const saveVideo = async (payload) => {
    await Video.saveVideo({
      ...payload,
    });

    return {success:true}
  
}