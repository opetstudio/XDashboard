import { combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import CreateStore from './CreateStore'
import rootSaga from '../Sagas/'
import ReduxPersist from '../Config/ReduxPersist'
import { any } from 'ramda'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    app: require('./AppRedux').reducer,
    // begin Ignite-Entity-Login
    transaction: require('../Containers/Transaction/redux').reducer,
    login: require('../Containers/Login/redux').reducer,
    merchant: require('../Containers/Merchant/redux').reducer,
    paymentgw: require('../Containers/Paymentgw/redux').reducer,
    user: require('../Containers/User/redux').reducer,
    tablepagination: require('../Containers/TablePagination/redux').reducer,
    pagination: require('../Containers/Pagination/redux').reducer,
    dashboard: require('../Containers/Dashboard/redux').reducer,
    bank: require('../Containers/Bank/redux').reducer
    // end Ignite-Entity-Login
    // begin Ignite-Entity-Paymentpage
    // paymentpage: require('../Containers/Paymentpage/redux').reducer,
    // end Ignite-Entity-Paymentpage
    // begin Ignite-Entity-Paymentpage
    // qrcode: require('../Containers/Qrcode/redux').reducer
    // end Ignite-Entity-Paymentpage
  })
  let finalReducers = rootReducer

  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    finalReducers = persistReducer(persistConfig, rootReducer)
  }
  const store = CreateStore(finalReducers, rootSaga)
  return { store }

  // return configureStore(finalReducers, rootSaga)
}
