# My Developer Blog

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Repository Description

This repository hosts a developer blog built with Docusaurus. It includes tools and scripts for creating, managing, and deploying static web content. The software supports rapid local development, customizable theming, and seamless deployment to platforms like GitHub Pages or NGINX.

## Table of Contents

- [My Developer Blog](#my-developer-blog)
  - [Repository Description](#repository-description)
  - [Table of Contents](#table-of-contents)
  - [Quickstart](#quickstart)
    - [Prerequisites](#prerequisites)
    - [How-to-Start](#how-to-start)
  - [Usage](#usage)
  - [Repository Structure](#repository-structure)
  - [Deployment](#deployment)
    - [Deploy to Github Pages](#deploy-to-github-pages)
    - [Deploying using NGINX](#deploying-using-nginx)

## Quickstart

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [pnpm](https://pnpm.io/) (package manager for faster and more efficient dependency handling)
- [Docker](https://www.docker.com/products/docker-desktop) (only required if [deploying using NGINX](#deploying-using-nginx))

### How to Start

1. Install dependencies

   ```
   $ pnpm install
   ```

2. Start development server

   ```
   $ pnpm start
   ```

   This starts a local development server. Changes are applied automatically.

3. Build the project

   ```
   $ pnpm build
   ```

   The static website is generated in the build directory.

4. Deployment

   Make sure docusaurus.config.ts is configured correctly for GitHub Pages and follows the official deployment guidelines.

   ```
   $ USE_SSH=true pnpm deploy
   ```

For detailed information about deploying this Docusaurus project, refer to the [Deployment](#deployment) section below.

## Usage
Detailed configuration and how to modify relevant parts to achieve different results.

### 1- Site configuration (`docusaurus.config.ts`)
- **Base URLs for Pages**: set `url` to `https://<your-user>.github.io` and `baseUrl` to `/docusaurus-portfolio/` (or your repo name).
- **Organization/Project**: set `organizationName` and `projectName` to your GitHub user and repo.
- **Branding**: update `title`, `tagline`, and `favicon`.

### 2- Sections and content
- **Edit text and layout** inside section components in [`src/components`](src/components). Keep one component per folder with file name `index.tsx`. Use CSS Modules (`*.module.css`).
- **Add a new section**: create `src/components/<new-section>/index.tsx`, then import and place it in [`src/pages/index.tsx`](src/pages/index.tsx) to control order and layout.

### 3- Styling
- Use CSS Modules (e.g., `header.module.css`) to keep styles scoped to the component.

### 4- Assets and links
- Place images in `static/` and reference them with `/img/...`. Respect `baseUrl` when deploying under a subpath.
- Prefer relative internal links so they work locally and on GitHub Pages.

---

## Repository Structure

The repository is organized as follows:

- `blog/`: Contains markdown files for blog posts. Blog-related metadata is automatically picked up by the Docusaurus configuration.
- `docs/`: Contains markdown files for documentation. These files are referenced in `sidebars.ts` to define the sidebar structure.
- `src/`: Contains custom React components, CSS, and JavaScript for additional functionality or theming.
- `static/`: Stores static assets (e.g., images, icons) served directly without processing.
- `sidebars.ts`: Configures the structure of sidebars in the documentation section.
- `docusaurus.config.ts`: Main configuration file for customizing and managing Docusaurus behavior.
- `build/`: Generated after running the `pnpm build` command. Contains the static website files ready for deployment.

New content can be added as follows:

- Add new documentation files to the `docs/` folder.
- Add new blog posts to the `blog/` folder. No additional configuration is required.

## Deployment

### Deploy to Github Pages

To deploy using SSH:

```
$ USE_SSH=true pnpm deploy
```

To deploy without using SSH, run:

```
$ GIT_USER=<Your GitHub username> pnpm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Deploying using NGINX

To deploy the site using NGINX and Docker, follow this [guide](./docs/guides/deploy-docusaurus-with-docker-and-nginx.md)
