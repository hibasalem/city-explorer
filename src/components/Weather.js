import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import 'bootstrap/dist/css/bootstrap.min.css';


class Weather extends React.Component {
    render() {
        return (
            <>
                {/* <Card style={{ width: '45rem' }} >
                    <Card.Body>
                        <Card.Title>The weather on {this.props.cityName}</Card.Title>
                    </Card.Body>

                    <Card.Body>

                    <Card.Text>{this.props.weather[0].date}</Card.Text>
                    <Card.Text>{this.props.weather[0].description}</Card.Text>
                        {/* <Card.Text>{this.props.weather[1]}</Card.Text>
                        <Card.Text>{this.props.weather[2]}</Card.Text> */}
                {/* 
                    </Card.Body>
                </Card> */}


                <Table style={{ width: '45rem' }}  bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>{this.props.weather[0].date}</td>
                            <td>{this.props.weather[0].description}</td>
                        </tr>
                        <tr>
                            <td>{this.props.weather[1].date}</td>
                            <td>{this.props.weather[1].description}</td>
                        </tr>     <tr>
                            <td>{this.props.weather[2].date}</td>
                            <td>{this.props.weather[2].description}</td>
                        </tr>
                     
                    </tbody>
                </Table>

            </>
        )
    }
}
export default Weather;
