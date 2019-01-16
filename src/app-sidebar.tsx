import app, { Component } from 'apprun';

export default class extends Component {
  state = '[side bar]'

  view = (state) => {
    return <>
        <li className="nav-title">Dashboard</li>
        <li className="nav-item"><a className="nav-link active" href="main.html"><i className="nav-icon icon-speedometer"></i> Dashboard <span className="badge badge-info">NEW</span></a></li>
        <li className="nav-title">Tasks</li>
        <li className="nav-item"><a className="nav-link" href="#"><i className="nav-icon icon-drop"></i> New </a></li>
        <li className="nav-item"><a className="nav-link" href="#"><i className="nav-icon icon-drop"></i> Active</a></li>
        <li className="nav-item"><a className="nav-link" href="#"><i className="nav-icon icon-drop"></i> Pending</a></li>
        <li className="nav-item"><a className="nav-link" href="#"><i className="nav-icon icon-pencil"></i> Completed </a></li>
      </>
  }

  update = { }
}

