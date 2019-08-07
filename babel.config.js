module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          screens: './src/screens',
          store: './src/store',
          modules: './src/modules',
          graphqlApi: './src/graphql',
          api: './src/api',
        },
      },
    ],
  ],
};
