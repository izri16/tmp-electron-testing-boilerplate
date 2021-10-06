import React from 'react';
import { render } from 'react-dom';
import App from './App';
import {loadCardanoSerializationLib} from './cardano-serialization-lib-wrapper';
await loadCardanoSerializationLib();

render(<App />, document.getElementById('root'));
