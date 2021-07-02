import React from 'react';
import { render } from 'react-dom';
import { ReactDemo, hello } from 'defi-common-component-test';

const App = () => <ReactDemo />;

hello();

render(<App />, document.getElementById('root'));
