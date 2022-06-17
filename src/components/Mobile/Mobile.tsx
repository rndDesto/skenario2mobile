import { FC, memo } from 'react';

import { ContactSections } from './ContactSections/ContactSections';
import { Divider2 } from './Divider2/Divider2';
import { Divider3 } from './Divider3/Divider3';
import { Divider } from './Divider/Divider';
import { FeaturesSection } from './FeaturesSection/FeaturesSection';
import { Footer } from './Footer/Footer';
import { HeroHeaderSection } from './HeroHeaderSection/HeroHeaderSection';
import classes from './Mobile.module.css';
import { NewsletterCTASection } from './NewsletterCTASection/NewsletterCTASection';
import { QuoteSection } from './QuoteSection/QuoteSection';
import { SocialProofSection } from './SocialProofSection/SocialProofSection';

interface Props {
  className?: string;
}
export const Mobile: FC<Props> = memo(function Mobile(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <HeroHeaderSection />
      <SocialProofSection />
      <Divider />
      <QuoteSection />
      <Divider2 />
      <FeaturesSection />
      <Divider3 />
      <ContactSections />
      <NewsletterCTASection />
      <Footer />
    </div>
  );
});
