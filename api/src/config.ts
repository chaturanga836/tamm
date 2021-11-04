
 const environment = () =>{

    return async ()=>{
        let env = null;
        if(process.env.NODE_ENV === "development"){
             env = await import('./../environment/environment.dev');
        }else if(process.env.NODE_ENV === "production"){
            env = await import('./../environment/environment.dev');
        }else{
            env= await import('./../environment/environment');
        }
    
        return env;
    }

}

export { environment };