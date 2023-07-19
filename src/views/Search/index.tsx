import React, { useEffect, useState } from 'react'
import './style.css';
import BoardListItem from 'src/components/BoardListItem';
import { useNavigate, useParams } from 'react-router-dom';
import { relationWordListMock, searchBoardListMock } from 'src/mocks';
import { SearchListResponseDto } from 'src/interfaces/response';
import { COUNT_BY_PAGE } from 'src/constants';
import { getPagination } from 'src/utils';
import Pagination from 'src/components/Pagination';

export default function Search() {

  const navigator = useNavigate();

  const { searchWord } = useParams();  // 검색어 '안녕하세요' 
  
  const [boardCount, setBoardCount] = useState<number>(0);  // 검색어 카운트 
  
  const [currentPage, setCurrentPage] = useState<number>(1);  //현재 뿌려주는 게시물의 페이지 // 1은 1~5 // 2는 5~10
  const [currentSection, setCurrentSection] = useState<number>(1); // 현재페이지 섹션
  const [totalPage, setTotalPage] = useState<number[]>([]);  //전체 페이지
  const [totalSection, setTotalSection] = useState<number>(1); // 전체 섹션

  const [maxPage, setMaxPage] = useState<number>(0);
  const [minPage, setMinPage] = useState<number>(0);
  const [totalPageCount, setTotalPageCount] = useState<number>(0);

  const [searchList, setSearchList] = useState<SearchListResponseDto[]>([]);
  const [pageBoardList, setPageBoardList] = useState<SearchListResponseDto[]>([]);  //  실제로 보여줘야하는 페이지

  const [relationList, setRelationList] = useState<string[]>([]);

  const onRelationClickHandler = (word: string) => {
    navigator(`/search/${word}`);
  }
// ! 다시보기!! 안됨!
  const onPageClickHandler = (page: number) => {
    setCurrentPage(page);
  }

  const onPreviousClickHandler = () => { //이전
    if(currentPage === 1) return;
    if(currentPage === minPage) setCurrentSection(currentSection -1);

    setCurrentPage(currentPage -1);
  }

  const onNextClickHandler = () => {  //다음
    if(currentPage === totalPageCount) return;
    if(currentPage === maxPage) setCurrentSection(currentSection +1);
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

    const boardCount = searchBoardListMock.length;  //전체 보드의 수
    const{section, maxPage, minPage, totalPageCount } = getPagination(boardCount, currentSection);

    setMaxPage(maxPage);
    setMinPage(minPage);
    setTotalSection(section);
    setTotalPageCount(totalPageCount);

    const pageList = [];
    for ( let page = minPage; page <= maxPage; page++) pageList.push(page); 
    setTotalPage(pageList);
   
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
      <Pagination 
          totalPage={totalPage} 
          currentPage={currentPage} 
          onPageClickHandler={onPageClickHandler} 
          onNextClickHandler={onNextClickHandler} 
          onPreviousClickHandler={onPreviousClickHandler} />
    </div>
  )
}
