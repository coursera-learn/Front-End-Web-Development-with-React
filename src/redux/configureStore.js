import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        // 把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore。
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        // 添加 thunk和logger 中间件
        applyMiddleware(thunk, logger)
    );

    return store;
}