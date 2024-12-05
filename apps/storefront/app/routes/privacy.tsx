import { Container } from '@app/components/common/container';
import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { getMergedPageMeta } from '@libs/util/page';
import Hero from '@app/components/sections/Hero';

const locations: LocationProps[] = [
  {
    title: 'Barrio South Lamar',
    addressLines: ['1105 S. Lamar Blvd', 'Austin, TX 78704'],
    phone: '(512) 906-0010',
    hours: ['Open Daily — 7am to 7pm'],
    imageUrl: '/assets/images/location-1.png',
  },
  {
    title: 'Barrio Sonterra',
    addressLines: ['700 E. Sonterra Blvd. Suite #1113', 'San Antonio, TX 78258'],
    phone: '(210) 530-8740',
    hours: ['Mon thru Fri — 6am to 7pm', 'Sat — 7am to 7pm', 'Sun — 7am to 6pm'],
    imageUrl: '/assets/images/location-2.png',
  },
  {
    title: 'Barrio Deep Ellum',
    addressLines: ['2369 Main Street', 'Dallas, TX 75226'],
    phone: '(469) 248-3440',
    hours: ['Sun thru Thu — 7am to 7pm', 'Fri thru Sat — 7am to 8pm'],
    imageUrl: '/assets/images/location-3.png',
  },
];

export const loader = async (args: LoaderFunctionArgs) => {
  return {};
};

export const meta: MetaFunction<typeof loader> = getMergedPageMeta;

type LocationProps = {
  title: string;
  hours: string[];
  phone: string;
  addressLines: string[];
  imageUrl: string;
};

const Location = ({ title, addressLines, phone, hours, imageUrl }: LocationProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16 text-xl">
      <div className="w-full h-full flex items-center justify-center col-span-2">
        <div
          className="bg-cover bg-no-repeat bg-center w-full rounded-3xl h-72"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
      </div>

      <div className="flex flex-col gap-4 col-span-1 md:justify-center">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div>
          {addressLines.map((line) => (
            <p>{line}</p>
          ))}
          <p>p. {phone}</p>
        </div>
        <div>
          <h4 className="font-bold">Hours</h4>
          {hours.map((hour) => (
            <p>{hour}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function IndexRoute() {
  return (
    <>
     <Container className="!px-0 py-0 sm:!p-16">
  <Hero
    className="min-h-[400px] !max-w-full bg-zinc-400 sm:rounded-3xl p-6 sm:p-10 md:p-[88px] md:px-[88px]"
    content={
      <div className="text-center w-full space-y-9">
        <h1 className="text-4xl md:text-8xl font-italiana tracking-wider [text-shadow:_1px_1px_2px_rgb(0_0_0_/_40%)]">
          Privacy Policy
        </h1>

        {/* Introduction */}
        <section className="text-left space-y-6">
          <h2 className="text-2xl font-bold">Introduction</h2>
          <p className="text-md md:text-xl leading-relaxed">
            At our store, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our online store.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="text-left space-y-6">
          <h2 className="text-2xl font-bold">Information We Collect</h2>
          <ul className="list-disc pl-6 text-md md:text-xl leading-relaxed">
            <li>Contact information (name, email address, phone number)</li>
            <li>Shipping and billing address</li>
            <li>Payment information</li>
            <li>Order history</li>
            <li>Device and browser information</li>
            <li>IP address</li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="text-left space-y-6">
          <h2 className="text-2xl font-bold">How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-md md:text-xl leading-relaxed">
            <li>Process and fulfill your orders</li>
            <li>Provide customer support</li>
            <li>Send you marketing communications (if you've opted in)</li>
            <li>Improve our website and services</li>
            <li>Prevent fraud and protect our store</li>
          </ul>
        </section>

        {/* Sharing Your Information */}
        <section className="text-left space-y-6">
          <h2 className="text-2xl font-bold">Sharing Your Information</h2>
          <ul className="list-disc pl-6 text-md md:text-xl leading-relaxed">
            <li>Third-party service providers who help us operate our store</li>
            <li>Law enforcement or government agencies if required by law</li>
          </ul>
        </section>

        {/* Your Choices */}
        <section className="text-left space-y-6">
          <h2 className="text-2xl font-bold">Your Choices</h2>
          <ul className="list-disc pl-6 text-md md:text-xl leading-relaxed">
            <li>Access, update, or delete your personal information</li>
            <li>Opt out of marketing communications</li>
          </ul>
        </section>

        {/* Security */}
        <section className="text-left space-y-6">
          <h2 className="text-2xl font-bold">Security</h2>
          <p className="text-md md:text-xl leading-relaxed">
            We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>
        </section>

        {/* Children's Privacy */}
        <section className="text-left space-y-6">
          <h2 className="text-2xl font-bold">Children's Privacy</h2>
          <p className="text-md md:text-xl leading-relaxed">
            Our store is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        {/* Changes to this Privacy Policy */}
        <section className="text-left space-y-6">
          <h2 className="text-2xl font-bold">Changes to this Privacy Policy</h2>
          <p className="text-md md:text-xl leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
        </section>

        {/* Contact Us */}
        <section className="text-left space-y-6">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="text-md md:text-xl leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us.
          </p>
        </section>
      </div>
    }
  />
</Container>


    </>
  );
}
