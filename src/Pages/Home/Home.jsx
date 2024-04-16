import React, { useState, useEffect } from 'react';
import Sidebar from '../../Components/SideBar/SideBar';
import UpperBar from '../../Components/UpperBar/UpperBar';
import './Home.css';
import CompleteIntake from '../../Components/Modal/CompleteIntake'
import { useNavigate } from 'react-router-dom';
import intake from '../../img/Mask group.png'


const Home = ({ Wcomponenet }) => {
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
      // const isDesktopMobile = window.innerWidth < 480;
      // Set the state based on the condition
      setcompleteintakeModalopne(isDesktop);
      setIsMenuOpen(isDesktop);
      // setIsMenuOpen(isDesktopMobile);
    };


    window.addEventListener('resize', handleResize);


    handleResize();


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const hasModalBeenShown = localStorage.getItem('hasModalBeenShown');

    if (!hasModalBeenShown) {
      setcompleteintakeModalopne(true);
      localStorage.setItem('hasModalBeenShown', 'true');
    }
  }, []); 

  const closeCompleteIntakeModal = () => {
    setcompleteintakeModalopne(false);
  };

  const handleCompleteIntake = () => {
    closeCompleteIntakeModal(); 
    navigate('/intake'); 
  };


  return (
    <>
      <div className={`Hoc ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className={` ${isMenuOpen ? 'sidebar1' : ''}`}>
          <Sidebar  isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <div >
          <UpperBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          {Wcomponenet && <Wcomponenet />}
        </div>
      
      </div>


      {iscompleteintakeModalopne && (
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
      )}
    </>
  );
};

export default Home;
