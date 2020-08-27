const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const webpackDevConfig = require('../webpack.dev');

const compiled = webpack(webpackDevConfig);

const express = require('express');
const app = express();

app.use(middleware(compiled, {}));
// hot reload enabled but still need reload page manually
app.listen(3000);
