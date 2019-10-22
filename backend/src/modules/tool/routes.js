const Router = require('koa-router');
const koaBody = require('koa-body');
const controller = require('./controller');
const authorization = require('../../loaders/authorization');
const dotenv = require('dotenv');
dotenv.config();

const toolRoutes = new Router({ prefix: '/tools' });

if (process.env.ENV !== 'test') {
  toolRoutes.use(authorization);
}

/**
 * @swagger
 * /tools:
 *   get:
 *     tags:
 *       - Tools
 *     description: Returns all tools
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of tools
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *     parameters:
 *      - in: query
 *        name: tags
 *        type: array
 *        items:
 *          type: string
 */
toolRoutes.get('/', koaBody({ json: true }), controller.list);
/**
 * @swagger
 * /tools:
 *   post:
 *     tags:
 *       - Tools
 *     summary: "Create a new tool"
 *     description: "Create a tool"
 *     operationId: "createtool"
 *     responses:
 *       201:
 *         description: "The resource has been created."
 *       400:
 *         description: "An error has occured trying to create the resource."
 *       401:
 *         description: Unauthorized
 *     parameters:
 *       -
 *         in: "body"
 *         name: "body"
 *         description: "Data used to create a new tool"
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *            title:
 *              type: string
 *            link:
 *              type: string
 *            description:
 *              type: string
 *            tags:
 *              type: array
 *              items:
 *                type: string
 */
toolRoutes.post('/', koaBody({ json: true }), controller.save);
/**
 * @swagger
 * /tools/{id}:
 *   delete:
 *     tags:
 *       - Tools
 *     summary: "Remove tool"
 *     description: "Remove tool from database"
 *     operationId: "removetool"
 *     responses:
 *       204:
 *         description: "No response"
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: "Position not found"
 *     parameters:
 *       -
 *         in: "path"
 *         name: "id"
 *         type: string
 *         description: "Id of position to remove"
 *         required: true
 */
toolRoutes.delete('/:id', koaBody({ json: true }), controller.remove);

module.exports = toolRoutes.routes();
