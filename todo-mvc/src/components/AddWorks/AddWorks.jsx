import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addWork } from "../../utils/slices/worksSlice";

export default function AddWorks() {
    const dispatch = useDispatch()
    const [workTitle,setWorkTitle] = useState('')
    const inpRef = useRef()
    useEffect(()=>{
        inpRef.current.focus();
    },[])
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(workTitle !== '')
            dispatch(addWork(workTitle));
        else
            alert('please enter something')
        setWorkTitle('')
    }
    const handleChangeInp = (e)=>{
        setWorkTitle(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="what needs to be done"
                className="new-todo"
                value={workTitle}
                onChange={handleChangeInp}
                ref={inpRef}
            />
        </form>
    );
}
