import { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState<string>("")


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    setSuccess('Message sent successfully!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-800 shadow-md rounded-lg mt-5">
      <h2 className="text-2xl  text-gray-400 font-bold mb-4 text-center">Contact Us</h2>
      {success&&(<span className='text-green-800 text-2xl '>{success}</span>)}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-400">Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
             placeholder='type your  name'
            className="w-full p-2 border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-400 ">Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder='Type  your email ...'
            className="w-full p-2 border text-gray-800  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-400 ">Message:</label>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
            placeholder='Type  your  message ...'
            className="w-full p-2 border text-gray-800  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
