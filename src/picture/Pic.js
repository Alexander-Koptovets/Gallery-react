import React from 'react'
import { store } from '../store'
import { NavLink } from 'react-router-dom'

export class Pic extends React.Component {
    constructor(props) {
      super(props)
      this.click = this.click.bind(this);
    }
    click() {
      store.url = this.props.src;
    }
  
    render() {
      return (
        <div>
          <NavLink to='/one_pic/OnePic'>
            <img src={this.props.src} alt='' onClick={this.click}/>
          </NavLink>
        </div>
      )
    }
  } 