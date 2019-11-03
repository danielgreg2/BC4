//Helpful forms tutorial
//https://www.youtube.com/watch?v=7Vo_VCcWupQ&list=PLz7DErHkTk9YHc6KUp21iCs2Djm3SDYXF&index=2&t=0s
import React from 'react';

class AddBuilding extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            code: '',
            name: '',
            latitude: '',
            longitude: ''
        }
    }

    codeUpdate = (event) => {
        this.setState({
            code: event.target.value
        })
    }

    nameUpdate = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    latitudeUpdate = (event) => {
        this.setState({
            latitude: event.target.value
        })
    }
    
    longitudeUpdate = (event) => {
        this.setState({
            longitude: event.target.value
        })
    }

    addRow = (event) => {
        event.preventDefault()
        alert("You have submitted a new building!")
        console.log("Code: ", this.state.code,
        "\nName: ", this.state.name, 
        "\nLatitude: ", this.state.latitude,
        "\nLongitude: ", this.state.longitude)
    }

	render() {
		return (
            <form>
                <div>
                    <label>Code: </label>
                    <input
                        type='text'
                        value={this.state.code}
                        onChange={this.codeUpdate} 
                    />
                </div>
                <div>
                    <label>Name: </label>
                    <input
                        type='text'
                        value={this.state.name}
                        onChange={this.nameUpdate} 
                    />
                </div>
                <div>
                    <label>Coordinates: </label>
                    <br />Latitude:
                    <input
                        type='text'
                        value={this.state.latitude}
                        onChange={this.latitudeUpdate} 
                    />
                    Longitude:
                    <input
                        type='text'
                        value={this.state.ongitude}
                        onChange={this.longitudeUpdate} 
                    />
                </div>
                <div>
                    <button onClick={this.addRow}>
                        Add a building!
                    </button>
                </div>
            </form>
		);
	}
}
export default AddBuilding;