module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"amd": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"airbnb",
		"airbnb-typescript",
		"prettier",
		"react-hooks"
	],
	"ignorePatterns": ['.eslintrc.js'],
	"overrides": [
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module",
		"tsconfigRootDir": './',
	},
	"plugins": [
		"react",
		"@typescript-eslint"
	],
	"rules": {
		"@typescript-eslint/no-var-requires": 0,
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
	}
};
