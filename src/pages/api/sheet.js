import { getGoogleSheetData } from "../../app/sheets";

const handler = async(req, res) => {
    const sheetData= await getGoogleSheetData(false);
    res.status(200).json(sheetData);
}

export default handler;