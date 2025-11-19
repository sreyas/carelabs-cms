import type { Schema, Struct } from '@strapi/strapi';

export interface FeaturesFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_features_feature_items';
  info: {
    displayName: 'featureItem';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface FeaturesServiceFeature extends Struct.ComponentSchema {
  collectionName: 'components_features_service_features';
  info: {
    displayName: 'serviceFeature';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface FooterFooterBottomlink extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_bottomlinks';
  info: {
    displayName: 'footer-bottomlink';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface FooterFooterMenu extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_menus';
  info: {
    displayName: 'footer-menu';
  };
  attributes: {
    links: Schema.Attribute.Component<'footer.menu-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterMenuLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_menu_links';
  info: {
    displayName: 'menu-link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface FooterSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'social-link';
  };
  attributes: {
    icon: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface NavbarNavbarItem extends Struct.ComponentSchema {
  collectionName: 'components_navbar_navbar_items';
  info: {
    displayName: 'navbar-item';
  };
  attributes: {
    badge: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    submenus: Schema.Attribute.Component<'submenus.service-item', true>;
  };
}

export interface NewNewItem extends Struct.ComponentSchema {
  collectionName: 'components_new_new_items';
  info: {
    displayName: 'new-item';
  };
  attributes: {
    btn_link: Schema.Attribute.String;
    btn_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface StatsPerformanceMatrix extends Struct.ComponentSchema {
  collectionName: 'components_stats_performance_matrices';
  info: {
    displayName: 'performance-matrix';
  };
  attributes: {
    name: Schema.Attribute.String;
    stats: Schema.Attribute.String;
  };
}

export interface StatsProjectStat extends Struct.ComponentSchema {
  collectionName: 'components_stats_project_stats';
  info: {
    displayName: 'project-stat';
  };
  attributes: {
    count: Schema.Attribute.Integer;
    countryCount: Schema.Attribute.String;
    countryName: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface StatsStatBox extends Struct.ComponentSchema {
  collectionName: 'components_stats_stat_boxes';
  info: {
    displayName: 'stat-box';
  };
  attributes: {
    label: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

export interface StatsSuccessStat extends Struct.ComponentSchema {
  collectionName: 'components_stats_success_stats';
  info: {
    displayName: 'success-stat';
  };
  attributes: {
    title: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SubmenusServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_submenus_service_items';
  info: {
    displayName: 'serviceItem';
  };
  attributes: {
    Button: Schema.Attribute.String;
    featureheading: Schema.Attribute.String;
    features: Schema.Attribute.Component<'features.feature-item', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'features.feature-item': FeaturesFeatureItem;
      'features.service-feature': FeaturesServiceFeature;
      'footer.footer-bottomlink': FooterFooterBottomlink;
      'footer.footer-menu': FooterFooterMenu;
      'footer.menu-link': FooterMenuLink;
      'footer.social-link': FooterSocialLink;
      'navbar.navbar-item': NavbarNavbarItem;
      'new.new-item': NewNewItem;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
      'stats.performance-matrix': StatsPerformanceMatrix;
      'stats.project-stat': StatsProjectStat;
      'stats.stat-box': StatsStatBox;
      'stats.success-stat': StatsSuccessStat;
      'submenus.service-item': SubmenusServiceItem;
    }
  }
}
