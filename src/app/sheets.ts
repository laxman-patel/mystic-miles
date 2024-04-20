import { google } from "googleapis";

export async function getGoogleSheetData(isCustomers: Boolean) {
    try {
        const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
        const jwt = new google.auth.JWT(
            process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
            undefined,
            process.env.GOOGLE_SHEETS_PRIVATE_KEY!.split(String.raw`\n`).join('\n'),
            scopes
        )

        const sheets = google.sheets({version:'v4', auth: jwt});
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: isCustomers ? "customers" : "catalog"
        });
        
        return response.data.values
    } catch(err) {
        console.log(err);
    }
}

