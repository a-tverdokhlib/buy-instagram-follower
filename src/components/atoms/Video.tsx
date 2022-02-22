type Props = {
  readonly href: string
}
import YouTube from 'react-youtube'

export const Video: React.VFC<Props> = (props) => {
  const options = {
    height: 'auto',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      controls: 0,
    },
  } as const

  return (
    <div className="text-white text-center">
      <YouTube videoId="mcHNUoAa05M" opts={options} />
    </div>
  )
}
