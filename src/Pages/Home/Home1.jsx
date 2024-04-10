import React, { useState, useEffect } from 'react';
import Sidebar from '../../Components/SideBar/SideBar';
import UpperBar from '../../Components/UpperBar/UpperBar';
import './Home1.css';
import CompleteIntake from '../../Components/Modal/CompleteIntake'
import { useNavigate } from 'react-router-dom';
import intake from '../../img/Mask group.png'




const Home1 = ({ Wcomponenet }) => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [iscompleteintakeModalopne, setcompleteintakeModalopne] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Set a threshold for the window width to determine if it's a desktop screen
      const isDesktop = window.innerWidth < 768; // You can adjust this threshold as needed
        const isDesktopMobile=window.innerWidth < 480;
      // Set the state based on the condition
      
      setcompleteintakeModalopne(isDesktop);
      setIsMenuOpen(isDesktop);
      setIsMenuOpen(isDesktopMobile);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call the handleResize function initially to set the initial state
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Check if the modal has been shown before
    const hasModalBeenShown = localStorage.getItem('hasModalBeenShown');

    if (!hasModalBeenShown) {
      // If not shown before, set the state to true and mark the modal as shown
      setcompleteintakeModalopne(true);
      setIsMenuOpen(true);
      localStorage.setItem('hasModalBeenShown', 'true');
    }
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const closeCompleteIntakeModal = () => {
    setcompleteintakeModalopne(false);
    setIsMenuOpen(false)
  };

  const handleCompleteIntake = () => {
    closeCompleteIntakeModal(); // Close the modal
    navigate('/intake'); // Navigate to '/intake'
  };

  // Return a new component that wraps the provided WrappedComponent
  return (
    <>
      <div className={`Hoc ${isMenuOpen ? 'menu-open' : 'menu-open'}`}>
        {/* <div className={` ${isMenuOpen ? 'sidebar1' : ''}`}>
         <Sidebar   isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>  */}
        <div >
          <UpperBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          {Wcomponenet && <Wcomponenet />}
        </div>
      </div>
      
      {/* Notification Modal */}
      {/* {iscompleteintakeModalopne && (
        <CompleteIntake >
          <div className='completeintake'>
            <div>
              <img src={intake} alt="" />
              <p>You Haven’t Uploaded your Intake
                Documents Yet!....Complete your
                Intake Process Now!</p>
                <button className='completeintakebutton'  onClick={handleCompleteIntake}>COMPLETE INTAKE NOW</button>
                <button className='skiptakebutton'  onClick={closeCompleteIntakeModal} >SKIP FOR NOW</button>
            </div>
          </div>
        </CompleteIntake>
      )} */}
    </>
  );
};

export default Home1;
