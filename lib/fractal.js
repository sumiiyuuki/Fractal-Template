'use strict';

/* Fractalのインスタンスの作成とエクスポート */
const fractal = module.exports = require('@frctl/fractal').create();

/* プロジェクト・タイトルの設定 */
fractal.set('project.title', 'プロジェクト名');

/* componentsディレクトリの指定 */
fractal.components.set('path', __dirname + '/src/component');

/* documentationディレクトリの指定 */
fractal.docs.set('path', __dirname + '/src/docs');

/* css/image/js などの格納ディレクトリの指定 */
fractal.web.set('static.path', __dirname + '/src/component/static/');

/* staticの書き出し先の指定 */
fractal.web.set('static.mount', 'static/');

/* 書き出し先の指定 */
fractal.web.set('builder.dest', __dirname + '/component');