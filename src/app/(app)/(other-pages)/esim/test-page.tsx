import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'eSIM Test Page',
  description: 'Test page',
}

const TestPage = () => {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-semibold">eSIM Test Page</h1>
      <p>Testing without any components</p>
    </div>
  )
}

export default TestPage