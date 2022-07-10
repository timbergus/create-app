import chalk from 'chalk'
import { exec } from 'child_process'
import { exit } from 'process'

export const config = {
  language: 'React',
  files: [
    {
      name: 'index',
      fileName: 'indexHtml',
      extension: 'html',
      path: '/public',
    },
    {
      name: 'App',
      extension: 'tsx',
      path: '/src/App',
    },

    {
      name: 'App',
      fileName: 'appSpec',
      extension: 'spec.tsx',
      path: '/src/App/test',
    },
    {
      name: 'index',
      fileName: 'indexTsx',
      extension: 'jsx',
      path: '/src',
    },
    {
      name: 'editorconfig',
      extension: '',
      path: '/',
      type: 'config',
    },
    {
      name: 'eslintrc',
      extension: '',
      path: '/',
      type: 'config',
    },
    {
      name: 'gitignore',
      extension: '',
      path: '/',
      type: 'config',
    },
    {
      name: 'prettierrc',
      extension: '',
      path: '/',
      type: 'config',
    },
    {
      name: 'jest',
      extension: 'config.json',
      path: '/',
    },
    {
      name: 'package',
      extension: 'json',
      path: '/',
    },
    {
      name: 'tsconfig',
      extension: 'json',
      path: '/',
    },
    {
      name: 'README',
      extension: 'md',
      path: '/',
    },
  ],
  onCompletion: async function (appName, language) {
    console.log()
    console.log(chalk.yellow('Installing packages'))

    exec(`cd ${appName} && bun install`, (error, stdout) => {
      if (error) {
        console.log(chalk.red('Error installing packages'))
        exit()
      }

      console.log()
      console.log(stdout)

      console.log(chalk.yellow('Initializing Git'))

      exec(`cd ${appName} && git init`, (error, stdout) => {
        if (error) {
          console.log(chalk.red('Error initializing Git'))
          exit()
        }
        console.log()
        console.log(stdout)

        console.log(
          chalk.green('Open your new'),
          chalk.yellow(language),
          chalk.green('application'),
        )
        console.log(chalk.green('Instructions in the README'))
        console.log(chalk.green('Have fun :)'))
        console.log()
      })
    })
  },
}
