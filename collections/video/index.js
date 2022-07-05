/*
 * @file: index.js
 * @description: It Contain function layer for user collection.
 * @author: Jaswinder Kumar
 */

import mongoose from "mongoose";
import dbSchema from "./db-schema";

class VideoClass {
  static saveVideo(payload) {
    return this(payload).save();
  }
  static findOneByCondition(condition) {  
    return this.findOne(condition);
  }
  static findByCondition(condition,options) {
    return this.find(condition,options);
  }
  
}

dbSchema.loadClass(VideoClass);

export default mongoose.model("Video", dbSchema);
