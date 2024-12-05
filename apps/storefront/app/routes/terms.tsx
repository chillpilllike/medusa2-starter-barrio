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
          Terms and Conditions
        </h1>

        <section className="text-left space-y-6">
          {/* Acceptance of Terms */}
          <h2 className="text-2xl font-bold">Acceptance of Terms</h2>
          <p className="text-md md:text-xl leading-relaxed">
            By accessing or using this website, you agree to be bound by these Terms and Conditions, our Privacy Policy, and any other policies or agreements referenced herein. If you do not agree with any of these terms, you may not use this website.
          </p>
        </section>

        <section className="text-left space-y-6">
          {/* Use of the Website */}
          <h2 className="text-2xl font-bold">Use of the Website</h2>
          <p className="text-md md:text-xl leading-relaxed">
            You may use this website only for lawful purposes and in accordance with these Terms and Conditions. You agree not to:
          </p>
          <ul className="list-disc pl-6 text-md md:text-xl leading-relaxed">
            <li>Use the website in any way that violates any applicable federal, state, local, or international law or regulation.</li>
            <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website, or which may harm the website or users of the website or expose them to liability.</li>
            <li>Use the website to impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
            <li>Interfere with or disrupt the operation of the website or the servers or networks connected to the website.</li>
          </ul>
        </section>

        <section className="text-left space-y-6">
          {/* Products and Services */}
          <h2 className="text-2xl font-bold">Products and Services</h2>
          <p className="text-md md:text-xl leading-relaxed">
            We attempt to be as accurate as possible in describing our products and services on the website. However, we do not warrant that product descriptions or other content of this website is accurate, complete, reliable, current, or error-free. We reserve the right to modify or discontinue any product or service at any time without notice.
          </p>
        </section>

        <section className="text-left space-y-6">
          {/* Orders and Payments */}
          <h2 className="text-2xl font-bold">Orders and Payments</h2>
          <ul className="list-disc pl-6 text-md md:text-xl leading-relaxed">
            <li>All orders are subject to acceptance and availability.</li>
            <li>We reserve the right to refuse any order for any reason.</li>
            <li>Prices for our products are subject to change without notice.</li>
            <li>Payment for all orders must be made in full at the time of purchase.</li>
            <li>We accept payment by Credit Cards and Online Bank transfer.</li>
          </ul>
        </section>

        <section className="text-left space-y-6">
          {/* Shipping and Delivery */}
          <h2 className="text-2xl font-bold">Shipping and Delivery</h2>
          <ul className="list-disc pl-6 text-md md:text-xl leading-relaxed">
            <li>We will ship your order to the address you provide at checkout.</li>
            <li>Shipping costs will be calculated and displayed at checkout.</li>
            <li>Delivery times may vary depending on your location and the shipping method you choose.</li>
            <li>We are not responsible for any delays or damages caused by the shipping carrier.</li>
          </ul>
        </section>

        <section className="text-left space-y-6">
          {/* Returns and Refunds */}
          <h2 className="text-2xl font-bold">Returns and Refunds</h2>
          <p className="text-md md:text-xl leading-relaxed">
            We offer a 30-day return policy on all products. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging. To initiate a return, please contact our customer service team.
          </p>
        </section>

        <section className="text-left space-y-6">
          {/* User Accounts */}
          <h2 className="text-2xl font-bold">User Accounts</h2>
          <p className="text-md md:text-xl leading-relaxed">
            In order to access certain features of the website, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account information, including your username and password.
          </p>
        </section>

        <section className="text-left space-y-6">
          {/* Disclaimer of Warranties */}
          <h2 className="text-2xl font-bold">Disclaimer of Warranties</h2>
          <p className="text-md md:text-xl leading-relaxed">
            This website and all products and services offered on this website are provided on an "as is" and "as available" basis.
          </p>
        </section>

        <section className="text-left space-y-6">
          {/* Governing Law */}
          <h2 className="text-2xl font-bold">Governing Law</h2>
          <p className="text-md md:text-xl leading-relaxed">
            These Terms and Conditions shall be governed by and construed in accordance with the laws of Australia.
          </p>
        </section>
      </div>
    }
  />
</Container>

      
    </>
  );
}
