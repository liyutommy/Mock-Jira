export const SearchPanel = ({enter, setEnter, users}) => {
  const handleInputChange = (e) => {
    setEnter({
      ...enter,
      name: e.target.value
    })
  }

  const handleSelectChange = (e) => {
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