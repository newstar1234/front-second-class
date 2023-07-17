import React, { Dispatch, SetStateAction } from 'react'
import './style.css';
import { INPUT_ICON } from 'src/constants';

interface Props {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  helper?: string;
  icon?: INPUT_ICON;
  error?: boolean;
  setValue: Dispatch<SetStateAction<string>>;
  buttonHandler?: () => void
} // mocks 데이터 말고  Props로 

export default function InputBox( { label, type, placeholder, value, helper, icon, error, setValue, buttonHandler } : Props) {

  const onChangeHandler = (value: string) => {
    setValue(value);
  }

  return (
    <div className='input-box'>
      <div className='input-box-label'>{ label }</div>
      <div className={error ? 'input-box-container-error' : 'input-box-container' }>
        <input className='input' type={ type } placeholder={ placeholder } value={value} onChange={(event) => onChangeHandler(event.target.value)} />
        {
          icon && (
            <div className='input-box-icon' onClick={buttonHandler} >
            {
              icon === INPUT_ICON.ON ? (<div className='input-on-icon'></div>) :
              icon === INPUT_ICON.OFF? (<div className='input-off-icon'></div>) :
              icon === INPUT_ICON.ARROW ? (<div className='input-right-arrow-icon'></div> ) : 
              (<></>) 
            }
          </div>
          )
        } 
      </div>
      { helper && <div className='input-box-helper'>{ helper }</div> }
      </div>
  )
}
