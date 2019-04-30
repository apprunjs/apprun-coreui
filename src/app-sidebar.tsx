import app, { Component } from 'apprun';

export default class extends Component {
  state = '[side bar]'

  view = (state) => {
    return <>
        <li class="nav-title">Dashboard</li>
        <li class="nav-item"><a class="nav-link active" href="main.html"><i class="nav-icon icon-speedometer"></i> Dashboard <span class="badge badge-info">NEW</span></a></li>
        <li class="nav-title">Tasks</li>
        <li class="nav-item"><a class="nav-link" href="#show-test"><i class="nav-icon icon-drop"></i> New </a></li>
        <li class="nav-item"><a class="nav-link" href="#" onclick={e=>this.run('#show-test')}><i class="nav-icon icon-drop"></i> Active</a></li>
        <li class="nav-item"><a class="nav-link" href="#" $onclick='#show-test'><i class="nav-icon icon-drop"></i> Pending</a></li>
        <li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon icon-pencil"></i> Completed </a></li>
      </>
  }

  update = { }
}

