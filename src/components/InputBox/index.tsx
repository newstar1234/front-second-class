import React from 'react'
import './style.css';

interface Props {
  label: string;
  type: string;
  placeholder: string;
  helper: string;
  icon?: string;
} // mocks 데이터 말고  Props로 

export default function InputBox( { label, type, placeholder, helper, icon } : Props) {

  return (
    <div className='input-box'>
      <div className='input-box-label'>{ label }</div>
      <div className='input-box-container input-box-container-error'>
        <input className='input' type={ type } placeholder={ placeholder } />
        <div className='input-box-icon' >
          <div className='input-on-icon'></div>
        </div>
      </div>
      <div className='input-box-helper'>{ helper }</div>
    </div>
  )
}
