import axios from 'axios';

export class HttpService{
    constructor(){
        this.country = "https://restcountries.com/v3.1/all";
    }
    getCountry(){
        let response = axios.get(this.country)   
        return response;
    }
    getCountryName(name, type){
        let response = axios.get(`https://restcountries.com/v3.1/${type}/${name}`)
        return response;
    }
    // getCategoryById(id){
    //     let response = axios.get(`${this.categoriesUrl}/${id}`)  
    //     return response;
    // }
    // postCategory(cat){
    //     let response = axios.post(this.categoriesUrl,cat,{
    //         headers:{
    //             'Content-Type':'application/json', 
    //         }
    //     })  
    //     return response;
    // }
    // putCategories(id,cat){
    //     let response = axios.put(`${this.categoriesUrl}/${id}`,cat,{
    //         headers:{
    //             'Content-Type':'application/json', 
    //         }
    //     })  
    //     return response;
    // }
    // deleteCategory(id){
    //     let response = axios.delete(`${this.categoriesUrl}/${id}`);
    //     return response
    // }

}