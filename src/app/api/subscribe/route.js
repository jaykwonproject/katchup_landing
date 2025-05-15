import { addToGoogleSheet } from '@/lib/sheets';

export async function POST(request) {
  try {
    const { email } = await request.json();
    
    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return Response.json({ message: 'Invalid email address' }, { status: 400 });
    }
    
    // Add to Google Sheets
    const result = await addToGoogleSheet(email);
    
    if (result) {
      return Response.json({ message: 'Successfully added to waitlist' });
    } else {
      return Response.json({ message: 'Failed to add to waitlist' }, { status: 500 });
    }
    
  } catch (error) {
    console.error('Subscription error:', error);
    return Response.json(
      { message: 'Failed to join waitlist' }, 
      { status: 500 }
    );
  }
}