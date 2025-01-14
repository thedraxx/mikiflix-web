import './App.css'
import AnimeHomePage from './pages/AnimeHomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimePlayer from './pages/AnimePlayerPage'
import { Box, Container } from '@chakra-ui/react';
import MyHeader from './components/Header';
import AnimeDetailPage from './pages/AnimeDetailPage';
import MyFooter from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';

// Change function for const to make it easier to read
const App = () => {

  return (
    <Container pos={'relative'} maxW={['', '', '1740px']} overflow={'hidden'}>
      <Router>
        <MyHeader />
        <Box minH={'100vh'} py={'32'}>
          <Routes>
            <Route path="/" element={<AnimeHomePage />} />
            <Route path="/anime/:animeId/:episodeId" element={<AnimePlayer />}></Route>
            <Route path="/anime/:animeId" element={<AnimeDetailPage />}></Route>
          </Routes>
        </Box>
        <MyFooter />
        <FloatingActionButton />
      </Router>
    </Container>
  )
}


export default App
