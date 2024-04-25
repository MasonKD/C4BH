import React from 'react';
import useCaseImg1 from '../images/DxFUseCases.png';
import button from '../css/button.module.css'
import font from '../css/fonts.module.css'
import flex from '../css/flex.module.css'

const useCase = () => {

  const handleUseCase1Doc = () => {
    window.location.href = "https://drive.google.com/drive/folders/1Um1DTMRnOn5cxoW-9J-_pc2yzriAq2j5?usp=drive_link"; // Redirects to the MPI site
  };

  return (
    <div className='main-container'>
      <main>
          <h2 className={font.h2}>DxF Sandbox: Use Case(s)</h2>
          <div className={flex.row}>
            <img src={useCaseImg1} alt="Connecting for Better Health" />
          </div>
          <div className={flex.row}>
            <button className={button.primary} onClick={handleUseCase1Doc}>Use Case Files</button>
          </div>
      </main>
    </div>
  );
};

export default useCase;