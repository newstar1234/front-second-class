import React, { useEffect, useState } from 'react'
import './style.css';
import BoardListItem from 'src/components/BoardListItem';
import { useNavigate, useParams } from 'react-router-dom';
import { relationWordListMock, searchBoardListMock } from 'src/mocks';
import { SearchListResponseDto } from 'src/interfaces/response';
import { COUNT_BY_PAGE } from 'src/constants';

export default function Search() {

  const navigator = useNavigate();

  const { searchWord } = useParams();  // 검색어 '안녕' //! console로 확인하기!
  
  const [boardCount, setBoardCount] = useState<number>(0);  // 검색어 카운트 
  const [currentPage, setCurrentPage] = useState<number>(1);  //현재 뿌려주는 게시물의 페이지 // 1은 1~5 // 2는 5~10
  const [searchList, setSearchList] = useState<SearchListResponseDto[]>([]);
  const [pageBoardList, setPageBoardList] = useState<SearchListResponseDto[]>([]);  //  실제로 보여줘야하는 페이지

  const [relationList, setRelationList] = useState<string[]>([]);

  const onRelationClickHandler = (word: string) => {
    navigator(`/search/${word}`);
  }

  const onPreviousClickHandler = () => {
    setCurrentPage(currentPage -1);
  }

  const onNextClickHandler = () => {
    setCurrentPage(currentPage +1);
  }

  const getPageBoardList = () => {  // 깔끔하게 함수로 
    const lastIndex = searchBoardListMock.length > COUNT_BY_PAGE  * currentPage ? COUNT_BY_PAGE * currentPage : searchBoardListMock.length; //유연하게 // COUNT_BY_PAGE = 5
    const startIndex = COUNT_BY_PAGE * (currentPage -1);  // pageBoardList를 유연하게 //등차수열
    const pageBoardList = searchBoardListMock.slice(startIndex, lastIndex);  //자르는 메서드 slice
    
    setPageBoardList(pageBoardList);  //5개 잘라서 넣기
  }

  useEffect(() => {
    setSearchList(searchBoardListMock);
    setBoardCount((searchWord as string).length);
    setRelationList(relationWordListMock);
    
    getPageBoardList();
  }, [searchWord]);

  useEffect(() => {
    getPageBoardList();
  }, [currentPage]);

  return (
    <div id='search-wrapper'>
      <div className='search-text-container'>
        <div className='search-text-emphasis'> {searchWord} </div>
        <div className='search-text'>에 대한 검색 결과입니다.</div>
        <div className='search-text-emphasis'>{boardCount}</div>
      </div>
      <div className='search-container'>
        <div className='search-board-list'>
          { pageBoardList.map( (item) => (<BoardListItem item={item} />) ) }
        </div>
        <div className='search-relation-box'>
          <div className='search-relation-card'>
            <div className='search-relation-text'>관련 검색어</div>
            <div className='search-relation-list'>
              {relationList.map( (item) => (<div className='relation-chip' onClick={ () => onRelationClickHandler(item) } >{item}</div>) )}
            </div>
          </div>
        </div>
      </div>
      <div className='search-pagination'>
        <div className='pagination-button' onClick={onPreviousClickHandler}>
          <div className='pagination-left-icon'></div>
          <div className='pagination-button-text'>이전</div>
        </div>
        <div className='pagination-text'></div>
        <div></div>
        <div className='pagination-text'></div>
        <div className='pagination-button' onClick={onNextClickHandler}>
          <div className='pagination-button-text'>다음</div>
          <div className='pagination-right-icon'></div>
        </div>
      </div>
    </div>
  )
}
