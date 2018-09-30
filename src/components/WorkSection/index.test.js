import React from 'react';
import ReactDOM from 'react-dom';
import WorkSection from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WorkSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});
