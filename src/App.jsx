import { useState } from 'react'
import './App.css'
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Header from './components/Header';
function App() {

  return (
    <>
       <Layout>
          <Home />
       </Layout>
    </>
  )
}

export default App
