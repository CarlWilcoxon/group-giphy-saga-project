import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import App from './components/App/App';
import axios from 'axios';

// Saga Setup #1 require it in
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';



// Saga Setup #4 create the "main" saga function
//   common names for this are `watcherSaga` and `rootSaga`
function* watcherSaga() {
  // yield takeEvery( 'FETCH_GIF', getGifsSaga );
}

// //Saga to get plants from the server AJAX (axios)
// function* getGifsSaga(){
//   //us try/catch for errors - replaces promise .then & .catch
//   try {
//     const response = yield axios.get('/api/ca');
//     // in Sagas, replace `dispatch` with `put`
//     yield put({ type: 'SET_GIFS', payload: response.data });
//   } catch (error) {
//       console.log('error with plant get request', error);
//   }
// }


// function* removePlantSaga(action){
//   try{
//     yield axios.delete( '/api/plant/' + action.payload );
//     yield put({type: 'FETCH_PLANTS'});  // GET all plants from server
//   } catch (error) {
//     console.log('error with plant DELETE request', error);
//   }
// }

const gifList = (state = [], action) => {
  switch (action.type) {
    case 'SET_GIFS':
      return action.payload;
    default:
      return state;
  }
};

// Saga Setup #2 - create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
  combineReducers({
  }),
  applyMiddleware(sagaMiddleware, logger)
);

// Saga Setup #5 - Last step is to run the "main" or `watcherSaga`
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('react-root'));
