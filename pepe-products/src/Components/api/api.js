
// mobile cover api
export const getData=async()=> {
    try {

        let res = await fetch(`http://localhost:3500/mobiles/`);
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
        let res = await fetch(`http://localhost:3500/womensdata/`);
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
        let res = await fetch(`http://localhost:3500/mensdata/`);
        let data = await res.json();
       return data
    }
    catch (err) {
        console.log(err);
    }
}

