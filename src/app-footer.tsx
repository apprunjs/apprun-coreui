import app, { Component } from 'apprun';

export default class extends Component {
  state = '[footer]'

  view = (state) => {
    return <div>
      {state}
    </div>
  }

  update = { }
}

