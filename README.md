### react-microfrontends films
It's a microfrontend for [https://github.com/react-microfrontends](https://github.com/react-microfrontends)

![image](https://github.com/mdomarus/react-mf-films/assets/12214430/1c0edc01-9d88-40dc-9c5e-ba9fff85318b)

## Tech stack
[React 17](https://react.dev/): Unfortunately, this legacy version is shared with the root application.

[TypeScript](https://www.typescriptlang.org/): TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

[Tanstack Query](https://tanstack.com/query/latest): TanStack Query gives you declarative, always-up-to-date auto-managed queries and mutations that directly improve both your developer and user experiences.

[TailwindCSS](https://tailwindcss.com/): TailwindCSS is a utility-first CSS framework that provides a set of pre-built classes to style your UI components. It promotes a functional and scalable approach to styling, allowing for rapid development and consistent design across the application.

[ESLint](https://eslint.org/) with [Prettier](https://prettier.io/): ESLint is a static code analysis tool for identifying problematic patterns in JavaScript code. Paired with Prettier, a code formatter, it helps maintain a consistent coding style and catches potential errors or code smells early in the development process.

[Husky](https://typicode.github.io/husky/): husky is a tool that allows you to easily add pre-commit hooks to your Git repository. It ensures that code quality checks, such as linting and formatting, are run automatically before committing changes, helping maintain a clean and consistent codebase.

## Testing
[Vitest](https://vitest.dev/): Vitest is a lightweight and fast test runner for JavaScript and TypeScript applications. It provides a simple and intuitive API for writing and running tests, making it an ideal choice for unit and integration testing in React projects. 

[React Testing Library](https://testing-library.com/): React Testing Library is a testing utility for React applications that encourages writing tests that closely resemble how users interact with the application. It provides utilities for querying and interacting with rendered components, enabling effective UI testing.

[msw](https://mswjs.io/): Mock Service Worker (msw) is a library for mocking HTTP requests in client-side applications. It allows you to simulate server responses in your tests, making it easier to write isolated and predictable tests for components that make API calls.

## Why These Technologies:
### Productivity
React, TailwindCSS, and Tanstack Query together offer a highly productive development environment. React's component-based architecture, coupled with TailwindCSS's utility-first approach, speeds up UI development. Tanstack Query simplifies data fetching and management, reducing boilerplate code and improving developer efficiency.

### Type Safety
TypeScript provides static typing, which helps catch type-related errors during development. This leads to more robust code and better developer experience, especially in larger codebases.

### Code Quality
ESLint with Prettier ensures consistent code formatting and catches common errors or code style violations. Husky automates these checks, ensuring that all code commits meet the project's standards.

### Testing
Vitest, React Testing Library, and msw enable comprehensive testing of the application. Vitest's simplicity and speed make it easy to write and run tests. React Testing Library promotes writing tests from a user's perspective, leading to more reliable UI tests. msw facilitates mocking of server responses, allowing for isolated testing of components that interact with external APIs.

By leveraging these technologies, the project aims to deliver a well-structured, maintainable, and thoroughly tested application while maximizing developer productivity and code quality.
