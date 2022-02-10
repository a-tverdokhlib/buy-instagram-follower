type Props = {
  readonly value: number
  readonly color: string
  readonly barColor: string
}

import { Range } from 'react-range'

export const Slider: React.VFC<Props> = ({ value, color, barColor }) => {
  const valueChange = () => {}

  return (
    <Range
      step={0.1}
      min={0}
      max={100}
      values={[value]}
      onChange={(values) => valueChange}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: '5px',
            width: '100%',
            backgroundColor: barColor,
            borderRadius: '3px',
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: '0.9rem',
            width: '0.9rem',
            borderRadius: '7px',
            backgroundColor: color,
          }}
        />
      )}
    />
  )
}
