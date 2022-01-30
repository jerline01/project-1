import "./App.css";
import {useState} from "react";

export default function App() {
  const movies = [
    {
      image: 'https://www.filmibeat.com/img/popcorn/movie_posters/yaavarum-nalam-tam-20150518131516-406.jpg',
      name:'Yaavarum nalam',
      summary: 'Yavarum Nalam is a thriller, all about some mysterious happenings in a 13th floor apartment complex. Madhavan s character is the only person to be aware of the things around. How he saves his family forms the crux.',
      cast:'Madhavan, Neetu Chandra, Sachin Khedekar, Saranya Ponvannan',
      rating:'⭐⭐⭐⭐ 7.4/10'
    },
    {
      image: 'https://flxt.tmsimg.com/assets/p8899696_p_v8_aa.jpg',
      name: 'Ezham Arivu',
      summary: 'A genetic engineering student tries to revive the skills of a past legend and use them to save India from a deadly virus attack orchestrated by China.',
      cast: 'Surya, Shruti Haasan, Johnny Tri Nguyen, Dhanya Balakrishna',
      rating: '⭐⭐⭐ 6.5/10'
    },
    {
      image:'https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/old_images/MOVIE/333/1770000333/1770000333-h',
      name: 'The Fault in Our Stars',
      summary: 'Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.',
      cast: 'Shailene Woodley, Ansel Elgort, John Green, Nat Wolff, Laura Dern',
      rating: '⭐⭐⭐⭐ 7.7/10'
    },
    {
      image: 'https://pbs.twimg.com/media/EmUeXUZVcAA5v6j.jpg',
      name: 'Interstellar',
      summary: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity s survival.', 
      cast: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain, Mackenzie Foy',
      rating: '⭐⭐⭐⭐ 8.6/10'
    },
    {
      image: 'https://miro.medium.com/max/548/1*Y8vXN1mJeEHyXWJtFICjiQ.jpeg',
      name: 'The Pursuit of Happyness',
      summary: 'A struggling salesman takes custody of his son as he s poised to begin a life-changing professional career.',
      cast: 'Will Smith, Jaden Smith, Thandiwe Newton, Dan Castellaneta, James Karen',
      rating: '⭐⭐⭐⭐ 8/10'
    }
  ]
  return (
    <div>
      {movies.map((item)=> <Btn image={item.image} name={item.name} summary={item.summary} cast={item.cast} rating={item.rating} />)}
    </div>
  )
}

function Btn({image,name,cast,rating,summary}) {
  const [like,setLike] = useState(0);
  const [dislike,setDislike] = useState(0);
  return (
    <div className='content'>
      <img src={image} alt='Picture'/>
      <h1>{name}</h1>
      <p>{summary}</p>
      <h4>Cast : {cast}</h4>
      <h5>Rating : {rating}</h5>
      <button onClick={()=>setLike(like+1)}>👍{like}</button>
      <button onClick={()=>setDislike(dislike+1)}>👎{dislike}</button>
      <br/> <br/>
    </div>
  )
}