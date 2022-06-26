import React from "react"
import YouTube from "react-youtube"
import { Content, Wrapper } from "./YouTube.styles"

type VideoProps = {
  videoId: string
}

const Video: React.FC<VideoProps> = ({ videoId }) => {
  const opts = {
    height: "500",
    width: "100%",
    position: "absolute",
    playerVars: {
      autoplay: 1,
    },
  }

  return(
    <Wrapper>
      <Content>
        <YouTube
          opts={opts}
          videoId={videoId}
        />
      </Content>
    </Wrapper>
  )
}

export default Video