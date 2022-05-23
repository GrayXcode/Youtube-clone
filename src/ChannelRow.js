import { Avatar } from "@material-ui/core";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import React from "react";
import "./ChannelRow.css";

function ChannelRow({
  image,
  Channel,
  subs,
  noOfVideos,
  description,
  verified,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" channel={Channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {Channel} {verified && <CheckCircleOutlinedIcon />}
        </h4>
        <p>
          {subs} subscribers ♦️ {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
