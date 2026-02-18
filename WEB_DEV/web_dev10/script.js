function login(email,pass,cb){
    setTimeout(() => {
        cb({userID:email,isloggedIn:true,message:"login :successfully"})
    }, 3000);


}

function getvideolist(userID,cb) {
    setTimeout(() => {
        cb(["video1","video2","video3"])
    }, 4000);
}

login("user@example.com","password123",function(userdetail) {
    console.log(userdetail);
});
getvideolist((videolist) => {
    console.log(videolist);
}); 

login("user@example.com","password",function(userdetail) {
    console.log(userdetail);
    
    getvideolist(userdetail.userID, function(videolist) {
        console.log(videolist);
          getvideolist(userdetail.userID, function(videodetails) {
        console.log(videodetails);
          })
    }); 
});