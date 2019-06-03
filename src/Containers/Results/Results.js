import React, { Component } from 'react';
import President from '../../Components/President/President'
import {setPresidents, hasErrored, isLoading} from '../../Actions'
import {connect} from 'react-redux'
import './Results.scss'

class Results extends Component {

  componentDidMount() {
    this.props.isLoading(true)
    this.getAllPresidents();
  }

  getAllPresidents = () => {
    fetch('http://localhost:3001/api/v1/presidents')
    .then(response => response.json())
    .then(result => this.props.setPresidents(result))
    .then(result => setTimeout(() => this.props.isLoading(false), 800))
    .catch(error => this.handleError(error.message))
  }

  handleError = (error) => {
    this.props.isLoading(false)
    this.props.hasErrored(error)
  }

  displayPresidents = () => {
    if(this.props.isLoadingStatus) {
      return <p>Loading...</p>
    } else if(this.props.errorMessage.length) {
      return <div><h1>There has been an error fetching the Presidents!</h1><h3>Error: {this.props.errorMessage}</h3></div>
    } else {
      const { presidents } = this.props
      return presidents.map(president => <President {...president} key={president.number}/>)
    }
  }

  render() {
    return(
      <div className='presidents-container'>
        {this.displayPresidents()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  presidents: state.presidents,
  isLoadingStatus: state.isLoadingStatus,
  errorMessage: state.errorMessage
})

const mapDispatchToProps = dispatch => ({
  setPresidents: presidents => dispatch(setPresidents(presidents)),
  hasErrored: error => dispatch(hasErrored(error)),
  isLoading: bool => dispatch(isLoading(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(Results)