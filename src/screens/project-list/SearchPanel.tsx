import {ChangeEvent} from "react";

export interface User {
  id:string;
  name: string;
  email: string;
  title: string;
  organization: string;
}

interface SearchPanelProps {
  enter: {
    name: string;
    personId: string;
  },
  setEnter: (enter: SearchPanelProps['enter']) => void;
  users: User[],
}


export const SearchPanel = ({enter, setEnter, users}: SearchPanelProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEnter({
      ...enter,
      name: e.target.value
    })
  }

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setEnter({
      ...enter,
      personId: e.target.value
    })
  }

  return (
    <form action="">
      <input type="text" value={enter.name} onChange={handleInputChange}></input>
      <select value={enter.personId} onChange={handleSelectChange}>
        <option value={''}>负责人</option>
        {
          users.map((user) => <option key={user.id} value={user.id}>{user.name}</option>)
        }
      </select>
    </form>
  )
}