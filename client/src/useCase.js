import React from 'react';
import './useCase.css';
import useCaseImg1 from './images/use_case1.png';

const useCase = () => {

  const handleUseCase1Doc = () => {
    window.location.href = "https://drive.google.com/drive/folders/1Um1DTMRnOn5cxoW-9J-_pc2yzriAq2j5?usp=drive_link"; // Redirects to the MPI site
  };

  return (
    <div className='main-container'>
      <main>
        <div className='section' id="useCase-section">
          <h2 className="shared-title">Use Case #1</h2>
          <div className='img-holder'>
            <img src={useCaseImg1} alt="Connecting for Better Health" />
          </div>
          <button className="reg-button" onClick={handleUseCase1Doc}>Case Study Documents</button>

        </div>
      </main>
    </div>
  );
};

export default useCase;