//Helpful forms tutorial
//https://www.youtube.com/watch?v=7Vo_VCcWupQ&list=PLz7DErHkTk9YHc6KUp21iCs2Djm3SDYXF&index=2&t=0s
import React from 'react';

class AddBuilding extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            code: '',
            name: '',
            address: '',
            latitude: '',
            longitude: '',
            newData: this.props.data
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

    addressUpdate = (event) => {
        this.setState({
            address: event.target.value
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
        /*
        console.log("Code: ", this.state.code,
        "\nName: ", this.state.name, 
        "\nLatitude: ", this.state.latitude,
        "\nLongitude: ", this.state.longitude)
        */

        //Update the data list that is displaying the buildings
        //I will append the new building data to the end of the list

        //console.log(Object.keys(this.props.data).length)
        //newId = Object.keys(this.props.data).length + 1

        //I get the new id by looking at the last element in the list, taking its id, then adding by 1
        //This is because even if I get rid of items in the list, I want the newest item not to duplicate a different building's id
        //console.log(this.props.data[Object.keys(this.props.data).length - 1].id)
        //const newId = this.props.data[Object.keys(this.props.data).length - 1].id + 1
        //console.log(this.props.newestId)

        this.state.newData.push({
            "id": this.props.newestId,
            "code": this.state.code,
            "name": this.state.name,
            "coordinates": {
                "latitude": this.state.latitude,
                "longitude": this.state.longitude
            },
            "address": this.state.address
        })
        //console.log(this.state.newData)
        this.props.updateData(this.state.newData)
        this.props.incrementNewestId(this.props.newestId)
    }

	render() {
		return (
            <form>
                <div class="form-group">
                    <label >Code</label>
                    <input
                        class="form-control"
                        type='text'
                        value={this.state.code}
                        onChange={this.codeUpdate}
                        placeholder="Building Code"
                    />
                </div>
                <div class="form-group">
                    <label>Name</label>
                    <input
                        class="form-control"
                        type='text'
                        value={this.state.name}
                        onChange={this.nameUpdate}
                        placeholder="Building Name"
                    />
                </div>
                <div class="form-group">
                    <label>Address</label>
                    <input
                        class="form-control"
                        type='text'
                        value={this.state.address}
                        onChange={this.addressUpdate}
                        placeholder="Building Address"
                    />
                </div>
                <label class="col-sm-2 col-form-label col-form-label-lg">Coordinates:</label>
                <div class="form-row">
                    <div class="form-group col">
                        Latitude
                        <input
                            class="form-control"
                            type='text'
                            value={this.state.latitude}
                            onChange={this.latitudeUpdate}
                            placeholder="Enter a number"
                        />
                    </div>
                    <div class="form-group col">
                        Longitude
                        <input
                            class="form-control"
                            type='text'
                            value={this.state.ongitude}
                            onChange={this.longitudeUpdate}
                            placeholder="Enter a number"
                        />
                    </div>
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-primary" onClick={this.addRow}>
                        Add a building!
                    </button>
                </div>
            </form>
		);
	}
}
export default AddBuilding;