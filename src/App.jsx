import { ToastContainer } from "react-toastify";
import Layout from "./components/Layout";
import AppRouter from "./route/AppRouter";
import 'react-toastify/ReactToastify.css'

function App() {
  return (
    <Layout>
      <AppRouter />
      <ToastContainer position="bottom-right" style={{zIndex: 9999}}/>
    </Layout>
  )
}

export default App
