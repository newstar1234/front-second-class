import React from 'react'
import './style.css';
import Top3ListItem from 'src/components/Top3ListItem';
import {useState , useEffect} from 'react'
import { CurrentListResponseDto, Top3ListResponseDto } from 'src/interfaces/response';
import { currentBoardListMock, popularWordListMock, top3ListMock } from 'src/mocks';
import BoardListItem from 'src/components/BoardListItem';
import { useNavigate } from 'react-router-dom';
import { COUNT_BY_PAGE, COUNT_BY_SECTION, PAGE_BY_SECTION } from 'src/constants';
import { getPagination } from 'src/utils';
import Pagination from 'src/components/Pagination';

export default function Main() {

  const navigator = useNavigate();

  const MainTop = () => {

    const [top3List, setTop3List] = useState<Top3ListResponseDto[]>([]);
    
    useEffect( () => {
      if(!top3List.length) setTop3List(top3ListMock);
    }, [] );

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

  const MainBottom = () => {

    const [currentList, setCurrentList] = useState<CurrentListResponseDto[]>([]);
    const [popularList, setPopularList] = useState<string[]>([]);

    const [currentPage, setCurrentPage] = useState<number>(1); //현재페이지
    const [currentSection, setCurrentSection] = useState<number>(1); //현재페이지 섹션
    const [totalPage, setTotalPage] = useState<number[]>([]); //전체페이지
    const [totalSection, setTotalSection] = useState<number>(1); // 전체페이지 섹션

    const [totalPageCount, setTotalPageCount] = useState<number>(0);
    const [minPage, setMinPage] = useState<number>(0);
    const [maxPage, setMaxPage] = useState<number>(0);
 
    const onPopularClickHandler = (word:string) => {
      navigator(`/search/${word}`);
    }

    const onPageClickHandler = (page:number) => {
      setCurrentPage(page);
    }

    const onPreviousClickHandler = () => {
      // 한 페이지씩  이전 이동
      // if(currentPage != 1) setCurrentPage(currentPage -1);

      // previous 섹션 이동
      // if(currentSection != 1) setCurrentSection(currentSection -1);

      // 한 페이지씩 이동 + 섹션 이동
      if(currentPage == 1) return;  //1페이지면 이동 안 함 
      if(currentPage == minPage) setCurrentSection(currentSection -1);  // 섹션이동
      setCurrentPage(currentPage -1); //한 페이지씩 이동
    }
    
    const onNextClickHandler = () => {
      // 한 페이지씩 다음 이동
      // if(currentPage != totalPage.length) setCurrentPage(currentPage +1);
      
      // next 섹션 이동
      // if(currentSection != totalSection) setCurrentSection(currentSection +1);

      // 한 페이지씩 이동 + 섹션 이동
      if( currentPage == totalPageCount ) return; 
      if( currentPage == maxPage ) setCurrentSection(currentSection + 1); // 섹션이동
      setCurrentPage(currentPage +1);  //한 페이지씩 이동

    }

    useEffect(() => {

      const boardCount = 72;  // 전체 게시물 72개  

      const { section, maxPage, minPage, totalPageCount } = getPagination(boardCount, currentSection);  
      
      setTotalSection(section);
      setMaxPage(maxPage);
      setMinPage(minPage);
      setTotalPageCount(totalPageCount);

      if(!currentList.length) setCurrentList(currentBoardListMock);
      // if(!totalPage.length){ //페이지 이동시 사용 // 섹션 이동시 사용안함
        const pageList=[]; 
        for (let page = minPage; page <= maxPage; page++) pageList.push(page); 
        setTotalPage(pageList);
        // }

    }, [currentSection]);

    useEffect(() => {
      if(!popularList.length) setPopularList(popularWordListMock);
    }, []);

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

  return (
    <div  id='main-wrapper'>
      <MainTop />
      <MainBottom />
    </div>
  )
}
