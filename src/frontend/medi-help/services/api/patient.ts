// services/api/parent.ts
const api_url = 'api/patient'; // The base URL for your API
const base_url = process.env.API_BASE_URL

export interface Patient {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
}

export async function submitFormData(formData: Patient) {
  try {
    debugger
    const response = await fetch(`${base_url + api_url}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form data.');
    }

    return await response.json();
  } catch (error) {
    throw new Error('An error occurred while submitting the form.');
  }
}
export default submitFormData