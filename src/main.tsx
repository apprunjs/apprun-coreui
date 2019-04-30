import app from 'apprun';

import Header from './app-header';
import Sidebar from './app-sidebar';
import Aside from './app-aside';
import Footer from './app-footer';
import Breadcrumb from './app-breadcrumb';
import Home from './home';
import Test from './test';

app.render(document.body, <>
  <Header />
  <div class="app-body">
    <div class="sidebar">
      <nav class="sidebar-nav ps ps--active-y">
        <Sidebar />
        <div class="ps__rail-x">
          <div class="ps__thumb-x" tabindex="0"></div>
        </div>
        <div class="ps__rail-y">
          <div class="ps__thumb-y" tabindex="0"></div>
        </div>
      </nav>
      <button class="sidebar-minimizer brand-minimizer" type="button"></button>
    </div>

    <main class="main">
      <Breadcrumb />
      <div class="container-fluid" id="apprun-app-main">
        <Home />
      </div>
    </main>
    <aside class="aside-menu">
      <Aside />
    </aside>
  </div>
  <Footer id="apprun-app-footer"/>
</>);

new Test().mount('apprun-app-main');