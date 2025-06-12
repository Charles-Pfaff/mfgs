import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log('Sending body:', body);

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwJ82Ddk2kbTsho9qNWcOwPFT_No9LRxOR6Sx1f1UGBlO2nSEs-qCGH0DKon1plzDNs/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

if (!response.ok) {
  const errorText = await response.text();
  console.error('Google Script response failed:', response.status, errorText);
  return NextResponse.json({ error: 'Google Script responded with an error', details: errorText }, { status: response.status });
}
    const text = await response.text();
console.log('Google Script returned status:', response.status);
console.log('Google Script returned body:', text);
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { message: text }; // fallback if response is plain text
    }

    return NextResponse.json({ result: data });
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json({ error: 'Failed to submit to Google Sheets' }, { status: 500 });
  }
}