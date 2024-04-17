import  axiosInstance  from "./axiosInstance";

export const getDataCart = async ( params )=>{
    try {
    const { order, sortBy, category, search, currentPage } = params
        const responce = await axiosInstance.get(`/items?page=${currentPage}&limit=6&${category}&sortBy=${sortBy}&order=${order}${search}`)
        return responce.data
    } catch (error) {
        console.log('data error')
    }
}