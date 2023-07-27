import { useNavigate } from 'react-router-dom';
import { CurrentListResponseDto, MyPageListResponseDto, SearchListResponseDto } from 'src/interfaces/response';
import './style.css';

interface Props {  //속성이 같으면 받아짐 // 자바는 클래스가 다르면 안 받아짐 // 혹시 모르니 다 받게 해둠 
  item: CurrentListResponseDto | SearchListResponseDto | MyPageListResponseDto;
}

//              component             //
// description : 게시물 리스트 아이템 컴포넌트 //
export default function BoardListItem({item}: Props) {

  //              state             //
  // description : 속성으로 받아오는 게시물 관련 상태 //
  const { boardNumber, boardTitle, boardContent, boardImage } = item;
  const { writerProfileImage, writerNickName, writerDate } = item;
  const { favoriteCount, viewCount, commentCount } = item;
  
  //            function              //
  // description : 페이지 이동을 위한 네비게이터 함수 //
  const navigator = useNavigate();

  //              event handler             //
  // description : 컴포넌트 클릭 이벤트 //
  const onClickHandler = () => {
    navigator(`/board/detail/${boardNumber}`);
  }

  //              component             //

  //              effect             //

  //               render             //
  return (
    <div className='board-list-item-box' onClick= {onClickHandler}>
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
          { `댓글 ${commentCount} · 좋아요 ${favoriteCount} · 조회수 ${viewCount}` }
        </div>
      </div>
      <div className='board-list-item-right'>
        <div className='board-list-item-board-image' style={{ backgroundImage: `url(${boardImage})` }}></div>
      </div>
    </div>
  )
}
