import React from 'react'
import './style.css';

export default function BoardWrite() {

  //              state             //

  //              function             //

  //              event handler             //

  //              component             //
  // description : 게시물 쓰기 화면 //

  //              effect             //


  //              render              //
  return (
    <div id='board-write-wrapper'>
      <div className='board-write-container'>
        <div className='board-write-title-container'>
          <input className='board-write-title-input' type='text' placeholder='제목을 작성해주세요.' />
        </div>
        <div className='divider'></div>
        <div className='board-write-content-container'>
          <div className='board-write-content-input-box'>
            <textarea className='board-write-content-textarea' placeholder='본문을 작성해주세요.'></textarea>
          </div>
          <div className='board-write-content-button-box'>
            <div className='image-upload-button'>
              <div className='image-upload-icon'></div>
            </div>
            <input type='file' accept='image/*' style={{display: 'none'}}/>
          </div>
        </div>
        <div className='board-write-image-container'>
          <img className='board-write-image' src='https://s3.ap-northeast-2.amazonaws.com/img.kormedi.com/news/article/__icsFiles/artimage/2018/06/29/c_km601/shutterstock_222269095_580.jpg' />
            <div className='board-write-image-delete-button'></div>
        </div>
      </div>
    </div>
  )
}
