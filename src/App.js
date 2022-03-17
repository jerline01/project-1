import "./App.css";
import { useState } from "react";
import { Switch, Route, Link, Redirect, useHistory, useParams } from "react-router-dom";

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import InfoIcon from '@mui/icons-material/Info';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EditIcon from '@mui/icons-material/Edit';

export default function App() {
  const InitialMovieList = [{
    image: 'https://www.filmibeat.com/img/popcorn/movie_posters/yaavarum-nalam-tam-20150518131516-406.jpg',
    name: 'Yaavarum nalam',
    summary: 'Yavarum Nalam is a thriller, all about some mysterious happenings in a 13th floor apartment complex. Madhavan s character is the only person to be aware of the things around. How he saves his family forms the crux.',
    cast: 'Madhavan, Neetu Chandra, Sachin Khedekar, Saranya Ponvannan',
    rating: '7.4'
  },
  {
    image: 'https://flxt.tmsimg.com/assets/p8899696_p_v8_aa.jpg',
    name: 'Ezham Arivu',
    summary: 'A genetic engineering student tries to revive the skills of a past legend and use them to save India from a deadly virus attack orchestrated by China.',
    cast: 'Surya, Shruti Haasan, Johnny Tri Nguyen, Dhanya Balakrishna',
    rating: '6.5'
  },
  {
    image: 'https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/old_images/MOVIE/333/1770000333/1770000333-h',
    name: 'The Fault in Our Stars',
    summary: 'Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.',
    cast: 'Shailene Woodley, Ansel Elgort, John Green, Nat Wolff, Laura Dern',
    rating: '7.7'
  },
  {
    image: 'https://pbs.twimg.com/media/EmUeXUZVcAA5v6j.jpg',
    name: 'Interstellar',
    summary: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity s survival.',
    cast: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain, Mackenzie Foy',
    rating: '8.6'
  },
  {
    image: 'https://miro.medium.com/max/548/1*Y8vXN1mJeEHyXWJtFICjiQ.jpeg',
    name: 'The Pursuit of Happyness',
    summary: 'A struggling salesman takes custody of his son as he s poised to begin a life-changing professional career.',
    cast: 'Will Smith, Jaden Smith, Thandiwe Newton, Dan Castellaneta, James Karen',
    rating: '8'
  }
  ]
  const [movies, setMovies] = useState(InitialMovieList)
  return (
    <div>
      <ul>
        <li>
          <Link to="/movies/add">Add Movies</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/addcolor">Add color</Link>
        </li>
        <li>
          <Link to="/tic-tac-toe">Tic Tac Toe</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/movies/add">
          <AddMovie movies={movies} setMovies={setMovies} />
        </Route>
        <Route path="/movies/edit/:id">
          <EditMovie movies={movies} setMovies={setMovies} />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails movies={movies} />
        </Route>
        <Route path="/movies">
          <MovieList movies={movies} setMovies={setMovies} />
        </Route>

        <Route path="/films">
          <Redirect to="/movies" />
        </Route>
        <Route path="/addcolor">
          <AddColor />
        </Route>
        <Route path="/tic-tac-toe">
          <TicTacToe />
        </Route>
        <Route path="**">
          <NotFound />
        </Route>
      </Switch>
    </div>

  )
}

function MovieDetails({ movies }) {
  const { id } = useParams();
  const history = useHistory();
  // const movie = {
  //   image:'https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/old_images/MOVIE/333/1770000333/1770000333-h',
  //   name: 'The Fault in Our Stars',
  //   summary: 'Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.',
  //   cast: 'Shailene Woodley, Ansel Elgort, John Green, Nat Wolff, Laura Dern',
  //   rating: '7.7',
  //   trailer: 'https://www.youtube.com/embed/9ItBvH5J6ss'
  // }
  const movie = movies[id];
  return (
    <div>
      <iframe width="100%" height="409" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div>
        <h3>{movie.name}</h3>
        <p>⭐ {movie.rating}</p>
        <p>{movie.summary}</p>
        <Button
          variant="contained"
          onClick={() => history.goBack()}
          startIcon={<ArrowBackIosIcon />}
        >
          Back
        </Button>
      </div>
    </div>
  )
}

function NotFound() {
  return (
    <div>
      <h1 className="not-found">404</h1>
      <img className="img" src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="img" />
    </div>
  )
}

