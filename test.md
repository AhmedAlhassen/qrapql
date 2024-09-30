query {
  getAllProducts {
    id
    name
    description
    price
  }
}

query {
  getAllProducts {
    name
    price
  }
}

query {
  getProductById(id: "1") {
    id
    name
    description
    price
  }
}

query {
  getProductsByName(name: "Product A") {
    id
    name
    description
    price
  }
}

mutation {
  updateProduct(id: "1", name: "New Product Name", price: 39.99) {
    id
    name
    description
    price
  }
}

mutation {
  createProduct(name: "New Product", description: "Description of the new product", price: 49.99) {
    id
    name
    description
    price
  }
}

mutation {
  deleteProduct(id: "2")
}