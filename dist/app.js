"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const clienteRoutes_js_1 = __importDefault(require("./routes/clienteRoutes.js"));
const pagamentoRoutes_js_1 = __importDefault(require("./routes/pagamentoRoutes.js"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const app = (0, express_1.default)();
// Middlewares
app.use(body_parser_1.default.json());
//Swagger
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
// Routes
app.use('/cliente', clienteRoutes_js_1.default);
app.use('/pagamento', pagamentoRoutes_js_1.default);
exports.default = app;
