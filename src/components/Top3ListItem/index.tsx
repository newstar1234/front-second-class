import React from 'react'
import './style.css';
import { top3ListItemMock } from 'src/mocks';
import { useNavigate } from 'react-router-dom';
import { Top3ListResponseDto } from 'src/interfaces/response';

interface Props {
  item: Top3ListResponseDto;
}

export default function Top3ListItem({item}:Props) {

  const { boardNumber, boardTitle, boardContent, boardImage } = item;
  const { writerProfileImage, writerNickName, writerDate } = item;
  const { likeCount, viewCount, commentCount } = item;

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
