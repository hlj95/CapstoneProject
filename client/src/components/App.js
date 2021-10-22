
import '../styles/App.css';
import Posts from './Posts';
import NewsList from './NewsList';
import Goals from './Goals'


function App() {
    return (
        <div className="App">
            <div id="newslist">
                <h2>RECENT NEWS</h2>
                <NewsList />
            </div>

            <div>
                <h2>POSTS</h2>
                <Posts />
            </div>
            
          
            <div>
                <h2>MY GOALS</h2>
                <Goals />
            </div>    
                
            <br></br>
        </div>
    );
}

export default App;
