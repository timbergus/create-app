export const createTemplate = () => `{
  "compilerOptions": {
    "target": "ESNext",
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "node",
    "types": [
      "jest",
      "bun-types"
    ],
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
`
