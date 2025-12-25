import axios from "axios";

const base_url = "http://localhost:8000/api/names";

const axiosConfig = axios.create({
  baseURL: base_url,
  headers: { "Content-Type": "application/json" },
});

export const addNewName = async(name) =>{
    const res = await axiosConfig.post("",{name});
    if(!res.data.success) throw new Error(res.data.message || "Failed to add new name");
    return res.data;
};

export const getAllNames = async () => {
    const res = await axiosConfig.get("");
    if(!res.data.success) throw new Error("Failed to fetch names");
    return res.data;
}

