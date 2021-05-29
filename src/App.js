import React from 'react';
import axios from 'axios';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Weather from './components/Weather'
import Movies from './components/Movies'



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            data: '',
            map: false,
            error: false,
            weather: false,
            weatherInfo: [],
            movies: false,
            moviesInfo: [],
        }
    }

    getLocation = async (event) => {
        event.preventDefault();
        let locationUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.8b89beb044f7bff265b36ceb931a413c&q=${this.state.searchQuery}&format=json`;

        let serverRoute = process.env.REACT_APP_SERVER;

        const weatherUrl = `${serverRoute}weather?city_name=${this.state.searchQuery}`;

        const moviesUrl = `${serverRoute}movies?city_name=${this.state.searchQuery}`;

        try {

            let result = await axios.get(locationUrl);
            let weatherData = await axios.get(weatherUrl);
            let moviesData = await axios.get(moviesUrl);
            

            this.setState({
                data: result.data[0],
                map: true,
                weatherInfo: weatherData.data,
                weather: true,
                error: false,
                movies: true,
                moviesInfo: moviesData.data,
            })
        }
        catch {
            this.setState({
                map: false,
                error: true,
                weather: false,
                movies: false,
            })

        }
    }

    updateSearch = (event) => {
        this.setState({
            searchQuery: event.target.value
        })
        console.log(this.state.searchQuery);
    }

   


    render() {
        const myStyle = {
            marginLeft: "26%",
            marginRight: "26%",
        };


        return (
            <div style={myStyle}>

                <Header />
                <Form onSubmit={this.getLocation} >
                    <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                        <input type='text' placeholder='Explore a city' onChange={this.updateSearch} />
                        <input type='submit' value='Explore' />
                    </Form.Group>
                </Form>

                {this.state.map &&
                    <Card style={{ width: '45rem' }} >
                        <Card.Body>
                            <Card.Title>{this.state.data.display_name}</Card.Title>
                        </Card.Body>
                        <Card.Img
                            variant="top"
                            src={`https://maps.locationiq.com/v3/staticmap?key=f5de8e48adbdc6&center=${this.state.data.lat},${this.state.data.lon}`}
                            alt='{this.state.data.display_name}'
                        />
                        <Card.Body>
                            <Card.Text>
                                {this.state.data.lat} , {this.state.data.lon}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                }

                {this.state.weather &&
                    <Weather
                        weather={this.state.weatherInfo}
                        cityName={this.state.searchQuery}
                    />
                }


                {this.state.movies &&
                    <Movies
                        cityMovies={this.state.moviesInfo}
                        cityName={this.state.searchQuery}

                    />
                }




                {this.state.error &&
                    <Card style={{ width: '35rem' }} >
                        <Card.Body>
                            <Card.Title>Error</Card.Title>
                        </Card.Body>
                        <Card.Body>
                            <Card.Text>Error in getting API data</Card.Text>
                        </Card.Body>
                    </Card>
                }

            </div>
        )
    }



}
export default App;
