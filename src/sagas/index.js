import HelloSaga from '../components/actions/sagas/index'


const rootSagas = function* root() {
  try {
    yield HelloSaga;
  } catch (e) {
    console.log(e);
  }
}

export default rootSagas;