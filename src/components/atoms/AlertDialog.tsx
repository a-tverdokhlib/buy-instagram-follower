import Button from '@/components/atoms/Button'

import Dialog from './BasicDialog'
interface Props {
  title: string
  children: React.ReactNode
  open: boolean
  onClose: Function
}
export default function Confirm(props: Props) {
  const { open, onClose, title, children } = props
  if (!open) {
    return <></>
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <h2 className="text-xl text-black">{title}</h2>
      <div className="py-5 text-black">{children}</div>
      <div className="flex justify-end">
        <div className="p-1">
          <Button
            className="bg-blue-600 hover:bg-blue-900"
            onClick={() => {
              onClose()
            }}
          >
            OK
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
