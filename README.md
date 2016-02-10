# eslint-plugin-modulename

An ESLint rule which will verify imports/requires are for modules with kebab-case names

## To use:

#### Install the plugin
`npm install eslint-plugin-module-name --save-dev`

#### Modify your .eslintrc file:
* Add the plugin to the plugins array like this:
```
    "plugins": [
        "module-name"
    ]
```
* Add the rule to the rules object like this:
```
    "rules": {
        "module-name/kebab-case": 2
    }
```

Now verify the rule is checking as desired.
