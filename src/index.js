import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';

import './i18next'
import App from './App';

ReactDOM.render(<Suspense fallback="loading"><App/></Suspense>, document.querySelector("#root"))