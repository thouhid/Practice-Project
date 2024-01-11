module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jest": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "airbnb/hooks",
        "eslint:recommended",
        "prettier",
        "prettier/react",
        "plugin:jsx-ally/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": 0,
        "react-hooks/react-hooks-of-hooks": "error",
        "no-console": 0,
        "react/state-in-constructor": 0,
        "indent": 0,
        "linebreak-style": 0,
        "react/prop-types": 0,
        "jsx-ally/click-events-have-key-events": 0,
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [".js",".jsx"]
            }
        ],
        "prettier/prettier": [
            "error",
            {
                "trailingComma": "es5",
                "singleQuote": true,
                "printWidth": 100,
                "tabWidth": 4,
                "semi": true,
            }
        ]
    }
}
