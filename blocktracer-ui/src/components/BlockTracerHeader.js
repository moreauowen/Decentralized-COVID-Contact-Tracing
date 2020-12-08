import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function BlockTracerHeader() {
    
    return (
        <div id="blockTracerHeader">
            <a id="headertitle">BlockTracer</a>
            <div>
                <Link class="headerlinks" to='/dashboard'>Dashboard</Link>
                <Link class="headerlinks" to="/start">Start a Trace Chain</Link>
                <Link class="headerlinks" to="/join">Join a Trace Chain</Link>

            </div>
        </div>
    );
}

export default BlockTracerHeader;