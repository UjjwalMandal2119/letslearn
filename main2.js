const allusers=[
    {firstName: "Ujjwal", 
        gender: "Male",
       metadata: {
        age: 24,
        address: ""
       }
    },
    {
        firstName:"Ramesh",
        gender:"Male"
    },
        {
            firstName:"Roma",
            gender:"Female"
        }
]
for(let i=0; i<allusers.length; i++){
if(allusers[i]["gender"]=="Male"){
    console.log(allusers[i]["firstName"]);
}
}
