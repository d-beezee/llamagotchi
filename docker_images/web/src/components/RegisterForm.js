import React from 'react'
import {LlamaStore} from '../modules/LlamaStore'
import {LlamaRequests} from '../modules/LlamaRequests'
import {Card, CardActions, CardTitle, CardMedia, CardText} from 'material-ui/Card'

export default class RegisterForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.getStateFromStore()
    this.onChange = this.onChange.bind(this)
  }
  getStateFromStore () {
    return LlamaStore.getState()
  }
  onChange () {
    this.setState(this.getStateFromStore())
  }
  componentDidMount () {
    LlamaStore.onChange = this.onChange
  }
  register (e) {
    e.preventDefault()
    let u = (e.target.querySelector('input[name="username"]'))
    let p = (e.target.querySelector('input[name="password"]'))
    let em = (e.target.querySelector('input[name="email"]'))
    LlamaRequests.register(u.value, p.value, em.value)
  }
  render () {
    return (<Card>
      <CardMedia overlay={<CardTitle title='Register' subtitle='registra un nuovo lama' />}>
        <img src='http://via.placeholder.com/750x350' />
      </CardMedia>
      <form onSubmit={this.register}>
        <CardText>
          <input type='text' name='username' />
          <input type='password' name='password' />
          <input type='text' name='email' />
        </CardText>
        <CardActions>
          <input className='waves-effect waves-light btn' type='submit' />
        </CardActions>
      </form>
    </Card>)
  }
}
