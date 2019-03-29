import React from 'react';
import PropTypes from 'prop-types';
import p5 from 'p5';
import './Processing.css';

class Processing extends React.Component {
    componentDidMount() {
        this.canvas = new p5(this.props.sketch(), "app-p5_container");
    }

    componentDidUpdate() {
        this.canvas.remove();
        this.canvas = new p5(this.props.sketch(), "app-p5_container");
    }

    shouldComponentUpdate() { // just in case :)
        return true;
    }

    componentWillUnmount() {
        this.canvas.remove();
    }

    render(){
        return (
            <div id="app-p5_overlay" {...this.props}>
                <div id="app-p5_container" />
            </div>
        )
    }
}

Processing.propTypes = {
    sketch : PropTypes.func.isRequired
};

export default Processing;
