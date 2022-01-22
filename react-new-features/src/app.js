import React from 'react';
import ReactDom from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import NoteApp from './components/NoteApp';

ReactDom.render(<NoteApp />, document.getElementById('app'));
