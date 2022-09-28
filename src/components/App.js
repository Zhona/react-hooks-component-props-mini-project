import React from "react";
import Header from "./Header";
import blogData from "../data/blog";
import About from "./About"
import ArticleList from "./ArticleList"


console.log(blogData);
const employees = [
  "titi", "bobo","momo", "tata"]

const drinks =[{
  name: "bubble tea",
  id: 1,
  type: "sweet"
},
{
  name: "cocktail",
  id: 2,
  type: "alcohol"
},
{
  name: "orange juice",
  id: 3,
  type: "fresh"}
]

function App() {
  return (
    <div className="App">
      <Header name = {blogData.name}/>
      <About image = {blogData.image} about = {blogData.about}/>
      <ArticleList posts = {blogData.posts} />
    {drinks.map((drink)=>{
      return(
        <div>
        <h2 key = {drinks.id}>{`Tea : ${drink.name}`} </h2>
        <h1>{drink.type}</h1>
        </div>
      )
    } )}
    
    {employees.map((employee) => {
      return <h1> 
        {employee}
      </h1>
    })}
{/* playing with event event handler here */}

    </div>
  );
}


export default App;
