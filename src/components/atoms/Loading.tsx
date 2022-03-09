export const Loading: React.VFC = () => {
  return (
    <div className="flex w-16 h-16 items-center justify-center">
      <svg
        className="absolute rotating h-10 w-10 text-red-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {' '}
        <circle cx="12" cy="12" r="2" />{' '}
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82" />
      </svg>
      <svg
        className="absolute reverse-rotating h-16 w-16 text-red-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {' '}
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82" />
      </svg>
    </div>
  )
}