function AddMovie({ movies, setMovies }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [rating, setRating] = useState('');
  const [summary, setSummary] = useState('');
  return (
    <div className="movie-list">
      <div className="add-movie-form">
        <TextField onChange={(eve) => setName(eve.target.value)} id="outlined-basic" label="Name" variant="outlined" />
        <TextField onChange={(eve) => setImage(eve.target.value)} id="outlined-basic" label="image" variant="outlined" />
        <TextField onChange={(eve) => setRating(eve.target.value)} id="outlined-basic" label="Rating" variant="outlined" />
        <TextField onChange={(eve) => setSummary(eve.target.value)} id="outlined-basic" label="Summary" variant="outlined" />
        {/* <input type="text" placeholder="Name" onChange={(eve)=>setName(eve.target.value)}/>
      <input type="text" placeholder="image" onChange={(eve)=>setImage(eve.target.value)}/>
      <input type="text" placeholder="Rating" onChange={(eve)=>setRating(eve.target.value)}/>
      <input type="text" placeholder="Summary" onChange={(eve)=>setSummary(eve.target.value)}/> */}

        <Button onClick={() => {
          const newMovie = {
            name: name,
            image: image,
            rating: rating,
            summary: summary,
          };
          setMovies([...movies, newMovie])
        }} variant="contained">Add Movie</Button>
      </div>
    </div>
  );
}

function EditMovie({ movies, setMovies }) {
  const { id } = useParams();
  const movie = movies[id];
  const history = useHistory();
  const [name, setName] = useState(movie.name);
  const [image, setImage] = useState(movie.image);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  return (
    <div className="movie-list">
      <div className="add-movie-form">
        <TextField value={name} onChange={(eve) => setName(eve.target.value)} id="outlined-basic" label="Name" variant="outlined" />
        <TextField value={image} onChange={(eve) => setImage(eve.target.value)} id="outlined-basic" label="image" variant="outlined" />
        <TextField value={rating} onChange={(eve) => setRating(eve.target.value)} id="outlined-basic" label="Rating" variant="outlined" />
        <TextField value={summary} onChange={(eve) => setSummary(eve.target.value)} id="outlined-basic" label="Summary" variant="outlined" />
        {/* <input type="text" placeholder="Name" onChange={(eve)=>setName(eve.target.value)}/>
      <input type="text" placeholder="image" onChange={(eve)=>setImage(eve.target.value)}/>
      <input type="text" placeholder="Rating" onChange={(eve)=>setRating(eve.target.value)}/>
      <input type="text" placeholder="Summary" onChange={(eve)=>setSummary(eve.target.value)}/> */}

        <Button onClick={() => {
          const updatedMovie = {
            name: name,
            image: image,
            rating: rating,
            summary: summary,
          };
          const copyMovie = [...movies];
          copyMovie[id] = updatedMovie;
          setMovies(copyMovie);
          history.push("/movies");
          // setMovies([...movies,newMovie])
        }} variant="contained" color="success">Save</Button>
      </div>
    </div>
  );
}

function MovieList({ movies, setMovies }) {

  const history = useHistory();

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [rating, setRating] = useState('');
  const [summary, setSummary] = useState('');
  return (
    <div className="movie-list">
      <div className="add-movie-form">
        <TextField onChange={(eve) => setName(eve.target.value)} id="outlined-basic" label="Name" variant="outlined" />
        <TextField onChange={(eve) => setImage(eve.target.value)} id="outlined-basic" label="image" variant="outlined" />
        <TextField onChange={(eve) => setRating(eve.target.value)} id="outlined-basic" label="Rating" variant="outlined" />
        <TextField onChange={(eve) => setSummary(eve.target.value)} id="outlined-basic" label="Summary" variant="outlined" />
        {/* <input type="text" placeholder="Name" onChange={(eve)=>setName(eve.target.value)}/>
      <input type="text" placeholder="image" onChange={(eve)=>setImage(eve.target.value)}/>
      <input type="text" placeholder="Rating" onChange={(eve)=>setRating(eve.target.value)}/>
      <input type="text" placeholder="Summary" onChange={(eve)=>setSummary(eve.target.value)}/> */}

        <Button onClick={() => {
          const newMovie = {
            name: name,
            image: image,
            rating: rating,
            summary: summary,
          };
          setMovies([...movies, newMovie])
        }} variant="contained">Add Movie</Button>
      </div>
      {movies.map(({ image, name, cast, rating, summary, deleteButton }, index) => {
      <Btn key={index} image={image} name={name} summary={summary} cast={cast} rating={rating}
        deleteButton={<IconButton onClick={() => { const copyMovieList = [...movies]; copyMovieList.splice(index, 1); setMovies(copyMovieList) }} aria-label="delete" color="error">
          <DeleteIcon />
        </IconButton>}
        editButton={<IconButton onClick={() => history.push(`/movies/edit/${index}`)} aria-label="delete" color="secondary">
          <EditIcon />
        </IconButton>}
        id={index} />})} 
      {/* <AddColor /> */}

    </div>
  );
}

