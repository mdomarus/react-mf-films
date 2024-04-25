import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import rootComponent from './root';

const lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent,
    errorBoundary() {
        return <div className="mt-16">Error</div>;
    },
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
