export const createTemplate = () => `#include <iostream>
#include "utils.h"

int main()
{
  std::cout << getMessage() << "\\n";
  return EXIT_SUCCESS;
}
`
