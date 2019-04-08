import { put, call, select } from 'redux-saga/effects';

/** API call to get data */

function* getData(action) {
    console.log('in saga');
    try {
        yield put({ type: 'loadData' });
    } catch (e) {
        console.log(e);
    }
}

export default getData;
