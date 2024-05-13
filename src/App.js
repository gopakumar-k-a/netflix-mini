import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/Row Post/RowPost';
import {trending,action,adventure,fantasy,horror,romance,sciFi} from './utils/urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Trending' url={trending}/>
      <RowPost title='Action' url={action} isSmall={true}/>
      <RowPost title='Drama' url={adventure} isSmall={true}/>
      <RowPost title='Fantasy' url={fantasy} isSmall={true}/>
      <RowPost title='Horror' url={horror} isSmall={true}/>
      <RowPost title='Romance' url={romance} isSmall={true}/>
      <RowPost title='Sci-Fi' url={sciFi} isSmall={true}/>
      {/* <button onClick={()=>Axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1551394fc971e0d10a5e85daa0064a20').then((res)=>{
        console.log(res.data)
      })}>click to load</button> */}
    </div>
  );
}

export default App;
