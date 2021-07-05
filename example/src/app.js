import React from 'react';
import { render } from 'react-dom';
import { Components, util } from 'defi-common-component-test';

const App = () => <Components.ReactDemo />;

util.hello();

render(<App />, document.getElementById('root'));
