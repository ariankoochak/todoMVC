import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWork, toggleDoneWork } from '../../utils/slices/worksSlice'

export default function RenderWorks() {
    const works = useSelector(state=>state.works.works)
    const showCondition = useSelector((state) => state.works.showCondition);
    const dispatch = useDispatch()
    const handleChangeClick = (id)=>{
        dispatch(toggleDoneWork(id))
    }
    const handleDeleteBtn = (id)=>{
        dispatch(deleteWork(id))
    }
  return (
    <>
    {works.map(work=>{
        if(showCondition === 'All' || (showCondition === 'Active' && work.isDone === false) || (showCondition === 'Completed' && work.isDone === true))
            return (
                <li key={work.id} className={work.isDone ? 'completed' : ''}>
                    <div className="view">
                        <input type="checkbox" className="toggle" checked={work.isDone} onChange={()=>handleChangeClick(work.id)} />
                        <label>{work.title}</label>
                        <button className="destroy" onClick={()=>handleDeleteBtn(work.id)}/>
                    </div>
                </li>
            );
    })}
    </>
  )
}
