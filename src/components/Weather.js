import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


class Weather extends React.Component {
    render() {
        return (
            <>
            <h3>Weather in {this.props.cityName} </h3>

                <Table style={{ width: '45rem' }} bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.weather.map((item) => {
                            return (
                                <tr>
                                    <td>{item.date}</td>
                                    <td>{item.description}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </Table>
            </>
        )
    }
}
export default Weather;
