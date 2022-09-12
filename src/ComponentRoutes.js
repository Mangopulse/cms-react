
import { Route, Routes } from 'react-router-dom';
import MainPage from"./components/MainPage";
import SliderPage from"./components/SliderPage";
import SliderEyeClick from './components/SliderEyeClick';
import VideosPage from"./components/VideosPage";
import VerticalNavbar from './components/VerticalNavbar';
import ArticlesPage from './components/ArticlesPage';
import AuthorsPage from './components/AuthorsPage';
import AlnasherArticles from './components/alnasherArticles/AlnasherArticles';
import TakseemArticles from './components/TakseemArticles';
import JadwalArticles from './components/JadwalArticles';
import NasherArticles from './components/NasherArticles';
import HorizantalNavbar from './components/HorizantalNavbar';
import EntertaimentArticles from './components/alnasherArticles/EntertaimentArticles';
import AlnasherSportsArticle from './components/alnasherArticles/AlnasherSportsArticle';
import AlnasherPolitics from './components/alnasherArticles/AlnasherPolitics';
import AlnasherFashion from './components/alnasherArticles/AlnasherFashion';
import AlnasherSports from './components/alnasherArticles/AlnasherSports';
import AlnasherTech from './components/alnasherArticles/AlnasherTech';
import AlnasherBusiness from './components/alnasherArticles/AlnasherBusiness';
import AlnasherAuthors from './components/alnasherAuthors/AlnasherAuthors';
import Published from './components/AuthorsTakseem/Published';

const ComponentsRoutes = () => {

  return (
    <div>
       <Routes>
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
        <Route element={< HorizantalNavbar/>} exact path='/HorizantalNavbar'/>
        <Route element={< VerticalNavbar/>} exact path='/VerticalNavbar'/>
        <Route element={< AlnasherSportsArticle/>} exact path='/AlnasherSportsArticle'/>
        <Route element={< EntertaimentArticles/>} exact path='/EntertaimentArticles'/>
        <Route element={< AlnasherPolitics/>} exact path='/AlnasherPolitics'/>
        <Route element={< AlnasherFashion/>} exact path='/AlnasherFashion'/>
        <Route element={<AlnasherSports/>} exact path='/AlnasherSports'/>
        <Route element={<AlnasherTech/>} exact path='/AlnasherTech'/>
        <Route element={<AlnasherBusiness/>} exact path='/AlnasherBusiness'/>
        <Route element={<AlnasherAuthors/>} exact path='/AlnasherAuthors'/>
      
        <Route element={<Published/>} exact path='/Published'/>
        
      </Routes> 
   
  
     

    </div>

  );
}

export default ComponentsRoutes;
