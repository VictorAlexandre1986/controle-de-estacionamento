// src/app.ts
import express from 'express';
import bodyParser from 'body-parser';
import clienteRoutes from './routes/clienteRoutes.js';
import pagamentoRoutes from './routes/pagamentoRoutes.js'
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

const app = express();


// Middlewares
app.use(bodyParser.json());

//Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/cliente', clienteRoutes);
app.use('/pagamento', pagamentoRoutes)

export default app;



