import * as express from "express";
const router = express.Router();
// const chirpsStore = require("../chirpstore.js");
// no more chirpstore! install mysql from npm and configure the routes to use that instead of chirpstore.

import db from "../db";

// REST API
router.get("/:id?", async (req, res) => {
    try {
        const id = req.params.id;

        if (id) {
            const chirp = await db.chirps.one(id);
            res.json(chirp);
        } else {
            const chirps = await db.chirps.all();
            res.json(chirps);
        }
    } catch (error) {
        console.log(error);
    }
});


// Create
router.post("/", async (req, res) => {
    try {
        const body = req.body;

        const dbRes = await db.chirps.insert(body.userid, body.content, body.location);
        res.status(200).json(dbRes);
    } catch (error) {
        console.log(error)
    }
});

// Delete
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const dbRes = await db.chirps.destroy(id);

        res.status(200).json(dbRes);
    } catch (error) {
        console.log(error);
    }
});

// Update
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const content = req.body.content;

        const dbRes = await db.chirps.edit(id, content);

        res.status(200).json(dbRes);
    } catch (error) {
        console.log(error)
    }
});

export default router;