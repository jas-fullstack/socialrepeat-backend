/*
 * @file: addvideo.js
 * @description: It will add team member in system and email will send to member email address.
 * @author: Jaswinder Kumar
 */
import express from "express";
import { createValidator } from "express-joi-validation";
import Joi from "@hapi/joi";
import { addVideo } from "../../../controllers/video";
import { checkToken } from "../../../utilities/universal";
const app = express();
const validator = createValidator({ passError: true });

/**
 * @swagger
 * /api/v1/addvideo:
 *  post:
 *   tags: ["Videos"]
 *   summary: Add team member
 *   description: It will add team member in system and email will send to member email address
 *   parameters:
 *      - in: header
 *        name: Authorization
 *        type: string
 *        required: true
 *      - in: body
 *        name: user
 *        description: The user to login.
 *        schema:
 *         type: object
 *         required:
 *          - user login
 *         properties:
 *           title:
 *             type: string
 *             required:
 *           url:
 *             type: string
 *             required: 
 *   responses:
 *    '200':
 *      description: success
 *    '400':
 *      description: fail
 */

const userSchema = Joi.object({
  title: Joi.string()
    .required()
    .label("Video Title"),
  url: Joi.string()
    .required()
    .label("url"),
 
});

app.post(
  "/addvideo",
  validator.body(userSchema, {
    joi: { convert: true, allowUnknown: false }
  }),
  checkToken,
  addVideo
);

export default app;
