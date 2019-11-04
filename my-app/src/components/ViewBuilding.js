import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {data} = this.props
		//console.log("Building ID: ", this.props.selectedBuilding)

		//If no building is selected, ask user to select a building
		if(this.props.selectedBuilding === -1){
			return(
				<div>
					<p>
						<i>
							Click on a name to view more information<br />
						</i>
					</p>
				</div>
			);
		}
		else{
			const buildingCard = data[this.props.selectedBuilding - 1];
			//If the building does not have an address or coordinates, make those values empty
			
			if(buildingCard.address == null){
				//console.log("This building has no address")
				buildingCard.address = ''
				//console.log(buildingCard)
			}
			if(buildingCard.coordinates == null){
				console.log("This building has no coordinates")
				buildingCard.coordinates = 0
				//console.log(buildingCard)
			}
			//console.log(buildingCard)
			return (
				<div class="card text-white bg-primary mb-3">
					<div class="card-header">
						{buildingCard.code}
					</div>
					<div class="card-body">
						<h5 class="card-title">{buildingCard.name}</h5>
						<p class="card-text">
						<i>
							Building Address:<br />
							{buildingCard.address}<br />
							Building Coordinates:<br />
							{buildingCard.coordinates.latitude}<br />
							{buildingCard.coordinates.longitude}<br />
						</i>
					</p>
					</div>
				</div>
			);
		}
	}
}
export default ViewBuilding;
