# web-engineering-lab

A minimal web project created for the Web Engineering lab.

## Project layout

```
web-engineering-lab/
├── public/
│   ├── index.html    # main page
│   ├── styles.css    # styling
│   └── script.js     # greet(name) helper + page logic
├── tests/
│   └── greet.test.js # Node built-in test runner tests
├── README.md
└── package.json
```

## Scripts

| Command          | Description                                     |
| ---------------- | ----------------------------------------------- |
| `npm start`      | Serve `public/` locally (http://localhost:3000) |
| `npm run lint`   | Run ESLint on the project                       |
| `npm run format` | Format the project with Prettier                |
| `npm test`       | Run tests with `node --test`                    |

## Usage

1. `npm install` to install dependencies.
2. `npm start` or open `public/index.html` with the Live Server extension.
3. `npm test` to verify that `greet("World")` returns `Hello, World!`.
