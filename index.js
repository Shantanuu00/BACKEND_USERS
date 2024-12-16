const express= require("express");
const cors = require("cors");
const app=express();
app.use(cors());
app.use(express.json());
const users=[{
    id: 1,
    username: 'octocat',
    name: 'The Octocat',
    repoCount: 8,
    location: 'San Francisco',
  },
  {
    id: 2,
    username: 'torvalds',
    name: 'Linus Torvalds',
    repoCount: 25,
    location: 'Portland',
  },
  {
    id: 3,
    username: 'gaearon',
    name: 'Dan Abramov',
    repoCount: 50,
    location: 'London',
  },
  {
    id: 4,
    username: 'addyosmani',
    name: 'Addy Osmani',
    repoCount: 42,
    location: 'Mountain View',
  },
  {
    id: 5,
    username: 'tj',
    name: 'TJ Holowaychuk',
    repoCount: 150,
    location: 'Victoria',
  },
];
app.get("/users",(req,res)=>{
    return res.status(200).json(users);
});
app.get("/users/:id",(req,res)=>{
    let userId=parseInt(req.params.id);
    let user=users.find((user)=>user.id===userId);
    if(user){
        return res.status(200).json(user);
    }
    else{
        return res.status(404).json({message:"User not found"})
    }
});

const PORT=3000;
app.listen(PORT,()=>{

console.log(`Server is running on the port ${PORT}`);
        
    });




