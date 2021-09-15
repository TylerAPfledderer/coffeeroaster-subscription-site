import Layout from '../components/layout';
import Seo from '../components/seo';
import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import SubscriptionDetails from '../components/SubscriptionDetails';
import SubscribeForm from '../components/subscribe/SubscribeForm';

const SubscribePage: React.FC = () => {
  const {
    BlackcupMobileImg: {publicURL: blackcupMobileImg},
    BlackcupTabletImg: {publicURL: blackcupTabletImg},
    BlackcupDesktopImg: {publicURL: blackcupDesktopImg},
  } = useStaticQuery(graphql`
    query {
      BlackcupMobileImg: file(name: {regex: "/blackcup-mobile/"}) {
        publicURL
      }
      BlackcupTabletImg: file(name: {regex: "/blackcup-tablet/"}) {
        publicURL
      }
      BlackcupDesktopImg: file(name: {regex: "/blackcup-desktop/"}) {
        publicURL
      }
    }
  `);

  const subscribeHeroData = {
    title: 'Create a plan',
    description:
      'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.',
    imageSet: {base: blackcupMobileImg, md: blackcupTabletImg, xl: blackcupDesktopImg},
  };
  return (
    <Layout heroData={subscribeHeroData}>
      <Seo title="Subscribe" />
      <SubscriptionDetails onSubscribePage />
      <SubscribeForm />
    </Layout>
  );
};

export default SubscribePage;
