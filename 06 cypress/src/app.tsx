import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CheckboxWithLabel } from './checkboxWithLabel';

ReactDOM.render(
  <CheckboxWithLabel id="onOff" labelOn="on" labelOff="off"/>,
  document.getElementById('root')
);
