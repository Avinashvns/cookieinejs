class StudentController{

    // Set Cookie
    static set_cookie=(req,res)=>{
        // Cookie set
        res.cookie("username", "Varanasi");
        res.send("Cookie Set ....");
    }

    // Get Cookie
    static get_cookie=(req,res)=>{
        // Cookie get on console before set then get
        console.log(req.cookies);
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