## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running the App](#running-the-app)
4. [Running the Tests](#running-the-tests)
5. [Adding New Steps and Features](#adding-new-steps-and-features)
6. [Instructions](#instructions)

---

## Prerequisites

- **Node.js** (v22.14 or laterim)

---

## Installation

1. **Clone** this repository (or download the source).
2. **Install dependencies**:

   `npm install`

   or

   `yarn`

   **Install playwright**:

   `npx playwright install`

---

## Running the App

1. **Serve** the app locally:

   `npm run dev`

   Nx will compile and run the React app on **<http://localhost:5173/>** by default.

2. **Open** your browser at <http://localhost:5173/>.

---

## Running the Tests

We use **Cucumber** + **Playwright** for E2E tests. The tests are located in the **src/tests** folder

### Run the tests

1. In one terminal (if you dont have the app running already):

   `npm run dev`

2. In another terminal:

   `npm run e2e`

---

## Adding New Steps and Features

You can add or modify test scenarios in the **Cucumber feature files** and **step definitions** under:

```
  src/
    tests/
      features/  <-- .feature files here
      steps/     <-- .steps.ts files here
```

- **Feature Files**: Write your Gherkin (`.feature`) scenarios in `features/`.
- **Step Definitions**: Implement the test logic in `.steps.ts` files under `steps/`.
- **Aditional Objects**: Feel free to structure any Page Object Model (POM) elements however you prefer.

When you run `npm run e2e`, it will execute all scenarios in `features/` and use the step definitions in `steps/`.

---

## Instructions

1. Add some end-to-end tests in a way you believe is most efficient.

2. You can use the blank feature and step files as a starting point, but feel free to create your own approach if you prefer.

3. Creating a Page Object Model (POM) to assist your tests if you want to, this is not mandatory.

4. Avoid modifying the application’s source files directly, if possible.

---

**Happy Testing!**

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
