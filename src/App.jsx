import { useState, useEffect } from 'react';
import About from './Components/About';
import Header from './Components/Header';
import Top from './Components/Top';
import bg from "./assets/images/background/Rectangle 4.png";

function App() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position has reached the height of the Top section
      const topSectionHeight = document.querySelector('#top-section').offsetHeight;
      setIsSticky(window.scrollY >= topSectionHeight);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header isSticky={isSticky} />

      {/* Top Section with ID for reference */}
      <div id="top-section" className="bg-gradient-to-r from-[#BD1F17] to-[#A51D13] w-full h-[1177px] relative">
        <img className="w-full h-[1177px] object-cover" src={bg} alt="" />
        <div className="absolute inset-0 flex">
          <div className="relative mt-[100px] w-full text-white">
            <Top />
          </div>
        </div>
      </div>

      {/* About Section */}
      <About />
    </div>
  );
}

export default App;
