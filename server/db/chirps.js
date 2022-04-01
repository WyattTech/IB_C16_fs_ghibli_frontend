import { Query } from "./index";

const all = () => Query("select * from chirps");

const one = (id) => Query("select * from chirps where chirps.id = ?", [id]);

const destroy = (id) => Query("delete from chirps where chirps.id = ?", [id]);

const insert = (userid, content, location) => Query("insert into chirps (userid, content, location) values (?, ?, ?)", [userid, content, location]);

const edit = (id, content) => Query("UPDATE chirps SET content = ? WHERE chirps.id = ?", [content, id])

// this becomes chirps in db/index.js and routes/chirps.js
export default {
    all,
    one,
    destroy,
    insert,
    edit
}