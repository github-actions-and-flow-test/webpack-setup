const mode = process.env.NODE_ENV ?? 'production';
//export const isDevServer = process.env.WEBPACK_IS_DEV_SERVER === 'true';
 const isProd = mode === 'production';
 const isDev = !isProd;