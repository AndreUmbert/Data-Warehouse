//----------------------------------------------------
//1. Import express and others libraries
//----------------------------------------------------
const express = require("express");
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const helmet = require("helmet");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const db = require("./config/db");
const { response } = require("express");
const APP_PORT = process.env.APP_PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET;


//----------------------------------------------------
//2. Import models
//----------------------------------------------------

const {
    Channel,
    City,
    Company,
    Country,
    Region,
    Rol,
    User,
    Contact,
} = require("./models")

//----------------------------------------------------
//3. Instance of express
//----------------------------------------------------
const app = express();

//----------------------------------------------------
//4. Rate limit policy
//----------------------------------------------------
const rateLimitPolicy = rateLimit({
    message: "Try again later",
    max: 10,
    windowMs: 5 * 60 * 1000,
});

//----------------------------------------------------
//4. Use all the libraries (express was used before in 2.)
//----------------------------------------------------
app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(cors());

app.use(expressJwt({
    secret: JWT_SECRET,
    algorithms: ['HS256']
}).unless({ path: ['/login'] })
);

//----------------------------------------------------
//4. Import services
//----------------------------------------------------

//----------------------------------------------------
//4. Import controlers
//----------------------------------------------------

//----------------------------------------------------
//5. ENDPOINTS OR PATHS
//----------------------------------------------------

//----------------------------------------------------
// 5.1 USERS:
//----------------------------------------------------
app.get("/user/dashboard", async (req, res) => {
    try {
        const users = await db.query(
            'SELECT * FROM userTable',
            { type: db.QueryTypes.SELECT }
        );
        res.status(200).json(users);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: "Please try again in a few minutes" });
    }
});

app.post("/login", async (req, res) => {

    const { name, password } = req.body;
    // console.log(name, password);
    const posibleUser = await User.findOne({
        attributes: ['id', 'name', 'email'],
        where: {
            name,
            password
        },
        include: [{ model: Rol }],
    });

    if (posibleUser == null) {
        res.status(401).json({ error: "user or password incorrect" });
    } else {
        const token = jwt.sign({
            posibleUser
        }, JWT_SECRET, { expiresIn: '60m' })

        res.json({ token });
    }
});

app.post("/signup", async (req, res) => {
    try {
        const newUser = await db.query(
            "INSERT INTO userTable (name, lastname, email, password, rePassword, profile) values (?,?,?,?,?,?)",
            {
                type: db.QueryTypes.INSERT,
                replacements: [req.body.name, req.body.lastname, req.body.email, req.body.password, req.body.rePassword, req.body.profile]
            }
        );
        res.status(200).json(newUser);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: "Please try again in a few minutes" })
    }
});

app.put("/user/changes/:profile", async (req, res) => {
    const userProfile = req.params.profile;
    const userId = req.body.id;
    const userName = req.body.name;
    const userlastName = req.body.lastname;
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    console.log(userProfile);
    try {
        const user = await db.query(
            //NUNCA PERO NUUUNCA usar variables dentro de las consultas de SQL
            "UPDATE usertable SET id = :id, name = :name, lastname = :lastname, email = :email, password = :password WHERE profile = :profile",
            {
                replacements: { profile: userProfile, id: userId, name: userName, lastname: userlastName, email: userEmail, password: userPassword }
            }
        );
        res.status(200).json(user)
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: "Please try again in a few minutes" });
    };
});

app.delete("/user/delete/:idUser", async (req, res) => {
    const userId = req.params.idUser;
    console.log(req.params);
    db.models.userTable.destroy({
        where: {
            id: userId,
        }
    })
        .then(record => {
            console.log(record);
            if (record >= 1) {
                res.status(200).json({ message: "User was deleted successfully" });
            }
            else {
                res.status(404).json({ message: "record not found" })
            }

        })
        .catch(function (error) {
            res.status(500).json(error);
        });
});


//----------------------------------------------------
// 5.2 CITIES:
//----------------------------------------------------

app.get("/city/dashboard", async (req, res) => {
    try {
        const cities = await db.query(
            'SELECT * FROM city',
            { type: db.QueryTypes.SELECT }
        );
        res.status(200).json(cities);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: "Please try again in a few minutes" });
    }
});

