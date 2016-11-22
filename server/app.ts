import * as express from "express";

import { join } from "path";
import { json, urlencoded } from "body-parser";

import { restApi } from "./routes/api";

import './typesext';

const app: express.Application = express();
app.disable("x-powered-by");

app.use(express.static(join(__dirname, '../public')));
app.use(json());
app.use(urlencoded({ extended: true }));

// api routes
app.use("/api", restApi);
app.use('/client', express.static(join(__dirname, '../client')));

// catch 404 and forward to error handler
app.use(function(req: express.Request, res: express.Response, next) {
    let err = new Error("Not Found");
    next(err);
});

// production error handler
// no stacktrace leaked to user
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});

export { app }
