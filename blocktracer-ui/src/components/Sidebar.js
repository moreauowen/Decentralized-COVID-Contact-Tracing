import React, { Component } from 'react';

function Sidebar() {
    return (
        <div id="sidebar">
            <div className="sidebarLink">
                <a className="sidebarLink">Home</a>
            </div>
            <div className="sidebarLink">
                <a className="sidebarLink">Join</a>
            </div>
            <div className="sidebarLink">
                <a className="sidebarLink">Start</a>
            </div>
        </div>
    );
}

export default Sidebar;