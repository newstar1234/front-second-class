import React, { useState, useEffect, ChangeEvent } from 'react'
import './style.css';
import { BoardDetailResponseDto, CommentListResponseDto, LikeListResponseDto } from 'src/interfaces/response';
import { boardDetailMock, commentListMock, likeListMock } from 'src/mocks';
import { useParams } from 'react-router-dom';
import CommentListItem from 'src/components/CommentListItem';
import Pagination from 'src/components/Pagination';
import { usePagination } from 'src/hooks';
import { COUNT_BY_PAGE_COMMENT } from 'src/constants';

//              component             //
// description :  게시물 상세 화면 //
export default function BoardDetail() {

  //              state             //
  // description : 게시물 번호 상태 //
  const { boardNumber } = useParams();
  // description :   //
  const { totalPage, currentPage, currentSection, onPageClickHandler, onPreviousClickHandler, onNextClickHandler, changeSection } = usePagination();
  // description : 게시물 정보 상태 //
  const [board, setBoard] = useState<BoardDetailResponseDto | null>(null);
  // description : 게시물 좋아요 회원 리스트 상태 //
  const [likeList, setLikeList] = useState<LikeListResponseDto[]>([]);
  // description : 댓글 리스트 상태 //
  const [commentList, setCommentList] = useState<CommentListResponseDto[]>([]);
  // description : 현재 페이지에서 보여줄 댓글 리스트 상태 //
  const [pageCommentList, setPageCommentList] = useState<CommentListResponseDto[]>([]);
  // description : 좋아요 리스트 컴포넌트 출력 상태 //
  const [showLikeList, setShowLikeList] = useState<boolean>(false);
  // description : 댓글 리스트 컴포넌트  출력 상태 //
  const [showCommentList, setShowCommentList] = useState<boolean>(false);

  //              function              //
  // description : 현재 페이지의 댓글 리스트 분류 함수 //
  const getPageCommentList = () => {
    const lastIndex = commentListMock.length > COUNT_BY_PAGE_COMMENT * currentPage ? 
                      COUNT_BY_PAGE_COMMENT * currentPage : commentListMock.length;
    const startIndex = COUNT_BY_PAGE_COMMENT * (currentPage -1);
    const pageCommentList = commentListMock.slice(startIndex, lastIndex);
    setPageCommentList(pageCommentList);
  }

  //              event handler              //

  //              component              //
  // description : 실제 게시물 컴포넌트 //
  const Board = () => {
    
  //              state             //
  // description : more 버튼 출력 상태 // 로그인
  const [viewMore, setViewMore] = useState<boolean>(true);
  // description : more 버튼 클릭 상태 //
  const [openMore, setOpenMore] = useState<boolean>(false);
  // description : favorite 상태 //
  const [favorite, setFavorite] = useState<boolean>(false);

  //              function              //

  //              event handler              //
  // description : more 버튼 클릭 이벤트 //
  const onMoreButtonClickHandler = () => {
    setOpenMore(!openMore);
  } 
  // description : 좋아요 버튼 클릭 이벤트 //
  const onLikeButtonClickHandler = () => {
    setFavorite(!favorite);
  }
  // description : 좋아요 리스트 펼치기 클릭 이벤트 //
  const onShowLikeListButtonClickHandler = () => {
    setShowLikeList(!showLikeList);
  }
  // description : 댓글 리스트 펼치기 클릭 이벤트 //
  const onShowCommentListButtonClickHandler = () => {
    setShowCommentList(!showCommentList);
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
            <div className='board-detail-bottom-button' onClick={onLikeButtonClickHandler}> {/** 좋아요 하트  */}
              { favorite ? (<div className='favorite-fill-icon'></div>) : (<div className='favorite-icon'></div>) }
            </div>
            <div className='board-detail-bottom-text'>{`좋아요 ${likeList.length}`}</div>
            <div className='board-detail-bottom-button' onClick={onShowLikeListButtonClickHandler}> {/** 좋아요 펼치기  */}
              { showLikeList ? (<div className='up-icon'></div>) : (<div className='down-icon'></div>) }
            </div>
          </div>
          <div className='board-detail-bottom-item'>
            <div className='board-detail-bottom-button'>
              <div className='comment-icon'></div>
            </div>
            <div className='board-detail-bottom-text'>{`댓글 ${commentList.length}`}</div>
            <div className='board-detail-bottom-button' onClick={onShowCommentListButtonClickHandler}> {/** 댓글 펼치기  */}
              { showCommentList ? (<div className='up-icon'></div>) : (<div className='down-icon'></div>) }
            </div>
          </div>
        </div>
      </div>
    );
  }
  // description : 좋아요 리스트 컴포넌트 //
  const LikeList = () => {

    return(
      <div className='like-list-box'>
        <div className='like-list-title'>좋아요 <span className='like-list-title-emphasis'>{likeList.length}</span></div>
        <div className='like-list-container'>
          { likeList.map((item) => (
            <div className='like-list-item'>
              <div className='like-user-profile' style={{backgroundImage: `url(${item.likeUserProfileImage})`}}></div>
              <div className='like-user-nickname'>{ item.likeUserNickname }</div>
            </div>
          ))}
        </div>  
      </div>
    );
  }
  // description : 댓글 컴포넌트 //
  const Comments = () => {
    //            state            //
    // description : 사용자 댓글 입력 상태 //
    const [comment, setComment] =useState<string>('');

    //            event handler            //
    // description : 사용자 댓글 입력 변경 이벤트 //
    const onCommentChangeHandler = (event:ChangeEvent<HTMLTextAreaElement>) => {
      setComment(event.target.value);
    }


    return(
      <div className='comment-list-box'>
        <div className='comment-list-top'>
          <div className='comment-list-title'>댓글 <span className='comment-list-title-emphasis'>{commentList.length}</span></div>
          <div className='comment-list-container'>
            { commentList.map((item) => (<CommentListItem item = {item}/>)) } 
          </div>
        </div>
        <div className='divider'></div>
        { commentList.length !== 0 && (
          <Pagination 
            totalPage={totalPage} 
            currentPage={currentPage} 
            onNextClickHandler={onNextClickHandler} 
            onPageClickHandler={onPageClickHandler} 
            onPreviousClickHandler={onPreviousClickHandler}
          />
        )}
        <div className='comment-box'>
          <textarea className='comment-textarea' placeholder='댓글을 작성해주세요.' rows={3} value={comment} onChange={onCommentChangeHandler}></textarea>
          <div className='comment-button-box'>
            { comment ? 
            (<div className='comment-button'>댓글달기</div>) 
            : 
            (<div className='comment-disable-button'>댓글달기</div>) }
          </div>
        </div>
      </div>
    );
  }

  //              effect              //
  // description : 게시물 번호가 바뀔 때마다 새로운 정보 받아오기 //
  useEffect(() => {
    setBoard(boardDetailMock);
    setLikeList(likeListMock);
    setCommentList(commentListMock); 

    getPageCommentList();

    changeSection(commentListMock.length, COUNT_BY_PAGE_COMMENT);
  }, [boardNumber]);
  // description : 현재 페이지가 바뀔 떄마다 검색 게시물 분류하기 //
  useEffect(() => {
    getPageCommentList();
  }, [currentPage]);
  // description : 현재 페이지가 바뀔 때마다 페이지 리스트 변경 //
  //! 페이지네이션 다시 보기 3까지 나와야 함 
  useEffect (() => {
    changeSection(commentListMock.length, COUNT_BY_PAGE_COMMENT);
  }, [currentSection]);

  //              render              //
  return (
    <div id='board-detail-wrapper'>
      <Board />
      { showLikeList && (<LikeList />) } {/** 좋아요 뿌려주기 */}
      { showCommentList && (<Comments />) }
    </div>
  )
}
