import { all } from "redux-saga/effects";
import reserve from "./reserve/saga";

export function* rootSaga() {
  return yield all([reserve]);
}
