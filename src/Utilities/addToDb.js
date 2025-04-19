const getStoredBook = () =>{

    const storedBookSTR = localStorage.getItem('readlist');
    if(storedBookSTR) {
        return JSON.parse(storedBookSTR);
    }
    else{
        return [];
    }

}

const addToDb = (id) => {
    const storedBook  = getStoredBook();
    if(storedBook.includes(id)){
        alert('Already added to readlist')
    }
    else{
        storedBook.push(id);
        localStorage.setItem('readlist', JSON.stringify(storedBook));
        console.log(storedBook);
        
    }
}

export {addToDb,getStoredBook};