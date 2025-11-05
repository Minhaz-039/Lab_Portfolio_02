import db from "../db.js";

export async function getServices(req, res){
  try {
    const [rows] = await db.execute("SELECT id, title, short_desc , icon FROM services ORDER BY id");
    res.json(rows);
  } catch(err){
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}

export async function getServiceById(req, res){
  const { id } = req.params;
  try {
    const [rows] = await db.execute("SELECT * FROM services WHERE id = ?", [id]);
    res.json(rows);
  } catch(err){
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}
