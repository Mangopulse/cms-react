import logo from './logo.svg';
import './App.css';
import MainPage from"./components/MainPage";
import SliderPage from"./components/SliderPage";
import SliderEyeClick from './components/SliderEyeClick';
import VideosPage from"./components/VideosPage";
import { Route, Routes } from 'react-router-dom';
import ArticlesPage from './components/ArticlesPage';
import AuthorsPage from './components/AuthorsPage';
import ToolsPage from './components/ToolsPage';
import Configs from './components/Configs'
import Operations from './components/Operations'
import AlnasherArticles from './components/AlnasherArticles';
import TakseemArticles from './components/TakseemArticles';
import JadwalArticles from './components/JadwalArticles';
import NasherArticles from './components/NasherArticles';
function App() {
  return (
    <div>
      {/* <Routes>
        <Route element={<MainPage />} exact path='/'/>
        <Route  element={<SliderPage />} exact path='/sliderpage' />
        <Route  element={<ArticlesPage />} exact path='/articlespage' />
        <Route  element={<AuthorsPage />} exact path='/authorspage' />
        <Route  element={<VideosPage />} exact path='/videospage' />
        <Route element={<SliderEyeClick />} exact path='/SliderEyeClick'/>
        <Route element={<AlnasherArticles />} exact path='/AlnasherArticles'/>
        <Route element={<TakseemArticles />} exact path='/TakseemArticles'/>
        <Route element={<JadwalArticles />} exact path='/JadwalArticles'/>
        <Route element={<NasherArticles />} exact path='/NasherArticles'/>
      </Routes> */}
      <NasherArticles />

    </div>

  );
}

export default App;