app.put("/city/update/:cityId", async (req, res) => {
    const cityId = req.params.cityId;
    const name = req.body.name;
    const countryId = req.body.countryId;
    console.log(cityId);
    try {
        const city = await db.query(
            //NUNCA PERO NUUUNCA usar variables dentro de las consultas de SQL
            "UPDATE city SET name = :name, countryId= :countryId WHERE id = :id",
            {
                replacements: {
                    id: cityId, name: name, countryId: countryId
                }
            }
        );
        console.log(city);
        res.status(200).json(city);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: "Please try again in a few minutes" });
    }
});

app.post("/city/create", async (req, res) => {
    try {
        const city = await db.query(
            "INSERT INTO city (name, countryId) values (?,?)",
            {
                type: db.QueryTypes.INSERT,
                replacements: [req.body.name, req.body.countryId]
            }
        );
        res.status(200).json(city);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: "Please try again in a few minutes" });
    }
});

app.delete("/city/delete/:cityId", async (req, res) => {
    const cityId = req.params.cityId;
    console.log(req.params);
    db.models.city.destroy({
        where: {
            id: cityId,
        }
    })
        .then(record => {
            console.log(record);
            if (record >= 1) {
                res.status(200).json({ message: "City was deleted successfully" });
            }
            else {
                res.status(404).json({ message: "record not found" })
            }

        })
        .catch(function (error) {
            res.status(500).json(error);
        });
});


//----------------------------------------------------
// 5.3 COUNTRIES:
//----------------------------------------------------

app.get("/country/dashboard", async (req, res) => {
    try {
        const countries = await db.query(
            'SELECT * FROM country',
            { type: db.QueryTypes.SELECT }
        );
        res.status(200).json(countries);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: "Please try again in a few minutes" });
    }
});

app.put("/country/update/:countryId", async (req, res) => {
    const countryId = req.params.countryId;
    const name = req.body.name;
    const regionId = req.body.regionId;
    console.log(countryId);
    try {
        const country = await db.query(
            //NUNCA PERO NUUUNCA usar variables dentro de las consultas de SQL
            "UPDATE country SET name = :name, regionId= :regionId WHERE id = :id",
            {
                replacements: {
                    id: countryId, name: name, regionId: regionId
                }
            }
        );
        console.log(country);
        res.status(200).json(country);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: "Please try again in a few minutes" });
    }
});

app.post("/country/create", async (req, res) => {
    try {
        const country = await db.query(
            "INSERT INTO country (name, regionId) values (?,?)",
            {
                type: db.QueryTypes.INSERT,
                replacements: [req.body.name, req.body.regionId]
            }
        );
        res.status(200).json(country);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: "Please try again in a few minutes" });
    }
});

app.delete("/country/delete/:countryId", async (req, res) => {
    const countryId = req.params.countryId;
    console.log(req.params);
    db.models.country.destroy({
        where: {
            id: countryId,
        }
    })
        .then(record => {
            console.log(record);
            if (record >= 1) {
                res.status(200).json({ message: "Country was deleted successfully" });
            }
            else {
                res.status(404).json({ message: "record not found" })
            }

        })
        .catch(function (error) {
            res.status(500).json(error);
        });
});

//----------------------------------------------------
// 5.4 REGIONS:
//----------------------------------------------------

app.get("/region/dashboard", async (req, res) => {
    try {
        const region = await db.query(
            'SELECT * FROM region',
            { type: db.QueryTypes.SELECT }
        );
        res.status(200).json(region);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: "Please try again in a few minutes" });
    }
});

app.put("/region/update/:regionId", async (req, res) => {
    const regionId = req.params.regionId;
    const regionName = req.body.regionName;
    console.log(regionId);
    try {
        const region = await db.query(
            //NUNCA PERO NUUUNCA usar variables dentro de las consultas de SQL
            "UPDATE region SET regionName = :regionName WHERE id = :id",
            {
                replacements: {
                    id: regionId, regionName: regionName
                }
            }
        );
        console.log(region);
        res.status(200).json(region);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: "Please try again in a few minutes" });
    }
});

app.post("/region/create", async (req, res) => {
    try {
        const region = await db.query(
            "INSERT INTO region (regionName) values (?)",
            {
                type: db.QueryTypes.INSERT,
                replacements: [req.body.regionName]
            }
        );
        res.status(200).json(region);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: "Please try again in a few minutes" });
    }
});

app.delete("/region/delete/:regionId", async (req, res) => {
    const regionId = req.params.regionId;
    console.log(req.params);
    db.models.region.destroy({
        where: {
            id: regionId,
        }
    })
        .then(record => {
            console.log(record);
            if (record >= 1) {
                res.status(200).json({ message: "Region was deleted successfully" });
            }
            else {
                res.status(404).json({ message: "record not found" })
            }

        })
        .catch(function (error) {
            res.status(500).json(error);
        });
});

