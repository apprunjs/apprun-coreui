import { app, Component } from 'apprun';

export default class extends Component {
  state = 'test'

  view = (state) => {
    return <div>
      {state}
    </div>
  }

  update = {
    '#show-test': (state) => state
  }
}

