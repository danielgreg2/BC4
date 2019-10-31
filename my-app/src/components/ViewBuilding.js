import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		console.log("Building ID: ", this.props.selectedBuilding)
		const buildingCard = this.props.data[this.props.selectedBuilding - 1];
		if(buildingCard.address == null){
			console.log("This building has no address")
			buildingCard.address = ''
			console.log(buildingCard)
		}
		if(buildingCard.coordinates == null){
			console.log("This building has no coordinates")
			buildingCard.coordinates = 0
			console.log(buildingCard)
		}
		console.log(buildingCard)
		return (
			<div>
				<p>
					{' '}
					<i>
						Click on a name to view more information<br /><br />
						Building Code: {buildingCard.code}<br />
						Building Name: {buildingCard.name}<br />
						Building Address: {buildingCard.address}<br />
                        Building Coordinates:<br />
					    {buildingCard.coordinates.latitude}<br />
						{buildingCard.coordinates.longitude}<br />
					</i>
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
