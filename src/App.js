import './App.css';
import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [charactersList, setCharactersList] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setCharactersList(data.results)
      });
  });

  const [searchfield,setSearchfield] = useState("");

  const onSearchChange = (event) => {
    setSearchfield(event.target.value) // לקחת את הערך שנכתב בחיפוש
  }

  const filteredRobots = charactersList.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })


  return (

    <div className="App">
      <h1>World of Rick And Morty</h1>
      <SearchBox searchChange={onSearchChange} />
      {charactersList ?
        <CardList robots={filteredRobots} />
        :
        <h1>Loading</h1>
      }

      {/* <div className='container-boxes'>
        <div className='compare'>
        </div>
        <div className='box1'>
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                width="200"
                image={charactersList[0]?.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {charactersList[0]?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Gender: {charactersList[0]?.gender}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className='box2'>
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={charactersList[1]?.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {charactersList[1]?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Gender: {charactersList[1]?.gender}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <SearchBox />
        </div>
      </div> */}
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super()
//     this.state = { // תיאור של מה שבונים
//       charactersList: [],
//       searchfield: ""
//     }
//   }

//   componentDidMount() {
//     fetch('https://rickandmortyapi.com/api/character')
//       .then(response => response.json())
//       .then(data => {
//         const addCheck = data.results.map((item) => {
//           return Object.assign(item, {marked: true});
//         })
//         this.setState({ charactersList: addCheck })
//       });
//   }

//   onSearchChange = (event) => {
//     this.setState({ searchfield: event.target.value }) // לקחת את הערך שנכתב בחיפוש
//   }

//   render() {

//     const filteredRobots = this.state.charactersList.filter(robot => {
//       return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
//     })

//     return (
//       <div className="App">
//         <h1>World of Rick And Morty</h1>
//         <SearchBox searchChange={this.onSearchChange} />
//         <Comparison />
//         {this.state.charactersList ?
//           <CardList robots={filteredRobots} />
//           :
//           <h1>Loading</h1>
//         }
//       </div>
//     );
//   }
// }

export default App;
