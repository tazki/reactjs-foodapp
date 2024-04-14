import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "26d75b25fcb746629cc0339b68717a24";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("");
  // Syntax of the useEffect hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.input}
        type="text"
      />
    </div>
  );
}
