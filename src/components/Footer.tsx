
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
            <div>
            <span className="text-2xl text-green-800 font-bold">W</span>-Language
              <p className="mt-2 text-gray-400">
                Your go-to app for quick and accurate word definitions, synonyms, and translations.
              </p>
            </div>
  

            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="/support" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="https://www.linkedin.com/in/jeancy-mpoyi002/" className="text-gray-400 hover:text-white">LinkedIn</a></li>
                <li><a href="https://x.com/learnCodin49237" className="text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="https://www.facebook.com/share/1B5QQbxGWP/?mibextid=wwXIfr" className="text-gray-400 hover:text-white">Facebook</a></li>
              </ul>
              <h3 className="text-lg font-semibold mt-4">Contact Us</h3>
              <p className="text-gray-400">Email: jeancympoy24@gmail.com</p>
            </div>
          </div>
  
          {/* Copyright Section */}
          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400">
                  <h4 className="text-lg font-semibold mt-4"> <a href="/policy">Policy</a></h4>
            &copy; {new Date().getFullYear()} Dictionary App. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  