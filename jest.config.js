module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  transformIgnorePatterns: ['/node_modules/(?!@ionic/vue|@ionic/vue-router)'],
  globals: {
    'vue-jest': {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('ion'),
      },
    },
  },
}
