
import { Route, Routes } from 'react-router-dom';
import MainPage from"./components/MainPage";
import SliderPage from"./components/SliderPage";
import SliderEyeClick from './components/SliderEyeClick';
import VideosPage from"./components/VideosPage";
import VerticalNavbar from './components/VerticalNavbar';
import ArticlesPage from './components/ArticlesPage';
import AuthorsPage from './components/AuthorsPage';
import AlnasherArticles from './components/alnasherArticles/AlnasherArticles';
import JadwalArticles from './components/JadwalArticles';
import NasherArticles from './components/share/NasherArticles'
import HorizantalNavbar from './components/HorizantalNavbar';
import Save from "./components/Save"
import AlnasherAuthors from './components/alnasherAuthors/AlnasherAuthors';
import Published from './components/AuthorsTakseem/Published';
import Edit from "./components/Edit";
import DeletePublish from './components/DeletePublish';
import Update from './components/Update';
import Add from './components/Add';
import Edited from './components/edit/Edited';
import Logout from './components/Logout';
import ChangePassword from './components/ChangePassword';
import Popup from "./components/Popup"
import NewsLinks from './components/NewsLinks';
import VideoLinks from './components/VideoLinks';
import AuthorLinks from './components/AuthorLinks';
import Collaspe from './components/Collaspe';
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
        <Route element={<JadwalArticles />} exact path='/JadwalArticles'/>
        <Route element={<NasherArticles />} exact path='/NasherArticles'/>
        <Route element={< HorizantalNavbar/>} exact path='/HorizantalNavbar'/>
        <Route element={< VerticalNavbar/>} exact path='/VerticalNavbar'/>
        <Route element={<AlnasherAuthors/>} exact path='/AlnasherAuthors'/>
        <Route element={<Published/>} exact path='/Published'/>
        <Route element={<Save/>} exact path='/Save'/>
        <Route element={<Edit/>} exact path='/Edit'/>
        <Route element={<DeletePublish/>} exact path='/DeletePublish'/>
        <Route element={<Update/>} exact path='/Update'/>
        <Route element={<Add/>} exact path='/Add'/>
        <Route element={<Edited/>} exact path='/Edited'/>
        <Route element={<Logout/>} exact path='/Logout'/>
        <Route element={<ChangePassword/>} exact path='/ChangePassword'/>
        <Route element={<Popup/>} exact path='/Popup'/>
        <Route element={<NewsLinks/>} exact path='/NewsLinks'/>
        <Route element={<VideoLinks/>} exact path='/VideoLinks'/> 
        <Route element={<AuthorLinks/>} exact path='/AuthorLinks'/> 
        <Route element={<Collaspe/>} exact path='/Collaspe'/> 
      </Routes> 
   
  
     

    </div>

  );
}

export default ComponentsRoutes;
