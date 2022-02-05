#! /usr/bin/env node

import chalk from 'chalk'
import { program } from 'commander'

import { create } from './actions/create.js'

import { ErrorCode } from './constants.js'

program
  .name('create-app')
  .description('CLI to create any app from a template')
  .version('1.0.0')

program
  .argument('[name]', 'name of the application')
  .option('-t, --template <template>', 'template path')
  .action(create)

try {
  program.parse()
} catch (error) {
  if (error.message === ErrorCode.MISSING_APP_NAME) {
    console.log(chalk.red('Error:'), 'App name is required')
  }
  if (error.message === ErrorCode.MISSING_TEMPLATE) {
    console.log(chalk.red('Error:'), 'Template is required')
  }
  if (error.message === ErrorCode.APP_EXISTS) {
    console.log(chalk.red('Error:'), 'The application already exists')
  }
}
