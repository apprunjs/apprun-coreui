import app, { Component } from 'apprun';

export default class extends Component {
  state = {}

  view = (state) => {
    return <>
      <li className="breadcrumb-item">Home</li>
      <li className="breadcrumb-item">
        <a href="#">Admin</a>
      </li>
      <li className="breadcrumb-item active">Dashboard</li>
    </>
  }

  update = { }
}