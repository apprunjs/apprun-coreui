import app, { Component } from 'apprun';

export default class extends Component {
  state = '[footer]'

  view = (state) => {
    return <footer class="app-footer">
      <div>{state}</div>
    </footer>
  }

  update = { }
}