function Btn({ image, name, cast, rating, summary, deleteButton, id, editButton }) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const styles = {
    color: rating > 8.5 ? "green" : "red",
    // backgroundColor: "orange",
  };

  const [show, setShow] = useState(true);
  const history = useHistory();
  // const styling2 = {
  //   display: show ? "block" : "none",
  // }

  return (
    <Card className='content'>
      <CardContent>
        <img src={image} alt='Picture' />
        <h1>{name}
          <IconButton aria-label="Toggle Summary" onClick={() => setShow(!show)} color="primary">
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          <IconButton aria-label="Toggle Summary" onClick={() => history.push(`/movies/${id}`)} color="primary">
            <InfoIcon />
          </IconButton>
        </h1>
        {show ? <p>{summary}</p> : ""}
        {/* <Button variant="contained" onClick={()=>setShow(!show)}>Toggle description</Button> */}
        {/* <IconButton aria-label="Toggle Summary" onClick={()=>setShow(!show)} color="primary">
          {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton> */}
        {/* <p>{summary}</p> */}

        <h4>Cast : {cast}</h4>
        <h5 style={styles}>⭐{rating}</h5>
      </CardContent>
      <CardActions>
        <IconButton aria-label="like button" onClick={() => setLike(like + 1)} color="primary">
          <Badge badgeContent={like} color="primary">
            👍
          </Badge>
        </IconButton>

        <IconButton aria-label="dislike button" onClick={() => setDislike(dislike + 1)} color="error">
          <Badge badgeContent={dislike} color="error">
            👎
          </Badge>
        </IconButton>
        {deleteButton} {editButton}
        {/* <button onClick={()=>setLike(like+1)}>👍{like}</button> */}
        {/* <Button style={styling} variant="contained" onClick={()=>setLike(like+1)}>👍{like}</Button> */}
        {/* <Button style={styling1} variant="contained" onClick={()=>setDislike(dislike+1)}>👎{dislike}</Button> */}
        {/* <button onClick={()=>setDislike(dislike+1)}>👎{dislike}</button> */}

      </CardActions>


    </Card>
  )
}

export function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: '25px',
    width: '200px',
    marginTop: '10px'
  };
  return (
    <div style={styles}></div>
  )
}

function AddColor() {
  const [color, setColor] = useState("pink");
  const styles = {
    background: color,
  };
  const [colorList, setColorList] = useState(["red", "orange", "green", "yellow"]);
  return (
    <div>
      <input value={color} style={styles} onChange={(event) => setColor(event.target.value)} placeholder="Enter a color" />
      <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      {colorList.map((clr) => (<ColorBox color={clr} />))}

    </div>
  );

}


// task : New Movie - AddMovie

function TicTacToe() {
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
  const decidewinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  const winner = decidewinner(board);

  const [isXturn, setIsXTurn] = useState(true)
  const handleClick = (index) => {
    // copy the board and replace with "X" in the clicked GameBox
    // Update only untouched boxes until no winner
    if (winner === null && board[index] === null) {
      const boardCopy = [...board];
      boardCopy[index] = isXturn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXturn);
    }

  }
  return (
    <div className="full-game">
      <div className="board">
        {board.map((val, index) => (<GameBox val={val} onPlayerClick={() => handleClick(index)} />))}
      </div>
      {/* <GameBox /> */}
      {winner ? <h2>Winner is : {winner}</h2> : ""}
      <button onClick={() => {
        setBoard([null, null, null, null, null, null, null, null, null]);
        setIsXTurn(true);
      }
      }>Restart</button>
    </div>

  )
}

function GameBox({ val, onPlayerClick }) {
  // const val = "X";
  // const [val, setVal] = useState(null);
  const styles = {
    color: val === "X" ? "green" : "red",
  }
  return (
    <div
      //  onClick={()=>setVal(val === "X" ? "O" : "X")}
      onClick={() => onPlayerClick()}
      style={styles} className="game-box">
      {val}
    </div>
  )

  // function GameBox({val}) {
  //   // const val = "X";
  //   const styles = {
  //     color: val === "X" ? "green" : "red",
  //   }
  //   return (
  //     <div style={styles} className="game-box">
  //       {val}
  //     </div>
  //   )
}