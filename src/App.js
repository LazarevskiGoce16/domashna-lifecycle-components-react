import { useState } from 'react';
import { LifecycleClass } from "./components/LifecycleClass";
import { LifecycleFunctional } from "./components/LifecycleFunctional";

export const movies = [
  {name:'Back to the Future',genre:'Sci-fi',plot:'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.',
  year: 1985,imdbLink:'https://www.imdb.com/title/tt0088763/?ref_=nv_sr_srsg_0',imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Back_to_the_Future_Part_II.jpg/220px-Back_to_the_Future_Part_II.jpg'},
  {name:'The Dark Knight',genre:'Crime',plot:'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.'
  ,year:2008,imdbLink:'https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0',imageUrl: 'https://variety.com/wp-content/uploads/2022/03/dark-knight-batman-split.jpg?w=1000'},
  {name:'Star Wars',genre:'Sci-fi',plot: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire\'s world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.',
  year:1977,imdbLink:'https://www.imdb.com/title/tt0076759/?ref_=nv_sr_srsg_9',imageUrl:'https://images.thedirect.com/media/article_full/star-wars-next-movie_1.jpg'}
];

const App = () => {
  const [show, setShow] = useState(true);
  return (<div>
    <button
    style={{padding:"10px", width:"100%"}}
      onClick={() => setShow((s) => !s)}
    >Show/Hide</button>

    {show && <LifecycleClass />}
    
    {show && <LifecycleFunctional />}

    </div>
  );
};

export default App;
