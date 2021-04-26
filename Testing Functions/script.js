const items =[
    {name: 'Bike',  price:101 },
    {name: 'TV',  price:10 },
    {name: 'Album',  price:90 },
    {name: 'Book',  price:150 },
    {name: 'Phone',  price:70 },
    {name: 'Toy',  price:50 }
]

const filteredItems =items.filter((item)=>{
    return item.price <=100
})

console.log(filteredItems)