interface InfoProps {
  name: string
  value: number | string
}

export function Info({ name, value }: InfoProps) {
  return (
    <div className="flex justify-between mb-4 text-3xl text-white font-pixel700">
      <h3>{name}</h3>
      <h4>{value}</h4>
    </div>
  )
}
