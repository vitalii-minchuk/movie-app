import React from "react"
import YouTube from "react-youtube"
import { Content, Wrapper } from "./YouTube.styles"

const Video = ({ videoId }) => {
  const opts = {
    height: "500",
    width: "100%",
    position: "ablolute",
    playerVars: {
      autoplay: 1,
    },
  }

  return(
    <Wrapper>
      <Content>
        <YouTube
          containerClassName={Content}
          opts={opts}
          videoId={videoId}
        />
      </Content>
    </Wrapper>
  )
}

export default Video