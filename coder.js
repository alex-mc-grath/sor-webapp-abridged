import readline from 'readline';
import fs from 'fs';
import config from './server/config/index.js';
import {passwordManager} from './server/auth/index.js';

async function cmd(query)
{
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

async function run()
{
    let command = await cmd("what would you like to do? (type --help for help): ");
    if(command === "--help")
    {
        console.log("options: add-entity, encrypt-password, --help");
        run();
    }
    else if(command === "add-entity")
    {
        addEntity();
    }
    else if(command === "encrypt-password")
    {
        let password = await cmd("passwordToEncrypt: ");
        let hashed = await passwordManager.hash("password");
        console.log("hased password: ",hashed);
    }
}

function camelCaseFromDashed(dashedString)
{
    let parts = dashedString.split("-");
    let camelCased = parts[0];
    for(let i=1;i<parts.length;i++)
    {
        camelCased += parts[i].charAt(0).toUpperCase() + parts[i].substr(1);
    }
    return camelCased;
}

function spaceNameFromDashed(dashedName)
{
    let parts = dashedName.split("-");
    let spacedName = '';
    for(let i=0;i<parts.length;i++)
    {
        if(i > 0){ spacedName += ' '; }
        spacedName += parts[i].charAt(0).toUpperCase() + parts[i].substr(1);
    }
    return spacedName;
}

async function createEntity(dashedName)
{
    let camelCaseName = camelCaseFromDashed(dashedName);
    let capitalCamelCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.substr(1);
    let spacedName = spaceNameFromDashed(dashedName);

    //create folder
    try { if (!fs.existsSync("./server/entities/"+dashedName)) { fs.mkdirSync("./server/entities/"+dashedName);}} catch (err) {console.error(err)}

    //create entity File
    try {
        fs.writeFileSync(`./server/entities/${dashedName}/${dashedName}.js`, `
export default function buildMake${capitalCamelCaseName}({Id, inputValidator})
{
    return function make${capitalCamelCaseName}(data = {}){
        const {
            _id = Id.makeId()
        } = data;

        if(!Id.isValidId(_id))
        {
            throw new Error('${spacedName} must have a valid ID.');
        }

        const [hasErrors, errorList] = inputValidator.validate(data);
        if(hasErrors)
        {
            throw new Error(errorList.join(' | '));
        }

        return Object.freeze({
            getId: () => _id
        });
    }
}
        `);
    } catch (err) {console.error(err)}


    //create validator
    try {
        fs.writeFileSync(`./server/entities/${dashedName}/index.js`, `
import buildMake${capitalCamelCaseName} from './${dashedName}.js'
import Id from '../../util/Id/index.js'
import inputValidator from './${dashedName}-validator.js'

const make${capitalCamelCaseName} = buildMake${capitalCamelCaseName}({Id, inputValidator});

export default make${capitalCamelCaseName};
        `);
    } catch (err) {console.error(err)}


    //create validator
    try {
        fs.writeFileSync(`./server/entities/${dashedName}/${dashedName}-validator.js`, `
import Joi from 'joi';

const validate = (data) => {
    const JoiSchema = Joi.object({
        //TODO
    }).options({abortEarly: false});

    const response = JoiSchema.validate(data);

    if(response.error)
    {
        return [true, response.error.details.map(err => err.message)];
    }
    else
    {
        return [false, []];
    }
}

const ${camelCaseName}Validator = Object.freeze({
    validate
});

export default ${camelCaseName}Validator;
        `);
    } catch (err) {console.error(err)}


    //create test file
    try {
        fs.writeFileSync(`./server/entities/${dashedName}/test.js`, `
import make${capitalCamelCaseName} from './index.js'

export default function testMake${capitalCamelCaseName}()
{
    throw new Error('Not implemented yet');
} 
        `);
    } catch (err) {console.error(err)}
}


async function createUseCase(dashedEntityName, useCasePrefix)
{
    let camelCaseName = camelCaseFromDashed(dashedEntityName);
    let capitalCamelCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.substr(1);
    let spacedName = useCasePrefix + ' ' + spaceNameFromDashed(dashedEntityName);
    let fullCamelCaseName = useCasePrefix+capitalCamelCaseName;
    let fullCapitalCamelCaseName = fullCamelCaseName.charAt(0).toUpperCase() + fullCamelCaseName.substr(1);


    //create folder in use case
    try { if (!fs.existsSync("./server/use-cases/"+dashedEntityName)) { fs.mkdirSync("./server/use-cases/"+dashedEntityName);}} catch (err) {console.error(err)}

    if(useCasePrefix === "add")
    {
        //create use-case
        try {
            fs.writeFileSync(`./server/use-cases/${dashedEntityName}/${useCasePrefix}-${dashedEntityName}.js`, `
export default function make${fullCapitalCamelCaseName}({make${capitalCamelCaseName}, ${camelCaseName}Db})
{
    return async function add${fullCamelCaseName}()
    {
        const ${camelCaseName}Entity = make${capitalCamelCaseName}(${camelCaseName}Data);

        const insertedId = await ${camelCaseName}Db.insert${capitalCamelCaseName}(${camelCaseName}Entity);

        return insertedId;
    }
}
            `);
        } catch (err) {console.error(err)}
    }
    else
    {
        //create use-case
        try {
            fs.writeFileSync(`./server/use-cases/${dashedEntityName}/${useCasePrefix}-${dashedEntityName}.js`, `
export default function make${fullCapitalCamelCaseName}({${camelCaseName}Db})
{
    return async function add${fullCamelCaseName}()
    {
        //TODO
    }
}
            `);
        } catch (err) {console.error(err)}
    }



    //create index (just the add function)
    try {
        fs.writeFileSync(`./server/use-cases/${dashedEntityName}/index.js`, `
import makeAdd${capitalCamelCaseName} from './add-${camelCaseName}.js'
import {${camelCaseName}Db} from '../../data-access/index.js'
import make${capitalCamelCaseName} from '../../entities/${dashedEntityName}/index.js'

const add${capitalCamelCaseName} = makeAdd${capitalCamelCaseName}({make${capitalCamelCaseName}, ${camelCaseName}Db});

const ${camelCaseName}Service = Object.freeze({
    add${capitalCamelCaseName}
});

export default ${camelCaseName}Service;
export {
    add${capitalCamelCaseName}
}
        `);
    } catch (err) {console.error(err)}
}

async function createDb(dashedEntityName)
{
    let camelCaseName = camelCaseFromDashed(dashedEntityName);
    let capitalCamelCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.substr(1);
    let spacedName = spaceNameFromDashed(dashedEntityName);

    //create db
    try {
        fs.writeFileSync(`./server/data-access/${dashedEntityName}-db.js`, `
export default async function make${capitalCamelCaseName}Db({makeDb})
{
    const insert${capitalCamelCaseName} = async (${camelCaseName}Entity) => {

        if(!${camelCaseName}Entity) throw new Error('insert${capitalCamelCaseName} from ${dashedEntityName}-db requires a ${camelCaseName}Entity parameter');

        const db = await makeDb();
        
        let insertResult = await db.getCollection('individuals').insert({
            "_id": ${camelCaseName}Entity.getId()
        });

        return insertResult.insertedId;
    }

    return Object.freeze({
        insert${capitalCamelCaseName}
    });
}
        `);
    } catch (err) {console.error(err)}

}


async function createController(dashedEntityName)
{
    let camelCaseName = camelCaseFromDashed(dashedEntityName);
    let capitalCamelCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.substr(1);
    let spacedName = spaceNameFromDashed(dashedEntityName);

    //create folder in use case
    try { if (!fs.existsSync("./server/controllers/"+dashedEntityName)) { fs.mkdirSync("./server/controllers/"+dashedEntityName);}} catch (err) {console.error(err)}


    //create controller
    try {
        fs.writeFileSync(`./server/controllers/${dashedEntityName}/post-${dashedEntityName}.js`, `
export default function makePost${capitalCamelCaseName} ({add${capitalCamelCaseName}})
{
    return async function post${capitalCamelCaseName}(httpRequest)
    {
        try
        {
            const insertId = await add${capitalCamelCaseName}(httpRequest.body);

            return {
                headers: {
                    'Content-Type': "application/json"
                },
                statusCode: 201,
                body: {"${camelCaseName}ObjectId": insertId}
            }
        }
        catch(e)
        {
            console.log(e);

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: {
                    error: e.message
                }
            }
        }
    }
}
        `);
    } catch (err) {console.error(err)}


    //createIndexFile
    try {
        fs.writeFileSync(`./server/controllers/${dashedEntityName}/index.js`, `
import {add${capitalCamelCaseName}} from '../../use-cases/${dashedEntityName}/index.js'
import makePost${capitalCamelCaseName} from './post-${dashedEntityName}.js'

const post${capitalCamelCaseName} = makePost${capitalCamelCaseName}({add${capitalCamelCaseName}});

const ${camelCaseName}Controller = Object.freeze({
    post${capitalCamelCaseName}
})

export default ${camelCaseName}Controller;
export {post${capitalCamelCaseName}};
        `);
    } catch (err) {console.error(err)}
}


async function createUseCaseIndexFile(dashedEntityName, useCasePrefixList)
{
    let camelCaseName = camelCaseFromDashed(dashedEntityName);
    let capitalCamelCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.substr(1);
    let spacedName = [];
    let fullCamelCaseName = [];
    let fullCapitalCamelCaseName = [];

    for(let i=0;i<useCasePrefixList.length;i++)
    {
        spacedName.push(useCasePrefixList[i] + ' ' + spaceNameFromDashed(dashedEntityName));
        fullCamelCaseName.push(useCasePrefixList[i]+capitalCamelCaseName);
        fullCapitalCamelCaseName.push(fullCamelCaseName[i].charAt(0).toUpperCase() + fullCamelCaseName[i].substr(1)); 
    }

    let file = '';

    for(let i=0;i<useCasePrefixList.length;i++)
    {
        file += `import make${fullCapitalCamelCaseName[i]} from './${useCasePrefixList[i]}-${dashedEntityName}.js'`+"\n";
    }
    file += `import {${camelCaseName}Db} from '../../data-access/index.js'`+"\n\n";

    for(let i=0;i<useCasePrefixList.length;i++)
    {
        file += `const ${fullCamelCaseName[i]} = make${fullCapitalCamelCaseName[i]}(${camelCaseName}Db)`+"\n";
    }

    file += "\n"+`const ${camelCaseName}Service = Object.freeze({`+"\n";

    for(let i=0;i<useCasePrefixList.length;i++)
    {
        file += `    ${fullCamelCaseName[i]}`+"\n";
    }

    file += "});\n\n"+`export default ${camelCaseName}Service;`+"\nexport {\n";

    for(let i=0;i<useCasePrefixList.length;i++)
    {
        file += `    ${fullCamelCaseName[i]}`+"\n";
    }

    file += "}";

    try {
        fs.writeFileSync(`./server/use-cases/${dashedEntityName}/index.js`, file);
    } catch (err) {console.error(err)}
}

async function createRoute(dashedEntityName)
{
    let camelCaseName = camelCaseFromDashed(dashedEntityName);
    let capitalCamelCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.substr(1);
    let spacedName = spaceNameFromDashed(dashedEntityName);

    //create route
    try {
        fs.writeFileSync(`./server/express/routes/${dashedEntityName}-routes.js`, `
import express from 'express';
import ${camelCaseName}Validation from '../validation/${dashedEntityName}-validation.js'
import {
    post${capitalCamelCaseName}
} from '../../controllers/${dashedEntityName}/index.js'

/*
    authMiddleware is an object with functions: auth, authUser, authAdmin
    makeCallBack is a function
*/
export default function make${capitalCamelCaseName}Routes({authMiddleware, makeCallback})
{
    const router = express.Router();


    router.post('/', authMiddleware.auth(), ${camelCaseName}Validation["POST/"], makeCallback(post${capitalCamelCaseName}));


    return router;
}
        `);
    } catch (err) {console.error(err)}


    //create validation
    try {
        fs.writeFileSync(`./server/express/validation/${dashedEntityName}-validation.js`, `
import { body } from 'express-validator'

const validations = {
    "POST/" : [
        
    ]
}

export default validations;
        `);
    } catch (err) {console.error(err)}

}


async function addEntity()
{
    let dashedEntityName = await cmd("dashed entity name: ");

    //make entity
    let createEntityAnswer = await cmd("Create entity? (y/n): ");
    if(createEntityAnswer === "y")
    {
        await createEntity(dashedEntityName);
    }

    let createUseCaseAnswer = await cmd("Create use-case? (y/n): ");
    let useCasePrefixes = [];
    while(createUseCaseAnswer === "y")
    {
        let useCasePrefix = await cmd("use case prefix: ");
        useCasePrefixes.push(useCasePrefixes);

        await createUseCase(dashedEntityName, useCasePrefix);

        createUseCaseAnswer = await cmd("Create another use-case? (y/n): ");
    }

    
    /*let createUseCaseIndexFileAnswer = await cmd("Create use-case index File? (y/n): ");
    if(createUseCaseIndexFileAnswer === "y")
    {
        if(useCasePrefixes.length === 0)
        {
            useCasePrefixes = ['add'];
        }

        await createUseCaseIndexFile(dashedEntityName, useCasePrefixes);
    }*/


    let createDBAnswer = await cmd("Create DB? (y/n): ");
    if(createDBAnswer === "y")
    {
        await createDb(dashedEntityName);
    }


    let createControllerAnswer = await cmd("Create Controller? (y/n): ");
    if(createDBAnswer === "y")
    {
        await createController(dashedEntityName);
    }

    let createRouteAnswer = await cmd("Create route? (y/n): ");
    if(createRouteAnswer === "y")
    {
        await createRoute(dashedEntityName);
    }


    console.log("Done!");
}


run();


