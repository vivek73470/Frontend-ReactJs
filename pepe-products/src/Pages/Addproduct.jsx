import React from 'react'

function Addproduct() {
  const [data, setData] = React.useState({
    id: '',
    title: '',
    price: '',
    description: '',
    category: '',
    image: ''
  })

  async function addproduct() {
    let res = await fetch(`http://localhost:3500/product`, {
      method: 'POST',

      body: JSON.stringify(data),

      headers: {
        'Content-Type': 'application/json',
      },


    });

    let dat = await res.json();
    console.log(dat);
    setData({
      id: '',
      title: '',
      price: '',
      description: '',
      category: '',
      image: ''
    }
    )

  }

  const handleChange = (e) => {

    setData((prevdata) => ({
      ...prevdata,
      [e.target.name]: e.target.value
    }))

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(data)
  }

  return (
    <>
      <div className="container">
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit}>
          <input
            name='id'
            type="text"
            id="id"
            placeholder="id"
            value={data.id}
            onChange={handleChange}
          />
          <br />
          <input
            name='title'
            type="text"
            id="title"
            placeholder="title"
            value={data.title}
            onChange={handleChange}
          />
          <br />
          <input
            name='price'
            type="text"
            id="title"
            placeholder="price"
            value={data.price}
            onChange={handleChange}
          />
          <br />
          <input
            name='description'
            type="text"
            id="author"
            placeholder="description"
            value={data.description}
            onChange={handleChange}
          />
          <br />
          <input
            name='category'
            type="text"
            id="author"
            placeholder="category"
            value={data.category}
            onChange={handleChange}
          />
          <br />
          <input
            name='image'
            type="text"
            id="image"
            placeholder="image"
            value={data.image}
            onChange={handleChange}
          />
          <br />

          <button onClick={addproduct}>submit</button>
        </form>
      </div>

    </>
  )
}

export default Addproduct