import React, { useState } from 'react'
import './style.css';
import InputBox from 'src/components/InputBox';
import { INPUT_ICON } from 'src/constants';

export default function Authentication() {

  const [view, setView] = useState<'sign-in' | 'sign-up'>('sign-in');

  const SignInCard = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [error, setError] =useState<boolean>(false);
    
    const onPasswordIconClicHandler = () => {
      setShowPassword(!showPassword);
    }

    const onSignUpClickHandler = () => {
      setView('sign-up');
    }

    return(
      <div className='auth-card'>
        <div className='auth-card-top'>
          <div className='auth-card-top-text-container'>
            <div className='auth-card-top-text'>로그인</div>
          </div>
          <div className='auth-card-top-input-container'>
            <InputBox label='이메일주소' type='text' placeholder='이메일 주소를 입력해주세요.' error={ error }/>
            <InputBox label='비밀번호' type={showPassword ? 'text' : 'password'} placeholder='비밀번호를 입력해주세요' icon={ showPassword ? INPUT_ICON.ON : INPUT_ICON.OFF } buttonHandler = { onPasswordIconClicHandler } error={ error }/>
          </div>
        </div>
        <div className='auth-card-bottom'>
          { error && (
              <div className='auth-card-bottom-error-message'>
              {`이메일 주소 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요.`}
              </div>
          )}
          <div className='auth-card-bottom-button'>로그인</div>
          <div className='auth-card-bottom-text'>
            신규 사용자이신가요? <span className='auth-emphasis' onClick={onSignUpClickHandler}>회원가입</span></div>
        </div>
      </div>
    )  
  }
  
  const SignUpCard = () => {

    const [page, setPage] = useState< 1 | 2 >(1);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showPasswordCheck, setShowPasswordCheck] = useState<boolean>(false);
    
    const [emailPatternError, setEmailPatternError] = useState<boolean>(false);
    const [emailDuplicationError, setEmailDuplicationError ] = useState<boolean>(false);
    const [passwordError, setPasswordError ] = useState<boolean>(false);
    const [passwordCheckError, setPasswordCheckError] = useState<boolean>(false);


    const onPasswordIconClicHandler = () => {
      setShowPassword(!showPassword);
    }
    const onPasswordCheckIconClicHandler = () => {
      setShowPasswordCheck(!showPasswordCheck);
    }

    const onButtonClickHandler = () => {
      if (page === 1 ) setPage(2);
      else setPage(1);
    }

    const onSignInClickHandler = () => {
      setView('sign-in');
    }

    return(
      <div className='auth-card'>
        <div className='auth-card-top'>
          <div className='auth-card-top-text-container'>
            <div className='auth-card-top-text'>회원가입</div>
            <div className='auth-card-top-text-opacity'>{ `${page}/2` }</div>
          </div>
          <div className='auth-card-top-input-container'>
            {
              page === 1 ? (
                <>
                <InputBox label='이메일 주소*' type='text' placeholder='이메일 주소를 입력해주세요.' error={ emailPatternError || emailDuplicationError } helper={ emailPatternError ? '이메일 주소 포맷이 맞지않습니다.' : emailDuplicationError ? '중복되는 이메일 주소입니다.' : '' } />
                <InputBox label='비밀번호*' type={ showPassword ? 'text' : 'password' } placeholder='비밀번호를 입력해주세요.' icon={showPassword ? INPUT_ICON.ON : INPUT_ICON.OFF} buttonHandler={onPasswordIconClicHandler} error={ passwordError } helper={passwordError ? '비밀번호는 8자 이상 입력해주세요.' : '' } />
                <InputBox label='비밀번호 확인*' type={showPasswordCheck ? 'text' : 'password'} placeholder='비밀번호를 다시 입력해주세요.' icon={showPasswordCheck ? INPUT_ICON.ON : INPUT_ICON.OFF} buttonHandler={onPasswordCheckIconClicHandler} error={ passwordCheckError } helper={passwordCheckError ? '비밀번호가 일치하지않습니다.' : ''} />
                </>
              ) : ( 
                <> 
                <InputBox label='닉네임*' type='text' placeholder='닉네임을 입력해주세요.' />
                <InputBox label='핸드폰 번호*' type='text' placeholder='핸드폰 번호를 입력해주세요.' />
                <InputBox label='주소*' type='text' placeholder='우편번호 찾기' icon={INPUT_ICON.ARROW} />
                <InputBox label='상세주소*' type='text' placeholder='상세 주소를 입력해주세요.' />
                </> 
              )
            }
          </div>
        </div>
        <div className='auth-card-bottom'>
          <div className='auth-card-bottom-button' onClick={onButtonClickHandler}>
            { page === 1 ? '다음 단계' : '회원가입' }
          </div>
          <div className='auth-card-bottom-text'>
            이미 계정이 있으신가요? <span className='auth-emphasis' onClick={onSignInClickHandler}>로그인</span>
          </div>
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
