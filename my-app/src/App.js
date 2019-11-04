import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBuilding'
import RemoveBuilding from './components/RemoveBuilding'
import Credit from './components/Credit';
import listOfBuildings from './data/data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: -1,
      data: listOfBuildings,
      newestId: listOfBuildings[Object.keys(listOfBuildings).length - 1].id + 1
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  updateData(updatedData) {
    this.setState({
      data: updatedData
    })
  }

  incrementNewestId(id){
    this.setState({
      newestId: id + 1
    })
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row justify-content-center">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterText = {this.state.filterText}
          filterUpdate = {this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.data}
                    filterText = {this.state.filterText}
                    selectedBuilding = {this.state.selectedBuilding}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="col">
              <ViewBuilding 
                data={this.state.data}
                selectedBuilding = {this.state.selectedBuilding}
              />
              <div className="col">
                <RemoveBuilding
                  data={this.state.data}
                  selectedBuilding = {this.state.selectedBuilding}
                  selectedUpdate = {this.selectedUpdate.bind(this)}
                  updateData={this.updateData.bind(this)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
                <AddBuilding
                  data={this.state.data}
                  updateData={this.updateData.bind(this)}
                  newestId={this.state.newestId}
                  incrementNewestId={this.incrementNewestId.bind(this)}
                />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
