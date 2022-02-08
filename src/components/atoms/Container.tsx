type Props = {}

export const Container: React.FC<Props> = ({ children }) => (
  <div>
    <div
      style={{
        padding: '0 20px',
        maxWidth: '1360px',
        margin: '0 auto',
      }}
    >
      {children}
    </div>
  </div>
)
