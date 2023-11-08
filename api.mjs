import { file } from "./Schema/validate.mjs";
import bcrypt from "bcrypt";
export const addData = async (req, res) => {
  const filedata = {
    path: req.file.path,
    originalName: req.file.originalname,
  };

  if (req.body.password !== null && req.body.password !== "") {
    filedata.password = await bcrypt.hash(req.body.password, 10);
  }

  try {
    const datafile = await file.create(filedata);

    res.render("index", {
      fileLink: `http://localhost:${process.env.PORT || 4501}/datafile/${
        datafile._id
      }`,
      Link: true,
    });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

export const getData = async (req, res) => {
  try {
    const getFile = await file.findById(req.params.id);

    if (getFile.password != null) {
      if (req.body.password == null) {
        res.render("password");
        return;
      }
    }
    getFile.downloadCount++;
    await getFile.save();
    res.download(getFile.path, getFile.originalName);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
export const validatePassword = async (req, res) => {
  try {
    const getFile = await file.findById(req.params.id);

    if (getFile.password != null) {
      if (req.body.password == null) {
        res.render("password");
        return;
      }
      if (!(await bcrypt.compare(req.body.password, getFile.password))) {
        res.render("password", { error: true });
        return;
      }
    }

    getFile.downloadCount++;
    await getFile.save();
    res.download(getFile.path, getFile.originalName);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
