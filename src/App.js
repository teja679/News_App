import './App.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'; import { useEffect, useState } from 'react';
import Navbar from './components/Header/Navbar';
import News from './components/News/News';
import Contact from './components/Footer/Contact'
import About from './components/Footer/About'
import SingleNews from './components/Header/SingleNews';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/Login/SignUp';

function App() {
  const [newsList, setNewsList] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let res = await axios.get('https://newsapi.org/v2/top-headlines?apiKey=6d36a43e2ab643af9f2a95f64b8bf2cc&country=in')
        setNewsList(res.data.articles)
      }
      catch (err) {
        console.error(err)
      }
    }
    fetchNews()
  }, [])
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<News newsList={newsList} />} />
        <Route path="/news/:id" element={<SingleNews newsList={newsList} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
