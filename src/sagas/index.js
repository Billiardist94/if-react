import { all, fork } from 'redux-saga/effects'; 
import hotels from './hotels';

export default function* rootSaga() {
    yield all([ 
        fork(hotels), 
    ]);
}