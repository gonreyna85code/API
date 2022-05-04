import express from "express";
const router = express.Router();

/**
 * @swagger
 * components:
 *    schemas:
 *       Response:
 *        type: string
 *        description: Response message
 *        example:
 *          - status: success
 *          - message: Successfully parsed the form data
 */

/**
 * @swagger
 * tags:
 *    name: Tester
 *    description: Tester API
 */


/**
 * @swagger
 * /tester:
 *  get:
 *   summary: "Parse the form data"
 *   tags: [Tester]
 *   responses:
 *    '200':
 *     description: "Successfully parsed the form data"
 *     content:
 *      application/json:
 *       schema:
 *        type: string
 *        $ref: '#/components/schemas/Response'
 */

router.get("/tester", (req, res) => {
  res.status(200).json([
    {
      status: "success",
    },
    { message: "Successfully parsed the form data" },
  ]);
});


export default router;
