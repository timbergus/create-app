import chalk from 'chalk'

export const config = {
  language: 'C++',
  files: [
    {
      name: 'main',
      extension: 'cpp',
      path: '/src/app',
    },
    {
      name: 'utils',
      extension: 'h',
      path: '/src/include',
    },
    {
      name: 'Makefile',
      extension: '',
      path: '/',
    },
    {
      name: 'README',
      extension: 'md',
      path: '/',
    },
  ],
  onCompletion: function (language) {
    console.log()
    console.log(
      chalk.green('Open your new'),
      chalk.yellow(language),
      chalk.green('application.'),
    )
    console.log(chalk.green('Instructions in the README.'))
    console.log(chalk.green('Have fun :)'))
    console.log()
  },
}
