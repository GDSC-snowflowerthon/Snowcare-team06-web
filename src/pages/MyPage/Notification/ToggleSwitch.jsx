// ToggleSwitch.jsx
import React, { useState } from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = () => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
    // Add your logic here based on the toggle state
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isToggled} onChange={handleToggle} />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleSwitch;
