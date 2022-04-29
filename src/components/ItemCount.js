import { useEffect, useState } from "react"

export const ItemCount = () => {
    console.log('aqui hay un render del componente')
  const [count, setCount] = useState(0)

  useEffect ( () => {
    console.log('[useEffect] el componente se monto ...')
  }, [])

  useEffect ( () => {
    console.log('[useEffect] el estado cambio ...')
  }, [count])

  const addHandler = () => {
    console.log ('se esta sumando');
    setCount(count + 1)
  }

  const resHandler = () => {
    console.log ('se esta restando');
    setCount(count - 1)
  }
  return (
    <>
      <div>cuantos ETH quieres comprar?</div>
      <button onClick={resHandler}>-</button>
      <strong>{count}</strong>
      <button onClick={addHandler}>+</button>
      </>
    )
}

export default ItemCount


//////////////////////////////////////////////////////////// ENTREGA DE COMPONENTS II ///////////////////////////////////////////////////////