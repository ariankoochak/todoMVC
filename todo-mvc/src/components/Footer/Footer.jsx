import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeShow, deleteDoneWork } from "../../utils/slices/worksSlice";

export default function Footer() {
    const works = useSelector((state) => state.works.works);
    const showCondition = useSelector((state) => state.works.showCondition);
    const dispatch = useDispatch();
    const isSelected = (condition)=>{
        if (condition === showCondition) return "selected";
        return ""
    }
    const unDoneWorkCount = ()=>{
        let counter = 0;
        for(const work of works){
            if(!work.isDone)
                counter++;
        }
        return counter;

    }
    return (
        <li className="footer">
            <div className="todo-count">
                <strong>{unDoneWorkCount()} items left</strong>
            </div>
            <div className="filters">
                <li>
                    <a className={isSelected('All')}  onClick={()=>dispatch(changeShow('All'))}>All</a>
                    <a className={isSelected('Active')} onClick={()=>dispatch(changeShow('Active'))}>Active</a>
                    <a className={isSelected('Completed')} onClick={()=>dispatch(changeShow('Completed'))}>Completed</a>
                </li>
            </div>
            <div className="clear-completed">
                <a onClick={()=>{dispatch(deleteDoneWork())}}>Clear Completed</a>
            </div>
        </li>
    );
}
