import React, { ChangeEvent, useRef, useState } from 'react'
import './style.css';

//              component             //
// description : 게시물 쓰기 화면 //
export default function BoardWrite() {

  //              state             //
  // description : textarea 요소에 대한 참조 상태 //
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  // description : file input 요소에 대한 참조 상태 //
  const fileInputRef = useRef<HTMLInputElement>(null);
  // description : 이미지를 저장할 상태 //
  const [baardImageUrl, setBoardImageUrl] =useState<string>('');

  //              function             //

  //              event handler             //
  // description : 본문 내용이 바뀔시 textarea 높이 변경 이벤트 //
  const onContentChangeHandler = () => {
    if (!textAreaRef.current) return;
    textAreaRef.current.style.height='auto';
    textAreaRef.current.style.height= `${textAreaRef.current.scrollHeight}px`;
  }
  // description : 이미지 변경 시 이미지 미리보기 //
  const onImageInputChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    if(!event.target.files || !event.target.files.length) return;  //없거나 0이면 리턴
    const imageUrl = URL.createObjectURL(event.target.files[0]);
    setBoardImageUrl(imageUrl);
  }
  // description : 이미지 업로드 버튼 클릭 이벤트  //
  const onImageUploadButtonClickHandler = () => {
    if(!fileInputRef.current) return;
    fileInputRef.current.click();
  }
  // description : 이미지 닫기 버튼 클릭 이벤트 //
  const onImageCloseButtonClickHandler = () => {
    if(!fileInputRef.current) return;
    fileInputRef.current.value = '';
    setBoardImageUrl('');
  }

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
            <textarea ref={textAreaRef} className='board-write-content-textarea' placeholder='본문을 작성해주세요.' onChange={onContentChangeHandler} ></textarea>
          </div>
          <div className='board-write-content-button-box'>
            <div className='image-upload-button' onClick={onImageUploadButtonClickHandler}>
              <div className='image-upload-icon'></div>
            </div>
            <input ref={fileInputRef} type='file' accept='image/*' style={{display: 'none'}}  onChange={onImageInputChangeHandler} />
          </div>
        </div>
        { baardImageUrl && (
          <div className='board-write-image-container'>
            <img className='board-write-image' src={baardImageUrl} />
              <div className='board-write-image-delete-button' onClick={onImageCloseButtonClickHandler}>
                <div className='image-close-icon'></div>
              </div>
        </div>
        )}
        
      </div>
    </div>
  )
}
