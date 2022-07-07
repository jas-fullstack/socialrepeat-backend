/*
 * @file: deleteVideo.js
 * @description: It will add team member in system and email will send to member email address.
 * @author: Jaswinder Kumar
 */
import express from "express";
import { createValidator } from "express-joi-validation";
import Joi from "@hapi/joi";
import { deletevideo } from "../../../controllers/video";
import { checkToken } from "../../../utilities/universal";
const app = express();
const validator = createValidator({ passError: true });

/**
 * @swagger
 * /api/v1/deletevideo/{id}:
 *  delete:
 *   tags: ["Videos"]
 *   summary: Add team member
 *   description: It will add team member in system and email will send to member email address
 *   parameters:
 *      - in: header
 *        name: Authorization
 *        type: string
 *        required: true
 *      - in: path
 *        name: id
 *        description: The user to login.
 *   responses:
 *    '200':
 *      description: success
 *    '400':
 *      description: fail
 */


app.delete(
  '/deletevideo/:id',  
  deletevideo
);

export default app;
