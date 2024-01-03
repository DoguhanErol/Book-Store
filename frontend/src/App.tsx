import { QueryClientProvider, QueryClient } from 'react-query'
import './App.css'
import Layout from './components/Shared/Layout';

const reactQueryClient =  new QueryClient();

function App() {
  

  return (
    <>
      <QueryClientProvider client={reactQueryClient}>
        <Layout />
      </QueryClientProvider>

    </>

  )
}

export default App
