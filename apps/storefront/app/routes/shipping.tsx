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
          Shipping Policy
        </h1>

        {/* Introduction */}
        <section className="text-left space-y-6">
          <p className="text-md md:text-xl leading-relaxed">
            We strive to get your orders to you as quickly and efficiently as possible. Please review our shipping policy below for important information regarding shipping times, costs, and procedures.
          </p>
        </section>

        {/* Shipping Methods and Costs */}
        <section className="text-left space-y-6">
          <h2 className="text-2xl font-bold">Shipping Methods and Costs</h2>
          <p className="text-md md:text-xl leading-relaxed">
            We offer the following shipping methods:
          </p>
          <ul className="list-disc pl-6 text-md md:text-xl leading-relaxed">
            <li>Standard Shipping: 7-12 Days</li>
            <li>Express Shipping: 3-7 Days</li>
          </ul>
          <p className="text-md md:text-xl leading-relaxed">
            Shipping costs are calculated based on the weight of your order and your shipping destination. You will be able to see the exact shipping cost during checkout before you complete your purchase. Sometimes the product's weight may be calculated based on the product dimensions and courier services charge differently.
          </p>
        </section>

        {/* Processing Time */}
        <section className="text-left space-y-6">
          <h2 className="text-2xl font-bold">Processing Time</h2>
          <p className="text-md md:text-xl leading-relaxed">
            Orders are typically processed within 2-5 business days of being placed. Please note that processing times may be longer during peak periods or holidays.
          </p>
        </section>

        {/* Order Tracking */}
        <section className="text-left space-y-6">
          <h2 className="text-2xl font-bold">Order Tracking</h2>
          <p className="text-md md:text-xl leading-relaxed">
            Once your order has been shipped, you will receive a shipping confirmation email with a tracking number. You can use this tracking number to track the progress of your shipment.
          </p>
        </section>

        {/* International Shipping */}
        <section className="text-left space-y-6">
          <h2 className="text-2xl font-bold">International Shipping</h2>
          <p className="text-md md:text-xl leading-relaxed">
            We currently offer international shipping to selective countries. Please note that international shipments may be subject to customs duties and taxes, which are the responsibility of the recipient.
          </p>
        </section>

        {/* Contact Us */}
        <section className="text-left space-y-6">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="text-md md:text-xl leading-relaxed">
            For any query related to shipping, you can contact us via our chat support.
          </p>
        </section>
      </div>
    }
  />
</Container>

     
    </>
  );
}
