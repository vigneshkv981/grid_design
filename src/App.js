import logo from './logo.svg';
import './App.css';
import items_list from './datas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>
            <div class="mainheader">
            <div class="logo">
                EDYODA
            <p>Stories</p>
            </div>
 
        <div class="Explorecategory">
            Explore Categories
            <i class="bi-chevron-down"></i>
        </div>
        </div>
        </nav>

      </header>

       <div class="mainbody" id="maincard">
  
          <h3 class="trendingheader">Trending Posts</h3>

          {/* <!-- -------Categories----------- --> */}
<div class="Categoriescontainer">
  <div class="container header">
      <div class="filter">
          <i class="bi-funnel-fill"></i>
          <p class="filterpara">Filter by Category</p>
      </div>
  </div>
  <div class="Categoriesbuttons">
      <button class="btn active">All</button>
      <button class="btn">Artificial Intelligence</button>
      <button class="btn">Cloud Computing</button>
      <button class="btn">DevOps</button>
      <button class="btn">Programming Languages</button>
      <button class="btn">Mobile Application Development</button>
      <button class="btn">Technology and Tools</button>
      <button class="btn">Get a Job in a Tech Company</button>
      <button class="btn">Others</button>
  </div>
</div>
          




    <div class="allitems" id="alliteams">
      {items_list.map((story_item) => (
          <>
          <div class="itemsections">
         

        <div class="itemssec">
          <div class="imagecontainer">
          <img className='images' src={story_item.story_img}></img>
          </div>

       <div class="containerbody">
          <h3 class="containerbodyheader">{story_item.story_header}</h3>
          <p class="containerlogo">EdYoda
              <span class="containerdate">
                  |
                  {story_item.date}
              </span>
          </p>

          <div class="containerpara">
                <p>{story_item.para_content}</p>
          </div>
        </div>
        </div>
    
        </div>
                 
          </>


))}
    



</div>

         </div>
         </div>   


  );
}

export default App;
