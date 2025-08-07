import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="py-10 bg-black text-center">
      <p>&copy; 2023 Dimension. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="#" className="hover:text-gray-300">Privacy</a>
        <a href="#" className="hover:text-gray-300">Terms</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;