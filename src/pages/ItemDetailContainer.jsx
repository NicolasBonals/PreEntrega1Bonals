import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import { useGetProductById } from '../hooks/useProducts'; 


export const ItemDetailContainer = () => {
  
  const { productId } = useParams();
  const {productData} = useGetProductById(productId);

    return (
        <div style={{display:"flex", width:"100vw", flexWrap:"wrap", fontFamily: "Georgia", fontWeight: "lighter", fontSize: "15px", color: "darkblue"}}>
        <Card key={productData.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={productData.thumbnail} />
            <Card.Body>
                <Card.Title>{productData.title}</Card.Title>
                <Card.Text>
                    {productData.description}
                </Card.Text>
                    <div>{productData.price}</div>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </div>
  )
}

export default ItemDetailContainer