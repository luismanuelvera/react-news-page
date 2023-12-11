import { useState } from "react";
import NavBar from "./components/navbar";
import NewsBoard from "./components/newsboard";

export const App = () => {

  const [category, setCategory] = useState("general");
  const [region, setRegion] = useState("us");

  return (
    <div>
      <NavBar setCategory={setCategory} setRegion={setRegion} />
      <NewsBoard category={category} region={region}></NewsBoard>
    </div>
  )
}

export default App;
