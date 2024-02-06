import { initializeApp } from 'firebase/app'
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
})

const db = getFirestore(firebaseApp)
const useCollectionRef = collection(db, 'category')
const useCollectionRefTakeoutOrder = collection(db, 'takeoutOrder')
const useCollectionRefOrderOnTheTable = collection(db, 'orderOnTheTable')

export async function getMenu() {
  const data = await getDocs(useCollectionRef)
  const infoMenu = data.docs.map((doc) => doc.data())
  return infoMenu
}

interface ProductsData {
  id: number
  quantity: number
  price: number
  name: string
  img: string
}

export async function createTakeoutOrder(orderData: ProductsData[]) {
  try {
    const takeoutOrder = await addDoc(useCollectionRefTakeoutOrder, {
      takeoutOrder: orderData,
    })
    console.log('pedidos adicionados com sucesso')
  } catch (error) {
    console.log('pedidos não foram adicionados')
  }
}
interface Table {
  table: string
  request: ProductsData[]
}

export async function createOrderAtTheTable(dataTable: Table) {
  try {
    const orderOnTheTable = await addDoc(useCollectionRefOrderOnTheTable, {
      orderOnTheTable: dataTable,
    })
    console.log('pedido coletado com sucesso')
  } catch (error) {
    console.error(error)
  }
}

export async function getTicketTakeoutOrder() {
  const data = useCollectionRefTakeoutOrder
  const querySnapshot = await getDocs(data)
  const numberOfTickets = querySnapshot.size
  console.log(numberOfTickets)
  return numberOfTickets - 1
}
