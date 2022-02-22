type Props = {
  readonly href: string
}
import YouTube from 'react-youtube'

export const Video: React.VFC<Props> = (props) => {
  const options = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      controls: 0,
    },
  } as const

  return (
    <div className="flex text-white text-center md:p-16 p-2 video-container items-center justify-center">
      <YouTube videoId="mcHNUoAa05M" opts={options} />
    </div>
  )
}
