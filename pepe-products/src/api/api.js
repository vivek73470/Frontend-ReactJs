
const BASE_URL = process.env.REACT_APP_BASE_URL;

// mobile cover api
export const getData=async()=> {
    try {

        let res = await fetch(`${BASE_URL}/mobiles/`);
        let data = await res.json();
        return data
        }
    catch (err) {
        console.log(err);
    }
}

// women products

 export const  getWomenData =async() =>{
    try {
        let res = await fetch(`${BASE_URL}/womensdata/`);
        let data = await res.json();
      return data
    }
    catch (err) {
        console.log(err);
    }
}

// mens products
export const getMenData =async()=> {
    try {
        let res = await fetch(`${BASE_URL}/mensdata/`);
        let data = await res.json();
       return data
    }
    catch (err) {
        console.log(err);
    }
}

