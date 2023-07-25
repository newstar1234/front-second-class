import { COUNT_BY_PAGE, COUNT_BY_SECTION, PAGE_BY_SECTION } from "src/constants";

export const getPagination = (boardCount: number, currentSection:number, countByPage: number) => {
    const section = Math.ceil(boardCount / (PAGE_BY_SECTION * countByPage) ); 
    const totalPageCount = Math.ceil(boardCount / countByPage) ;
    
    const maxPage = totalPageCount >= currentSection * PAGE_BY_SECTION ? 
                    currentSection * PAGE_BY_SECTION : totalPageCount;
    const minPage = 10 * (currentSection - 1) + 1; //등차수열 

    return{ section, maxPage, minPage, totalPageCount };
}