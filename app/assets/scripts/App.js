import '../styles/styles.css';
import MobileMenu from './MobileMenu';
import RevealonScroll from './RevealonScroll';

console.log('begin')
let mobileMenu = new MobileMenu()
let revealonscroll = new RevealonScroll()

if (module.hot) {
    module.hot.accept()
}