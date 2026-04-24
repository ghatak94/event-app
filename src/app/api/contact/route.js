import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Log the inquiry to the console (in production, this could be sent to an email service or database)
    console.log('New Event Inquiry Received:', data);

    // Simulate a small delay for realistic UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({ message: 'Inquiry received successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error handling contact form:', error);
    return NextResponse.json({ error: 'Failed to process inquiry' }, { status: 500 });
  }
}
