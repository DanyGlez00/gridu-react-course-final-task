import React from "react";
import "./TweetCard.scss";

const TweetCard = () => {
  return (
    <div className="tweet-card">
      <div className="tweet-card__left">
        <p className="tweet-card__left-initials">JS</p>
      </div>
      <div className="tweet-card__right">
        <div className="tweet-card__right-top">
          <p className="tweet-card__right-top-name">John Smith</p>
          <p className="tweet-card__right-top-username">@jsmith</p>
        </div>
        <div className="tweet-card__right-bottom">
          <p className="tweet-card__right-bottom-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;