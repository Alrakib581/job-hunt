//Add data to local Storage
const addToDb = (id)=>{
    let jobCard = {}
    //get previous data from l db
    const storeCard = localStorage.getItem('job-card')
    if(storeCard){
        jobCard = JSON.parse(storeCard) 
    }
    // add quantity
    const quantity = jobCard[id]
    if(quantity){
        const newQuantity = quantity + 1; 
        jobCard[id] = newQuantity
    }
    else{
        jobCard[id] = 1
    }
    localStorage.setItem('job-card', JSON.stringify(jobCard))

}

const getToDb = ()=>{
    let jobCard = {}
    const storeCard = localStorage.getItem('job-card')
    if(storeCard){
        jobCard = JSON.parse(storeCard) 
    }
    return jobCard;

}
export {addToDb, getToDb}


