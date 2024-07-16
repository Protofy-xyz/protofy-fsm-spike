import { getAuth } from "protonode";
import { API, Protofy, getLogger } from "protobase";
import { Application } from "express";
import fs from "fs";
import path from "path";

const root = path.join(process.cwd(), "..", "..");
const logger = getLogger();

Protofy("type", "CustomAPI");
const fsmAction = async (fsmName, action) => {
    const query = `{"type":"${action}"}`;
    try {
        await API.get(`/adminapi/v1/fsm/${fsmName}/send?msg=${query}`)
    } catch (e) {
        console.error('Error, could not activate alarm: ', e)
    }
}
const fsm = { fsmAction }

export default Protofy("code", async (app: Application, context) => {
    // Activate alarm
    app.get("/api/v1/alarm/activate", async (req, res) => {
        const hardcodedFSM = 'customFSM';
        const action = "ACTIVATE";
        //at this point, we have a sensor that, if it recieves an X value, returns an event that should activate an alarm
        try {
            fsm.fsmAction(hardcodedFSM, action)
            res.send("Alarm activated")
        } catch (e) {
            console.error('Error, could not activate alarm: ', e)
            res.status(501).send('Error deactivate alarm')
        }
    });
    // Deactivate alarm
    app.get("/api/v1/alarm/deactivate", async (req, res) => {
        const hardcodedFSM = 'customFSM';
        const query = '{"type":"DEACTIVATE"}';
        try {
            await API.get(`/adminapi/v1/fsm/${hardcodedFSM}/send?msg=${query}`)
            res.send("Alarm deactivated")
        } catch (e) {
            console.error('Error, could not deactivate alarm: ', e)
            res.status(501).send('Error deactivate alarm')
        }

    });
    // Alarm state
    app.get("/api/v1/alarm/state", async (req, res) => {
        const hardcodedFSM = 'customFSM';
        const key = 'alarm'
        try {
            const result = await API.get(`/adminapi/v1/fsm/${hardcodedFSM}/context/${key}`)
            console.log('result', result)
            res.send(result)
        } catch (e) {
            console.error('Error, coould not get alarm state: ', e)
            res.status(501).send('Error getting alarm state')
        }

    });
});
