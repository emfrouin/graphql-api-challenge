# graphql-api-challenge

## ❯ About

This API exposes a GraphQL schema to access and manage data related to classes.
The server combines Node, NestJS, and GraphQL and is fully written in TypeScript to leverage type checking, decorator-based configuration, arrow functions, IDE/editor support, debugging, and much, much more! 🙌


## ❯ Table of Contents

-   [Getting Started](#-getting-started)
-   [Running Tests](#-running-tests)
-   [Querying GraphQL](#-querying-graphql)
-   [Further Documentation](#-further-documentation)

## ❯ Getting Started

### Step 1: Set up the Development Environment

-   Install and set the compatible nodejs version

```
asdf install
```

-   Install [yarn](https://yarnpkg.com) globally.

```bash
npm install yarn -g
```

-   Checkout this repository.

```bash
git clone git@github.com:emfrouin/graphql-api-challenge.git
```

-   Install dependencies

```
npm install
```

### Step 2: Start the API

-   Run the development version of the application
```
npm run start:dev
```

### Step 3: Debugging with VS Code

_VS Code_ is an open-source version of the [Visual Studio](https://www.visualstudio.com/) IDE by Microsoft that offers
code completion and highlighting, debugging, linting, testing, extensions, and lots more. This project includes VS Code
configuration files for enabling code reloading and debugging.

-   Download and install VS Code from https://code.visualstudio.com

-   Launch VS Code and go to `File > Open...` and open the local repository folder.

-   VS Code should prompt to install recommended extensions. Click on `Install Now`.

> VS Code is a barebones IDE relying on extensions to allow developers to customize it to their needs. As such, it also allows to specify extensions "recommended" to code for a specific application. For this project, eslint, prettier, and intellisense are among the recommended extensions.

-   Open the Debugger panel from the Actions bar to the left, and click on the <kbd>▶︎</kbd> button to start debugging.


## ❯ Running Tests

Jest provides unit and E2E testing. Tests are found in the `src/test/` subdirectory and can be run with and without
code coverage analysis by using the optional --coverage flag.

```bash
yarn test [--coverage]
```

## ❯ Querying GraphQL

GraphQL is the default engine for exposing data to the API consumers. In development environment, you can access the _Playground_ editor to browse the documentation and test the API schema. Just run the application and go to `localhost:3000/graphql/explorer` in your browser.

| URL                      | Description                                                    |
| ------------------------ | -------------------------------------------------------------- |
| **graphql/explorer**     | Access the GraphQL Playground.                                 |
| **graphql**              | Accepts GraphQL-compliant queries and returns JSON by default. |

Use [Apollo Client](https://github.com/apollographql/apollo-client) to query the schema since those feature validation and connection management out-of-the-box. If we were using a regular HTTP stack (axios, fetch, etc), the GraphQL requests are usually done by sending a `POST` request with a body like:

```json
{
   "query": "query class($id: Int!) { id name } }",
   "variables": {
      "query": "art"
   }
}
```

The server response JSON contains three main fields:

| Field          | Type                | Description                                                                                                                                                                                                           |
| -------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **data**       | `any`               | The data returned by the query.                                                                                                                                                                                       |
| **errors**     | `[]` or `undefined` | A collection of errors that might have happened during the execution of the query. Even in the case of errors, a GraphQL server normally returns a 200 OK response but with the collection of errors in the response. |
| **extensions** | `[]`                | Additional metadata returned by the query. This is often outputted by extensions or plugins running on the GraphQL server.                                                                                            |

## ❯ Further Documentation

|                                                              | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [GraphQL](http://graphql.github.io/graphql-js/)              | GraphQL is a query language for APIs and a runtime for fulfilling those queries with existing data. GraphQL provides a description of the API data, and gives clients the power to ask for exactly what they need. |
| [NestJS](https://nestjs.com/)                                | Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming). |

----------------------------------------
|                                                              | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [TypeORM](http://typeorm.io/#/)                              | TypeORM is highly influenced by other ORMs, such as Hibernate, Doctrine and Entity Framework.                                                                                                                      |
| [Jest](http://facebook.github.io/jest/)                      | Delightful JavaScript Testing Library for unit and e2e tests.                                                                                                                                                      |
| [TypeScript](https://www.typescriptlang.org/)                | A strict syntactical superset of JavaScript, adding optional static typing to the language.                                                                                                                        |
