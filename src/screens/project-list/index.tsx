import {SearchPanel} from "./SearchPanel";
import {List} from "./List";
import {useEffect, useState} from "react";
import {cleanObject, useDebounce, useMount} from "../../utils";
import qs from "qs";

const apiURL = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
  // input输入框
  const [enter, setEnter] = useState({
    name: '',
    personId: ''
  })

  // 防抖
  const deDebounceEnter = useDebounce(enter, 200)

  // 下面的list列表
  const [list, setList] = useState([])

  // 存用户的信息 来自db.json
  const [users, setUsers] = useState([])

  // 观测enter参数，发送fetch get请求
  useEffect(() => {
    // 一开始name是空的, 要用cleanObject清除name这个key
    fetch(`${apiURL}/projects?${qs.stringify(cleanObject(deDebounceEnter))}`)
      .then(async response => {
        if (response.ok) {
          // 给list赋值
          setList(await response.json())
        }
      })
  }, [deDebounceEnter])


  useMount(() => {
    fetch(`${apiURL}/users`)
      .then(async response => {
        if (response.ok) {
          // 给list赋值
          setUsers(await response.json())
        }
      })
  })


  return (
    <div>
      <SearchPanel enter={enter} setEnter={setEnter} users={users}/>
      <List list={list} users={users}/>
    </div>
  )
}