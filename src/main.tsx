import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./assets/sass/style.scss"

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <BrowserRouter>
      <App />

    </BrowserRouter>
  // </StrictMode>,
)
