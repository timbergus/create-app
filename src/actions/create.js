import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { cwd } from 'process'

import { ErrorCode } from '../constants.js'

export const create = async (appName, options) => {
  const currentDirectory = cwd()

  const { template } = options

  // 0. We need to check if we have appName and template.

  if (!appName) throw new Error(ErrorCode.MISSING_APP_NAME)
  if (!template) throw new Error(ErrorCode.MISSING_TEMPLATE)

  // 1. Whit the appName we create the application folder.

  if (!existsSync(appName)) {
    mkdirSync(`${currentDirectory}/${appName}`)
  } else {
    // throw new Error(ErrorCode.APP_EXISTS)
  }

  /**
   * 2. Now we need to check if the template is in the template
   * folder. In that case, we load the config file.
   *
   * TODO: Check if is a path or a git repo (-p, -g, etc.).
   */

  // const basePath = process.env._
  const basePath = '/opt/homebrew/lib/node_modules/create-app'

  console.log(basePath)

  if (existsSync(`${basePath}/src/templates/${template}`)) {
    // 3. If the template exist we import the config file (index).

    const { config } = await import(`../templates/${template}/index.js`)

    /**
     * 4. And now for each file described, we execute its template
     * file and write the result in the corresponding folder.
     */

    const { files } = config

    for (const file of files) {
      const { name, extension, path } = file
      const fileName = `${name}${extension ? `.${extension}` : ''}`
      const destination = `${currentDirectory}/${appName}/${path}`

      // 4.1. First we create the folder.

      mkdirSync(destination, { recursive: true })

      // 4.2. Then we read the template file.

      if (name) {
        const { createTemplate } = await import(
          `${basePath}/src/templates/${template}/files/${name}.js`
        )

        // 4.3. Finally, we write the file into the folder.

        writeFileSync(`${destination}/${fileName}`, createTemplate(appName))
      }
    }
  } else {
    console.log('FUCK!')
  }
}
