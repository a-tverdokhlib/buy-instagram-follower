type Props = {
  readonly price: number
}
export const PaymentGateways: React.VFC<Props> = (props) => {
  return (
    <div className="flex flex-col flex-wrap w-full md:p-0 ml:px-14">
      <div className="flex flex-col flex-wrap w-full md:px-16">
        <div className="mt-16 flex w-full justify-center">
          <span>
            <span className="text-white text-3xl font-bold">
              Price: {props.price}
            </span>
          </span>
        </div>
        <div className="mt-8 flex w-full justify-center p-3">
          <span>
            <span className="text-white text-base ls:text-xl md:text-2xl bg-gradient-to-r from-orange-500 to-orange-800 px-2 ls:px-8 py-5 md:px-24 md:py-7 rounded-full hover:cursor-pointer hover:px-5 hover:py-7 ls:hover:px-12 ls:hover:py-7 md:hover:px-28 md:hover:py-8 transition-all duration-100">
              Continue to Payment
            </span>
          </span>
        </div>
        <div className="mt-24 flex w-full justify-center">
          <img
            className="w-full"
            src="/img/payments.png"
            alt="Payment Gateways"
          />
        </div>
      </div>
    </div>
  )
}
