const path = require('path')
 module.exports = {
 mode: 'development', //can be changed to production mode when deploying
 entry: './js/app.js',
 output: {
  path: path.resolve(__dirname, 'dist'), //output folder
  filename: 'bundle.js'
 },
 module: {
  rules: [
   {
    test: /\.(js)$/,
    exclude: /node_modules/,
    use: {
     loader: 'babel-loader',
     options: {
      presets: [
       ['@babel/preset-env']
      ]
     }
    }
   }
  ]
 },
 watch: true
}