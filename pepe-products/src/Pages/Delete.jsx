import React from 'react'

function Delete() {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const [deleteData, setDeleteData] = React.useState({
        id: ''
    });

    async function deleteProduct() {
        let res = await fetch(`${BASE_URL}/product/${deleteData.id}`, {
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