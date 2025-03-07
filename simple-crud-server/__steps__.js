/**
 * -----------------
 * MongoDB Connection
 * ----------------
 * 1. Create account
 * 2. crate an user with password
 * 3. whitelist IP Address
 * 4. database > connect > driver >Node > view full code
 * 5. change the password the uri
 * --------------------
 * 1. CREATE --- POST
 * 2. app.post('/users'/ async(req, res)=> {} )
 * 3. make the function async to use await inside it
 * 4. make sure you use the express.json() middleware
 * 5. access data from the body: const user = req.body
 * 6. const result = await userCollection.insertOne(user)
 * 7. res.send(result)
 *
 * ---------------------------------
 * CLIENT
 * 1. Create Fetch
 * 2. add second parameter as an object
 * 3. provide method: "POST"
 * 4. add headers: {'content-type': 'application/json'}
 * 5. add body: JSON.Stringify(user)
 *
 *
 * ----------------------
 * Read Many
 * ---------------------
 * 1. create a cursor = userCollection.find()
 * 2. const result = await cursor.toArray()
 *
 *
 * ---------------------
 * Delete
 * ---------------------
 * 1. create app.delete('/users/:id', async(req, res)=> {})
 * 2. specify unique ObjectId to delete the right user
 * 3. const query = { _id: new ObjectId(id)}
 * 4. const result = await userCollection.deleteOne(query)
 *
 *
 * Client
 * 1. create dynamic url with id
 * 2. mention the DELETE method
 *
 *
 *
 */
