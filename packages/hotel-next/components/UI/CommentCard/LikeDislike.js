import React, { useState, Fragment } from 'react';
import { Tooltip } from 'antd';
import {
  LikeOutlined,
  LikeFilled,
  DislikeOutlined,
  DislikeFilled,
} from '@ant-design/icons';

const LikeDislike = () => {
  const [state, setState] = useState({
    likes: 0,
    dislikes: 0,
    action: null,
  });

  const handleLike = () => {
    setState({
      ...state,
      likes: 1,
      dislikes: 0,
      action: 'liked',
    });
  };

  const handleDisLike = () => {
    setState({
      ...state,
      likes: 0,
      dislikes: 1,
      action: 'disliked',
    });
  };

  return (
    <Fragment>
      <span className="comment-helpful">
        <Tooltip title="Like">
          {state.action === 'liked' ? (
            <LikeFilled onClick={handleLike} />
          ) : (
            <LikeOutlined onClick={handleLike} />
          )}
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{state.likes}</span>
      </span>
      <span className="comment-report">
        <Tooltip title="Dislike">
          {state.action === 'disliked' ? (
            <DislikeFilled onClick={handleDisLike} />
          ) : (
            <DislikeOutlined onClick={handleDisLike} />
          )}
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{state.dislikes}</span>
      </span>
    </Fragment>
  );
};

export default LikeDislike;
