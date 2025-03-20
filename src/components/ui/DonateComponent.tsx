import React from 'react';
import { DonateSection, DonateImage, DonateButton } from './DonateStyles';
import donateImage from '../../assets/donate.png';

interface DonateComponentProps {}

const DonateComponent: React.FC<DonateComponentProps> = () => {
  const imageUrl = donateImage;
  const buttonText = "Donate Now";
  const donateUrl = process.env.REACT_APP_DONATE_URL;
  
  if (!donateUrl) {
    console.warn('Donate URL not configured. Please set REACT_APP_DONATE_URL in your environment variables.');
    return null;
  }

  return (
    <DonateSection>
      <DonateImage src={imageUrl} alt="Donate" />
      <DonateButton href={donateUrl} target="_blank" rel="noopener noreferrer">
        {buttonText}
      </DonateButton>
    </DonateSection>
  );
};

export default DonateComponent;