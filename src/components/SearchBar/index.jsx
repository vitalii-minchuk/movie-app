import React from "react"
import { Content, Wrapper } from "./SearchBar.styles"
import SearchIcon from "../../images/search-icon.svg"

const SearchBar = ({ setSearchTerm }) => {
  const [value, setValue] = React.useState("")

  const initial = React.useRef(true)

  React.useEffect(() => {

    if(initial.current) {
      initial.current = false
      return
    }
    
    const timer = setTimeout(() => {
      setSearchTerm(value)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [setSearchTerm, value])

  return(
    <Wrapper>
      <Content>
        <img src={SearchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie ..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </Content>
    </Wrapper>
  )
}

export default SearchBar