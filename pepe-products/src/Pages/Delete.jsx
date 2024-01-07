import React from 'react'

function Delete() {
    const [deleteData, setDeleteData] = React.useState({
        id: ''
    });

    async function deleteProduct() {
        let res = await fetch(`http://localhost:3500/product/${deleteData.id}`, {
            method: 'DELETE',

            headers: {
                'Content-Type': 'application/json',
            }
        });

        let data = await res.json();
        console.log(data)
        setDeleteData({
            id: ''
        })

    }
    const handleChange = (e) => {
        setDeleteData({
            name: e.target.value
        })

    }
    return (
        <>
            <form>
                {/* <input
                    name='id'
                    type='text'
                    placeholder='id'
                    value={deleteData.id}
                    onChange={handleChange}
                /> */}
                <button onClick={deleteProduct}>delete</button>
            </form>
        </>
    )
}
export default Delete