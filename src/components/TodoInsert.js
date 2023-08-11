import React, { useCallback, useState } from 'react'
import {MdAdd} from "react-icons/md";
import "../styles/TodoInsert.scss";

function TodoInsert({onInsert}) {
  const[value, setValue] = useState("")

  const onChange = useCallback((e) =>{
    console.log(e)
    setValue(e.target.value)
  },[])

  const onSubmit = useCallback((e)=> {
    onInsert(value); //oninsert를 호출해서 value 값 전달
    setValue(""); //input field에 입력한 텍스트를 초기화 하기 위해서
    e.preventDefault() //submit이벤트는 브라우저에서 새로고침을 발생시키기 때문에 이벤트 초기화
  },[value])

  return (
    <form className='TodoInsert' onSubmit ={onSubmit}>
      <input type="text" placeholder='할일을 입력하세요' onChange={onChange} value={value} />
      <button type='submit'><MdAdd/></button>
    </form>
  )
}
export default TodoInsert







