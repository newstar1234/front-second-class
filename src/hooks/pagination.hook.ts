import { useEffect, useState } from "react";
import { getPagination } from "src/utils";

const usePagination = () => {
    const [currentPage, setCurrentPage] = useState<number>(1); //현재페이지
    const [currentSection, setCurrentSection] = useState<number>(1); //현재페이지 섹션
    const [totalPage, setTotalPage] = useState<number[]>([]); //전체페이지
    const [totalSection, setTotalSection] = useState<number>(1); // 전체페이지 섹션

    const [totalPageCount, setTotalPageCount] = useState<number>(0);
    const [minPage, setMinPage] = useState<number>(0);
    const [maxPage, setMaxPage] = useState<number>(0);


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

  const changeSection = (boardCount: number) => {
    const { section, maxPage, minPage, totalPageCount } = getPagination(boardCount, currentSection);  
    
    setTotalSection(section);
    setMaxPage(maxPage);
    setMinPage(minPage);
    setTotalPageCount(totalPageCount);

      const pageList=[]; 
      for (let page = minPage; page <= maxPage; page++) pageList.push(page); 
      setTotalPage(pageList);
  }

  return { totalPage, currentPage, currentSection, onPageClickHandler, onNextClickHandler, onPreviousClickHandler, changeSection };

}

export default usePagination;