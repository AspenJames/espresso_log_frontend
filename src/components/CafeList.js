import React, { Component } from 'react';
import { withRouter } from 'react-router';
import M from '../../node_modules/materialize-css/dist/js/materialize';

class CafeList extends Component {

  state = {
    value: ''
  }

  componentDidUpdate(){
    const selectElement = document.querySelector('select');
    M.FormSelect.init(selectElement);
  }

  render() {
    return (
      <div className='row'>
        <div className='card transparent col s12 z-depth-0'>
          <h4 className='dark'>Select from existing cafes</h4>
        </div>

        <form className='col s12' onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='formElement-split'>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value='' disabled>Choose your cafe</option>
                {this.renderCafeOptions()}
              </select>
              <label>Your cafes</label>
            </div>
          </div>

          <div className='row'>
            <button className='btn btn-large waves-effect waves-light' type='submit'>Select Cafe<i className='material-icons right'>send</i></button>
          </div>
        </form>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const cafeId = this.state.value
    if (cafeId !== ''){
      this.props.history.push(`/cafes/${cafeId}`)
    }
  }

  renderCafeOptions = () => {
    const options = this.props.cafes.map(cafe => (
      <option key={cafe.id} value={cafe.id}>{cafe.name} - {cafe.address}</option>
    ));
    return options;
  }
}

export default withRouter(CafeList);