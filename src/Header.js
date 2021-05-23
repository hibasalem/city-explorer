import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends React.Component {
    render() {

        const mystyle = {
            backgroundColor: "#faf1e6",
            padding: "70px",
            fontFamily: "Arial",
            height:"200px",
            width: "45rem",
            marginBottom: "10px",
        };

        return (
            <div style={mystyle}>
                <h1>
                City explorer
                </h1>
            </div>
        )
    }
}
export default Header;
