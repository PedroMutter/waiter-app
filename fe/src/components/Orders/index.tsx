import { Order } from '../../types/Order'
import { OrdersBoard } from '../OrdersBoard'
import { Container } from './styles'

const orders: Order[] = [
  {
    '_id': '637430c4a4dc6f400c99024b',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668556013703-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '637430c4a4dc6f400c99024c'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668558911606-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '637430c4a4dc6f400c99024d'
      }
    ]
  }
]

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕒"
        title="Fila de Espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container>
  )
}
