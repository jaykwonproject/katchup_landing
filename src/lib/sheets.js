import { google } from 'googleapis';

export async function addToGoogleSheet(email) {
  try {
    console.log('Adding email to Google Sheet:', email);
    
    // Set up authentication
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    // Log some debugging info
    console.log('Sheet ID:', process.env.GOOGLE_SHEET_ID);
    console.log('Service account email:', JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY).client_email);
    
    // Important: Get the first sheet's name and ID
    // Since this is a form-connected sheet, it might not be named "Sheet1"
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
    });
    
    // Get the first sheet's properties
    const firstSheet = spreadsheet.data.sheets[0];
    const sheetName = firstSheet.properties.title;
    
    console.log('Sheet name:', sheetName);
    
    // Add row to spreadsheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: `${sheetName}!A:B`, // Use the actual sheet name
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[email, new Date().toISOString()]],
      },
    });
    
    console.log('Google Sheets API response:', response.status);
    return true;
  } catch (error) {
    console.error('Error adding to Google Sheet:', error.message);
    
    // If it's a 404 error, provide more specific debugging help
    if (error.status === 404) {
      console.error('Sheet not found or service account does not have access.');
      console.error('Make sure you have:');
      console.error('1. Correct Sheet ID in your .env.local file');
      console.error('2. Shared the sheet with your service account email');
      console.error('3. Sheet name is correct in your code');
    }
    
    throw error;
  }
}