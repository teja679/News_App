import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Navbar from './components/Header/Navbar';
import News from './components/News/News';

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
    <div className="App">
      <Navbar />
      <News newsList={newsList}/>
    </div>
  );
}

export default App;
