export const createTemplate =
  () => `import { render, screen } from '@testing-library/react'

import { App } from '../App'

describe('The App component', () => {
  test('should have a message.', () => {
    render(<App />)
    expect(screen.getByText(/hello/i)).toBeDefined()
  })
})
`
