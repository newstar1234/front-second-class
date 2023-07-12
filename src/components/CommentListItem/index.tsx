import React from 'react'
import './style.css';
import { commentListItemMock } from 'src/mocks';


export default function CommentListItem() {

  const { writerProfileImage, writerNickName, writeTime, comment } = commentListItemMock

  return (
    <div className='comment-list-item-box'>
      <div className='comment-list-item-writer'>
        <div className='comment-list-item-profile'>
          <div className='comment-list-item-profile-image' style={{ backgroundImage: `url(${ writerProfileImage })` }}></div>
        </div>
        <div className='comment-list-item-writer-nickname'>
          { writerNickName }
        </div>
        <div className='comment-list-item-writer-divider'>|</div>
        <div className='comment-list-item-write-time'>
          { writeTime }
        </div>
      </div>
      <div className='comment-list-item-comment'>
        { comment }
      </div>
    </div>
  )
}
