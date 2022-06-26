import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Movie from "./components/Movie"
import NotFound from "./components/NotFound"
import { GlobalStyle } from "./GlobalStyle"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/:movieId" element={ <Movie /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
