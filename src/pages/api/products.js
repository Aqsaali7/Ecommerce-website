export default  async function  handler (req, res) {
    const products = [
      {
        id: 1,
        name: "Pizza",
        price: 190,
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSR31fO3QBoAjMTVAcvpw7xwDHDm4rk6DcsLoXciHkI89S24dnHiwlPkmQh_1RvTn-0_A&usqp=CAU",
      },
      {
        id: 2,
        name: "Garlic Cheese Pizza",
        price: 390,
        Image: "https://www.recipetineats.com/uploads/2023/05/Garlic-cheese-pizza_9.jpg",
      },
      {
        id: 3,
        name: "Pizza",
        price: 510,
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrYZfJtOqQoALgn_OU1Pfh-oBD9lWVVz8fB3HIfFTdrI0Jxi9BVyYkq_bc2MGPvjlIs6g&usqp=CAU",
      },
      {
        id: 4,
        name: "Pepperoni Pizza",
        price: 100,
        Image: "https://www.cookingclassy.com/wp-content/uploads/2014/07/pepperoni-pizza6+srgb..jpg",
      },
      {
        id: 5,
        name: "Shawarma",
        price: 220,
        Image: "https://png.pngtree.com/png-vector/20240731/ourmid/pngtree-chicken-shawarma-with-myonies-png-image_13317805.png",
      },
      {
        id: 6,
        name: "Pizza",
        price: 440,
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyQGH3GDDnoOj8RFS-7qAtmevTK2NlSbCMAg&s",
      },
    ];
  
    res.status(200).json(products);
  }
  