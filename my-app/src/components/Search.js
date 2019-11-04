import React from 'react';

class Search extends React.Component {
	filterUpdate() {
		//Here you will need to update the value of the filter with the value from the textbox
		const val = this.myValue.value      //get what is typed in the box
		//console.log(val)					//will output to console what is in the search box every time it gets updated
		this.props.filterUpdate(val)        //this is referring to the 'filterUpdate' in App.js
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		
		return (
			<form>
				<input
					type="text" 
					placeholder="Type to Filter" 
					ref = {(value) => {this.myValue = value}}	//grabs the value from the textbox
					onChange = {this.filterUpdate.bind(this)}	//every time the value inside the filter changes, filterUpdate is called
																//this saves the value in the textbox, also passing it back to App.js
				/>
				<small class="form-text text-muted">
					Filter by building <b>code</b> or building <b>name</b>.
				</small>
			</form>
		);
	}
}
export default Search;
