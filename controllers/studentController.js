class StudentController{

    // Set Cookie
    static set_cookie=(req,res)=>{
        // Session Cookie set
        res.cookie("username", "Varanasi");
        res.cookie("shop", '5');
        // Persistent Cookie set
        res.cookie("country", "India", {maxAge:30000});  // 30 second
        
        res.send("Cookie Set ....");
    }

    // Get Cookie
    static get_cookie=(req,res)=>{
        // Cookie get on console before set then get
        console.log(req.cookies);

        // get more cookie value 
        console.log(req.cookies.username);
        console.log(req.cookies.shop);

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