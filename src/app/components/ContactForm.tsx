import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    console.log('Submitted successfully:', result);
  } catch (error) {
    console.error('Submission error:', error);
  }
};


  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 mt-10">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-comic text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 pl-1 block w-full border-1 border-green-600 h-8 text-comic focus:outline-2 focus:outline-red-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 pl-1 block w-full border-red-500 border-1 h-8 focus:outline-2 focus:outline-green-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-400 text-green-600 py-2 px-4 hover:bg-green-700 focus:outline-none focus:outline-none focus:ring-0"
      >
        Submit
      </button>
    </form>
  );
}