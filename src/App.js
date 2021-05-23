import React from 'react';
import axios from 'axios';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            data: '',
            map: false,
            error: false,
        }

    }

    getLocation = async (event) => {
        event.preventDefault();
        let url = `https://eu1.locationiq.com/v1/search.php?key=pk.8b89beb044f7bff265b36ceb931a413c&q=${this.state.search}&format=json`;

        try {
            let result = await axios.get(url)
            console.log(result);

            this.setState({
                data: result.data[0],
                map: true,
            })
        }

        catch {
            this.setState({
                map: false,
                error: true,
            })

        }

    }

    updateSearch = (event) => {

        this.setState({
            search: event.target.value
        })

        console.log(this.state.search);

    }


    render() {


        const myStyle = {
            marginLeft: "23%",
            marginRight: "15%",
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
