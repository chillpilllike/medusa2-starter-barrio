import { useEffect } from 'react';
import { convertToFormData } from '@libs/util/forms/objectToFormData';
import { useFetcher } from '@remix-run/react';
import { Container } from '@app/components/common/container/Container';
import { Select } from '@app/components/common/forms/inputs/Select';
import { URLAwareNavLink } from '@app/components/common/link/URLAwareNavLink';
import { useRegion } from '@app/hooks/useRegion';
import { useRegions } from '@app/hooks/useRegions';
import { useRootLoaderData } from '@app/hooks/useRootLoaderData';
import { useSiteDetails } from '@app/hooks/useSiteDetails';
import clsx from 'clsx';
import { useMemo } from 'react';
import { LogoStoreName } from '@app/components/LogoStoreName/LogoStoreName';
import { NewsletterSubscription } from '@app/components/newsletter/Newsletter';
import { RegionActions } from '@app/routes/api.region';
import { StripeSecurityImage } from '../../images/StripeSecurityImage';
import { SocialIcons } from './SocialIcons';

export const Footer = () => {
  const { footerNavigationItems, settings } = useSiteDetails();
  const rootData = useRootLoaderData();
  const hasProducts = rootData?.hasPublishedProducts;
  const fetcher = useFetcher();
  const { regions } = useRegions();
  const { region } = useRegion();

  const regionOptions = useMemo(() => {
    return regions.map((region) => ({
      label: `${region.name} (${region.currency_code})`,
      value: region.id,
    }));
  }, [regions]);

  const onRegionChange = (regionId: string) => {
    fetcher.submit(
      convertToFormData({
        regionId,
        subaction: RegionActions.CHANGE_REGION,
      }),
      { method: 'post', action: '/api/region' },
    );
  };

  useEffect(() => {
    // Insert Reamaze Loader Script
    const reamazeLoaderScript = document.createElement('script');
    reamazeLoaderScript.type = 'text/javascript';
    reamazeLoaderScript.async = true;
    reamazeLoaderScript.src = 'https://cdn.reamaze.com/assets/reamaze-loader.js';
    document.body.appendChild(reamazeLoaderScript);

    // Insert Reamaze Configuration Script
    const reamazeConfigScript = document.createElement('script');
    reamazeConfigScript.type = 'text/javascript';
    reamazeConfigScript.innerHTML = `
       var _support = _support || { 'ui': {}, 'user': {} };
  _support['account'] = 'lifefuelau';
  _support['ui']['contactMode'] = 'mixed';
  _support['ui']['enableKb'] = 'true';
  _support['ui']['styles'] = {
    widgetColor: 'rgb(228, 44, 32)',
    gradient: true,
  };
  _support['ui']['shoutboxFacesMode'] = 'default';
  _support['ui']['shoutboxHeaderLogo'] = true;
  _support['ui']['widget'] = {
    displayOn: 'all',
    fontSize: 'default',
    allowBotProcessing: true,
    slug: 'lifefuel-au-chat-slash-contact-form-shoutbox-a366f73f6e705b46',
    label: {
      text: 'Let us know if you have any questions! &#128522;',
      mode: "notification",
      delay: 3,
      duration: 30,
      primary: 'I have a question',
      secondary: 'No, thanks',
      sound: true,
    },
    position: 'bottom-right',
    mobilePosition: 'bottom-right'
  };
  _support['apps'] = {
    faq: {"enabled":true},
    recentConversations: {},
    orders: {},
    shopper: {}
  };
    `;
    document.body.appendChild(reamazeConfigScript);

    // Cleanup scripts on unmount
    return () => {
      document.body.removeChild(reamazeLoaderScript);
      document.body.removeChild(reamazeConfigScript);
    };
  }, []);

  return (
    <footer className="bg-accent-50 min-h-[140px] py-8 text-white">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 w-full flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-16">
          <div className="flex w-full flex-col items-center gap-8 sm:w-auto sm:items-start sm:gap-9 sm:col-span-2 lg:col-span-3">
            <div className="flex flex-col gap-5">
              <h4 className="font-bold">Supplements for a Healthier You</h4>
              <p className="text-sm">
                Our store offers a variety of top-quality supplements to support your fitness, health, and wellness.
                From vitamins and minerals to protein powders and more, we have everything you need to achieve your goals.   
                Our products are carefully sourced to deliver the best results, helping you feel your best every day.   
                Whether you’re building strength, boosting immunity, or improving overall wellness, our supplements are here to help you thrive.
              </p>
            </div>
            <LogoStoreName />
          </div>

          <nav
            className={clsx('pt-2', {
              'columns-2 gap-16': footerNavigationItems && footerNavigationItems?.length > 5,
            })}
          >
            <h5 className="font-bold mb-4">Shop</h5>
            {footerNavigationItems?.map(({ id, new_tab, ...navItemProps }) => (
              <URLAwareNavLink
                key={id}
                {...navItemProps}
                newTab={new_tab}
                className="hover:text-slate-200 block pb-2 text-sm"
                prefetch="viewport"
              >
                {navItemProps.label}
              </URLAwareNavLink>
            ))}
          </nav>
          <div className="flex flex-col gap-5 lg:col-span-2">
            <NewsletterSubscription className="mb-4" />

            <SocialIcons siteSettings={settings} />

            <div className="flex flex-col gap-4 mt-4">
              <h5> ABN 28 069 966 859 </h5>
              <p className="text-sm">
                <br />
                <a
                  href="https://market.haus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-start gap-1 text-sm"
                >
                  Made with ❤️ by market.haus
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-md:items-center gap-8 mt-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2 ">
              <Select
                className="!text-base border-1 border-white text-white bg-transparent !shadow-none"
                options={regionOptions}
                defaultValue={region?.id}
                onChange={(e) => {
                  onRegionChange(e.target.value);
                }}
              />
            </div>

            <a>
              © {new Date().getFullYear()} All rights reserved.
            </a>
          </div>
          <div className="mt-1 flex flex-col justify-end text-xs sm:mt-0">
            {hasProducts && <StripeSecurityImage className="mt-2" />}
          </div>
        </div>
      </Container>
    </footer>
  );
};
