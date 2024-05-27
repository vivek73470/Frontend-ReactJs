
// mobile cover api
export const getData = async () => {
    try {

        let res = await fetch(`server-bice-three.vercel.app
        /mobiles/`);
        let data = await res.json();
        return data
    }
    catch (err) {
        console.log(err);
    }
}

// women products

export const getWomenData = async () => {
    try {
        let res = await fetch(`server-bice-three.vercel.app
        /womensdata/`);
        let data = await res.json();
        return data
    }
    catch (err) {
        console.log(err);
    }
}

// mens products
export const getMenData = async () => {
    try {
        let res = await fetch(`server-bice-three.vercel.app
        /mensdata/`);
        let data = await res.json();
        return data
    }
    catch (err) {
        console.log(err);
    }
}

