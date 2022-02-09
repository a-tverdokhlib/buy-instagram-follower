type Props = {}

export const Layout: React.FC<Props> = ({ children }) => (
  <div style={{ minHeight: '530px', display: 'flex', flexDirection: 'column' }}>
    {children}
  </div>
)
