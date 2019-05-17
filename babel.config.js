
const plugins = [
  ['@babel/plugin-proposal-class-properties', { loose: false }],
  ['@babel/plugin-syntax-jsx'],
  ['@babel/plugin-transform-react-jsx'],
  ['@babel/plugin-proposal-object-rest-spread'],
  ['@babel/plugin-syntax-dynamic-import'],
  ['babel-plugin-graphql-tag']
]
const targets = {
  dev: 'last 2 Chrome versions',

  test: 'node 10'
};
const config = api => {
  const envConfigs = {
    development: {
      ignore: [/\/__(tests?|mocks|fixtures|helpers)__\//],
      plugins:[
        ...plugins,
      ],

      presets: [['@babel/preset-env', { targets: targets.test }]],
    },

    production: {
      plugins: [
        ...plugins,
        [
          '@babel/plugin-transform-runtime',
          { helpers: true, regenerator: true }
        ]
      ],
      presets: [
        ['@babel/preset-env', { modules: false }]
      ]
    },
    test: {
      plugins: [...plugins, ['babel-plugin-dynamic-import-node']],
      presets: [
        [
          '@babel/preset-env',
          { modules: 'commonjs', targets: targets.test }
        ]
      ]
    }



    //     test: {
    //     plugins: [...plugins, ['babel-plugin-dynamic-import-node']],
    //     presets: [
    //         [
    //             '@babel/preset-env',
    //             { modules: 'commonjs', targets: targets.test }
    //         ]
    //     ]
    // }
  };
  return envConfigs[api.env() || 'development'];

};

module.exports = config
