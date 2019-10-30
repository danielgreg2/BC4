import React from 'react';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data } = this.props;

		const buildingList = data
		//we filter the data, then we map through it
		.filter(directory => {
			//remove names that do not match current filterText
			return directory.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) >= 0
		})
		.map(directory => {
			return (
				<tr key={directory.id}>
					<td>{directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
