import { Cover } from '@/components/cover'
import { getTicketTakeoutOrder } from '@/service/firebase/firebase-service'
import { useEffect, useState } from 'react'

export function TravelRequest() {
  const [getTicket, setTicketNumber] = useState<number>()

  useEffect(() => {
    const fetchTicketNumber = async () => {
      const getNumberOfTicket = await getTicketTakeoutOrder()
      setTicketNumber(getNumberOfTicket)
    }
    fetchTicketNumber()
  }, [])
  return (
    <section>
      <Cover condition>
        <div className="bg-primary text-center w-full px-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-3xl">O numero do seu pedido é:</h2>
          <h3
            className="font-pixel700"
            style={{ fontSize: '200px', lineHeight: '80%' }}
          >
            {getTicket}
          </h3>
        </div>
      </Cover>
    </section>
  )
}
