export const createTemplate = (appName) => `{
  "name": "${appName}",
  "version": "1.0.0",
  "author": {
    "name": "Gustavo Muñoz",
    "email": "timbergus@gmail.com"
  },
  "scripts": {
    "start": "bun dev",
    "test": "jest --watch"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@types/jest": "^28.1.4",
    "@types/react": "^18.0.15",
    "@types/react-dom": "^18.0.6",
    "@types/testing-library__jest-dom": "^5.14.5",
    "@types/testing-library__react": "^10.2.0",
    "@typescript-eslint/eslint-plugin": "^5.30.5",
    "@typescript-eslint/parser": "^5.30.5",
    "eslint": "^8.19.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-react": "^7.30.1",
    "jest": "^28.1.2",
    "jest-environment-jsdom": "^28.1.2",
    "react-refresh": "^0.14.0",
    "ts-jest": "^28.0.5",
    "typescript": "^4.7.4"
  }
}
`
