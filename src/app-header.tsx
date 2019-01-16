import app, { Component } from 'apprun';

export default class extends Component {
  state = 'My App'

  view = (state) => {
    return <>
      <button className="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">
        {state}
      </a>
      <button className="navbar-toggler sidebar-toggler d-md-down-none mr-auto" type="button" data-toggle="sidebar-lg-show">
        <span className="navbar-toggler-icon"></span>
      </button>
      <button className="navbar-toggler aside-menu-toggler d-md-down-none" type="button" data-toggle="aside-menu-lg-show">
        <span className="navbar-toggler-icon"></span>
      </button>
      <button className="navbar-toggler aside-menu-toggler d-lg-none" type="button" data-toggle="aside-menu-show">
        <span className="navbar-toggler-icon"></span>
      </button>
    </>
  }

  update = {}
}
