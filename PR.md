# Instructions

1.Import "contratos.json" using Docker container or via Mongo.

### apiContratos(assuming you start on ENGWEB2024-Normal)

1. Install the required dependencies by running the following commands:
    ```bash
    cd ex1/apiContratos
    npm i
    npm i mongoose --save
    npm i multer --save
    ```

2. Start the API server by running the following command:
    ```bash
    npm start
    ```

### interfaceContratos(assuming you are on ex1/apiContratos)

1. Install the required dependencies by running the following commands:
    ```bash
    cd ../../ex2/interfaceContratos
    npm i
    npm i axios --save
    ```

2. Start the interface by running the following command:
    ```bash
    npm start
    ```

## Dataset changes

1. O dataset foi alterado de "contratos.csv" para "contratos.json" usando "https://csvjson.com"

2. O campo previamente denominado "idcontrato" foi alterado para "_id"


## Setup dos exercícios 

1. Para a api do exercício 1, denominado "apiContratos", foi usado o comando apresentado abaixo, seguido da instalação de dependências especificadas anteriormente:
    ```bash
    npx express-generator --no-view apiContratos
    ```
2. Relativamente à interface do exercício 2, denominada "interfaceContratos", foi usado o comando abaixo apresentado, também seguido de dependências previamente especificadas:
    ```bash
    npx express-generator --view=pug interfaceContratos
    ```

