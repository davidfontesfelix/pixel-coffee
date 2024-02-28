export default function CardNotLoad() {
  return (
    <ul className="mx-4">
      <li className="bg-secondary p-3 border-2 border-primary flex w-full rounded-sm">
        <div className="min-w-[90px] min-h-[90px] bg-primary animate-pulse rounded-sm"></div>
        <div className="ml-4 flex justify-between w-full rounded-sm">
          <div className="w-32 h-8 bg-primary animate-pulse rounded-sm"></div>
          <div>
            <div className="w-24 h-8 bg-primary animate-pulse rounded-sm"></div>
            <div className="w-24 h-12 bg-primary animate-pulse mt-3 rounded-sm"></div>
          </div>
        </div>
      </li>
    </ul>
  )
}
