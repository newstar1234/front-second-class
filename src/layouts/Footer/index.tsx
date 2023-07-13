import React from 'react'
import './style.css';

export default function Footer() {
  return (
    <div id='footer'>
      <div className='footer-top'>
        <div className='fotter-top-left'>
          <div className='footer-logo-icon'></div>
          <div className='footer-logo-text'>NEWSTAR's Board</div>
        </div>
        <div className='fotter-top-right'>
          <div className='footer-email'>email@email.kr</div>
          <div className='footer-icon-button'>
            <div className='footer-insta-icon'></div>
          </div>
          <div className='footer-icon-button'>
            <div className='footer-blog-icon'></div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
       Copyright ⓒ 2023  Kim. All Rights Reserved.
      </div>
    </div>
  )
}
