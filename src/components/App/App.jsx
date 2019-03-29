import React, { Component } from 'react';
import './App.css';
import Processing from '../../components/Processing/Processing';
import sketch from '../../components/Processing/sketches/sketch';
import CodeMirror from 'react-codemirror';
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            code: () => sketch
        };
        this.updateCode = this.updateCode.bind(this);
    }
    updateCode = function(newCode) {
        this.setState({
            code: eval(`() => ${newCode};`),
        });
    };

    render() {
        return (
            <div>
                <div
                    style={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        width:"100%",
                        height:"5vh"
                    }}>live editor on the left, p5 canvas on the right.
                </div>
                <div className="App">
                    <CodeMirror
                        value={this.state.code().toString()}
                        onChange={this.updateCode}
                        options={{
                            lineNumbers: true,
                            mode: 'javascript'
                        }} />
                    <Processing
                        sketch={this.state.code}/>
                </div>
                <div
                  style={{
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center",
                      width:"100%",
                      height:"5vh"
                  }}>joe made this.
                </div>
          </div>
        );
    }
}

export default App;
