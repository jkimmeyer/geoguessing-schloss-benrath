// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  components: "./components/**/*.tsx",
  ignore: ["./types"],
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  propsParser: require("react-docgen-typescript").parse,
  require: [
    path.join(__dirname, './styles/index.css')
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.tsx/,
          loader: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.ts?$/,
          exclude: /node_modules/,
          use: [{
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                noEmit: false,
              },
            },
          }]
        },
      ]
    },
  }
};
