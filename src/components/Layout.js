import { useEffect, useState } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
