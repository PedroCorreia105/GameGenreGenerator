<p align="center">
  <a href="https://svelte.dev/" target="blank"><img src="https://www.codingtag.com/bloguploads/1559890923.png" width="320" alt="Svelte Logo" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/node-18.16-green" alt="Node Version" />
  <img src="https://img.shields.io/badge/npm-9.5-blue" alt="NPM Version" />
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?" alt="code style: prettier">
  </a>
  <a href="https://www.codefactor.io/repository/github/pedrocorreia105/gamegenregenerator/overview/master">
    <img src="https://www.codefactor.io/repository/github/pedrocorreia105/gamegenregenerator/badge/master" alt="CodeFactor" />
  </a>
  <a href="https://codecov.io/gh/PedroCorreia105/GameGenreGenerator/branch/master">
    <img src="https://codecov.io/gh/PedroCorreia105/GameGenreGenerator/branch/master/graph/badge.svg" alt="Code Coverage">
  </a>
  <a href="https://dl.circleci.com/status-badge/redirect/gh/PedroCorreia105/GameGenreGenerator/tree/master">
    <img src="https://dl.circleci.com/status-badge/img/gh/PedroCorreia105/GameGenreGenerator/tree/master.svg?style=svg" alt="Build">
  </a>
  <a href="https://gamegenregenerator.netlify.app/">
    <img src="https://img.shields.io/website?url=https%3A%2F%2Fgamegenregenerator.netlify.app" alt="Website">
  </a>
  <a href="https://github.com/PedroCorreia105/GameGenreGenerator/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/PedroCorreia105/GameGenreGenerator" alt="License">
  </a>
</p>

<p align="center">
  <sub><sup>
    <a href="#description">Description</a> •
    <a href="#stack">Stack</a> •
    <a href="#installation">Installation</a> •
    <a href="#running-the-app">Running the app</a> •
    <a href="#endpoints">Endpoints</a> •
    <a href="#test">Test</a> •
    <a href="#video-tutorials">Tutorials</a> •
    <a href="#helpful-repos">Helpful repos</a> •
    <a href="#node-best-practices">Node best practices</a> •
    <a href="#license">License</a>
  </sub></sup>
</p>

## Description

A simple webpage made with <a href="https://kit.svelte.dev/" target="blank">Svelte</a> that generates random categories of video games. It includes internationalization, routing, an email api client, dockerization and ui testing.

## Stack

<table align="center">
  <tr>
    <td align="right">
      <b>Language</b>
    </td>
    <td align="left">
      <a href="https://www.typescriptlang.org/">Typescript</a>
    </td>
  </tr>
  <tr>
    <td align="right">
      <b>Framework</b>
    </td>
    <td align="left">
      <a href="https://kit.svelte.dev/">SvelteKit</a>
    </td>
  </tr>
  <tr>
    <td align="right">
      <b>E2E Testing</b>
    </td>
    <td align="left">
      <a href="https://playwright.dev/">Playwright</a>
    </td>
  </tr>
  <tr>
    <td align="right">
      <b>Linter</b>
    </td>
    <td align="left">
      <a href="https://prettier.io/">Prettier</a>
    </td>
  </tr>
  <tr>
    <td align="right">
      <b>CI</b>
    </td>
    <td align="left">
      <a href="https://circleci.com/">CircleCI</a>
    </td>
  </tr>
  <tr>
    <td align="right">
      <b>Deployment</b>
    </td>
    <td align="left">
      <a href="https://netlify.com/">Netlify</a>
    </td>
  </tr>
 </table>

## Installation

```bash
$ npm install

# Install test dependencies
$ npx playwright install --with-deps
```

## Running the app

```bash
# Development
$ npm start

# Production
$ npm run build && npm run preview
```

## Endpoints

```bash
# API
http://localhost:8080
```

## Test

```bash
# Install dependencies
$ npx playwright install --with-deps

# Run e2e tests
$ npm run test

# Process coverage after tests
$ npm run coverage:text
```

## Tutorials

- [Svelte Js Tutorials - dcode](https://www.youtube.com/watch?v=MgOpRVTFBa8&list=PLVvjrrRCBy2KpGl3-s_ELqKd4hiNCN6yz&index=1)
- [Official Tutorial](https://svelte.dev/tutorial/basics)
- [Svelte Tutorial - The Net Ninja](https://www.youtube.com/watch?v=zojEMeQGGHs&list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO&index=1)
- [SvelteKit Tutorial - The Net Ninja](https://www.youtube.com/watch?v=9OlLxkaeVvw&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP)
- [Coverage From Playwright Tests in Sveltekit](https://haseebmajid.dev/posts/2023-04-15--how-to-get-code-coverage-from-playwright-tests-in-a-sveltekit-app-/)

## Helpful examples

- https://github.com/dcode-youtube/svelte-todo
- https://github.com/jmagrippis/techy-cat
- https://svelte.dev/examples/hello-world

## Node best practices

- https://github.com/goldbergyoni/nodebestpractices

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/PedroCorreia105/GameGenreGenerator/blob/master/LICENSE) file for details.
