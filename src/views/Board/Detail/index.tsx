import React, { useState, useEffect } from 'react'
import './style.css';
import { BoardDetailResponseDto } from 'src/interfaces/response';
import { boardDetailMock } from 'src/mocks';
import { useParams } from 'react-router-dom';

//              component             //
// description :  게시물 상세 화면 //
export default function BoardDetail() {

  //              state             //
  // description : 게시물 번호 상태 //
  const { boardNumber } = useParams();
  // description : 게시물 정보 상태 //
  const [board, setBoard] = useState<BoardDetailResponseDto | null>(null);
  // description : 게시물 좋아요 회원 리스트 상태 //
  const [likeList, setLikeList] = useState<any[]>([]);
  // description : 댓글 리스트 상태 //
  const [commentList, setCommentList] = useState<any[]>([]);

  //              function              //

  //              event handler              //

  //              component              //
  // description : 실제 게시물 컴포넌트 //
  const Board = () => {
    
  //              state             //
  // description : more 버튼 출력 상태 // 로그인
  const [viewMore, setViewMore] = useState<boolean>(true);
  // description : more 버튼 클릭 상태 //
  const [openMore, setOpenMore] = useState<boolean>(false);

  //              function              //

  //              event handler              //
  // description : more 버튼 클릭 이벤트 //
  const onMoreButtonClickHandler = () => {
    setOpenMore(!openMore);
  } 

  //              effect              //

  //              render              //
    return(
      <div className='board-detail-container'>
        <div className='board-detail-top'>
          <div className='board-detail-title-container'>
            <div className='board-detail-title'>{ board?.boardTitle }</div>
          </div>
          <div className='board-detail-meta-container'>
            <div className='board-detail-meta-left'>
              <div className='board-detail-writer-profile-image' style={{ backgroundImage: `url(${board?.writerProfileImage})` }} ></div>
              <div className='board-detail-writer-nickname'>{ board?.writerNickName }</div>
              <div className='board-detail-write-date'>{'\|'}</div>
              <div className='board-detail-write-date'> { board?.writerDate }</div>
            </div>
            <div className='board-detail-meta-right'>
              {openMore && (
                <div className='more-button-group'>
                  <div className='more-button'>수정</div>
                  <div className='divider'></div>
                  <div className='more-button-red'>삭제</div>
                </div>
              )}
              {viewMore && (
                <div className='board-detail-more-button' onClick={onMoreButtonClickHandler}>
                 <div className='more-icon'></div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='divider'></div>
        <div className='board-detail-middle'>
          <div className='board-detail-content'>{ board?.boardContent }</div>
          <div className='board-detail-image-box'>
            <img className='board-detail-image' src={ board?.boardImage } />
          </div>
        </div>
        <div className='board-detail-bottom'>
          <div className='board-detail-bottom-item'>
            <div className='board-detail-bottom-button'>
              <div className='favorite-icon'></div>
            </div>
            <div className='board-detail-bottom-text'>{`좋아요 ${likeList.length}`}</div>
            <div className='board-detail-bottom-button'>
              <div className='down-icon'></div>
            </div>
          </div>
          <div className='board-detail-bottom-item'>
            <div className='board-detail-bottom-button'>
              <div className='comment-icon'></div>
            </div>
            <div className='board-detail-bottom-text'>{`댓글 ${commentList.length}`}</div>
            <div className='board-detail-bottom-button'>
              <div className='down-icon'></div>
            </div>
          </div>
        </div>
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
  // description : 게시물 번호가 바뀔 때마다 새로운 정보 받아오기 //
  useEffect(() => {
    setBoard(boardDetailMock);
    setLikeList([]);
    setCommentList([]);
  }, [boardNumber]);

  //              render              //
  return (
    <div id='board-detail-wrapper'>
      <Board />
      <LikeList />
      <Comments />
    </div>
  )
}
