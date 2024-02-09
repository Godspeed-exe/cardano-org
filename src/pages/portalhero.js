import React from "react";
import clsx from "clsx";
import styles from "./portalhero.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function PortalHero({ title, description, bannerType }) {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  // Use bannerType to dynamically change the class for the hero banner
  // styles need to be defined in portalhero.module.css
  let heroClassName;

  switch (bannerType) {
    case 'ada':
      heroClassName = styles.heroBannerAda;
      break;
    case 'dots':
      heroClassName = styles.heroBannerDots;
      break;
    case 'fluid':
      heroClassName = styles.heroBannerFluid;
      break;
    case 'overlap':
        heroClassName = styles.heroBannerOverlap;
        break;
    default:
      heroClassName = styles.heroBannerZoom;
  }

  return (
    <header className={clsx("hero hero--primary", heroClassName)}>
      <div className="container">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{description}</p>
      </div>
    </header>
  );
}

export default PortalHero;