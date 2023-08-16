import { Workbox } from 'workbox-window';
import '../css/style.css';
import './database';
import Editor from './editor';
const butInstall = document.getElementById('buttonInstall');

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};


/***
 * Code below was grabbed from a stackoverflow answer
 *  Link : https://stackoverflow.com/questions/60379994/determining-pwa-installation-status
 * 
 */
// Setting isInstalled variable from localStorage and checking if it is 1 if not then it is false
let isInstalled = localStorage.getItem('pwaInstalled') === '1' || false;

// Checking the windows css media rule of display-mode to detect if the app is installed
if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
  // User is currently navigating on the PWA so yes it's installed
  localStorage.setItem('pwaInstalled', '1');
  isInstalled = true;
} else {
  //User is navigating in browser
  window.addEventListener('beforeinstallprompt', () => {
    localStorage.setItem('pwaInstalled', '0');
    isInstalled = false;
    //User can get an installation prompt meaning the app is not installed
  });
  window.addEventListener('onappinstalled', () => {
    localStorage.setItem('pwaInstalled', '1');
    isInstalled = true;
  });
}

// Toggle the install button if the app is installed or not
if (isInstalled) {
  butInstall.classList.toggle('hidden', true);
} else {
  butInstall.classList.toggle('hidden', false);
}


const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
