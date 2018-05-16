# yo-vue

> learn vue

修改 .eslintignore，增加
```
/node_modules/
```

修改 .editorconfig
```
[src/**/*]
charset = utf-8
indent_style = tab
indent_size = 4
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

修改 .eslintrc.js
```
extends: [
	'eslint:recommended'
],
rules: {
	indent: ['error', 'tab', { SwitchCase: 1 }],
	'linebreak-style': ['error', 'unix'],
	quotes: ['error', 'single'],
	semi: ['error', 'never']
}
```

安装
```
yarn add less --dev
yarn add less-loader --dev
```

修改 webpack.base.conf.js
```
resolve: {
    extensions: ['.js', '.vue', '.json', '.less']
}
```



## Build Setup

``` bash
# install dependencies
yarn (即npm install)

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
