import React, { Component } from 'react'
import Decrease from './Decrease';
import Headrow from './Headrow';
import Increase from './Increase';
import Inputchange from './Inputchange';
import Tablebody from './Tablebody';

// creating two context for passing color and focus function
export const Colorcontext = React.createContext({ id: null, color: "black" });
export const Funccontext = React.createContext(null);

// creating variable
var colorid = [];
var colorele;
var textele;

// starting of table class component

class Tableapp extends Component {
    // constructor
    constructor(props) {
        super(props);
        this.state = {
            row: ["red", "green", "blue"],
            column: ["red", "green", "blue"],
            changecolor: false,
            lastcolor: null,
            changetext:"",
            totalblocks:0
        }

        // creating an input ref for focusing input field
        this.inputref = React.createRef();
    }

    // getting all the elements of input type="color" and all the blocks in the table
    componentDidMount()
    {
        colorele = document.getElementsByClassName("colorfield");
        textele = document.getElementsByClassName("allblocks");
    }


    // Method for Increasing the rows
    handleincreaserows = () => {
        this.setState((state) => {
            return { row: [...state.row, "red"] }
        });
    }

    // Method for Increasing the columns
    handleincreasecolumns = () => {
        colorid.push({
            idx: colorid.length + 1,
            color: this.state.lastcolor
        });
        this.setState((state) => {
            return {
                column: [...state.column, "blue"],
            }
        });
    }

    // Method for decreasing the rows
    handledecreaserows = () => {
        if (this.state.row.length > 1) {
            this.setState((state) => {
                state.row.pop();
                return { row: [...state.row] }
            });
        }
    }

    // Method for decreasing the columns
    handledecreasecolumns = () => {

        if (this.state.column.length > 1) {
            this.setState((state) => {
                state.column.pop();
                return { column: [...state.column] }
            });
        }
    }

    // Method for setting the value attribute of input type="color" to see on the screen
    changecolor = (e) => {
        e.target.setAttribute("value", e.target.value);
    }

    // Method for changing the background color of the indiviual table blocks
    changehandler = () => {
        // Updating the colorid array with mapping
        colorid = this.state.column.map((user, id) => {
            return ({ idx: id, color: colorele[id].getAttribute("value") });
        });

        // Changing the  state of lastcolor to add the same color of column afterwards
        if ((colorid.length > 0) && (colorid[colorid.length - 1].idx === colorele.length - 1)) {
            this.setState({
                lastcolor: colorid[colorid.length - 1].color
            })
        }

        // changing the state of changecolor
        this.setState({
            changecolor: true,
        });
    }

    // Method for focusing the input
    focusinput = (e) => {
        this.inputref.current.focus();
        // reseting the input field if new table block is clicked and getting the id of clicked block
        this.setState({
            changetext:"",
            totalblocks: e.target.getAttribute("data-id")
        });
    }

    // Method to update the state of changetext and the text of cliked block simultaneously
    changetexthandler = (e)=>{
        this.setState({
            changetext:e.target.value,
        },()=>{
            textele[this.state.totalblocks].innerHTML =  this.state.changetext
        });
    }

    // render method
    render() {
        return (
            <div>
                <table id="table">
                    <thead>
                        <tr>
                            <Headrow changecolor={this.changecolor} col={this.state.column} />
                        </tr>
                        <tr>
                            <td id="changebutton">
                                <button onClick={this.changehandler}>Change</button>
                            </td>
                        </tr>
                    </thead>
                    <Colorcontext.Provider value={{ colorid, changecolor: this.state.changecolor }}>
                        <Funccontext.Provider value={this.focusinput}>
                            <Tablebody row={this.state.row} column={this.state.column}/>
                        </Funccontext.Provider>
                    </Colorcontext.Provider>
                </table>

                <Inputchange value={this.state.changetext} changetexthandler={this.changetexthandler} ref={this.inputref} />

                <Increase handleincreaserows={this.handleincreaserows} handleincreasecolumns={this.handleincreasecolumns} />

                <Decrease handledecreaserows={this.handledecreaserows} handledecreasecolumns={this.handledecreasecolumns}/>
            </div>
        )
    }
}

export default Tableapp
