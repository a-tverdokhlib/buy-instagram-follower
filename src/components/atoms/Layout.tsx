type Props = {}

export const Layout: React.FC<Props> = ({ children }) => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    {children}
  </div>
)
