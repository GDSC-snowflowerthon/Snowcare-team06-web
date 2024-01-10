// Notify.jsx
import React from 'react';
import ToggleSwitch from './toggleSwitch';
import './Notify.css';

const Notify = () => {
  return (
    <>
      <div id="container6">
        <h3>알림 설정</h3>
        <hr style={{ border: 'solid 0.1px #D4D6DD' }} />
        <div className="box6">
          <div className='flex'>
            <p>날씨 알림</p>
            <div className='right-button'>
              <ToggleSwitch />
            </div>
           
          </div>
          
          <p style={{ fontSize: '13px', color: '#6c7174' }}>매일 9시에 카톡 메시지 전송</p>
          
        </div>
        <div className="box6">
        <div className='flex'>
            <p>내 장소 봉사활동 알림</p>
            <div className='right-button'>
              <ToggleSwitch />
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Notify;
