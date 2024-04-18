import React from 'react';
import './useCase.css';
import useCaseImg1 from '../images/DxFUseCases.png';

const useCase = () => {

  const handleUseCase1Doc = () => {
    window.location.href = "https://drive.google.com/drive/folders/1Um1DTMRnOn5cxoW-9J-_pc2yzriAq2j5?usp=drive_link"; // Redirects to the MPI site
  };

  return (
    <div className='main-container'>
      <main>
        <div className='section' id="useCase-section">
          <h2 className="shared-title">DxF Sandbox: Use Case(s)</h2>
          <div className='img-holder'>
            <img src={useCaseImg1} alt="Connecting for Better Health" />
          </div>
          <div className='reg-btn-holder'>
            <button className="reg-button" onClick={handleUseCase1Doc}>Use Case Files</button>
          </div>


        </div>
      </main>
    </div>
  );
};

export default useCase;