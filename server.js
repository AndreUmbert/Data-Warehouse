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
  ChannelHasContact,
} = require("./models");

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

app.use(
  expressJwt({
    secret: JWT_SECRET,
    algorithms: ["HS256"],
  }).unless({ path: ["/login"] })
);

//----------------------------------------------------
//4. Import services
//----------------------------------------------------

const { ChannelService } = require("./services/index");

//----------------------------------------------------
//4. Import controlers
//----------------------------------------------------

const adminVerification = require("./controlers/adminVerification");

//----------------------------------------------------
//5. ENDPOINTS OR PATHS
//----------------------------------------------------

//----------------------------------------------------
// 5.1 USERS:
//----------------------------------------------------
app.get("/user/dashboard", adminVerification, async (req, res) => {
  try {
    const users = await db.query("SELECT * FROM userTable", {
      type: db.QueryTypes.SELECT,
    });
    res.status(200).json(users);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Please try again in a few minutes" });
  }
});

app.get("/user/dashboard/:userId", adminVerification, async (req, res) => {
  try {
    const users = await db.query(
      `SELECT * FROM contact WHERE usertableId = "${req.params.userId}
"`,
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
    attributes: ["id", "name", "email"],
    where: {
      name,
      password,
    },
    include: [{ model: Rol }],
  });
  console.log(posibleUser.rol.dataValues.id);
  if (posibleUser == null) {
    res.status(401).json({ error: "user or password incorrect" });
  } else {
    const token = jwt.sign(
      {
        posibleUser,
      },
      JWT_SECRET,
      { expiresIn: "60m" }
    );
    res.json({ token, id: posibleUser.id, rol: posibleUser.rol.dataValues.id });
  }
  //Pushear id de usuario a localstorage para obtenerlo en el front y traer los contactos de este idusuario. (AXIOS)
});

app.post("/signup", adminVerification, async (req, res) => {
  try {
    const newUser = await db.query(
      "INSERT INTO userTable (name, lastname, email, password, rePassword, profile, rolId) values (?,?,?,?,?,?,?)",
      //establecer rol
      {
        type: db.QueryTypes.INSERT,
        replacements: [
          req.body.name,
          req.body.lastname,
          req.body.email,
          req.body.password,
          req.body.rePassword,
          req.body.profile,
          req.body.rol,
        ],
      }
    );
    res.status(200).json(newUser);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Please try again in a few minutes" });
  }
});

app.put("/user/changes/:idUser", adminVerification, async (req, res) => {
  const idUser = req.params.idUser;
  const name = req.body.name;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;
  const rePassword = req.body.rePassword;
  const profile = req.body.profile;
  console.log(idUser);
  try {
    const user = await db.query(
      //NUNCA PERO NUUUNCA usar variables dentro de las consultas de SQL
      "UPDATE usertable SET name = :name, lastname = :lastname, email = :email, password = :password, rePassword= :rePassword, profile= :profile WHERE id= :idUser",
      {
        replacements: {
          idUser: idUser,
          name: name,
          lastname: lastname,
          email: email,
          password: password,
          rePassword: rePassword,
          profile: profile,
        },
      }
    );
    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Please try again in a few minutes" });
  }
});

