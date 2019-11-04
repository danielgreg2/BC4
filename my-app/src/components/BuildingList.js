import React from 'react';

class BuilingList extends React.Component {
	selectedUpdate(e) {
		const id = e.currentTarget.getAttribute('data');	//grabs data-tag (which is the directory id) of specific row that was clicked on in the table
		//console.log("You have clicked a row: ", id)					
		console.log("This is the id of the row we clicked on: ", id)	//will output to console the id of the building that we click on
		this.props.selectedUpdate(id)        //this is referring to the 'selectedUpdate' in App.js, it updates the selectedBuilding prop?
	}
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data } = this.props;

		const buildingList = data
		//we filter the data, then we map through it
		.filter(directory => {
			//remove names that do not match current filterText
			return (directory.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) >= 0) || (directory.code.toLowerCase().indexOf(this.props.filterText.toLowerCase()) >= 0)
		})
		.map(directory => {
			return (
				<tr key={directory.id} data={directory.id} onClick={this.selectedUpdate.bind(this)}>
					<td>{directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
