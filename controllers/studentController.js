class StudentController{

    // Set Cookie
    static set_cookie=(req,res)=>{
        res.send("Cookie Set ....");
    }

    // Get Cookie
    static get_cookie=(req,res)=>{
        res.send("Cookie Get ....");
    }

    // Delete Cookie
    static delete_cookie=(req,res)=>{
        res.send("Cookie Deleted ....");
    }

}


// export controllers
export default StudentController

// or 
// export{studentController}