import React from "react";


const Header = () => {
  return (<>
    <header>
      <div className='project'>
        <h1>2022 Gradeshow
        </h1>
        
      </div>
      <div className='episode'>
        <span>Typlore</span>
        <div>Explore your typo neuron</div>
      </div>
      <div class="main_container">
        <div data-view="pinned_top" 
          data-set="Scaffolding" 
          data-position="top" 
          class="pinned pinned_top">
          </div>
      </div>
    </header>
  </>    
  );
};

export default Header;