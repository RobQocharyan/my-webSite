import { useState } from "react";
import  cn  from 'classnames';
import classes from "./Paginator.module.css"

type PropsType={
  totalItemCount:number,
  pageSize:number,
  currentPage?:number,
  onPageChanged?:(pageNumber:number)=>void,
  portionSize?:number 
}

const Paginator:React.FC<PropsType> = ({
  totalItemCount,
  pageSize,
  currentPage = 1,
  onPageChanged = x=>x,
  portionSize = 10,
})  => {
  let pagesCount = Math.ceil(totalItemCount / pageSize);
  let pages:Array<number> = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={classes.paginator}>
      {portionNumber > 1 && (
        <button className={classes.next}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={cn(
                { [classes.selectedPage]: currentPage === p },
                classes.pageNumber
              )}
              key={p}
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button className={classes.next}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};
export default Paginator;
