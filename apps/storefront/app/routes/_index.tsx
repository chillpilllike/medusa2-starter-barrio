import { Container } from '@app/components/common/container';
import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { getMergedPageMeta } from '@libs/util/page';
import Hero from '@app/components/sections/Hero';
import { Image } from '@app/components/common/images/Image';
import { ListItems } from '@app/components/sections/ListItems';
import { SideBySide } from '@app/components/sections/SideBySide';
import { GridCTA } from '@app/components/sections/GridCTA';
import { ActionList } from '@app/components/common/actions-list/ActionList';
import ProductList from '@app/components/sections/ProductList';

export const loader = async (args: LoaderFunctionArgs) => {
  return {};
};

export const meta: MetaFunction<typeof loader> = getMergedPageMeta;

export default function IndexRoute() {
  return (
    <>
      <Hero
        className="h-[800px] !max-w-full -mt-[calc(var(--mkt-header-height)+3rem)] md:-mt-[calc(var(--mkt-header-height-desktop)+2rem)] pt-[var(--mkt-header-height)] md:pt-[var(--mkt-header-height-desktop)]"
        content={
          <div className="text-center w-full space-y-9">
            <h4 className="font-italiana text-2xl">Unique Products</h4>
            <h1 className="text-8xl font-jost">Exceptional Quality & Timely Delivery</h1>
            <p className="max-w-prose mx-auto text-lg">
              
            </p>
          </div>
        }
        actions={[
          {
            label: 'Browse Products',
            url: '/products',
          },
        ]}
        image={{
          url: '/assets/images/nz_banner_2copy.png',
          alt: 'Hero background',
        }}
      />

      <ListItems
        itemsClassName="mb-2"
        title="About our commitments"
        items={[
          {
            title: 'Check Order Status',
            description:
              'Stay informed every step of the way with real-time updates on your order status.',
            image: {
              src: '/assets/images/benefit-1.png',
              alt: 'Check Order Status',
              width: 60,
              height: 60,
            },
          },
          {
            title: '30 Days Return',
            description:
              'Enjoy peace of mind with our 30-day return policy. If you’re not completely satisfied with your purchase, return it within 30 days for a full refund.',
            image: {
              src: '/assets/images/benefit-2.png',
              alt: '30 Days return',
              width: 60,
              height: 60,
            },
          },
          {
            title: '100% Money Back Guarantee',
            description:
              'Shop with confidence! If you’re not completely satisfied with your purchase, we offer a 100% money-back guarantee.',
            image: {
              src: '/assets/images/benefit-3.png',
              alt: 'Money Back',
              width: 60,
              height: 60,
            },
          },
        ]}
      />

      <ProductList
        className="!pb-[100px]"
        heading="Our Blends"
        actions={[
          {
            label: 'View all',
            url: '/products',
          },
        ]}
      />

      <Hero
        className="pb-10 min-h-[734px] !max-w-full"
        content={
          <div className="text-center w-full space-y-9 pt-9">
            <h4 className="font-jost text-2xl">Order & Relax!</h4>
            <h1 className="text-4xl lg:text-7xl font-italiana">
              Sit back, let us take care&nbsp;of&nbsp;your&nbsp;coffee
            </h1>

            <ListItems
              className="text-left w-full text-black justify-between p-0"
              itemsClassName="rounded-3xl bg-highlight-900 p-10 text-sm"
              useFillTitle
              items={[
                {
                  title: 'Place Your Order',
                  description:
                    'Simply choose your items and place your order securely online.',
                },
                {
                  title: 'Dispatch & Track',
                  description:
                    'Your order is dispatched and you can easily track its journey in real-time.',
                },
                {
                  title: 'Delivered to Your Door, enjoy :)',
                  description:
                    'Enjoy fast, reliable delivery right to your doorstep.',
                },
              ]}
            />
          </div>
        }
        actions={[
          {
            label: 'Place your first order',
            url: '/products',
          },
        ]}
        image={{
          url: '/assets/images/barrio-banner.png',
          alt: 'Supplements background',
        }}
      />

      <Container className="flex flex-col-reverse gap-8 items-center md:items-start p-6 lg:pt-24 xl:pt-16 lg:px-24 relative lg:min-h-[354px] min-h-[276px]">
        <div className="flex justify-center md:justify-end md:absolute md:-top-[30%] w-60 md:w-80 md:right-0 lg:right-20 lg:w-[420px]">
          <Image src="/assets/images/header-image-2.png" alt="Barrio background" height={520} width={420} />
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-italiana md:ml-0 md:mr-[288px] lg:mr-[392px]">
          <span className="whitespace-nowrap">The Art of Roasting</span>
          <br />
          <span className="font-ballet text-[200%] whitespace-nowrap inline-block mt-6 mb-4 sm:mt-2 sm:-mb-4">
            at Barrio
          </span>
          <br />
          <span className="whitespace-nowrap">Crafting with Care</span>
        </h2>
      </Container>

      <SideBySide
        className="p-14 md:pt-12 lg:px-24"
        left={
          <div className="w-full h-full flex items-center justify-center">
            <div
              className="bg-cover bg-no-repeat bg-center w-full rounded-3xl h-[410px]"
              style={{
                backgroundImage: 'url(/assets/images/coffee-shop-2.png)',
              }}
            />
          </div>
        }
        right={
          <p className="text-sm h-full flex items-center justify-center">
            At Barrio, our roasting process is a carefully honed craft, combining traditional techniques with a modern,
            sustainable approach. Each batch of coffee is roasted in small quantities to ensure precise control over
            every stage of the process, allowing the unique characteristics of the beans to shine through.
            <br />
            <br />
            We start by selecting high-quality, ethically sourced beans from farmers who share our commitment to
            sustainability and community. The roasting process begins with a slow, even heat that coaxes out the natural
            flavors, developing rich aromas and deep, complex profiles. Every bean undergoes a transformation, revealing
            its distinct notes—whether it's the bright acidity of a light roast, the balanced sweetness of a medium
            roast, or the bold, rich depth of a dark roast.
            <br />
            <br />
            Our goal is to honor the origin of each coffee, preserving its natural flavors while adding our own touch of
            expertise. The result? A perfectly roasted coffee that reflects the heart of our community—vibrant, diverse,
            and full of life. At Barrio, every roast tells a story, and every cup connects you to the hands that
            nurtured it.
          </p>
        }
      />
      <GridCTA
        className="p-14 md:pt-28 lg:pt-24 lg:px-24"
        images={[
          {
            src: '/assets/images/grid-cta-1.png',
            alt: 'Barrio background',
          },
          {
            src: '/assets/images/grid-cta-2.png',
            alt: 'Barrio background',
          },
        ]}
        content={
          <div className="space-y-8 flex flex-col justify-center items-center">
            <h4 className="text-xl font-italiana">FIND YOUR COMMUNITY</h4>
            <h3 className="text-7xl  font-aboreto">BARRIO</h3>
            <p className="text-xl">Ship, Share & Connect Over Coffee</p>
            <ActionList
              actions={[
                {
                  label: 'Subscribe for Events',
                  url: '#',
                },
              ]}
            />
          </div>
        }
      />
    </>
  );
}
