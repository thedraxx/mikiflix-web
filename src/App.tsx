import './App.css'
import AnimeHomePage from './pages/AnimeHomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimePlayer from './pages/AnimePlayerPage'
import { Box, Container } from '@chakra-ui/react';
import MyHeader from './components/Header';


function App() {

  return (
    <Container pos={'relative'} maxW={['', '', '1740px']}>
      <Router>
        <MyHeader />
        <Box pt={'32'}>
          <Routes>
            <Route path="/" element={<AnimeHomePage />} />
            <Route path="/anime/:animeId/:episodeId" element={<AnimePlayer />}></Route>
          </Routes>
        </Box>
      </Router>
    </Container>
  )
}


export default App