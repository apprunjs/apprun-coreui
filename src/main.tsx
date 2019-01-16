import Header from './app-header';
import Sidebar from './app-sidebar';
import Aside from './app-aside';
import Footer from './app-footer';
import Home from './home';

new Header().start('apprun-app-header');
new Sidebar().start('apprun-app-sidebar');
new Footer().start('apprun-app-footer');
new Aside().start('apprun-app-aside');
new Home().start('apprun-app-main');