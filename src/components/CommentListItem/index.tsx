import { CommentListResponseDto } from 'src/interfaces/response/board/get-comment-list.response.dto';
import './style.css';

interface Props {
  item: CommentListResponseDto;
}

//              component             //
// description : 댓글 리스트 아이템 컴포넌트 //
export default function CommentListItem({ item }:Props) {

  //              state             //
  // description : 속성으로 받아오는 댓글 관련 상태 //
  const { writeDatetime, content, nickname, profileImageUrl } = item;

  //              function              //

  //              event handler              //

  //              component              //

  //              effect              //
  
  //              render              //
  return (
    <div className='comment-list-item-box'>
      <div className='comment-list-item-writer'>
        <div className='comment-list-item-profile'>
          <div className='comment-list-item-profile-image' style={{ backgroundImage: `url(${ profileImageUrl })` }}></div>
        </div>
        <div className='comment-list-item-writer-nickname'>
          { nickname }
        </div>
        <div className='comment-list-item-writer-divider'>|</div>
        <div className='comment-list-item-write-time'>
          { writeDatetime }
        </div>
      </div>
      <div className='comment-list-item-comment'>
        { content }
      </div>
    </div>
  )
}
