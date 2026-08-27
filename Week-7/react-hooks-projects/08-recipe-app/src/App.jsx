import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('');

  // Fetch recipes by search term
  const searchRecipes = async (query) => {
    try {
      setLoading(true);
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch recipes by category
  const filterByCategory = async (cat) => {
    try {
      setLoading(true);
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
      const data = await response.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch recipe details
  const fetchRecipeDetails = async (id) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      setSelectedRecipe(data.meals[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      searchRecipes(searchTerm);
    }
  };

  const categories = ['Chicken', 'Beef', 'Seafood', 'Pasta', 'Vegetarian', 'Dessert'];

  return (
    <div className="recipe-app">
      <h1>Food Recipe App</h1>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for recipes..."
        />
        <button type="submit">Search</button>
      </form>

      {/* Category Filter */}
      <div className="category-filter">
        <h3>Filter by Category:</h3>
        <div className="category-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                filterByCategory(cat);
              }}
              className={category === cat ? 'active' : ''}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading && <p>Loading...</p>}

      {/* Recipe Details Modal */}
      {selectedRecipe && (
        <div className="modal" onClick={() => setSelectedRecipe(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedRecipe(null)}>×</button>
            <h2>{selectedRecipe.strMeal}</h2>
            <img src={selectedRecipe.strMealThumb} alt={selectedRecipe.strMeal} />
            <h3>Instructions:</h3>
            <p>{selectedRecipe.strInstructions}</p>
          </div>
        </div>
      )}

      {/* Recipes Grid */}
      <div className="recipes-grid">
        {recipes.map(recipe => (
          <div
            key={recipe.idMeal}
            className="recipe-card"
            onClick={() => fetchRecipeDetails(recipe.idMeal)}
          >
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h3>{recipe.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
