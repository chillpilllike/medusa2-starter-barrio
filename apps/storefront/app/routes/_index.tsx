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
            <h4 className="font-jost text-2xl"> </h4>
            <h1 className="text-8xl font-jost"> </h1>
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
        heading="Our Collections"
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
            <h1 className="text-4xl lg:text-7xl font-jost">
              Sit back, let us take care&nbsp;of&nbsp;your&nbsp;health
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
          <Image src="/assets/images/supplements_pills.png" alt="Barrio background" height={520} width={420} />
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-italiana md:ml-0 md:mr-[288px] lg:mr-[392px]">
          <span className="whitespace-nowrap">Discover</span>
          <br />
          <span className="font-italiana text-[200%] whitespace-nowrap inline-block mt-6 mb-4 sm:mt-2 sm:-mb-4">
            Premium Products
          </span>
          <br />
          <span className="whitespace-nowrap">for Every Lifestyle</span>
        </h2>
      </Container>

      <SideBySide
        className="p-14 md:pt-12 lg:px-24"
        left={
          <div className="w-full h-full flex items-center justify-center">
            <div
              className="bg-cover bg-no-repeat bg-center w-full rounded-3xl h-[410px]"
              style={{
                backgroundImage: 'url(/assets/images/secretgreen_1.png)',
              }}
            />
          </div>
        }
        right={
          <p className="text-sm h-full flex items-center justify-center">
            Welcome to your go-to destination for a diverse selection of top-quality products from trusted brands. We are dedicated to offering a curated collection of items designed to meet your needs, whether you’re looking to enhance your lifestyle, improve your wellness, or simply find everyday essentials.
            <br />
            <br />
            Our extensive range includes everything from health and wellness products to fashion, home goods, and fitness essentials. Each item is thoughtfully sourced from reputable brands that prioritize quality, ensuring you get the best in performance, durability, and style..
            <br />
            <br />
            We pride ourselves on delivering only the highest-quality products, rigorously tested and selected to meet industry standards. Whether you’re shopping for self-care, home improvement, or the latest trends, our store is here to help you find exactly what you need.
            <br />
            <br />
            More than just a store, we’re your trusted partner in providing a seamless shopping experience. Browse our collection today and discover the difference of shopping with a marketplace committed to excellence and variety!
          </p>
        }
      />

      <ProductList
        className="!pb-[100px]"
        heading="Our Collections"
        actions={[
          {
            label: 'View all',
            url: '/products',
          },
        ]}
      />
      
      <GridCTA
        className="p-14 md:pt-28 lg:pt-24 lg:px-24"
        images={[
          {
            src: '/assets/images/grid-cta-1.png',
            alt: 'Store background',
          },
          {
            src: '/assets/images/pills_plate.jpg',
            alt: 'Supplements background',
          },
        ]}
        content={
          <div className="space-y-8 flex flex-col justify-center items-center">
            <h4 className="text-xl font-jost">Unique Products,</h4>
            <h3 className="text-7xl  font-jost">Exceptional Quality</h3>
            <p className="text-xl">Fast Ship, Timely Delivery</p>
            <ActionList
              actions={[
                {
                  label: 'Shop Now',
                  url: '/products',
                },
              ]}
            />
          </div>
        }
      />
    </>
  );
}
