import React, { Component } from 'react';
import { withRouter } from 'react-router';
import M from '../../node_modules/materialize-css/dist/js/materialize';

class CafeList extends Component {

  state = {
    selValue: '',
    reqValue: ''
  }

  componentDidMount(){
    if (this.props.cafes.length > 0) {
      this.initSelect();
    }
  }

  componentDidUpdate(){
    this.initSelect();
  }

  initSelect = () => {
    const selectElements = document.querySelectorAll("select");
    M.FormSelect.init(selectElements);
  }

  render() {
    return <div className="row">
        <div className="card transparent col s12 z-depth-0">
          <h4 className="dark">Select from existing cafes</h4>
        </div>

        <form className="col s12" onSubmit={this.handleSelSubmit}>
          <div className="row">
            <div className="formElement-split">
              <select value={this.state.selValue} onChange={this.handleSelChange}>
                <option value="" disabled>
                  Choose your cafe
                </option>
                {this.renderUserCafeOptions()}
              </select>
              <label>Your cafes</label>
            </div>
          </div>

          <div className="row">
            <button className="btn btn-large waves-effect waves-light" type="submit">
              Select Cafe<i className="material-icons right">send</i>
            </button>
          </div>
        </form>

        <div className="card transparent col s12 z-depth-0">
          <h4 className="dark">Or join a new cafe</h4>
        </div>

        <form className="col s12" onSubmit={this.handleReqSubmit}>
          <div className="row">
            <div className="formElement-split">
              <select value={this.state.reqValue} onChange={this.handleReqChange}>
                <option value='' disabled>
                  Request to join
                </option>
                {this.renderCafeOptions()}
              </select>
              <label>Existing Cafes</label>
            </div>
          </div>

          <div className="row">
            <button className="btn btn-large waves-effect waves-light" type="submit">
              Send request<i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>;
  }

  handleSelChange = (event) => {
    this.setState({
      selValue: event.target.value
    });
  }

  handleSelSubmit = (event) => {
    event.preventDefault();
    const cafeId = this.state.selValue;
    if (cafeId !== ''){
      this.props.history.push(`/cafes/${cafeId}`)
    }
  }

  handleReqChange = (event) => {
    this.setState({
      reqValue: event.target.value
    });
  }

  handleReqSubmit = (event) => {
    event.preventDefault();
    const cafeId = this.state.reqValue;
    if (cafeId !== ''){
      console.log(cafeId);
    }
  }

  renderUserCafeOptions = () => {
    return this.props.userCafes.map(cafe => (
      <option key={cafe.id} value={cafe.id}>{cafe.name} - {cafe.address}</option>
    ));
  }

  renderCafeOptions = () => {
    const cafes = this.props.cafes;
    const userCafes = this.props.userCafes;
    const options = cafes.filter(c => !userCafes.find(u => u.id === c.id));
    return options.map(cafe => (
      <option key={cafe.id} value={cafe.id}>{cafe.name} - {cafe.address}</option>
    ));
  }
}

export default withRouter(CafeList);