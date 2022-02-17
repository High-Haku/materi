import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function ProductItem({ nama, harga }) {
  const [tax, setTax] = useState(0.02)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log(`tes counter ${counter}`)
  }, [counter])

  const handleCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <div onClick={handleCounter}>
      <h3>{nama}</h3>
      <p>{harga + (harga * tax)}</p>
      <hr />
    </div>
  )
}

ProductItem.defaultProps = {
  harga: 2_000
}

ProductItem.propTypes = {
  nama: PropTypes.string,
  harga: PropTypes.number
}

export default ProductItem