
## packages

### config

create global values that can be used throught application in default.json file in config folder


## Express

### app.use() 
To add middleware, routes

// to parse the incoming requests with JSON payloads
app.use(express.json({extended:false}))


### return res.status(200).json({msg:})
add return if you want that to be the final response 

