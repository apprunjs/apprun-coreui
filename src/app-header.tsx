import app, { Component } from 'apprun';

export default class extends Component {
  state = 'My App'

  view = (state) => {
    return <div>
      {state}
    </div>
  }

  update = { }
}
