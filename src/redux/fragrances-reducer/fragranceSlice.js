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
        name: 'Odh Intense',
        imageUrl: 'https://coswin.pk/cdn/shop/files/Oud-intense-perfume-2_fd64b3a2-b533-40de-a24d-d4fc7b97f85c.webp?v=1697387629',
        price: 19.99,
      },
      {
        id: 3,
        name: 'Aqua De Gio',
        imageUrl: 'https://d1mqafote9yg5m.cloudfront.net/sites/files/beautyfresh/images/products/202311/800xAUTO/37.png',
        price: 29.99,
      },
      {
        id: 4,
        name: 'Odh Noir Intense',
        imageUrl: 'https://senteursdailleurs.com/img/cms/fragrance%20du%20bois-2.png',
        price: 29.99,
      },
        {
        id: 5,
        name: 'Aventus Creed',
        imageUrl: 'https://static3.webx.pk/files/8079/Images/a8f274be-e45a-44a9-9792-646e48908319-8079-0-281023083410237.jpg',
        price: 15.99,
      },
      {
        id: 6,
        name: 'Dunhil Desire',
        imageUrl: 'https://rukminim2.flixcart.com/image/850/1000/jyhl1u80/perfume/y/c/q/150-desire-blue-eau-de-toilette-dunhill-men-original-imafgpp6ffbst4f8.jpeg?q=90&crop=false',
        price: 20.99,
      },
      {
        id: 7,
        name: 'One Men Show',
        imageUrl: 'https://alsharifbeaute.com/cdn/shop/files/Untitleddesign_45.jpg?v=1689515081',
        price: 20.99,
      },
      {
        id: 8,
        name: 'LaCoste',
        imageUrl: 'https://cdn.salla.sa/WEYON/ldsArq43YlpmsvxkQmjOrn61OyQrxSkCKmiqULpM.jpg',
        price: 12.99,
      },
      {
        id: 9,
        name: 'Azaro-Wanted',
        imageUrl: 'https://static-01.daraz.pk/p/3b80dc98a42e17a506a619f65c5e8961.jpg',
        price: 16.99,
      }
    ],
   
  }
  export const fragranceSlice = createSlice({
    name: 'fragrance',
    initialState,
    
  })
  export default fragranceSlice.reducer
