import React from 'react';
import './loading.css';

const Loading = React.memo(({
    children,
    className = '',
    enabled = true,
    content,
    ...props
}) => (
    <div
        className={`loading ${enabled ? 'loading--enable' : ''} ${className}`}
        {...props}
    >
        {children}
        {
          enabled 
          && (
            <div className="loading__inner">
              {
                content 
                || (
                  <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                  </div>
                )
              }
            </div>
          )
        }
    </div>
));

export default Loading;
