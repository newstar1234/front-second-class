import React from 'react'
import './style.css';
import { boardListItemMock } from 'src/mocks';

export default function BoardListItem() {

  const { boardNumber, boardTitle, boardContent, boardImage } = boardListItemMock;
  const { writerProfileImage, writerNickName, writerDate } = boardListItemMock;
  const { likeCount, viewCount, commentCount } = boardListItemMock;

  return (
    <div className='board-list-item-box'>
      <div className='board-list-item-left'>
        <div className='board-list-item-writer'>
          <div className='board-list-item-profile'>
            <div className='board-list-item-profile-image' style={{ backgroundImage: `url(${writerProfileImage})` }}></div>
          </div>
          <div className='board-list-item-writer-right'>
            <div className='board-list-item-writer-nickname' >
              { writerNickName }
            </div>
            <div className='board-list-item-write-date'>
              { writerDate }
            </div>
          </div>
        </div>
        <div className='board-list-item-title'>
          { boardTitle }
        </div>
        <div className='board-list-item-content'>
          { boardContent }
        </div>
        <div className='board-list-item-count'>
          { `댓글 ${commentCount} · 좋아요 ${likeCount} · 조회수 ${viewCount}` }
        </div>
      </div>
      <div className='board-list-item-right'>
        <div className='board-list-item-board-image' style={{ backgroundImage: `url(${boardImage})` }}></div>
      </div>
    </div>
  )
}
