import Hero from '@/components/Hero';
import Faqs from '@/components/Faqs';
import Solution from '@/components/Solution';
import EmailCTA from '@/components/EmailCTA';
import { JoinUs } from '@/components/JoinUs';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Testimonials from '@/components/Testimonials';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export default function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    if (searchParams?.source === 'insta') {
        return (
            <div>
                {GA_TRACKING_ID && <GoogleAnalytics GA_TRACKING_ID={GA_TRACKING_ID} />}
                <EmailCTA urlParam={searchParams} />
            </div>
        );
    }

    if (searchParams?.source === 'linkedin') {
        return (
            <div>
                {GA_TRACKING_ID && <GoogleAnalytics GA_TRACKING_ID={GA_TRACKING_ID} />}
                <EmailCTA urlParam={searchParams} />
            </div>
        );
    }

    return (
        <div>
            {GA_TRACKING_ID && <GoogleAnalytics GA_TRACKING_ID={GA_TRACKING_ID} />}
            <Hero />
            <EmailCTA />
            <Solution />
            <Testimonials />
            <Faqs />
            <JoinUs />
        </div>
    );
}
