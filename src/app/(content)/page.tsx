import Hero from '@/components/Hero';
import EmailCTA from '@/components/EmailCTA';
import Faqs from '@/components/Faqs';
import Solution from '@/components/Solution';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { JoinUs } from '@/components/JoinUs';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export default function Home() {
    return (
        <div>
            {GA_TRACKING_ID && <GoogleAnalytics GA_TRACKING_ID={GA_TRACKING_ID} />}
            <Hero />
            <Solution />
            <EmailCTA />
            <Faqs />
            <JoinUs />
        </div>
    );
}
