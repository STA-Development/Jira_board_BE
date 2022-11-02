import express from 'express';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import sequelize from './database';
import { router } from './routes/ticketRoutes';
import { swaggerDocs } from './swagger/swagger';
const path = __dirname + '/../.env';
dotenv.config({ path });
const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(express.json());
app.use('/api/jiraBoardData', router);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
