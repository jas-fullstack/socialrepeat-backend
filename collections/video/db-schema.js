/*
 * @file: db-schema.js
 * @description: It Contain db schema for user collection.
 * @author: Jaswinder Kumar
 */

import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      required:true
    },
    status: {
      type: Number,
      default: 1 // 0 account deleted, 1 active, 2 block
    },
    isDeleted :{
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export default videoSchema;
