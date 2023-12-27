import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getAllToDo = (setToDo) =>{
    axios.get(baseUrl)
    .then(({data})=>{
        console.log('data --->', data)
        setToDo(data)
    })
    .catch((err) => console.log(err));
}

const addToDo = (text, subject, deadline, setSubject, setDeadline, setText, setToDo) =>{
    axios
    .post(`${baseUrl}/save`,{text, subject, deadline})
    .then((data)=>{
        console.log(data);
        setText("")
        setDeadline("")
        setSubject("")
        getAllToDo(setToDo)
    })
    .catch((err)=>console.log(err))
}

const updateToDo = (toDoId, text ,subject, deadline, setText, setSubject, setDeadline, setToDo, setIsUpdating) =>{
    axios
    .post(`${baseUrl}/update`,{_id: toDoId, text, subject, deadline})
    .then((data)=>{
        console.log(data);
        setText("")
        setDeadline("")
        setSubject("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((err)=>console.log(err))
}

const deleteToDo = (_id, setToDo) =>{
    axios
    .post(`${baseUrl}/delete`,{_id})
    .then((data)=>{
        getAllToDo(setToDo)
    })
    .catch((err)=>console.log(err))
}

export {getAllToDo, addToDo, updateToDo, deleteToDo}