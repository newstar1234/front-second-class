import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { SearchListResponseDto } from 'src/interfaces/response';
import { usePagination } from 'src/hooks';
import BoardListItem from 'src/components/BoardListItem';
import Pagination from 'src/components/Pagination';
import { relationWordListMock, searchBoardListMock } from 'src/mocks';
import { COUNT_BY_PAGE } from 'src/constants';

import './style.css';

//            component             //
// description : 검색화면 // 
export default function Search() {

  //             state             // 
  // description :  검색어 path parameter 상태 //
  const { searchWord } = useParams();  // 검색어 '안녕하세요' 
  // description : 게시물 수를 저장하는 상태 // 
  const [boardCount, setBoardCount] = useState<number>(0);  // 검색어 카운트 
  // description : 전체 게시물 리스트 상태 //
  const [searchList, setSearchList] = useState<SearchListResponseDto[]>([]);
  // description : 현재 페이지에서 보여줄 게시물 리스트 상태 //
  const [pageBoardList, setPageBoardList] = useState<SearchListResponseDto[]>([]);  //  실제로 보여줘야하는 페이지
  // description : 연관 검색어 리스트 상태 //
  const [relationList, setRelationList] = useState<string[]>([]);
  
  // description : 페이지네이션과 관련된 상태 및 함수 //
  const { totalPage, currentPage, currentSection, onPageClickHandler, onNextClickHandler, onPreviousClickHandler, changeSection } = usePagination();
  // pagination 사용시 usePagination 만들어서 불러주면 값 사용가능 


  //            function            //
  //description : 페이지 이동을 위한 네이게이터 함수 //
  const navigator = useNavigate();

  // description: 현재 페이지의 게시물 리스트 분류 함수 //
  const getPageBoardList = () => {  // 깔끔하게 함수로 
    const lastIndex = searchBoardListMock.length > COUNT_BY_PAGE  * currentPage ? COUNT_BY_PAGE * currentPage : searchBoardListMock.length; //유연하게 // COUNT_BY_PAGE = 5
    const startIndex = COUNT_BY_PAGE * (currentPage -1);  // pageBoardList를 유연하게 //등차수열
    const pageBoardList = searchBoardListMock.slice(startIndex, lastIndex);  //자르는 메서드 slice
    
    setPageBoardList(pageBoardList);  //5개 잘라서 넣기
  }

  //              event handler             //
  // description : 연관 검색어 클릭 이벤트  //
  const onRelationClickHandler = (word: string) => {
    navigator(`/search/${word}`);
  }

  //              effect              // 
  //  description: 검색어 상태가 바뀔 때마다 해당 검색어의 검색 결과 불러오기 //
  useEffect(() => {
    setSearchList(searchBoardListMock);
    setBoardCount((searchWord as string).length);
    setRelationList(relationWordListMock);
    
    getPageBoardList();

    changeSection(searchBoardListMock.length, COUNT_BY_PAGE);
   
  }, [searchWord]);

  // description: 현재 섹션이 바뀔 때마다 페이지 리스트 변경 //
  useEffect(() => {
    changeSection(searchBoardListMock.length, COUNT_BY_PAGE);
  }, [currentSection]);

  // description: 현재 페이지가 바뀔 때마다 검색 게시물 분류하기  //
  useEffect(() => {
    getPageBoardList();
  }, [currentPage]);


  //              render              // 
  return (
    <div id='search-wrapper'>
      <div className='search-text-container'>
        <div className='search-text-emphasis'> {searchWord} </div>
        <div className='search-text'>에 대한 검색 결과입니다.</div>
        <div className='search-text-emphasis'>{boardCount}</div>
      </div>
      <div className='search-container'>
        { boardCount ? (
        <div className='search-board-list'>
          { pageBoardList.map( (item) => (<BoardListItem item={item} />) ) }
        </div>
        ) : (
        <div className='search-board-list-nothing'>검색 결과가 없습니다.</div>
        )}
        <div className='search-relation-box'>
          <div className='search-relation-card'>
            <div className='search-relation-text'>관련 검색어</div>
              { relationList.length ? (<div className='search-relation-list'>
              {relationList.map( (item) => (<div className='relation-chip' onClick={ () => onRelationClickHandler(item) } >{item}</div>) )}
            </div>) : (<div className='search-relation-list-nothing'>관련 검색어가 없습니다.</div>) }
          </div>
        </div>
      </div>
      { boardCount !== 0 && (
        <Pagination 
          totalPage={totalPage} 
          currentPage={currentPage} 
          onPageClickHandler={onPageClickHandler} 
          onNextClickHandler={onNextClickHandler} 
          onPreviousClickHandler={onPreviousClickHandler} />
      ) }
      
    </div>
  )
}
