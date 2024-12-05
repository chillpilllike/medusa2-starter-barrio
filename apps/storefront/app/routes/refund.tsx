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
              <h4 className="text-lg md:text-2xl font-italiana tracking-wider">REFUND POLICY</h4>
              <h1 className="text-4xl md:text-8xl font-italiana tracking-wider [text-shadow:_1px_1px_2px_rgb(0_0_0_/_40%)]">
                Checkout our refund policy!
              </h1>
              <p className="mx-auto text-md md:text-2xl !leading-normal">
                <div class="p-6 sm:p-10 md:p-16 bg-gray-50 text-gray-800">
  <h1 class="text-4xl font-bold mb-6">Overview</h1>
  <p class="mb-6">Thank you for shopping at our store. If you are not entirely satisfied with your purchase, we're here to help. Our products can be returned within 30 days of the original purchase.</p>

  <h2 class="text-2xl font-semibold mb-4">Eligibility for Returns</h2>
  <ul class="list-disc pl-6 space-y-2 mb-6">
    <li>The product was purchased in the last 30 days.</li>
    <li>The product is in its original packaging.</li>
    <li>The product isn't used or damaged.</li>
    <li>You have the receipt or proof of purchase.</li>
  </ul>

  <h2 class="text-2xl font-semibold mb-4">Products that Cannot be Returned</h2>
  <ul class="list-disc pl-6 space-y-2 mb-6">
    <li>Gift cards.</li>
    <li>Downloadable software products.</li>
    <li>Some health and personal care items.</li>
    <li>Any item not in its original condition, damaged, or missing parts for reasons not due to our error.</li>
    <li>Any item that is returned more than 30 days after delivery.</li>
  </ul>

  <h2 class="text-2xl font-semibold mb-4">Initiating a Return</h2>
  <ol class="list-decimal pl-6 space-y-4 mb-6">
    <li>
      <span class="font-semibold">Contact Us:</span> Before sending the product back to us, please contact us:
      <a href="#" class="text-blue-500 underline">By visiting this page on our website: Contact Us</a>
    </li>
    <li>
      <span class="font-semibold">Send the Product:</span> After contacting us, you will be instructed on how and where to send the product. Shipping costs are refundable. If you receive a refund, the cost of return shipping will not be deducted from your refund.
    </li>
  </ol>

  <h2 class="text-2xl font-semibold mb-4">Processing Your Return</h2>
  <p class="mb-6">Upon receiving the product, we will inspect it and notify you that we have received your returned item. We will immediately notify you of the status of your refund after inspecting the item.</p>
  <p class="mb-6">If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain number of days, depending on your card issuer's policies. In some cases, we may refund to your bank account via wire transfer.</p>

  <h2 class="text-2xl font-semibold mb-4">Exchanges (if applicable)</h2>
  <p>If your product is defective or damaged and you need to exchange it for the same item, then contact us 
    <a href="#" class="text-blue-500 underline">Contact us</a> and send your item to the address we provide.
  </p>
</div>

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
          className="min-h-[400px] !max-w-full bg-zinc-400 sm:rounded-3xl p-6 sm:p-10 md:p-[88px] md:px-[88px]"
          content={
            <div className="text-center w-full space-y-9">
              <h4 className="text-lg md:text-2xl font-italiana tracking-wider">REFUND POLICY</h4>
              <h1 className="text-4xl md:text-8xl font-italiana tracking-wider [text-shadow:_1px_1px_2px_rgb(0_0_0_/_40%)]">
                Our Story
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
      

      <Container className="pt-4 flex flex-col gap-16 py-0 sm:!px-16 pb-44">
        <div className="font-italiana text-4xl break-words md:text-6xl lg:text-7xl">
          Find your people, find your <span className="font-ballet text-[150%] leading-tight">Barrio</span>
        </div>
        {locations.map((location) => (
          <Location {...location} />
        ))}
      </Container>
    </>
  );
}
