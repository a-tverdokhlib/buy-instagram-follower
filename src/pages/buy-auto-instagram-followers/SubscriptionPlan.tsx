type Props = {
  readonly planSelected: (any) => void
}
export const SubscriptionPlan: React.VFC<Props> = (props) => {
  return (
    <div className="flex flex-col flex-wrap w-full md:flex-row md:flex-nowrap">
      Subscription Plan
    </div>
  )
}
