# 📝 GitHub Blog
I developed this project as a challenge of my latest studies of React lessons on [Rocketseat](https://www.rocketseat.com.br).

<br>

<p align="center">
  <img alt="GitHub Blog Project Preview" src="https://github.com/rcrdk/ignite-challenge-github-blog/blob/main/public/preview.jpeg?raw=true" width="100%" />
</p>

## 🚀 Techs and Tools

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Figma](http://figma.com/)
- [Styled Components](https://styled-components.com/)
- [React Router](https://reactrouter.com/en/main)
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- [React Markdown](https://remarkjs.github.io/react-markdown/)
- [Axios](https://axios-http.com/docs/intro) + [GitHub API](https://docs.github.com/en/rest?apiVersion=2022-11-28)
- [use-context-selector](https://github.com/dai-shi/use-context-selector#readme)

## 💻 Project

This project was develped based on a Figma design provied by the school. The main practice was fetching data using GitHub API with Axios and improve app performance with useCallback, useMemo and memo. Also, I used Context API to access functions and variables across components and implemented use-context-selector packacge for better performance. I took some liberties and challenge myself to implement a loading state on components, a pagination at home page and setup React Markdown to convert markdown to HTML.

**It includes:** A home page containing user card and posts list with pagination and filter by query string; A post page with post contents; A fallback page for general errors such as 404.

## 🔗 Links

- [Design / Figma](https://www.figma.com/file/ToNoWE1lAJxsi7b4qPE9HU/Desafio---GitHub-Blog?type=design&node-id=0%3A1&mode=design&t=14nQZ0kf7aUcm432-1)
- [Deploy](https://ignite-challenge-github-blog.vercel.app/)

## ⚙️ Enviroment Variables

```shell
REACT_APP_GITHUB_USER=<USERNAME>
REACT_APP_GITHUB_REPO=<REPO>
```
