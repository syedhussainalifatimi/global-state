import { createSlice } from "@reduxjs/toolkit";
const initialState = {
      fragrance: [
      {
        id: 1,
        name: 'Lumira Desert Night',
        imageUrl: 'https://www.floralink.com.au/cdn/shop/products/Perfume_0942_800x.jpg?v=1632466084',
        price: 10.99,
      },
      {
        id: 2,
        name: 'Product 2',
        imageUrl: 'url_to_image2',
        price: 19.99,
      },
      {
        id: 3,
        name: 'Product 3',
        imageUrl: 'url_to_image3',
        price: 29.99,
      }
    ],
   
  }
  export const fragranceSlice = createSlice({
    name: 'fragrance',
    initialState,
    
  })
  export default fragranceSlice.reducer
