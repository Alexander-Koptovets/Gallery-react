import React from 'react'
import { Pic } from '../picture/Pic'
import './index.css'

const request  = require('superagent');

export class Home extends React.Component {
    constructor(props) {
      super(props)
      this.state = {links: []}
      this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        request
            .get('https://api.unsplash.com/photos')
            .query({client_id: 'r2I-rJ_kZYgHetscQWxPCsplUadu9YBfKqYc8K8tc7k'})
            .set('Accept', 'application/json')
            .end((err, resp) => {
                if (!err) {
                    let arr = this.state.links;
                    resp.body.map((i) => arr.push(i.urls.small));
                    this.setState({links: arr});
                }
            })
    }
  
    render() {
      return (
        <div>
        <div className='head'>
          <p className='head-name'>Gallery</p>
        </div>
        <div className='wrapper'>
            {this.state.links.map((item, i) => <Pic src={item} key={i}/>)}
        </div>
        </div>
      )
    }
  }