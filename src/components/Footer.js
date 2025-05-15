// src/components/Footer.js
export default function Footer() {
  return (
    <footer id="contact" className="bg-katchup-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold mb-4">Katchup</h3>
            <p className="text-gray-400 text-sm md:text-base">
              A modern app to help you stay connected with the people who matter most.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#waitlist" className="text-gray-400 hover:text-white">Join Waitlist</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Have questions? Reach out to us at <a href="mailto:hello@katchup.app" className="text-katchup-red hover:underline">hello@katchup.app</a>
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Katchup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}