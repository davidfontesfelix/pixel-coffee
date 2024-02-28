import { Cover } from '@/components/cover'
import useSWR from 'swr'

interface Data {
  ticketNumber: number
}

export function TravelRequest() {
  const fetcher = (url: string | URL | Request) =>
    fetch(url).then((res) => res.json())

  const { data } = useSWR<Data>(
    'https://pixel-coffee-api.vercel.app/menu/takeout/ticket',
    fetcher,
  )

  return (
    <section>
      <Cover condition>
        <div className="bg-primary text-center w-full px-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-3xl">Fila para pegar o seu pedido:</h2>
          <h3
            className="font-pixel700"
            style={{ fontSize: '200px', lineHeight: '80%' }}
          >
            {data && data.ticketNumber}
          </h3>
        </div>
      </Cover>
    </section>
  )
}
