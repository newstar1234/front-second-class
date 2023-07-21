import React from 'react'
import './style.css';

//              component             //
// description :  게시물 상세 화면 //
export default function BoardDetail() {

  //              state             //

  //              function              //

  //              event handler              //

  //              component              //
  // description : 실제 게시물 컴포넌트 //
  const Board = () => {
    
    return(
      <div className='board-detail-container'>
        <div className='board-detail-top'>
          <div className='board-detail-title-container'>
            <div className='board-detail-title'></div>
          </div>
          <div className='board-detail-meta-container'>
            <div className='board-detail-meta-left'></div>
            <div className='board-detail-meta-right'></div>
          </div>
        </div>
        <div className='divider'></div>
        <div className='board-detail-middle'></div>
        <div className='board-detail-bottom'></div>
      </div>
    );
  }
  // description : 좋아요 리스트 컴포넌트 //
  const LikeList = () => {

    return(
      <div></div>
    );
  }
  // description : 댓글 컴포넌트 //
  const Comments = () => {

    return(
      <div></div>
    );
  }

  //              effect              //


  //              render              //
  return (
    <div id='board-detail-wrapper'>
      <Board />
      <LikeList />
      <Comments />
    </div>
  )
}
