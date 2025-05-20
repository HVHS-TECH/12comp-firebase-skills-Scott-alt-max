/**************************************************************/
// main.mjs
// Main entry for index.html
// Written by <Your Name Here>, Term 2 202?
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c main.mjs', 'color: blue; background-color: white;'); //DIAG

/**************************************************************/
// Import all external constants & functions required

/**************************************************************/
// Import all the constants & functions required from fb_io module
import { fb_initialise, fb_authenticate, fb_detectAuthStateChanged, fb_logOut, fb_writeTo, fb_writeJunk, fb_read, fb_readAll, fb_update, fb_readSorted, fb_listenForChanges, fb_remove, wreakHavoc } from './fb_io.mjs';
    window.fb_initialise = fb_initialise;
    window.fb_authenticate = fb_authenticate;
    window.fb_detectAuthStateChanged = fb_detectAuthStateChanged;
    window.fb_logOut = fb_logOut;
    window.fb_writeTo = fb_writeTo;
    window.fb_writeJunk = fb_writeJunk;
    window.fb_read = fb_read;
    window.fb_readAll = fb_readAll;
    window.fb_update = fb_update;
    window.fb_readSorted = fb_readSorted;
    window.fb_listenForChanges = fb_listenForChanges;
    window.fb_remove = fb_remove;
    window.wreakHavoc = wreakHavoc;
 
/**************************************************************/
// index.html main code
/**************************************************************/
