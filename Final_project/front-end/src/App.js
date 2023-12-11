import react from 'react';
import './App.css';
import axios from 'axios';
import {Form, Button} from 'react-bootstrap';

axios.defaults.baseURL= 'http://localhost:8080';


function App() {
  // state for text area
  const [recipes, setRecipes] = react.useState([]);
  const [newRecipe, setNewRecipe]=react.useState("");
  react.useEffect(() => {
    const theFunction = async () => {
      const response = await axios.get('/load_recipe');
      setRecipes(response.data);
    }
    theFunction();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>I-Ting's Recipe</h1>
        <p>Here comes some delicious cusines I made</p>
      </header>
      <div className="body-box">
        {recipes.map((recipe) => {
          return (
            <div className="recipe-box">
              <h2>{recipe}</h2>
              
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit euismod nisl, vel posuere est. Proin nec dui vel dolor venenatis tincidunt.</p>
            </div>
          )
        })}
        <div className="add-post">
          <h2>Create New Post:</h2>
          <Form.Control 
            as="textarea" 
            aria-label="With textarea" 
            size='large' 
            rows={10} 
            cols={80}
            value={newRecipe}
            placeholder='Type here!'
            // onChange take a callback function to process the typed value
            onChange={(event) => {
              setNewRecipe(event.target.value);
            }}
            />
          <Button 
            as="input" 
            type="submit" 
            value="Submit" 
            onClick={async ()=>{
              const response = await axios.post('/add_recipe', {newRecipe})
              setRecipes(response.data);
            }}
            />
        </div>
      </div>

      <footer>
        <p>&copy; 2023 I-Ting's Bistro. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
