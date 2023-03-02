import axios from 'axios';
import Image from 'next/image';
import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import { reset } from '../../redux/cartSlice';
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useSession } from 'next-auth/react'

export default function Cart() {
  const { data: session } = useSession()
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const amount = cart.total;
  const currency = "PLN";
  const [open, setOpen] = useState(false);
  const style = { layout: "vertical" };
  const [successMessage, setSuccessMessage] = useState(false);

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
        setOpen(!open)
        setSuccessMessage(!successMessage)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const ButtonWrapper = ({ currency, showSpinner }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={async (data, actions) => {
            const orderId = await actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              });
            return orderId;
          }}
          onApprove={async function (data, actions) {
            const details = await actions.order.capture();
            const shipping = details.purchase_units[0].shipping;
            createOrder({
              // customer: shipping.name.full_name,
              customer: session.user.name,
              customer_email: session.user.email,
              products: cart.products.map((product) => ({ ...product, product: product._id })),
              address: shipping.address.address_line_1,
              total: cart.total,
              method: 1,
            });
          }}
        />
      </>
    );
  };

  return (
    <>
      <Title>Koszyk</Title>
      <CartContainer>
        {cart.products.map(product => (
          <ProductContainer key={product._id}>
            <ImageContainer>
              <Image
                src={product.image}
                alt='TileImage'
                width='189'
                height='129'
                layout='responsive'
                priority
              />
            </ImageContainer>
            <OrderDetails>
              <h2>{product.name}</h2><br />
              <p className='price'>Cena: <b>{product.price} zł</b></p>
              <p className='quantity'>Ilość: <b>{product.quantity} szt.</b></p>
            </OrderDetails>
          </ProductContainer>
        ))}

        <hr />

        {open ? (
          <div>
          <PayPalScriptProvider
          options={{
            "client-id":
            "AXx4tBLpHU1VDDDeyTX0PQz-1VFxwwYEyMEPmrpWqq_gqb7KwiGEy7O7lcTr8Pi6xVhMs4SivEcZQteO",
            components: "buttons",
            currency: "PLN",
            "disable-funding": "credit,card,p24",
          }}
            >
              <ButtonWrapper currency={currency} showSpinner={false} />
            </PayPalScriptProvider>
          </div>
        ) : (
          <OrderTotal>
           <p><b>Razem:</b> {amount} zł</p>
           <Button onClick={() => setOpen(true)}>
             <span>Kup</span>
            </Button>
            {successMessage ? <p>Gratulacje! Zakupiłeś przedmioty.</p> : null}
        </OrderTotal>
        )}

      </CartContainer>
    </>
  )
}

const Title = styled.h2`
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.1875rem;
  text-align: center;
  color: #000000;
  margin: 0;
  position: relative;
  &::before{
    content: '»';
    color: #F17900;
    padding-right: 10px;
  }
  &::after{
    content: '«';
    color: #F17900;
    padding-left: 10px;   
  }
    @media screen and (min-width: 992px){
      font-size: 3.125rem;
      line-height: 3.5rem;
    }
`;

const CartContainer = styled.div`
  margin: 106px 78px 0 78px;
  hr{
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

const ProductContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
`;

const OrderDetails = styled.div`
  h2{
    margin: 0;
    font-size: 20px;
  }
  p{
    font-size: 1rem;
  }
`;

const ImageContainer = styled.div`
  width: 11.8125rem;
  height: 8.0625rem;
  img{
    border-radius: 7px;
  }
    @media screen and (max-width: 800px){
      width: 330px;
      height: 7.5rem;
    }
`;

const OrderTotal = styled.div`
  text-align: right;
`;

const Button = styled.button`
  width: 3.375rem;
  height: 1.0625rem;
  background: #F17900;
  border-radius: .4688rem;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  span{
    font-weight: 400;
    font-size: .625rem;
    line-height: .6875rem;
      @media screen and (min-width: 992px){
        font-size: 1.0625rem;
        line-height: 1.375rem;
      }
    }
    @media screen and (min-width: 992px){
      width: 6.25rem;
      height: 1.875rem;
      margin-top: .625rem;
      &:hover{
          background-color: #357960;
        }
    }
`;

