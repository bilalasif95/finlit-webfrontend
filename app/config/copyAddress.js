import { useState } from 'react';

export const useCopyAddress = () => {
  const [copyText, setCopiedText] = useState('');

  // Method for copy address and take address as a param
  const CopyContactAddress = address => {
    if (window.isSecureContext) {
      navigator.clipboard
        .writeText(address)
        .then(() => {
          setCopiedText(address);
          setTimeout(() => {
            setCopiedText('');
          }, 1500);
        })
        .catch(() => {});
    }
  };

  return [copyText, CopyContactAddress];
};
