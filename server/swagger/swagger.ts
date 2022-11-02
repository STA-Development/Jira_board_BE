import swaggerJsdoc from 'swagger-jsdoc';
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'JiraBoardLibrary',
      version: '1.0.0',
      description: 'JiraBoard API'
    }
  },
  apis: ['app.ts']
};

export const swaggerDocs = swaggerJsdoc(swaggerOptions);
/**
 * @swagger
 * /JiraBoard:
 *   get:
 *     tags:
 *     name: Todo
 *     summary: Write your works and describe it
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             description:
 *               type: string
 *         required:
 *           - title
 *           - description
 *     responses:
 *       '200':
 *         description: successfully registered
 *       '403':
 *         description: expects is not completed
 */
