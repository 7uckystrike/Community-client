import React, { useState }  from 'react'

function Test() {

  function onChange(event) {
    setContent(event.currentTarget.value)
  }
  function onSubmit() {
    let arr = [...contentList];
    arr.push(content)
    setContentList([...arr])
    setContent("")
  }

  function onSubmit() {
    let arr = [...contentList];
    arr.push(content)
    setContentList([...arr])
    setContent("")
  }


  function onChange(event) {
    setContent(event.currentTarget.value)
  }

  return (
    <div>



    </div>
  )
}

export default Test