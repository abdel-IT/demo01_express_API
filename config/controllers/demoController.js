const people =[
    { id:1, firstName:'Zaza', lastname: 'Vaderquack'},
    { id:2,firstName:'Riri', lastname: 'Duck'}

];
export const getAll=(req,res)=>{

    res.status(200).json(people);
};
export const add=(req,res)=>{

    //const data=res.body;
    const nexId = Math.max(people.map(p => p.id))+1;
    people.push({id: nexId, ...req.body });

    res.sendStatus(204);
}
export const getOne=(req,res) =>{
    const id =req.params.id;
    const data =people.find(p=> p.id ===id);
    if(data){ 
        res.send(200).json(data)
    }
    else{
        res.sendStatus(404);
    }
    deleteOne =(req,res)=>{
        
    }


}