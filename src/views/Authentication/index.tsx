import React, { useState } from 'react'
import './style.css';
import InputBox from 'src/components/InputBox';
import { INPUT_ICON } from 'src/constants';

export default function Authentication() {

  const [view, setView] = useState<'sign-in' | 'sign-up'>('sign-in');

  const SignInCard = () => {

    return(
      <div className='auth-card'>
        <div className='auth-card-top'>
          <div className='auth-card-top-text-container'>
            <div className='auth-card-top-text'>로그인</div>
          </div>
          <div className='auth-card-top-input-container'>
            <InputBox label='이메일주소' type='text' placeholder='이메일 주소를 입력해주세요.'/>
            <InputBox label='비밀번호' type='password' placeholder='비밀번호를 입력해주세요' icon={ INPUT_ICON.OFF }/>
          </div>
        </div>
        <div className='auth-card-bottom'>
          <div className='auth-card-bottom-button'>로그인</div>
          <div className='auth-card-bottom-text'>
            신규 사용자이신가요? <span className='emphasis'>회원가입</span></div>
        </div>
      </div>
    )  
  }
  
  const SignUpCard = () => {
    return(
      <div className='auth-card'>
        <div className='auth-card-top'>
          <div className='auth-card-top-text-container'></div>
          <div className='auth-card-top-input-container'></div>
        </div>
        <div className='auth-card-bottom'>
          <div className='auth-card-bottom-button'></div>
          <div className='auth-card-bottom-text'></div>
        </div>
      </div>
    )  
  }
      
  return (
    <div id='auth-wrapper'>
      <div className='auth-left'>
        <div className='auth-left-icon'></div>
        <div className='auth-left-text-container'>
          <div className='auth-left-text'>환영합니다.</div>
          <div className='auth-left-text'>NEWSTAR's Board입니다.</div>
        </div>
      </div>
      <div className='auth-right'>
      {view === 'sign-in' ? (<SignInCard />) : (<SignUpCard />)}
      </div>
    </div>
  )
}
