export const createTemplate = (appName) => `#include <string>

std::string getMessage()
{
  return "Hello, ${appName}!";
}
`
