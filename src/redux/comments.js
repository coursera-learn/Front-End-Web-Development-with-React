import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        // 添加评论 action.type
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            // id 为数组中第N个评论
            comment.id = state.length;
            // 日期
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            // 传递comment进state对象里
            return state.concat(comment);

        default:
          return state;
      }
};