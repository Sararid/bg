module.exports = {
  presets: [
    "module:metro-react-native-babel-preset",
    "@babel/preset-typescript",
  ],

  plugins: [
    [
      "module-resolver",
      {
        root: ["/"],
        alias: {
          "@components": "../src/components",
          "@utils": "./src/utils",
          "@styles": "./src/assets/styles",
          "@pictures": "./src/assets/pictures",
          "@icons": "../src/assets/icons",
          "@pages": "./src/pages",
      
          "@core": "./src/components/core",
          "@config": "./src/config",
          "@api": "./src/api",
        },
      },
    ],
  ],
};
