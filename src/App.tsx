import MainLayout from "./layouts/MainLayout";
import { Toaster } from 'react-hot-toast';
import Home from "./pages/index";
import './index.css'

function App() {
  return (
    <MainLayout>
      <Toaster position="top-right" reverseOrder={false} />
      <Home />
    </MainLayout>
  );
}

export default App;
