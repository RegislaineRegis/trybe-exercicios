const order = {
  name: 'Luiz Silva',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 50,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  return `Olá! ${order.order.delivery['deliveryPerson']} , entrega para: ${order.name}, Telefone: ${order['phoneNumber']}, ${order.address.street}, ${order.address['number']}, ${order.address['apartment']}`};

console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  return `Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)[0]} e ${order.order.drinks.coke.type} é R$ ${order.payment.total}`;

}

console.log(orderModifier(order));