import mongo from 'mongodb';

class MongoDB_getCollection
{
    constructor(db, collectionName)
    {
        this.db = db;
        this.collectionName = collectionName;
    }

    async find(obj, sortByIncreasing = true, sortBy = "_id", count = null)
    {
        if("_id" in obj)
        {
            let ObjectID = mongo.ObjectId
            try
            {
                obj._id = new ObjectID(obj._id)
            }
            catch(err)
            {
                console.log(err)
                obj._id = null
            }
        }

        let collection = await this.db.collection(this.collectionName);
        if(sortByIncreasing)
        {
            if(count)
            {
                return await collection.find(obj).limit(count).toArray();
            }
            else
            {
                return await collection.find(obj).toArray();
            }
        }
        else
        {
            if(count)
            {
                return await collection.find(obj).sort({[sortBy]: -1}).limit(count).toArray();
            }
            else
            {
                return await collection.find(obj).sort({[sortBy]: -1}).toArray();
            }
        }
    }

    async insertOne(obj, makeAndReturnID = false)
    {
        return await this.insert(obj, makeAndReturnID)
    }

    async insert(obj, makeAndReturnID = false)
    {
        let collection = await this.db.collection(this.collectionName);

        if(makeAndReturnID)
        {
            let ObjectID = mongo.ObjectId;
            let newID = new ObjectID();
            obj["_id"] = newID;
            try
            {
                await collection.insertOne(obj);
            }
            catch(err)
            {
                console.log("INSERT ERROR!");
                console.log(err.message);
            }

            return newID;
        }
        else
        {
            //returns {..., insertedId}
            return await collection.insertOne(obj);
        }
        
    }

    async update(query, obj)
    {
        return await this.updateOne(query, obj);
    }

    async updateMany(query, obj)
    {
        if("_id" in query)
        {
            let ObjectID = mongo.ObjectId
            query._id = new ObjectID(query._id)
        }

        let collection = await this.db.collection(this.collectionName);
        return await collection.updateMany(query, obj);
    }

    async updateOne(query, obj)
    {
        if("_id" in query)
        {
            let ObjectID = mongo.ObjectId
            query._id = new ObjectID(query._id)
        }

        let collection = await this.db.collection(this.collectionName);
        return await collection.updateOne(query, obj);
    }

    async replaceOne(filter, replacement)
    {
        let collection = await this.db.collection(this.collectionName)
        return await collection.replaceOne(filter, replacement, {upsert: true})
    }
    
    async aggregate(obj, sortByIncreasing = true, sortBy = "_id", count = null)
    {
        let collection = await this.db.collection(this.collectionName);
        let result = []

        if(sortByIncreasing)
        {
            if(count)
            {
                result = await collection.aggregate(obj).limit(count).toArray();
            }
            else
            {
                result = await collection.aggregate(obj).toArray();
            }
        }
        else
        {
            if(count)
            {
                result = await collection.aggregate(obj).sort({[sortBy]: -1}).limit(count).toArray();
            }
            else
            {
                result = await collection.aggregate(obj).sort({[sortBy]: -1}).toArray();
            }
        }

        const toReturn = []
        await result.forEach(row => {
            toReturn.push(row);
        })

        return toReturn
    }

    async exists(obj)
    {
        let collection = await this.db.collection(this.collectionName);
        let result = await collection.find(obj).toArray();
        return result.length > 0;
    }

    async delete(obj)
    {
        if("_id" in obj)
        {
            let ObjectID = mongo.ObjectId
            try
            {
                obj._id = new ObjectID(obj._id)
            }
            catch(err)
            {
                console.log(err)
                obj._id = null
            }
        }
        
        let collection = await this.db.collection(this.collectionName);
        return await collection.deleteMany(obj);
    }
    
}

class MongoDB
{
    constructor()
    {
        this.mongoClient = mongo.MongoClient;
        this.database = null;
        this.connected = false;
    }

    getCollection(name)
    {
        return new MongoDB_getCollection(this.database, name);
    }

    isConnected()
    {
        return this.connected;
    }

    async connect()
    {
        try
        {
            let result = await new Promise((resolve, reject) => {
                this.mongoClient.connect(process.env.MONGO_URI, (err, db) => {  
                    if (err)
                    {
                        console.log("process.env.MONGO_URI", process.env.MONGO_URI)
                        reject(err.message);
                    }
                    else
                    {  
                        this.connected = true;
                        this.database = db.db(process.env.DB_NAME);
                        console.log("MongoDB connected!\n");
                        resolve();
                    } 
                });  
            })

            return result
        }
        catch(err)
        {
            console.log("DB Connection Error: ", err)
        }
    }

    newID()
    {
        let ObjectID = mongo.ObjectId;

        return new ObjectID();
    }

    objectID(id)
    {
        let ObjectID = mongo.ObjectId;

        try
        {
            if(id)
            {            
                return new ObjectID(id);
            }
            else
            {
                return new ObjectID();
            } 
        }
        catch(err)
        {
            console.log(err)
            return null
        }
    }
}

const db = new MongoDB();
db.connect()

export default db;