import app, { Component } from 'apprun';

export default class extends Component {
  state = '[side bar]'

  view = (state) => {
    return <div>
      {state}
    </div>
  }

  update = { }
}

