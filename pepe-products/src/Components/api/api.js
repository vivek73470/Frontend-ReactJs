
// mobile cover api
export const getData=async(id="null")=> {
    try {
        if(id=="null"){
        let res = await fetch(`http://localhost:3500/mobiles/`);
        let data = await res.json();
        return data
        }else{
            let res = await fetch(`http://localhost:3500/mobiles/${id}`);
            let data = await res.json();
            return data
        }
     
    }
    catch (err) {
        console.log(err);
    }
}

// mens products api

