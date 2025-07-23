# Kingsley Ogueri UI Garden - Assignment 13

## Getting Started

### 1. Clone the Repository

Clone this repository from GitHub.

### 2. Install Dependencies

Run:

```bash
npm install
```

### 3. Husky Pre-commit Hooks

This project uses [Husky](https://typicode.github.io/husky/) to enforce code quality on every commit. The following checks run automatically before each commit:

- ESLint
- Prettier (format check)
- Tests

If any check fails, the commit will be blocked. To manually run these checks:

```bash
npm run lint
npm run format:check
npm test -- --watchAll=false
```

### 4. Running in Docker

To run this app inside a Docker container at `localhost:8018`:

1. Build the Docker image:
   ```bash
   docker build -t ogueri_kingsley_coding_assignment13 .
   ```
2. Run the container:
   ```bash
   docker run --name ogueri_kingsley_coding_assignment13 -p 8018:8018 ogueri_kingsley_coding_assignment13
   ```
3. Visit [http://localhost:8018](http://localhost:8018) in your browser.

### 5. GitHub Actions CI/CD

This repository uses [GitHub Actions](https://github.com/features/actions) to run the same checks (ESLint, Prettier, and tests) on every push and pull request to the `main` branch. If any check fails, the build will fail and you will be notified in the GitHub UI.

---

## Scripts

- `npm run lint` - Run ESLint
- `npm run format:check` - Check formatting with Prettier
- `npm test` - Run tests
- `npm run build` - Build the production app

## Directory Structure

- `Dockerfile` - Docker build instructions
- `.husky/pre-commit` - Pre-commit hook for code quality
- `.github/workflows/ci.yml` - GitHub Actions workflow
- `.eslintrc.json` - ESLint config
- `.prettierrc` - Prettier config
- `nginx.conf` - Nginx config for Docker

## Notes

- The production build is served from `/kingsley_ogueri_ui_garden_build_checks` in the container.
- The container exposes port 8018.
- The container is named `ogueri_kingsley_coding_assignment13` as required.

---

## References

- [How to Add Commit Hooks to Git with Husky to Automate Code Tasks](https://medium.com/@dlyusko/how-to-set-up-a-pre-commit-hook-with-prettier-and-eslint-using-husky-3ca6a9ae7e63)
- [How to build a CI/CD pipeline with GitHub Actions in four simple steps](https://github.blog/enterprise-software/ci-cd/build-ci-cd-pipeline-github-actions-four-steps/)
- [React + TypeScript + ESLint + Prettier Full Setup](https://dev.to/suchintan/reacttypescripteslint-prettier-full-setup-p7j)
- [ESLint + Prettier + Typescript and React in 2022](https://blog.devgenius.io/eslint-prettier-typescript-and-react-in-2022-e5021ebca2b1)
