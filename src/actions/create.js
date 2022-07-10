import chalk from 'chalk'
import { join } from 'path'
import { cwd } from 'process'
import { existsSync, mkdirSync, writeFileSync } from 'fs'

import { ErrorCode } from '../constants.js'

export const create = async (appName, options) => {
  const currentDirectory = cwd()

  const { template } = options

  // 0. We need to check if we have appName and template.

  if (!appName) throw new Error(ErrorCode.MISSING_APP_NAME)
  if (!template) throw new Error(ErrorCode.MISSING_TEMPLATE)

  // 1. Whit the appName we create the application folder.

  const appDirectory = join(currentDirectory, appName)

  if (!existsSync(appName)) {
    mkdirSync(appDirectory)
  } else {
    throw new Error(ErrorCode.APP_EXISTS)
  }

  /**
   * 2. Now we need to check if the template is in the template
   * folder. In that case, we load the config file.
   *
   * TODO: Check if is a path or a git repo (-p, -g, etc.).
   */

  const { pathname } = new URL('../..', import.meta.url)

  // TODO: Is there a cleaner way to do this?

  const basePath = pathname.replace(/%20/g, ' ')

  const templatePath = join(basePath, 'src', 'templates', template)

  // 3. If the template exist we import the config file (index).

  if (existsSync(templatePath)) {
    const { config } = await import(join(templatePath, 'index.js'))

    /**
     * 4. And now for each file described, we execute its template
     * file and write the result in the corresponding folder.
     */

    console.log() // Empty line.

    const { language, files, onCompletion } = config

    for (const file of files) {
      const { name, fileName, extension, path, type } = file
      const fullName = `${type === 'config' ? '.' : ''}${name}${
        extension ? `.${extension}` : ''
      }`
      const destination = join(appDirectory, path)

      // 4.1. First we create the folder.

      mkdirSync(destination, { recursive: true })

      // 4.2. Then we read the template file.

      if (name || fileName) {
        const { createTemplate } = await import(
          join(templatePath, 'files', `${fileName ? fileName : name}.js`)
        )

        // 4.3. Finally, we write the file into the folder.

        writeFileSync(join(destination, fullName), createTemplate(appName))
      }

      console.log(chalk.blue('Created:'), chalk.cyan(fullName))
    }

    onCompletion(appName, language)
  } else {
    throw new Error(ErrorCode.NO_TEMPLATE)
  }
}
