
import React from 'react';
import { ContactInfo } from '../../types';
import { LinkedInIcon, MailIcon, PhoneIcon } from '../ui/Icons';

interface ContactFooterProps {
  contact: ContactInfo;
  declaration: string;
  name: string;
}

const ContactFooter: React.FC<ContactFooterProps> = ({ contact, declaration, name }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-12 text-slate-400 text-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-slate-200 mb-4">Get in Touch</h3>
          <div className="flex justify-center space-x-6 mb-4">
            <a href={`mailto:${contact.email}`} className="hover:text-blue-400 transition-colors" aria-label="Email">
              <MailIcon className="w-6 h-6" />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
              <LinkedInIcon className="w-6 h-6" />
            </a>
            <a href={`tel:${contact.phone}`} className="hover:text-blue-400 transition-colors" aria-label="Phone">
              <PhoneIcon className="w-6 h-6" />
            </a>
          </div>
          <p>{contact.email}</p>
          <p>{contact.linkedinDisplay}</p>
          <p>{contact.phone}</p>
        </div>
        
        <div className="mb-6">
          <p className="italic max-w-2xl mx-auto">{declaration}</p>
        </div>
        
        <div className="border-t border-slate-700 pt-6">
          <p>&copy; {currentYear} {name}. All rights reserved.</p>
          <p className="mt-1 text-xs">Designed with <span className="text-blue-500">&hearts;</span> and React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
