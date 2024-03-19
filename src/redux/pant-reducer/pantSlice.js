import { createSlice } from "@reduxjs/toolkit";
const initialState = {
      pants: [
      {
        id: 1,
        name: 'Lycra Pant',
        imageUrl: 'https://img0.junaroad.com/uiproducts/19907565/zoom_0-1690386795.jpg',
        price: 10.99,
      },
      {
        id: 2,
        name: 'Mens Lee 1',
        imageUrl: 'https://images.stylight.net/image/upload/t_web_product_330x440max_nobg/q_auto:eco,f_auto/jn6f3dqdjhz7usf5wxfx.webp',
        price: 19.99,
      },
      {
        id: 3,
        name: 'Cargo Six Pockets',
        imageUrl: 'https://i.ebayimg.com/images/g/VE4AAOSwQilhBxMZ/s-l1200.jpg',
        price: 29.99,
      },
      {
        id: 4,
        name: 'Traditional Japanese Trousers',
        imageUrl: 'https://m.media-amazon.com/images/I/51kahcbSSPL._AC_UF1000,1000_QL80_.jpg',
        price: 29.99,
      },
        {
        id: 5,
        name: 'Presidio Thunder Grey',
        imageUrl: 'https://shop.bluffworks.com/cdn/shop/products/PresidioPant_ThunderGrey_02_676ca6e2-1582-4129-b0dd-9231920752d4.jpg?v=1686662327',
        price: 15.99,
      },
      {
        id: 6,
        name: 'Suit Pant',
        imageUrl: 'https://dynamic.zacdn.com/VPuRs9RJcTyfOWIVdNVfLMv-Nn8=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/g2000-0535-5806103-1.jpg',
        price: 20.99,
      },
      {
        id: 7,
        name: 'Slim Fit Stretch',
        imageUrl: 'https://www.tiptop.ca/cdn/shop/products/TT-5313-23-6150_charcoal_d6807d34-e5f7-4d13-95a1-98d43263c21d_1800x.jpg?v=1654707775',
        price: 20.99,
      },
      {
        id: 8,
        name: 'Relaxed Dress Pant',
        imageUrl: 'https://lh3.googleusercontent.com/proxy/apdv_76KhHdaFe40GpOGShdW1tPowgZOKiTit7kvICeAw6PQD-1mzabuQAGhcqGnRCKnBFj584ipSCHvAntESqmQwJ_CzfkUinmgy9tD-sfbNL87TQ8RUet7EcA5ZrN9dXhk3sDpszld-GmQMPP2S7ugG-Fk7e_0oRY15vxA2cb7UeyD9i7sWR_6293DuhvwSQw7OngNg_9p2aN_jVaLvusU',
        price: 12.99,
      },
      {
        id: 9,
        name: 'Black Wool Side Dress Pant',
        imageUrl: 'https://cdn2.propercloth.com/pic_tccp/20686_162a198206dde3f10f26d60611a8f691_size6.jpg',
        price: 16.99,
      }
    ],
   
  }
  export const pantsSlice = createSlice({
    name: 'pants',
    initialState,
    
  })
  export default pantsSlice.reducer
