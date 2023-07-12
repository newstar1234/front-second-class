import React from 'react'
import './style.css';
import { top3ListItemMock } from 'src/mocks';
import { useNavigate } from 'react-router-dom';


export default function Top3ListItem() {

  const { boardNumber, boardTitle, boardContent, boardImage } = top3ListItemMock;
  const { writerProfileImage, writerNickName, writerDate } = top3ListItemMock;
  const { likeCount, viewCount, commentCount } = top3ListItemMock;

  const navigator = useNavigate();

  const onClickHandler = () => {
    navigator(`/board/detail/${boardNumber}`);
  }

  return (
    <div className='top3-list-item-box' style={{ backgroundImage: `url(${ boardImage })`}} onClick={onClickHandler} >
      <div className='top3-list-item-container'>
        <div className='top3-list-item-writer'>
          <div className='top3-list-item-profile'>
            <div className='top3-list-item-profile-image' style={{ backgroundImage: `url(${ writerProfileImage })` }}></div>
          </div>
          <div className='top3-list-item-writer-right'>
            <div className='top3-list-item-writer-nickname'>
              { writerNickName }
            </div>
            <div className='top3-list-item-write-date'>
              { writerDate }
            </div>
          </div>
        </div>
        <div className='top3-list-item-title'>
          { boardTitle }
        </div>
        <div className='top3-list-item-content'>
          { boardContent }
        </div>
        <div className='top3-list-item-count'>
          { `댓글 ${commentCount} · 좋아요 ${likeCount} · 조회수 ${viewCount}` }
        </div>
      </div>
    </div>
  )
}
