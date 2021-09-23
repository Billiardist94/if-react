import { all, fork } from 'redux-saga/effects'; 
import hotels from './hotels';
import available from './available';

export default function* rootSaga() {
    yield all([ 
        fork(hotels), 
        fork(available),
    ]);
}