import React from "react"
import { Content, Wrapper } from "./SearchBar.styles"
//@ts-ignore
import SearchIcon from "../../images/search-icon.svg"

type SearchBarProps = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}
 
const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
  const [value, setValue] = React.useState<string>("")

  const initial = React.useRef<boolean>(true)

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