//----------------------------------------------------
//5.4 COMPANIES:
//----------------------------------------------------

app.get("/company/dashboard", async (req, res) => {
    try {
        const company = await db.query(
            'SELECT * FROM company',
            { type: db.QueryTypes.SELECT }
        );
        res.status(200).json(company);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: "Please try again in a few minutes" });
    }
});

app.put("/company/update/:companyId", async (req, res) => {
    const companyId = req.params.companyId;
    const name = req.body.name;
    const address = req.body.address;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    try {
        const company = await db.query(
            "UPDATE company SET name= :name, address= :address, email= :email, phoneNumber= :phoneNumber",
            {
                replacements: { id: companyId, name: name, address: address, email: email, phoneNumber: phoneNumber }
            }
        );
        res.status(200).json(company)
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: "Please try again in a few minutes" })
    };
});

app.post("/company/create", async (req, res) => {
    try {
        const company = await db.query(
            "INSERT INTO company (name, address, email, phoneNumber) values (?,?,?,?)",
            {
                type: db.QueryTypes.INSERT,
                replacements: [req.body.name, req.body.address, req.body.email, req.body.phoneNumber]
            }
        );
        res.status(200).json(company);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: "Please try again in a few minutes" });
    }
});

app.delete("/company/delete/:companyId", async (req, res) => {
    const companyId = req.params.companyId;
    db.models.company.destroy({
        where: {
            id: companyId,
        }
    })
        .then(record => {
            console.log(record);
            if (record >= 1) {
                res.status(200).json({ message: "Company was deleted successfully" });
            }
            else {
                res.status(404).json({ message: "record not found" })
            }

        })
        .catch(function (error) {
            res.status(500).json(error);
        });
});

//----------------------------------------------------
//5.5 CONTACTS:
//----------------------------------------------------

app.get("/contact/dashboard", async (req, res) => {
    try {
        const contact = await db.query(
            'SELECT * FROM contact',
            { type: db.QueryTypes.SELECT }
        );
        res.status(200).json(contact);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: "Please try again in a few minutes" });
    }
});

app.put("/contact/update/:contactId", async (req, res) => {
    const contactId = req.params.contactId;
    const name = req.body.name;
    const lastname = req.body.lastname;
    const position = req.body.position;
    const username = req.body.username;
    const email = req.body.email;
    const interest = req.body.interest;
    const preferences = req.body.position;
    const companyId = req.body.companyId;
    const userTableId = req.body.userTableId;
    const regionId = req.body.regionId;
    console.log(req.body);
    try {
        const contact = await db.query(
            "UPDATE contact SET name= :name, lastname= :lastname, position= :position, username= :username, email= :email, interest= :interest, preferences = :preferences, companyId = :companyId, userTableId = :userTableId, regionId= :regionId",
            {
                replacements: { id: contactId, name: name, lastname: lastname, position: position, username: username, email: email, interest: interest, preferences: preferences, companyId: companyId, userTableId: userTableId, regionId: regionId }
            }
        );
        res.status(200).json(contact)
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: "Please try again in a few minutes" })
    };
});

app.post("/contact/create", async (req, res) => {
    try {
        const contact = await db.query(
            "INSERT INTO contact (name, lastname, position, username, email, interest, preferences, companyId, userTableId, regionId) values (?,?,?,?,?,?,?,?,?,?)",
            {
                type: db.QueryTypes.INSERT,
                replacements: [req.body.name, req.body.lastname, req.body.position, req.body.username, req.body.email, req.body.interest, req.body.preferences, req.body.companyId, req.body.userTableId, req.body.regionId]
            }
        );
        res.status(200).json(contact);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: "Please try again in a few minutes" });
    }
});

app.delete("/contact/delete/:contactId", async (req, res) => {
    const contactId = req.params.contactId;
    db.models.contact.destroy({
        where: {
            id: contactId,
        }
    })
        .then(record => {
            console.log(record);
            if (record >= 1) {
                res.status(200).json({ message: "Contact was deleted successfully" });
            }
            else {
                res.status(404).json({ message: "record not found" })
            }

        })
        .catch(function (error) {
            res.status(500).json(error);
        });
});


//----------------------------------------------------
//6. PUT THE SERVER ON
//----------------------------------------------------
app.listen(APP_PORT, () => {
    console.log(`escuchando en puerto ${APP_PORT}`);
});