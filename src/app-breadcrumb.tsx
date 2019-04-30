import app, { Component } from 'apprun';

export default class extends Component {
  state = {}

  view = (state) => {
    return <ol class="breadcrumb">
      <li class="breadcrumb-item">Home</li>
      <li class="breadcrumb-item">
        <a href="#">Admin</a>
      </li>
      <li class="breadcrumb-item active">Dashboard</li>
    </ol>
    }

  update = { }
}