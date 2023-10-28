import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemListContainer = ({Producto, Precio, Imagen}) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Imagen} />
      <Card.Body>
        <Card.Title>{Producto}</Card.Title>
        <Card.Text>
          Precio {Precio}
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ItemListContainer