app.delete("/user/delete/:idUser", adminVerification, async (req, res) => {
  const idUser = req.params.idUser;
  console.log(req.params);
  db.models.userTable
    .destroy({
      where: {
        id: idUser,
      },
    })
    .then((record) => {
      console.log(record);
      if (record >= 1) {
        res.status(200).json({ message: "User was deleted successfully" });
      } else {
        res.status(404).json({ message: "record not found" });
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
    const cities = await db.query("SELECT * FROM city", {
      type: db.QueryTypes.SELECT,
    });
    res.status(200).json(cities);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Please try again in a few minutes" });
  }
});

app.put("/city/update/:cityName", adminVerification, async (req, res) => {
  const cityName = req.params.cityName;
  const newName = req.body.newName;
  console.log(cityName);
  try {
    const city = await db.query(
      //NUNCA PERO NUUUNCA usar variables dentro de las consultas de SQL
      "UPDATE city SET cityName = :newName WHERE cityName = :cityName",
      {
        replacements: {
          cityName: cityName,
          newName: newName,
        },
      }
    );
    console.log(city);
    res.status(200).json(city);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Please try again in a few minutes" });
  }
});

app.post("/city/create", adminVerification, async (req, res) => {
  try {
    const city = await db.query(
      "INSERT INTO city (cityName, countryId) values (?,?)",
      {
        type: db.QueryTypes.INSERT,
        replacements: [req.body.cityName, req.body.countryId],
      }
    );
    res.status(200).json(city);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Please try again in a few minutes" });
  }
});

app.delete("/city/delete/:cityName", adminVerification, async (req, res) => {
  const cityName = req.params.cityName;
  console.log(req.params);
  db.models.city
    .destroy({
      where: {
        cityName: cityName,
      },
    })
    .then((record) => {
      console.log(record);
      if (record >= 1) {
        res.status(200).json({ message: "City was deleted successfully" });
      } else {
        res.status(404).json({ message: "record not found" });
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
    const countries = await db.query("SELECT * FROM country", {
      type: db.QueryTypes.SELECT,
    });
    res.status(200).json(countries);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Please try again in a few minutes" });
  }
});

app.put("/country/update/:countryName", adminVerification, async (req, res) => {
  const countryName = req.params.countryName;
  const newName = req.body.newName;
  console.log(countryName);
  try {
    const country = await db.query(
      //NUNCA PERO NUUUNCA usar variables dentro de las consultas de SQL
      "UPDATE country SET countryName = :newName WHERE countryName = :countryName",
      {
        replacements: {
          newName: newName,
          countryName: countryName,
        },
      }
    );
    console.log(country);
    res.status(200).json(country);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Please try again in a few minutes" });
  }
});

app.post("/country/create", adminVerification, async (req, res) => {
  try {
    const country = await db.query(
      "INSERT INTO country (countryName, regionId) values (?,?)",
      {
        type: db.QueryTypes.INSERT,
        replacements: [req.body.countryName, req.body.regionId],
      }
    );
    res.status(200).json(country);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Please try again in a few minutes" });
  }
});

app.delete(
  "/country/delete/:countryName",
  adminVerification,
  async (req, res) => {
    const countryName = req.params.countryName;
    console.log(req.params);
    db.models.country
      .destroy({
        where: {
          countryName: countryName,
        },
      })
      .then((record) => {
        console.log(record);
        if (record >= 1) {
          res.status(200).json({ message: "Country was deleted successfully" });
        } else {
          res.status(404).json({ message: "record not found" });
        }
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  }
);

// http://localhost:3000/country/deleteAllCities/

app.delete(
  "/country/deleteAllCities/:countryId",
  adminVerification,
  async (req, res) => {
    const countryId = req.params.countryId;
    console.log(req.params);
    db.models.city
      .destroy({
        where: {
          countryId: countryId,
        },
      })
      .then((record) => {
        console.log(record);
        if (record >= 1) {
          res
            .status(200)
            .json({ message: "All cities were deleted successfully" });
        } else {
          res.status(404).json({ message: "record not found" });
        }
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  }
);

//----------------------------------------------------
// 5.4 REGIONS:
//----------------------------------------------------

app.get("/region/dashboard", async (req, res) => {
  try {
    const region = await db.query("SELECT * FROM region", {
      type: db.QueryTypes.SELECT,
    });
    res.status(200).json(region);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Please try again in a few minutes" });
  }
});

app.put("/region/update/:regionId", adminVerification, async (req, res) => {
  const regionId = req.params.regionId;
  const regionName = req.body.regionName;
  console.log(regionId);
  try {
    const region = await db.query(
      //NUNCA PERO NUUUNCA usar variables dentro de las consultas de SQL
      "UPDATE region SET regionName = :regionName WHERE id = :id",
      {
        replacements: {
          id: regionId,
          regionName: regionName,
        },
      }
    );
    console.log(region);
    res.status(200).json(region);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Please try again in a few minutes" });
  }
});

app.post("/region/create", adminVerification, async (req, res) => {
  try {
    const region = await db.query(
      "INSERT INTO region (regionName) values (?)",
      {
        type: db.QueryTypes.INSERT,
        replacements: [req.body.regionName],
      }
    );
    res.status(200).json(region);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Please try again in a few minutes" });
  }
});

app.delete("/region/delete/:regionId", adminVerification, async (req, res) => {
  const regionId = req.params.regionId;
  console.log(req.params);
  db.models.region
    .destroy({
      where: {
        id: regionId,
      },
    })
    .then((record) => {
      console.log(record);
      if (record >= 1) {
        res.status(200).json({ message: "Region was deleted successfully" });
      } else {
        res.status(404).json({ message: "record not found" });
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
    const company = await db.query("SELECT * FROM company", {
      type: db.QueryTypes.SELECT,
    });
    res.status(200).json(company);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Please try again in a few minutes" });
  }
});

app.put("/company/update/:companyName", adminVerification, async (req, res) => {
  const companyName = req.params.companyName;
  const newName = req.body.newName;
  const address = req.body.address;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  try {
    const company = await db.query(
      "UPDATE company SET companyName= :newName, address= :address, email= :email, phoneNumber= :phoneNumber WHERE companyName = :companyName",
      {
        replacements: {
          newName: newName,
          address: address,
          email: email,
          phoneNumber: phoneNumber,
          companyName: companyName,
        },
      }
    );
    res.status(200).json(company);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Please try again in a few minutes" });
  }
});

app.post("/company/create", adminVerification, async (req, res) => {
  try {
    const company = await db.query(
      "INSERT INTO company (companyName, address, email, phoneNumber, countryId) values (?,?,?,?,?)",
      {
        type: db.QueryTypes.INSERT,
        replacements: [
          req.body.companyName,
          req.body.address,
          req.body.email,
          req.body.phoneNumber,
          req.body.countryId,
        ],
      }
    );
    res.status(200).json(company);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Please try again in a few minutes" });
  }
});

app.delete(
  "/company/delete/:companyName",
  adminVerification,
  async (req, res) => {
    const companyName = req.params.companyName;
    db.models.company
      .destroy({
        where: {
          companyName: companyName,
        },
      })
      .then((record) => {
        console.log(record);
        if (record >= 1) {
          res.status(200).json({ message: "Company was deleted successfully" });
        } else {
          res.status(404).json({ message: "record not found" });
        }
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  }
);

//----------------------------------------------------
//5.5 CONTACTS:
//----------------------------------------------------

app.get("/contact/dashboard", async (req, res) => {
  try {
    const contact = await db.query(
      "SELECT t1.*, t2.cityName, t2.countryId, t3.countryName, t3.regionId, t4.regionName FROM contact as t1 INNER JOIN city as t2 ON t1.cityId = t2.id INNER JOIN country as t3 ON t2.countryId = t3.id INNER JOIN region as t4 ON t3.regionId = t4.id;",
      { type: db.QueryTypes.SELECT }
    );
    console.log(contact);
    res.status(200).json(contact);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Please try again in a few minutes" });
  }
});

app.put("/contact/update/:contactId", async (req, res) => {
  const contactId = req.params.contactId;
  const contactName = req.body.contactName;
  const lastname = req.body.lastname;
  const position = req.body.position;
  const username = req.body.username;
  const email = req.body.email;
  const interest = req.body.interest;
  const preferences = req.body.position;
  const companyId = req.body.companyId;
  const cityId = req.body.cityId;
  console.log(req.body);
  try {
    const contact = await db.query(
      "UPDATE contact SET contactName= :contactName, lastname= :lastname, position= :position, username= :username, email= :email, interest= :interest, preferences = :preferences, companyId = :companyId, cityId= :cityId",
      {
        replacements: {
          id: contactId,
          contactName: contactName,
          lastname: lastname,
          position: position,
          username: username,
          email: email,
          interest: interest,
          preferences: preferences,
          companyId: companyId,
          cityId: cityId,
        },
      }
    );
    res.status(200).json(contact);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Please try again in a few minutes" });
  }
});

app.post("/contact/create/:userTableId", async (req, res) => {
  const userTableId = req.params.userTableId;
  try {
    const contact = await db.query(
      "INSERT INTO contact (contactName, lastname, position, address, email, interest, companyId,cityId, userTableId) values (?,?,?,?,?,?,?,?,?)",
      {
        type: db.QueryTypes.INSERT,
        replacements: [
          req.body.contactName,
          req.body.lastname,
          req.body.position,
          req.body.address,
          req.body.email,
          req.body.interest,
          req.body.companyId,
          req.body.cityId,
          req.params.userTableId,
        ],
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
  db.models.contact
    .destroy({
      where: {
        id: contactId,
      },
    })
    .then((record) => {
      console.log(record);
      if (record >= 1) {
        res.status(200).json({ message: "Contact was deleted successfully" });
      } else {
        res.status(404).json({ message: "record not found" });
      }
    })
    .catch(function (error) {
      res.status(500).json(error);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
});

app.get("/contact/dashbord/:userTableId", async (req, res) => {
  try {
    const contact = await db.query(
      "SELECT t1.username, t1.interest, t2.companyName, t3.regionName FROM contact as t1 INNER JOIN company as t2 ON t1.companyId = t2.id INNER JOIN region as t3 ON t1.regionId = t3.id WHERE t1.userTableId = :id",
      { type: db.QueryTypes.SELECT }
    );
    res.status(200).json(contact);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Please try again in a few minutes" });
  }
});

//----------------------------------------------------
//5.6 channels:
//----------------------------------------------------
app.post("/contact/channelCreate/:contactId", async (req, res) => {
  const contactId = req.params.contactId;
  try {
    const contact = await db.query(
      "INSERT INTO channel (name, userAccount, preferences, contactId) values (?,?,?,?)",
      {
        type: db.QueryTypes.INSERT,
        replacements: [
          req.body.name,
          req.body.userAccount,
          req.body.preferences,
          req.params.contactId,
        ],
      }
    );
    res.status(200).json(contact);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Please try again in a few minutes" });
  }
});

//----------------------------------------------------
//6. PUT THE SERVER ON
//----------------------------------------------------
app.listen(APP_PORT, () => {
  console.log(`escuchando en puerto ${APP_PORT}`);
});
