// an array of object containing food product items e.g images , title , name etc.

const products = [
    { 
        id : 1 ,
        productName: 'meat pie ',
        price: '$ 3.5' ,
                       // a webpack function to get an image url
        productImage : require('./Assets/image1.png').default
     },
     
     { 
        id : 2 ,
        productName: 'suya chiken',
        price: '$ 5.5' ,
        productImage : require('./Assets/image2.png').default
     },
     { 
       id : 3 ,
        productName: 'suya chiken part',
        price: '$ 4.2' ,
        productImage :  require('./Assets/image3.png').default
     },
     {  
        id : 4 , 
        productName: 'jollof spaghetti',
        price: '$ 3.1' ,
        productImage :  require('./Assets/image4.png').default
     },
     { 
        id : 5 ,
        productName: 'suya chiken hen',
        price: '$ 2.5' ,
        productImage :  require('./Assets/image21.png').default
     },
     { 
        id : 6 ,
        productName: 'chiken hen',
        price: '$ 1.5' ,
        productImage :  require('./Assets/image6.png').default
     },
     {  
        id : 7 ,  
        productName: 'vegetables',
        price: '$ 0.59' ,
        productImage :  require('./Assets/image7.png').default
     },
     { 
       id : 8 ,
        productName: '  meat pie',
        price: '$ 2.5' ,
        productImage :  require('./Assets/image8.png').default
     },
     { 
        id : 9 ,
        productName: ' macaroni & stew',
        price: '$ 3.58' ,
        productImage :  require('./Assets/image10.png').default
     },
     { 
        id : 10 ,
        productName: 'suya chiken parts',
        price: '$ 3.5' ,
        productImage : require('./Assets/image11.png').default
     },
     { 
        id : 11 ,
        productName: 'shawarma',
        price: '$ 1.5' ,
        productImage : require('./Assets/image12.png').default
     },
     { 
        id : 12 ,
        productName: 'Burger',
        price: '$ 2.5' ,
        productImage : require('./Assets/image13.png').default
     },
     { 
        id : 13 ,
        productName: 'rice ans stew',
        price: '$ 3.8' ,
        productImage : require('./Assets/image14.png').default
     },
     { 
        id : 14 ,
        productName: 'hony biscuit',
        price: '$ 3.4' ,
        productImage : require('./Assets/image15.png').default
     },
     { 
        id : 15 ,
        productName: 'ice fish',
        price: '$ 3.56' ,
        productImage : require('./Assets/image16.png').default
     },
     { 
        id : 16 ,
        productName: 'suya ice fish',
        price: '$ 0.90' ,
        productImage : require('./Assets/image17.png').default
     },
     { 
        id : 17 ,
        productName: 'vegatables',
        price: '$ 0.33' ,
        productImage : require('./Assets/image18.png').default
     },
     { 
        id : 18 ,
        productName: 'recipe sallad ',
        price: '$ 3.78' ,
        productImage : require('./Assets/image19.png').default
     },
     { 
        id : 19 ,        
        productName: ' sallad & meat ',
        price: '$ 4.68' ,
        productImage : require('./Assets/image20.png').default
     },
     { 
        id : 20 ,        
        productName: 'chiken parts',
        price: '$ 6.80' ,
        productImage : require('./Assets/image21.png').default
     },
      
]

export default products ;