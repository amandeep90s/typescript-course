# The Typescript Compiler

1. --watch or -w flag values are to update single ts file automaticaly in your project.
2. tsc --init command is used to create tsconfig.json file for the typescript configuration.
3. After creating typescript configuration file then you can use tsc ---watch command.
4. We can exclude any file or files with exclude property of tsconfig.json file. eg: "exclude": ["*.dev.ts", "app.ts]
5. node_modules folder be default excluded in ts settings.
6. include property is used to add any ts file.
7. target property is used to convert the ts code into particular javascript version for browser compatibility.
8. libs property are used for dom related api computation.
9. sourceMap property is used to generate map files automatically and is works as a bridge between browser and dev for debugging.
10. noEmitOnError property is used for strict compiliation. If any ts file is having compilation issue it will not generate js files if this property is set to true.
11. (!) exclamation sumbol is used to explicitly tell ts that particular element is not null.
12. chrome debugger extension is used for debugging inside vscode ide and also sourceMap needs to enable.
