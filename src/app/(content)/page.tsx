import Hero from '@/components/Hero';
import Faqs from '@/components/Faqs';
import Solution from '@/components/Solution';
import EmailCTA from '@/components/EmailCTA';
import { JoinUs } from '@/components/JoinUs';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export default function Home() {
    return (
        <div>
            {GA_TRACKING_ID && <GoogleAnalytics GA_TRACKING_ID={GA_TRACKING_ID} />}
            <Hero />
            <EmailCTA />
            <Solution />
            <Faqs />
            <JoinUs />
        </div>
    );
}
