const presets = [
  [
    '@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 },
  ],
  [
    '@babel/preset-typescript', {isTSX: true, allExtensions: true},
  ],
  '@babel/preset-react',
];

// Babel config:
module.exports = {
  presets
};
