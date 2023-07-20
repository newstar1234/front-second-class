import React, { ChangeEvent, useRef, useState } from 'react'
import './style.css';
import my_page_profile_default from './asset/my_page_profile_default.png';

//              component             //
// description : 마이페이지 화면  //
export default function MyPage() {

  //              state             //
  //              function             //
  //              event handler             //
  //              effect             //
  
  
  //              component             //
  // description: 마이페이지 상단 //
  const MyPageTop = () => {
    
    //              state             //
    // description : input 요소에 대한 참조용 상태 //
    // description : useRef를 사용하여 HTML 요소를 JS 객체로 다룰 수 있음 //
    const fileInputRef = useRef<HTMLInputElement>(null);
    // description : 사용자 프로필 사진 URL 상태 //
    const [profileImageUrl, setProfileImageUrl] = useState<string>(my_page_profile_default);
    // description : 사용자 닉네임 상태 //
    const [nickname, setNickname] = useState<string>('아이디');
    

    //              function             //
    //              event handler             //
    // description : 프로필 이미지 선택 시 파일 인풋창 열림 이벤트 //
    const onProfileClickHandler = () => {
      fileInputRef.current?.click();
    }
    // description : 파일 인풋 변경 시 이미지 미리보기 //
    const onImageInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      if(!event.target.files || !event.target.files.length ) return;
      // description : 입력 받은 이미지 파일을 URL형태로 변경해주는 구문 //
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setProfileImageUrl(imageUrl);
    }

    //              effect             //


    //              render              //
    return(
      <div className='my-page-top'>
        <div className='my-page-top-container'>
          <div className='my-page-top-profile-box'>
            <div className='my-page-top-profile' style={{ backgroundImage: `url(${profileImageUrl})` }} onClick={onProfileClickHandler} ></div>
            <input type='file' style={ { display: 'none' }} ref={fileInputRef} accept='image/*' onChange={onImageInputChangeHandler} />
          </div>
          <div className='my-page-top-info-box'>
            <div className='my-page-info-nickname-container'>
              <div className='my-page-info-nickname'>{nickname}</div>
              <input type='text' value={nickname} />
              <div className='my-page-info-nickname-button'>
                <div className='my-page-edit-icon'></div>
              </div>
            </div>
            <div className='my-page-info-email'>email@email.com</div>
          </div>
        </div>
      </div>
    );
  }

  // description : 마이페이지 하단 //
  const MyPageBottom = () => {

  //              state             //
  //              function             //
  //              event handler             //
  //              effect             //

    return(
      <div className='my-page-bottom'></div>
    );
  }
  
  //              render              //
  return (
    <div id='my-page-wrapper'> 
      <MyPageTop />
      <MyPageBottom />
    </div>
  )
}
