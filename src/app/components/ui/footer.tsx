import Image from 'next/image'

const Footer = () => {
    return (
      <footer className="bg-blue-900 text-white py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-lg">
                <Image
                    src="/assets/img/logo-nama.png"
                    alt="CV Andita"
                    width={200}
                    height={100}
                />
              </div>
            </div>
            <p className="mt-2">
              Konektivitas Andal,
              <br />
              Performa Maksimal
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="md:text-right text-center space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center mt-4">
          <p className="text-sm copyright mt-4">
            &copy; 2025 ANDITA. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white hover:text-gray-300" title="Instagram">
              <i className="fa-brands fa-instagram"></i>
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-white hover:text-gray-300" title="Email">
              <i className="fa-solid fa-envelope"></i>
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  