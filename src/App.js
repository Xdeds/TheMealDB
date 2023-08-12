import './App.css';
import CategoryResult from './components/project/CategoryResult';
import Main from './components/project/Main';
import {Routes, Route} from 'react-router-dom'
import SearchResult from './components/project/SearchResult';
import Description from './components/project/Description';
import Letter from './components/project/Letter';
import RandomMeals from './components/project/RandomMeals';
import Ingerdient from './components/project/Ingerdient';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/categoryresult' element={<CategoryResult/>}/>
        <Route path='/searchresult' element={<SearchResult/>}/>
        <Route path='/mealsdescription' element={<Description/>}/>
        <Route path='/letter' element={<Letter/>}/>
        <Route path='/random' element={<RandomMeals/>}/>
        <Route path='/ingerdient' element={<Ingerdient/>}/>
      </Routes>
    </>
  );
}

export default App;
