import {graphql, PageProps, useStaticQuery} from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import CollectionSection from '../components/home/CollectionSection';
import FeaturesSection from '../components/home/FeaturesSection';
import SubscriptionDetails from '../components/SubscriptionDetails';

const IndexPage: React.FC<Pick<PageProps, 'path'>> = ({path}) => {
  const {
    CoffeePressMobileImg: {publicURL: coffeeMobileImg},
    CoffeePressTabletImg: {publicURL: coffeeTabletImg},
    CoffeePressDesktopImg: {publicURL: coffeeDesktopImg},
  } = useStaticQuery(graphql`
    query {
      CoffeePressMobileImg: file(name: {regex: "/coffeepress-mobile/"}) {
        publicURL
      }
      CoffeePressTabletImg: file(name: {regex: "/coffeepress-tablet/"}) {
        publicURL
      }
      CoffeePressDesktopImg: file(name: {regex: "/coffeepress-desktop/"}) {
        publicURL
      }
    }
  `);

  /*
   * TODO: Create a Context in the layout component to pass the following data through to the hero component
   */
  const indexHero = {
    pagePath: path,
    title: 'Great coffee made simple.',
    description:
      'Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.',
    imageSet: {
      base: coffeeMobileImg,
      md: coffeeTabletImg,
      xl: coffeeDesktopImg,
    },
  };

  return (
    <Layout heroData={indexHero}>
      <Seo title="Home" />
      <CollectionSection />
      <FeaturesSection />
      <SubscriptionDetails />
    </Layout>
  );
};

export default IndexPage;
