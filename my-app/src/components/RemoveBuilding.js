import React from 'react';

class RemoveBuilding extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            newData: this.props.data
        }
    }
    deleteRow = (event) => {
        event.preventDefault()
        alert("You have deleted a building!")

        //Update the data list that is displaying the buildings
        //I will delete the building data of the building that is selected

        //const newData = data.filter(el => el !== this.props.selectedBuilding)
        console.log("Selected Building id: ", this.props.selectedBuilding)

        //Finding index in newData of element we want to delete (based on building id)
        //https://stackoverflow.com/questions/36419195/get-index-from-a-json-object-with-value
        /*
        var val = this.props.selectedBuilding
        const index = newData.findIndex(function(item, i){
            return item.id === val
        });
        console.log("Index of building's id ", index)
        */
        const index = String(this.props.selectedBuilding - 1)
        console.log("Index we are deleting: ", index)

        delete this.state.newData[index]
        //delete this.state.newData[this.props.selectedBuilding]
        console.log(this.state.newData)

        this.props.selectedUpdate(-1)
        //console.log(this.props.data)
        this.props.updateData(this.state.newData)
    }

	render() {
        if(this.props.selectedBuilding !== -1){
            return (
                <div>
                    <button onClick={this.deleteRow}>
                        Delete this building?
                    </button>
                </div>
                );
        }
        else{
            return(
                <div>
                </div>
            );
        }
	}
}
export default RemoveBuilding;