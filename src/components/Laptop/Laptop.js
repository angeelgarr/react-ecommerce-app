import React, {useState} from 'react';
import {connect} from 'react-redux';
import ProductImage from "../ProductImage";
import {addProductToCart, decrementProductQuantity, incrementProductQuantity} from "../../Actions"; 

import 
{
 Wrapper, 
 DetailWrapper, 
 DetailsWrapper, 
 ThumbsWrapper, 
 ThumbsWrapperHorizontal,
 Thumbs, 
 FeaturesWrapper, 
 Title, 
 FeatureTitle, 
 List, 
 Qty, 
 QtyInput, 
 Quantity, 
 Old, 
 ButtonWrapper, 
 Button, BuyWrapper} from "../ui";


const Laptop = (props) => {
    const {
            id,
            name,
            cpu,
            Screen,
            harddrive,
            battery,
            quantity,
            os,
            ram,
            gpu,
            price,
            product_dimensions,
            item_dimensions,
            imageurl
          } = props.laptop

          
          
          console.log("id:", id);
          const [itemQuantity, setItemQuantity] = useState(quantity);

          const onCart = () => {
            props.laptop.quantity = itemQuantity;
            console.log("item: ", itemQuantity)
            console.log("laptop:", props.laptop);
            props.dispatch(addProductToCart(props.laptop));
        };
          const incrementOrDecrement = (e, type) => {
            const value = itemQuantity;
            console.log(type, value);
    
            if(type === 'inc' && value < 10) {
                setItemQuantity(itemQuantity + 1);
                props.dispatch(incrementProductQuantity(id));
            }
    
    
            if(type === 'desc' && value > 1) {
                setItemQuantity(itemQuantity - 1);
                props.dispatch(decrementProductQuantity(id));
            }
    
        };
        const handleQuantityChange = (e) => {
           const value = e.target.value;
            console.log(value)
    
            if(value > 0 && value <= 10) {
                setItemQuantity(value);
                props.dispatch(addProductToCart(id));
            } 
        }

        
      
    return (
    <Wrapper>
      <DetailWrapper>
          <ThumbsWrapper>
              {imageurl.map((img) =>(<Thumbs src={img}/> ))}
          </ThumbsWrapper>
          
          <ProductImage image={imageurl[0]}/>
          <ThumbsWrapperHorizontal>
              {imageurl.map((img) =>(<Thumbs src={img}/> ))}
          </ThumbsWrapperHorizontal>
          
             <DetailsWrapper>
                <FeaturesWrapper>
                  <Title data-testid="name">{name}</Title>
                  <FeatureTitle>Key Features</FeatureTitle>
                  
                    <List>
                      <ul>
                        <li data-testid="cpu">
                          {cpu}
                        </li>
                        <li  data-testid="screen">
                          {Screen}
                        </li>    
                        <li data-testid="harddrive">
                         {harddrive}
                        </li>
                        <li data-testid="battery">
                          {battery}
                        </li>
                    
                        <li data-testid="os">
                        {os}
                        </li>
                        <li data-testid="ram">
                        {ram}
                        </li>
                        <li data-testid="gpu">
                        {gpu}
                        </li>
                  </ul>
                    </List>
                  
                </FeaturesWrapper>
                <Quantity>

                    <Title>Quantity:</Title>
                    <QtyInput onClick={(e) => {incrementOrDecrement(e, 'inc')}}>+</QtyInput>
                          <Qty onChange={handleQuantityChange}
                                type="number" value={itemQuantity} title="Qty"/>
                    <QtyInput onClick={(e) => {incrementOrDecrement(e, 'desc')}}>-</QtyInput>
                </Quantity>
                <BuyWrapper>
                <Title>&#8358;{price}</Title>
                <Old>&#8358;{price}</Old>
                    <ButtonWrapper><Button bcolor="#fed700"  padding="0.7rem 2.9rem">Buy</Button></ButtonWrapper>
                    <ButtonWrapper><Button  onClick={onCart} bcolor="#ebebeb" padding="0.7rem 1.7rem">Add To Cart</Button></ButtonWrapper>   
                </BuyWrapper>
                      
            </DetailsWrapper>
    </DetailWrapper>
   
    </Wrapper>
    )
}

export default connect()(Laptop) 
