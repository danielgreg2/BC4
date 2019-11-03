import React from 'react';

class RemoveBuilding extends React.Component {

    deleteRow = (event) => {
        event.preventDefault()
        alert("You have deleted a building!")

        //Update the data list that is displaying the buildings
        //I will delete the building data of the building that is selected

        const {data} = this.props
        //const newData = data.filter(el => el !== this.props.selectedBuilding)
        console.log("Selected Building id: ", this.props.selectedBuilding)
        const newData = data

        //Finding index in newData of element we want to delete (based on building id)
        //https://stackoverflow.com/questions/36419195/get-index-from-a-json-object-with-value
        var val = this.props.selectedBuilding
        const index = newData.findIndex(function(item, i){
            return item.id === val
        });
        console.log("Index of building's id ", index)

        delete newData[index]
        console.log(newData)

        console.log(data)
        this.props.updateData(data)
    }

	render() {
		return (
        <div>
            <button onClick={this.deleteRow}>
                Delete this building?
            </button>
        </div>
		);
	}
}
export default RemoveBuilding;