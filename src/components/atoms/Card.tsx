type Props = {
  readonly minWidth?: string
  readonly minHeight?: string
  readonly padding?: string
}

export const Card: React.FC<Props> = ({
  children,
  minWidth,
  minHeight,
  padding,
}) => (
  <div
    style={{
      padding: padding,
      minWidth: minWidth,
      minHeight: minHeight,
    }}
  >
    {children}
  </div>
)
