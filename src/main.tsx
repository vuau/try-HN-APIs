import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import "@reach/dialog/styles.css";
import "./App.css";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.querySelector('#app') as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)