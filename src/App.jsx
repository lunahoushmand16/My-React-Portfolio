import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This renders the active child route */}
      </main>
      <Footer />
    </>
  );
}

export default App;

