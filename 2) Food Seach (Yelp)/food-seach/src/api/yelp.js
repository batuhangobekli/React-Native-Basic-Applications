import axios from 'axios'

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses/",
    headers:{
        Authorization: 'Bearer xiHGdJEnzFoC2Mh2hGcMWsQNdvES8JP9KcZwnYF_XwKDiXsPul1CgUysvhvbzKISyuTkf7eNAtQcCB1MJbNAdF7cT-MZt9H6f4vl_gZfHJRwGvL8POVuKjC5mdfDXnYx'
    }
});

