type Props = {
  readonly className?: string
}

export const Card: React.FC<Props> = ({ children, className }) => (
  <div className={className}>{children}</div>
)
