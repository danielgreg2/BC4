import React from 'react';

class AddBuilding extends React.Component {
	render() {
        const buildingCard = this.props.data[this.props.selectedBuilding];
		if(buildingCard.address == null){
			console.log("This building has no address")
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
						{buildingCard.address !== null &&
							<i>Building Address: {buildingCard.address}<br /></i>
						}
						{buildingCard.coordinates.latitude !== null &&
                            <i>
                            Building Coordinates:<br />
						    {buildingCard.coordinates.latitude}<br />
						    {buildingCard.coordinates.longitude}<br />
                            </i>
                        }
					</i>
				</p>
			</div>
		);
	}
}
export default AddBuilding;