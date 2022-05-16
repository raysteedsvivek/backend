const cors = require("cors");
const employees = require("./models/employee");
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());

//Add employee Api
app.post("/addEmployee", async (req, res) => {
    try {
        const data = await new employees(req.body).save();
        res.status(200).send(data);
    } catch (error) {
        res.send(error);
    }
});

//get all employees Api
app.get("/getEmployees", async (req, res) => {
    try {
        const data = await employees.find();
        res.status(200).send(data);
    } catch (error) {
        res.send(error);
    }
});

//get one employee using his/her employee_id
app.get("/getEmployee/:id", async (req, res) => {
    try {
        const data = await employees.findOne({ _id: req.params.id });
        res.status(200).send(data);
    } catch (error) {
        res.send(error);
    }
});

//update one employee using his/her employee_id
app.put("/updateemployee", async (req, res) => {
    try {
        await employees.updateOne(
            { employee_id: req.body.employee_id },
            {
                $set: {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    phone: req.body.phone,
                    designation: req.body.designation,
                    address: req.body.address,
                    employee_id: req.body.employee_id
                }
            }
        );
        res.status(200).send({ "result": "record updated" });
    } catch (error) {
        res.send(error);
    }
});

//delete one employee using his/her employee_id
app.delete("/deleteEmployee", async (req, res) => {
    try {
        await employees.deleteOne(req.body);
        res.status(200).send({ "result": "record deleted" });
    } catch (error) {
        res.send(error);
    }
});

app.listen(5000, () => {
    console.log("server started on port 5000");
});

module.exports = app;