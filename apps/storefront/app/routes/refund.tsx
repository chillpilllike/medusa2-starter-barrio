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
          className="min-h-[400px] !max-w-full bg-accent-50 sm:rounded-3xl p-6 sm:p-10 md:p-[88px] md:px-[88px]"
          content={
            <div className="text-center w-full space-y-9">
              <h4 className="text-lg md:text-2xl font-italiana tracking-wider"> </h4>
              <h1 className="text-4xl md:text-8xl font-italiana tracking-wider [text-shadow:_1px_1px_2px_rgb(0_0_0_/_40%)]">
                REFUND POLICY
              </h1>
              <p className="mx-auto text-md md:text-2xl !leading-normal">
                At Barrio Coffee Roastery, we’re more than just a coffee business—we’re a community. Inspired by the
                essence of a "barrio," a close-knit neighborhood where people gather, share, and connect, we aim to
                bring that sense of belonging and warmth to every cup of coffee we roast. From the moment we started,
                our passion has been to create exceptional coffee that{' '}
                <span className="font-bold">brings people together, one sip at a time.</span>
              </p>
            </div>
          }
          actionsClassName="!flex-row w-full justify-center !font-base"
          actions={[
            {
              label: 'Shop Our Coffee',
              url: '/products',
            },
            {
              label: 'Join the Barrio Community',
              url: '#',
            },
          ]}
        />
      </Container>

       <Container className="!px-0 py-0 sm:!p-16">
        <Hero
          className="min-h-[400px] !max-w-full bg-accent-50 sm:rounded-3xl p-6 sm:p-10 md:p-[88px] md:px-[88px]"
          content={
            <div className="text-center w-full space-y-9">
              <h4 className="text-lg md:text-2xl font-jost tracking-wider">Eligibility for Returns</h4>
              <h1 className="text-4xl md:text-8xl font-jost tracking-wider [text-shadow:_1px_1px_2px_rgb(0_0_0_/_40%)]">
                
              </h1>
              <p className="mx-auto text-md md:text-2xl !leading-normal">
                To qualify for a return, please make sure that:<br />
                The product was purchased in the last 30 days.<br />
                The product is in its original packaging.<br />
                The product isn't used or damaged.<br />
                You have the receipt or proof of purchase.
              </p>
            </div>
          }
        />
      </Container>


        <Container className="!px-0 py-0 sm:!p-16">
        <Hero
          className="min-h-[400px] !max-w-full bg-accent-50 sm:rounded-3xl p-6 sm:p-10 md:p-[88px] md:px-[88px]"
          content={
            <div className="text-center w-full space-y-9">
              <h4 className="text-lg md:text-2xl font-jost tracking-wider">Products that Cannot be Returned</h4>
              <h1 className="text-4xl md:text-8xl font-jost tracking-wider [text-shadow:_1px_1px_2px_rgb(0_0_0_/_40%)]">
                
              </h1>
              <p className="mx-auto text-md md:text-2xl !leading-normal">
                Some items are not eligible for returns, including:<br />
          Gift cards.<br />
          Downloadable software products.<br />
          Some health and personal care items.<br />
          Any item not in its original condition, damaged, or missing parts for reasons not due to our error.<br />
          Any item that is returned more than 30 days after delivery.
              </p>
            </div>
          }
        />
      </Container>

      <Container className="!px-0 py-0 sm:!p-16">
  <Hero
    className="min-h-[400px] !max-w-full bg-accent-50 sm:rounded-3xl p-6 sm:p-10 md:p-[88px] md:px-[88px]"
    content={
      <div className="text-center w-full space-y-9">
        <h4 className="text-lg md:text-2xl font-jost tracking-wider">Initiating a Return</h4>
        <h1 className="text-4xl md:text-8xl font-jost tracking-wider [text-shadow:_1px_1px_2px_rgb(0_0_0_/_40%)]">
          
        </h1>
        <p className="mx-auto text-md md:text-2xl !leading-normal">
          <strong>Contact Us:</strong> Before sending the product back to us, please contact us:<br />
          By visiting this page on our website: <a href="/contact" className="text-blue-600 underline">Contact Us</a><br />
          <strong>Send the Product:</strong> After contacting us, you will be instructed on how and where to send the product. Shipping costs are refundable. If you receive a refund, the cost of return shipping will not be deducted from your refund.
        </p>
      </div>
    }
  />
</Container>
      

      <Container className="!px-0 py-0 sm:!p-16">
  <Hero
    className="min-h-[400px] !max-w-full bg-accent-50 sm:rounded-3xl p-6 sm:p-10 md:p-[88px] md:px-[88px]"
    content={
      <div className="text-center w-full space-y-9">
        <h4 className="text-lg md:text-2xl font-italiana tracking-wider">Processing Your Return</h4>
        <h1 className="text-4xl md:text-8xl font-italiana tracking-wider [text-shadow:_1px_1px_2px_rgb(0_0_0_/_40%)]">
          
        </h1>
        <p className="mx-auto text-md md:text-2xl !leading-normal">
          Upon receiving the product, we will inspect it and notify you that we have received your returned item.<br />
          We will immediately notify you of the status of your refund after inspecting the item.<br /><br />
          If your return is approved, we will initiate a refund to your credit card (or original method of payment).<br />
          You will receive the credit within a certain number of days, depending on your card issuer's policies.<br />
          In some cases, we may refund to your bank account via wire transfer.
        </p>
      </div>
    }
  />
</Container>


      <Container className="!px-0 py-0 sm:!p-16">
  <Hero
    className="min-h-[400px] !max-w-full bg-accent-50 sm:rounded-3xl p-6 sm:p-10 md:p-[88px] md:px-[88px]"
    content={
      <div className="text-center w-full space-y-9">
        <h4 className="text-lg md:text-2xl font-italiana tracking-wider">Exchanges (if applicable)</h4>
        <h1 className="text-4xl md:text-8xl font-italiana tracking-wider [text-shadow:_1px_1px_2px_rgb(0_0_0_/_40%)]">
          
        </h1>
        <p className="mx-auto text-md md:text-2xl !leading-normal">
          If your product is defective or damaged and you need to exchange it for the same item, then contact us.<br />
          <a href="/contact-us" className="text-blue-500 underline">Contact us</a> and send your item to the address we provide.
        </p>
      </div>
    }
  />
</Container>

      <Container className="!px-0 py-0 sm:!p-16">
  <Hero
    className="min-h-[400px] !max-w-full bg-accent-50 sm:rounded-3xl p-6 sm:p-10 md:p-[88px] md:px-[88px]"
    content={
      <div className="text-center w-full space-y-9">
        <h4 className="text-lg md:text-2xl font-inter tracking-wider">Contact Us</h4>
        <h1 className="text-4xl md:text-8xl font-inter tracking-wider [text-shadow:_1px_1px_2px_rgb(0_0_0_/_40%)]">
           
        </h1>
        <p className="mx-auto text-md md:text-2xl !leading-normal">
          If you have any questions about our Refund Policy, please contact us:<br />
          By visiting this page on our website: <a href="/contact-us" className="text-blue-500 underline">Contact us</a><br />
          By online chat support. Click the chat button at the bottom left of every page.
        </p>
      </div>
    }
      actionsClassName="!flex-row w-full justify-center !font-base"
          actions={[
            {
              label: 'Contact us',
              url: '/contact',
            },
            {
              label: 'Shop',
              url: '/products',
            },
          ]}
  />
</Container>
    </>
  );
}
