/**
 * @providesModule mySaga
 * @param options map containing optional arguments: timeout (millis), maximumAge (millis) and
 *        highAccuracy (boolean)
 */

import {takeEvery} from "redux-saga";
import {call, put, fork} from "redux-saga/effects";
//
// function* hello(action) {
//   console.log("hoangnh");
// }

export const helloAction = function* helloSaga() {
  // yield* takeEvery('HELLO_ACTION', hello);
};

export default [
  fork(helloAction),
];
