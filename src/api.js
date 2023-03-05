import axios from "axios";

const endpoint = "https://api.jsonbin.io/v3/b/63b8176001a72b59f2431310"

export const imgData = async () => {
    const imgdata = await axios.get(`${endpoint}`)
    const imgresult = await imgdata.data.record.imgdata
    return imgresult
}

export const productData = async () => {
    const productdata = await axios.get(`${endpoint}`)
    const productresult = await productdata.data.record.data.product
    return productresult
}

