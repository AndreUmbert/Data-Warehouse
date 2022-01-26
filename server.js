const express = require("express");
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const helmet = require("helmet");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const db = require("./config/db");
const { response } = require("express");
const APP_PORT = process.env.APP_PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET;


// IMPORTAR MODELOS

const app = express();

const rateLimitPolicy = rateLimit({
    message: "Try again later",
    max: 10,
    windowMs: 5 * 60 * 1000,
});

app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(cors());

app.use(expressJwt({
    secret: JWT_SECRET,
    algorithms: ['HS256']
}).unless({ path: ['/login'] })
);

app.listen(APP_PORT, () => {
    console.log(`escuchando en puerto ${APP_PORT}`);
});