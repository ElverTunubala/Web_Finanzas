import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from './pages/Auth/AuthContext.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider> 
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </AuthProvider>
    
  </StrictMode>,
)
