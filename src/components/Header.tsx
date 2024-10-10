import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, MessageSquare } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-dark-lighter text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <Scale size={24} className="text-primary" />
          <span className="gradient-text">Czech Law RAG System</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/chat" className="flex items-center space-x-1 hover:text-primary transition-colors">
                <MessageSquare size={18} />
                <span>Chat</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;