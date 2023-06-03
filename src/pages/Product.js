import React, { useEffect } from "react";
import { Link  } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { productDetailAction } from "../action/productAction";
import { useParams , useNavigate  } from "react-router-dom";
const Product = () => {
  const {id} = useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const productDetail = useSelector((state) => state.productDetail);
  const { loading, product } = productDetail;

 useEffect(() => {
     dispatch(productDetailAction(id))
  }, [dispatch , id]);
  const addToCartHandler = () => {
   navigate(`/Cart/${id}`)
  };

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        بازگشت به صفحه ی اصلی
      </Link>

      {loading ? (
        <h6>در حال دریافت محصول...</h6>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>{product.price}</ListGroup.Item>
              <ListGroup.Item>{product.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  onClick={addToCartHandler}
                >
                  افزودن به سبد خرید
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Product;
