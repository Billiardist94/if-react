import React from 'react';
import './OffersBlock.css';

const OffersBlock = () => {
  return (
    <section className="offers-block">
      <div className="container">
        <div className="offers-block-inner">
          <div className="offers-block-header">
            <h3 className="h3-text">What do we offer</h3>
          </div>
          <div className="offers-cards">
            <div className="offers-item col-3 col-sm-4 col-md-6">
              <div className="offers-icon">
                <svg
                  width="76"
                  height="92"
                  viewBox="0 0 76 92"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M67.1667 54.3333V71H58.8333V54.3333H67.1667ZM17.1667 54.3333V71H13C10.7083 71 8.83333 69.125 8.83333 66.8333V54.3333H17.1667ZM38 0.166667C17.2917 0.166667 0.5 16.9583 0.5 37.6667V66.8333C0.5 73.75 6.08333 79.3333 13 79.3333H25.5V46H8.83333V37.6667C8.83333 21.5417 21.875 8.5 38 8.5C54.125 8.5 67.1667 21.5417 67.1667 37.6667V46H50.5V79.3333H67.1667V83.5H38V91.8333H63C69.9167 91.8333 75.5 86.25 75.5 79.3333V37.6667C75.5 16.9583 58.7083 0.166667 38 0.166667Z"
                    fill="#3077C6"
                  />
                </svg>
              </div>
              <div className="offers-text">Support 24/7</div>
            </div>
            <div className="offers-item col-3 col-sm-4 col-md-6">
              <div className="offers-icon">
                <svg
                  width="84"
                  height="84"
                  viewBox="0 0 84 84"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M54.5002 8.6667v29.1666H13.5418l-4.875 4.875V8.6667h45.8334zM58.6668.3333H4.5002C2.2085.3333.3335 2.2083.3335 4.5v58.3333l16.6667-16.6666h41.6666c2.2917 0 4.1667-1.875 4.1667-4.1667V4.5c0-2.2917-1.875-4.1667-4.1667-4.1667zM79.5002 17h-8.3334v37.5H17.0002v8.3333c0 2.2917 1.875 4.1667 4.1666 4.1667h45.8334l16.6666 16.6667v-62.5c0-2.2917-1.875-4.1667-4.1666-4.1667z"
                    fill="#3077C6"
                  />
                </svg>
              </div>
              <div className="offers-text">Communicate directly</div>
            </div>
            <div className="offers-item col-3 col-sm-4 col-md-6">
              <div className="offers-icon">
                <svg
                  width="100"
                  height="68"
                  viewBox="0 0 100 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 9h75V.6667h-75c-4.5834 0-8.3334 3.75-8.3334 8.3333v45.8333H0v12.5h58.3333v-12.5H16.6667V9zm79.1666 8.3333h-25c-2.2916 0-4.1666 1.875-4.1666 4.1667v41.6667c0 2.2916 1.875 4.1666 4.1666 4.1666h25c2.2917 0 4.1667-1.875 4.1667-4.1666V21.5c0-2.2917-1.875-4.1667-4.1667-4.1667zm-4.1666 37.5H75V25.6667h16.6667v29.1666z"
                    fill="#3077C6"
                  />
                </svg>
              </div>
              <div className="offers-text">Book online</div>
            </div>
            <div className="offers-item col-3 col-sm-4 col-md-6">
              <div className="offers-icon">
                <svg
                  width="92"
                  height="84"
                  viewBox="0 0 92 84"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M83.4998 29.3333H57.2082l3.9583-19.0416.125-1.3334c0-1.7083-.7083-3.2916-1.8333-4.4166L55.0415.1667 27.6248 27.625c-1.5416 1.5-2.4583 3.5833-2.4583 5.875v41.6667c0 4.5833 3.75 8.3333 8.3333 8.3333h37.5c3.4584 0 6.4167-2.0833 7.6667-5.0833l12.5833-29.375c.375-.9584.5834-1.9584.5834-3.0417v-8.3333c0-4.5834-3.75-8.3334-8.3334-8.3334zm0 16.6667l-12.5 29.1667h-37.5V33.5l18.0834-18.0833-4.625 22.25h36.5416V46zM.1665 33.5h16.6667v50H.1665v-50z"
                    fill="#3077C6"
                  />
                </svg>
              </div>
              <div className="offers-text">Real guest reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersBlock;
