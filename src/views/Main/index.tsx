import {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { usePagination } from 'src/hooks';
import Top3ListItem from 'src/components/Top3ListItem';
import BoardListItem from 'src/components/BoardListItem';
import Pagination from 'src/components/Pagination';
import { COUNT_BY_PAGE, SEARCH_PATH } from 'src/constants';

import { getPopularListRequest } from 'src/apis';
import { GetPopularListResponseDto } from 'src/interfaces/response/search';
import ResponseDto from 'src/interfaces/response/response.dto';
import { BoardListResponseDto } from 'src/interfaces/response/board';
import './style.css';

//            component            //
// description: 메인 화면 컴포넌트 //
export default function Main() {

    //                state                // 
    // description: 인기 게시물 리스트 상태 // 
    const [top3List, setTop3List] = useState<BoardListResponseDto[]>([]);

    //                function                // 
    // description: 페이지 이동을 위한 네비게이터 함수 //
    const navigator = useNavigate();

    //                event handler                // 
    
    //                component                // 
    // description: 메인 화면의 상단 //
    const MainTop = () => {

    //                effect                // 
    // description: 첫 시작 시 인기 게시물 데이터 불러오기 // 
    useEffect( () => { }, [] );

    //                render                // 
    return (
      <div className='main-top'>
        <div className='main-top-text-container'>
          <div className='main-top-text'>NEWSTAR's Board에서</div>
          <div className='main-top-text'>다양한 이야기를 나눠보세요.</div>
        </div>
        <div className='main-top-3-container'>
          <div className='main-top-3-text'>주간 TOP3 게시글</div>
          <div className='main-top-3-list'>
            { top3List.map((item) => (<Top3ListItem item={item} />)) }  {/** 값을 유연하게 받기위해서 */}
          </div>
        </div>
      </div>
      )
  }

  //                component               //
  // description: 메인화면 하단 // 
  const MainBottom = () => {

    //            state             //
    // description: 페이지네이션  관련 상태 및 함수 //
    // 두 줄로 생성시 두번 호출되서 작동이 안됨 //hook 상태
    const { totalPage, currentPage, currentSection, onPageClickHandler, onNextClickHandler, onPreviousClickHandler, changeSection } = usePagination();
   
    // description: 최신 게시물 리스트 상태 // 
    const [currentList, setCurrentList] = useState<BoardListResponseDto[]>([]);
    // description: 인기 검색어 리스트 상태 //
    const [popularList, setPopularList] = useState<string[]>([]);
 
    //                function              //
    // description : 인기검색어 불러오기 응답 처리 함수 //
    const getPopularListResponseHandler = (responseBody: GetPopularListResponseDto | ResponseDto) => {
      const { code } = responseBody;
      if(code === 'DE') alert('데이터 베이스 에러입니다.');
      if(code !== 'SU') return;

      const { popularList } = responseBody as GetPopularListResponseDto;
      setPopularList(popularList);
    }

    //             event handler            // 
    // description: 인기 검색어 클릭 이벤트 //
    const onPopularClickHandler = (word:string) => {
      navigator(SEARCH_PATH(word));
    }

    //              component              //

    //              effect              //
    // description: 첫 시작시 인기 검색어 리스트 불러오기 //
    useEffect(() => {
      getPopularListRequest().then(getPopularListResponseHandler);
    }, []);

    // description: 현재 섹션이 바뀔 때마다 페이지 리스트 변경 및 최신 게시물 불러오기 //
    useEffect(() => {

      axios.get('url').then((response) => {
        changeSection(response.data.length , COUNT_BY_PAGE);
        setCurrentList(response.data);
      }).catch((error) => {
        changeSection(72, COUNT_BY_PAGE);
        setCurrentList([]);
      });

    }, [currentSection]);

    //              render              // 
    return(
      <div className='main-bottom'>
        <div className='main-bottom-text'>최신 게시물</div>
        <div className='main-bottom-container'>
          <div className='main-bottom-board-list'>
            { currentList.map((item) => (<BoardListItem item={item} />))}
          </div>
          <div className='main-bottom-popular-box'>
            <div className='main-bottom-popular-card'>
              <div className='main-bottom-popular-text'>인기 검색어</div>
              <div className='main-bottom-popular-list'>
                { popularList.map( (item) => (<span className='popular-chip' onClick={ () => onPopularClickHandler(item)}> {item} </span>) )}                
              </div> {/** 콜백 함수 형태로 onPopularClickHandler 전달 */}
            </div>
          </div>
        </div>
        <Pagination 
          totalPage={totalPage} 
          currentPage={currentPage} 
          onPageClickHandler={onPageClickHandler} 
          onNextClickHandler={onNextClickHandler} 
          onPreviousClickHandler={onPreviousClickHandler} />
      </div>
    )
  }

  //              effect              //

  //              render             //
  return (
    <div  id='main-wrapper'>
      <MainTop />
      <MainBottom />
    </div>
  )
}
