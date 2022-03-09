import React from 'react';
import {render} from '@testing-library/react';
import AppSerge from "./app/AppSerge";
import {Provider} from "react-redux";
import {store} from "../m2-bll/store";


test('renders learn react link', () => {
    render(<Provider store={store}>
        <AppSerge/>
    </Provider>);
});
