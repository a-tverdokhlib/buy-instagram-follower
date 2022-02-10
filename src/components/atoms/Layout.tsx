type Props = {
  readonly minHeight: number
}

export const Layout: React.FC<Props> = ({ children, minHeight }) => (
  <div
    style={{
      minHeight: `${minHeight}px`,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {children}
  </div>
)
