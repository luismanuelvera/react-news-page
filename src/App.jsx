import { useState } from "react";
import NavBar from "./components/NavBar";
import NewsBoard from "./components/NewsBoard";

export const App = () => {

  const [category, setCategory] = useState("general");
  const [region, setRegion] = useState("us");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <NavBar setCategory={setCategory} setRegion={setRegion} setSearchQuery={setSearchQuery} />
      <NewsBoard category={category} region={region} searchQuery={searchQuery}></NewsBoard>
    </div>
  )
}

export default App;
