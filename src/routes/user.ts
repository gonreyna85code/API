import express from 'express';
import "reflect-metadata";
import { createConnection } from "typeorm";
import {Request, Response} from "express";
import {User} from '../entity/User';


const router = express.Router();

/**
 * @swagger
 *  components:
 *   schemas:
 *    User:
 *     type: object
 *     description: User object
 *     properties:
 *      id:  
 *       type: integer
 *       description: User ID
 *      firstName:
 *       type: string
 *       description: User first name
 *      lastName:
 *       type: string
 *       description: User last name
 *      email:
 *       type: string
 *       description: User email
 *      password:
 *       type: string
 *       description: User password * 
 *     example:
 *      id: 1
 *      firstName: "John"
 *      lastName: "Doe"
 *      email: "email@email.com"
 *      password: "password"
 */

/**
 * @swagger
 * tags:
 *  name: User
 *  description: User management
 */

/**
 * @swagger
 * /user:
 *  get:
 *   summary: Get all users
 *   tags: [User]
 *   responses:
 *    '200':
 *     description: A successful response
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/User'
 *
 *    '500':
 *     description: Unexpected error
 *    '400':
 *     description: Bad request
 */

/**
 * @swagger
 *  /user/{id}:
 *   get:
 *    summary: Get a user by id
 *    tags: [User]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The id of the user to retrieve
 *    responses:
 *     '200':
 *       description: A successful response
 *       content:
 *        application/json:
 *         schema:
 *          $ref: '#/components/schemas/User'
 *     '404':
 *       description: Not found
 */

/**
 * @swagger
 *  /user:
 *   post:
 *    summary: Create a new user
 *    tags: [User]
 *    requestBody:
 *     required: true
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/User'
 *    responses:
 *     '200':
 *      description: A successful response
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/User'
 *     '500':
 *       description: Unexpected error
 *
 *
 */

router.get('/user/test', async (req, res) => {    
    res.send("test");
});

createConnection()
  .then(async (connection) => {
    const userRepository = connection.getRepository(User);
    
    router.get("/user", async (req: Request, res: Response) => {
      const users = await userRepository.find();
      (users.length > 0) ? res.json(users) : res.status(404).json({ message: "No users found" });      
    });

    router.get("/user/:id", async (req: Request, res: Response) => {
      const user = await userRepository.find({ where: { id: req.params.id } });
      if (!user) {
        res.sendStatus(404);
      } else {
        res.json(user);
      }
    });

    router.post("/user", async (req: Request, res: Response) => {
      try {
        const body = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
        };
        const user = await userRepository.save(body);
        res.json(user);
      } catch {
        res.sendStatus(500);
      }
    });
  })
  .catch((error) => console.log(error));


export default router;

