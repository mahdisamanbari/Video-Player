import React from 'react';

const Menu = ({formHandler,videoValue}) => {
    return (
       
        <form onClick={(event) => formHandler(event.target.value)}>
        {videoValue.map((value, i) => (
          <div className="video-inputs">
            <input key={i} type="radio" name="src" value={value} />
            {value}
          </div>
        ))}
      </form>
        
    );
};

export default Menu;