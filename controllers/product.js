const productExample = {
    id: 1,
    name: "Nike Air Max 90",
    category: "Sneakers",
    price: 120,
    inStock: true,
    image: "nike-air-max-90.jpg"
  }

  const productsExample = [
    {
      id: 1,
      name: "Nike Air Max 90",
      category: "Sneakers",
      price: 120,
      inStock: true,
      image: "nike-air-max-90.jpg"
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      category: "Sneakers",
      price: 150,
      inStock: true,
      image: "adidas-ultraboost.jpg"
    },
    {
      id: 3,
      name: "Puma RS-X",
      category: "Casual Shoes",
      price: 100,
      inStock: false,
      image: "puma-rs-x.jpg"
    },
    {
      id: 4,
      name: "Apple MacBook Air M2",
      category: "Laptops",
      price: 999,
      inStock: true,
      image: "macbook-air-m2.jpg"
    },
    {
      id: 5,
      name: "Samsung Galaxy S23",
      category: "Smartphones",
      price: 799,
      inStock: true,
      image: "samsung-galaxy-s23.jpg"
    },
    {
      id: 6,
      name: "Sony WH-1000XM5",
      category: "Headphones",
      price: 350,
      inStock: true,
      image: "sony-wh-1000xm5.jpg"
    },
    {
      id: 7,
      name: "Logitech MX Master 3",
      category: "Accessories",
      price: 99,
      inStock: true,
      image: "logitech-mx-master-3.jpg"
    },
    {
      id: 8,
      name: "Dell XPS 15",
      category: "Laptops",
      price: 1299,
      inStock: false,
      image: "dell-xps-15.jpg"
    },
    {
      id: 9,
      name: "Bose SoundLink Revolve",
      category: "Speakers",
      price: 199,
      inStock: true,
      image: "bose-soundlink-revolve.jpg"
    },
    {
      id: 10,
      name: "PlayStation 5",
      category: "Gaming",
      price: 499,
      inStock: false,
      image: "ps5.jpg"
    }
  ];
  

  
  
const Addproduct = (req, res)=>{
    res.json({
        message: 'Products added'
    })
}

const getAllProducts = (req, res)=>{
    try {
       
        res.status(200).json({
            status:'success',
            message: 'Products fetched',
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    Addproduct,
    getAllProducts
}