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

export interface IndustryClients extends Struct.ComponentSchema {
  collectionName: 'components_industry_clients';
  info: {
    displayName: 'Clients';
  };
  attributes: {
    Clients_name: Schema.Attribute.Component<'industry.clients-name', true>;
    title: Schema.Attribute.String;
  };
}

export interface IndustryClientsName extends Struct.ComponentSchema {
  collectionName: 'components_industry_clients_names';
  info: {
    displayName: 'Clients_name';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface IndustryComponentsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_industry_components_features';
  info: {
    displayName: 'components_features';
  };
  attributes: {
    color: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface IndustryIndustryCategories extends Struct.ComponentSchema {
  collectionName: 'components_industry_industry_categories';
  info: {
    displayName: 'Industry-categories';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface IndustryKeyIndustries extends Struct.ComponentSchema {
  collectionName: 'components_industry_key_industries';
  info: {
    displayName: 'key_industries';
  };
  attributes: {
    highlight_color: Schema.Attribute.String;
    highlight_text: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    key_features: Schema.Attribute.Component<'insights.key-features', true>;
    title: Schema.Attribute.String;
  };
}

export interface IndustryPartners extends Struct.ComponentSchema {
  collectionName: 'components_industry_partners';
  info: {
    displayName: 'Partners';
  };
  attributes: {
    description: Schema.Attribute.Text;
    Partners_names: Schema.Attribute.Component<'industry.partners-names', true>;
    Recenttitle: Schema.Attribute.String;
    title: Schema.Attribute.RichText;
  };
}

export interface IndustryPartnersNames extends Struct.ComponentSchema {
  collectionName: 'components_industry_partners_names';
  info: {
    displayName: 'Partners_names';
  };
  attributes: {
    countryName: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

export interface InsightsArticleItems extends Struct.ComponentSchema {
  collectionName: 'components_insights_article_items';
  info: {
    displayName: 'article-items';
  };
  attributes: {
    order: Schema.Attribute.Integer;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface InsightsArticleSection extends Struct.ComponentSchema {
  collectionName: 'components_insights_article_sections';
  info: {
    displayName: 'article-section';
  };
  attributes: {
    articleItems: Schema.Attribute.Component<'insights.article-items', true>;
    title: Schema.Attribute.String;
  };
}

export interface InsightsCategory extends Struct.ComponentSchema {
  collectionName: 'components_insights_categories';
  info: {
    displayName: 'category';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface InsightsChallenges extends Struct.ComponentSchema {
  collectionName: 'components_insights_challenges';
  info: {
    displayName: 'Challenges';
  };
  attributes: {
    ChallengesItems: Schema.Attribute.Component<
      'insights.challenges-items',
      true
    >;
    conclusion: Schema.Attribute.Text;
    introduction: Schema.Attribute.Text;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.RichText;
  };
}

export interface InsightsChallengesItems extends Struct.ComponentSchema {
  collectionName: 'components_insights_challenges_items';
  info: {
    displayName: 'ChallengesItems';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface InsightsHowtoGetStarted extends Struct.ComponentSchema {
  collectionName: 'components_insights_howto_get_starteds';
  info: {
    displayName: 'HowtoGetStarted';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagetext: Schema.Attribute.Text;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.RichText;
  };
}

export interface InsightsKeyBuildingBlocks extends Struct.ComponentSchema {
  collectionName: 'components_insights_key_building_blocks';
  info: {
    displayName: 'KeyBuildingBlocks';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagetext: Schema.Attribute.Text;
    KeyBuildingBlocksItems: Schema.Attribute.Component<
      'insights.key-building-blocks-items',
      true
    >;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.RichText;
  };
}

export interface InsightsKeyBuildingBlocksItems extends Struct.ComponentSchema {
  collectionName: 'components_insights_key_building_blocks_items';
  info: {
    displayName: 'KeyBuildingBlocksItems';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    icon: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface InsightsKeyFeatures extends Struct.ComponentSchema {
  collectionName: 'components_insights_key_features';
  info: {
    displayName: 'key_features';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface InsightsRealWorld extends Struct.ComponentSchema {
  collectionName: 'components_insights_real_worlds';
  info: {
    displayName: 'RealWorld';
  };
  attributes: {
    RealWorldItems: Schema.Attribute.Component<
      'insights.real-world-items',
      true
    >;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.RichText;
  };
}

export interface InsightsRealWorldItems extends Struct.ComponentSchema {
  collectionName: 'components_insights_real_world_items';
  info: {
    displayName: 'RealWorldItems';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    icon: Schema.Attribute.String;
    result: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface InsightsRelatedArticleItems extends Struct.ComponentSchema {
  collectionName: 'components_insights_related_article_items';
  info: {
    displayName: 'RelatedArticleItems';
  };
  attributes: {
    category: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    link: Schema.Attribute.String;
    readicon: Schema.Attribute.String;
    readtext: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface InsightsTheRoadAhead extends Struct.ComponentSchema {
  collectionName: 'components_insights_the_road_aheads';
  info: {
    displayName: 'TheRoadAhead';
  };
  attributes: {
    conclusion: Schema.Attribute.Text;
    content: Schema.Attribute.RichText;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.RichText;
  };
}

export interface InsightsWhatAiPoweredPredictive
  extends Struct.ComponentSchema {
  collectionName: 'components_insights_what_ai_powered_predictives';
  info: {
    displayName: 'WhatAI-PoweredPredictive';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagetext: Schema.Attribute.Text;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface InsightsWhyTraditionalItems extends Struct.ComponentSchema {
  collectionName: 'components_insights_why_traditional_items';
  info: {
    displayName: 'WhyTraditionalItems';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface InsightsWhyTraditionalMaintenance
  extends Struct.ComponentSchema {
  collectionName: 'components_insights_why_traditional_maintenances';
  info: {
    displayName: 'whyTraditionalMaintenance';
  };
  attributes: {
    conclusion: Schema.Attribute.Text;
    introduction: Schema.Attribute.RichText;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.RichText;
    WhyTraditionalItems: Schema.Attribute.Component<
      'insights.why-traditional-items',
      true
    >;
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

export interface OurteamDrivesUs extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_drives_uses';
  info: {
    displayName: 'Drives-Us';
  };
  attributes: {
    Drives_Us_Items: Schema.Attribute.Component<
      'ourteam.drives-us-items',
      true
    >;
    title: Schema.Attribute.RichText;
  };
}

export interface OurteamDrivesUsItems extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_drives_us_items';
  info: {
    displayName: 'Drives-Us-Items';
  };
  attributes: {
    Drives_Us_subItems: Schema.Attribute.Component<
      'ourteam.drives-us-sub-items',
      true
    >;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface OurteamDrivesUsSubItems extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_drives_us_sub_items';
  info: {
    displayName: 'Drives-Us-subItems';
  };
  attributes: {
    points: Schema.Attribute.Text;
  };
}

export interface OurteamGuiding extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_guidings';
  info: {
    displayName: 'Guiding';
  };
  attributes: {
    description: Schema.Attribute.Text;
    Guiding_Items: Schema.Attribute.Component<'ourteam.guiding-items', true>;
    title: Schema.Attribute.RichText;
  };
}

export interface OurteamGuidingItems extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_guiding_items';
  info: {
    displayName: 'Guiding_Items';
  };
  attributes: {
    description: Schema.Attribute.Text;
    hovertext: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface OurteamHowWePartner extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_how_we_partners';
  info: {
    displayName: 'How_We_Partner';
  };
  attributes: {
    description: Schema.Attribute.Text;
    How_We_Partner_Items: Schema.Attribute.Component<
      'ourteam.how-we-partner-items',
      true
    >;
    title: Schema.Attribute.RichText;
  };
}

export interface OurteamHowWePartnerItems extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_how_we_partner_items';
  info: {
    displayName: 'How_We_Partner_Items';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    step: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface OurteamImages extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_images';
  info: {
    displayName: 'images';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
  };
}

export interface OurteamMilestones extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_milestones';
  info: {
    displayName: 'Milestones';
  };
  attributes: {
    description: Schema.Attribute.Text;
    Milestones_Items: Schema.Attribute.Component<
      'ourteam.milestones-items',
      true
    >;
    title: Schema.Attribute.RichText;
  };
}

export interface OurteamMilestonesItems extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_milestones_items';
  info: {
    displayName: 'Milestones_Items';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface OurteamOurteamStats extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_ourteam_stats';
  info: {
    displayName: 'ourteam-stats';
  };
  attributes: {
    label: Schema.Attribute.String;
    stats: Schema.Attribute.String;
  };
}

export interface OurteamReadyToTalk extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_ready_to_talks';
  info: {
    displayName: 'Ready_to_Talk';
  };
  attributes: {
    description: Schema.Attribute.Text;
    Ready_to_Talk_buttons: Schema.Attribute.Component<
      'ourteam.ready-to-talk-buttons',
      true
    >;
    title: Schema.Attribute.RichText;
  };
}

export interface OurteamReadyToTalkButtons extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_ready_to_talk_buttons';
  info: {
    displayName: 'Ready_to_Talk_buttons';
  };
  attributes: {
    icon: Schema.Attribute.String;
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface OurteamRecognitions extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_recognitions';
  info: {
    displayName: 'Recognitions';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    Recognitions_Item1: Schema.Attribute.Component<
      'ourteam.recognitions-item1',
      true
    >;
    Recognitions_Item2: Schema.Attribute.Component<
      'ourteam.recognitions-item2',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface OurteamRecognitionsItem1 extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_recognitions_item1s';
  info: {
    displayName: 'Recognitions_Item1';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface OurteamRecognitionsItem2 extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_recognitions_item2s';
  info: {
    displayName: 'Recognitions_Item2';
  };
  attributes: {
    countryyear: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface OurteamSnapshot extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_snapshots';
  info: {
    displayName: 'snapshot';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    snapshot_stats: Schema.Attribute.Component<'ourteam.snapshot-stats', true>;
    title: Schema.Attribute.RichText;
  };
}

export interface OurteamSnapshotStats extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_snapshot_stats';
  info: {
    displayName: 'snapshot-stats';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    stats: Schema.Attribute.String;
  };
}

export interface OurteamTeamsInAction extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_teams_in_actions';
  info: {
    displayName: 'Teams_in_Action';
  };
  attributes: {
    description: Schema.Attribute.Text;
    Teams_in_Action_Items: Schema.Attribute.Component<
      'ourteam.teams-in-action-items',
      true
    >;
    title: Schema.Attribute.RichText;
  };
}

export interface OurteamTeamsInActionItems extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_teams_in_action_items';
  info: {
    displayName: 'Teams_in_Action_Items';
  };
  attributes: {
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Teams_in_Action_Points: Schema.Attribute.Component<
      'ourteam.teams-in-action-points',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface OurteamTeamsInActionPoints extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_teams_in_action_points';
  info: {
    displayName: 'Teams_in_Action_Points';
  };
  attributes: {
    points: Schema.Attribute.Text;
  };
}

export interface OurteamWhatItFeels extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_what_it_feels';
  info: {
    displayName: 'What_it_feels';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.RichText;
    What_it_feels_gallery: Schema.Attribute.Component<
      'ourteam.what-it-feels-gallery',
      true
    >;
  };
}

export interface OurteamWhatItFeelsGallery extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_what_it_feels_galleries';
  info: {
    displayName: 'What_it_feels_gallery';
  };
  attributes: {
    hovertext: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface OurteamWhereYouWork extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_where_you_works';
  info: {
    displayName: 'Where_you_work';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.RichText;
    viewLink: Schema.Attribute.String;
    viewText: Schema.Attribute.String;
    Where_you_work_Items: Schema.Attribute.Component<
      'ourteam.where-you-work-items',
      true
    >;
  };
}

export interface OurteamWhereYouWorkCountries extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_where_you_work_countries';
  info: {
    displayName: 'Where_you_work_countries';
  };
  attributes: {
    country: Schema.Attribute.String;
  };
}

export interface OurteamWhereYouWorkItems extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_where_you_work_items';
  info: {
    displayName: 'Where_you_work_Items';
  };
  attributes: {
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
    Where_you_work_countries: Schema.Attribute.Component<
      'ourteam.where-you-work-countries',
      true
    >;
  };
}

export interface OurteamWorkTogether extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_work_togethers';
  info: {
    displayName: 'Work_Together';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.RichText;
    Work_Together_Items: Schema.Attribute.Component<
      'ourteam.work-together-items',
      true
    >;
  };
}

export interface OurteamWorkTogetherItems extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_work_together_items';
  info: {
    displayName: 'Work_Together_Items';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ServicesBenefitSector extends Struct.ComponentSchema {
  collectionName: 'components_services_benefit_sectors';
  info: {
    displayName: 'sectorBenefits';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    list1: Schema.Attribute.Text;
    list2: Schema.Attribute.Text;
    list3: Schema.Attribute.Text;
  };
}

export interface ServicesMethodology extends Struct.ComponentSchema {
  collectionName: 'components_services_methodologies';
  info: {
    displayName: 'methodology';
  };
  attributes: {
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Order: Schema.Attribute.Integer;
    OrderSubtitleText: Schema.Attribute.Text;
    OrderTitleText: Schema.Attribute.String;
  };
}

export interface ServicesQuestions extends Struct.ComponentSchema {
  collectionName: 'components_services_questions';
  info: {
    displayName: 'questions';
  };
  attributes: {
    questionAns: Schema.Attribute.Text;
    questionName: Schema.Attribute.Text;
  };
}

export interface ServicesRelatedServices extends Struct.ComponentSchema {
  collectionName: 'components_services_related_services';
  info: {
    displayName: 'relatedServices';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface ServicesResultName extends Struct.ComponentSchema {
  collectionName: 'components_services_result_names';
  info: {
    displayName: 'resultName';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface ServicesResultsStat extends Struct.ComponentSchema {
  collectionName: 'components_services_results_stats';
  info: {
    displayName: 'resultsStat';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    percentage: Schema.Attribute.String;
  };
}

export interface ServicesServiceFeatures extends Struct.ComponentSchema {
  collectionName: 'components_services_service_features';
  info: {
    displayName: 'service-features';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ServicesServicestats extends Struct.ComponentSchema {
  collectionName: 'components_services_servicestats';
  info: {
    displayName: 'servicestats';
  };
  attributes: {
    label: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

export interface ServicesTechnicalItems extends Struct.ComponentSchema {
  collectionName: 'components_services_technical_items';
  info: {
    displayName: 'technicalItems';
  };
  attributes: {
    format: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface ServicesWhatsIncludeFeatures extends Struct.ComponentSchema {
  collectionName: 'components_services_whats_include_features';
  info: {
    displayName: 'whats-include-features';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    stat: Schema.Attribute.String;
  };
}

export interface ServicesWhyMatters extends Struct.ComponentSchema {
  collectionName: 'components_services_why_matters';
  info: {
    displayName: 'Why-Matters';
  };
  attributes: {
    ans1: Schema.Attribute.String;
    ans2: Schema.Attribute.String;
    ans3: Schema.Attribute.String;
    ans4: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.RichText;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String & Schema.Attribute.Required;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String & Schema.Attribute.Required;
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
    stats: Schema.Attribute.RichText;
  };
}

export interface StatsProjectStat extends Struct.ComponentSchema {
  collectionName: 'components_stats_project_stats';
  info: {
    displayName: 'project-stat';
  };
  attributes: {
    count: Schema.Attribute.RichText;
    countryCount: Schema.Attribute.RichText;
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
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
    value: Schema.Attribute.RichText;
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
    icon: Schema.Attribute.String;
    slug: Schema.Attribute.String;
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
      'industry.clients': IndustryClients;
      'industry.clients-name': IndustryClientsName;
      'industry.components-features': IndustryComponentsFeatures;
      'industry.industry-categories': IndustryIndustryCategories;
      'industry.key-industries': IndustryKeyIndustries;
      'industry.partners': IndustryPartners;
      'industry.partners-names': IndustryPartnersNames;
      'insights.article-items': InsightsArticleItems;
      'insights.article-section': InsightsArticleSection;
      'insights.category': InsightsCategory;
      'insights.challenges': InsightsChallenges;
      'insights.challenges-items': InsightsChallengesItems;
      'insights.howto-get-started': InsightsHowtoGetStarted;
      'insights.key-building-blocks': InsightsKeyBuildingBlocks;
      'insights.key-building-blocks-items': InsightsKeyBuildingBlocksItems;
      'insights.key-features': InsightsKeyFeatures;
      'insights.real-world': InsightsRealWorld;
      'insights.real-world-items': InsightsRealWorldItems;
      'insights.related-article-items': InsightsRelatedArticleItems;
      'insights.the-road-ahead': InsightsTheRoadAhead;
      'insights.what-ai-powered-predictive': InsightsWhatAiPoweredPredictive;
      'insights.why-traditional-items': InsightsWhyTraditionalItems;
      'insights.why-traditional-maintenance': InsightsWhyTraditionalMaintenance;
      'navbar.navbar-item': NavbarNavbarItem;
      'new.new-item': NewNewItem;
      'ourteam.drives-us': OurteamDrivesUs;
      'ourteam.drives-us-items': OurteamDrivesUsItems;
      'ourteam.drives-us-sub-items': OurteamDrivesUsSubItems;
      'ourteam.guiding': OurteamGuiding;
      'ourteam.guiding-items': OurteamGuidingItems;
      'ourteam.how-we-partner': OurteamHowWePartner;
      'ourteam.how-we-partner-items': OurteamHowWePartnerItems;
      'ourteam.images': OurteamImages;
      'ourteam.milestones': OurteamMilestones;
      'ourteam.milestones-items': OurteamMilestonesItems;
      'ourteam.ourteam-stats': OurteamOurteamStats;
      'ourteam.ready-to-talk': OurteamReadyToTalk;
      'ourteam.ready-to-talk-buttons': OurteamReadyToTalkButtons;
      'ourteam.recognitions': OurteamRecognitions;
      'ourteam.recognitions-item1': OurteamRecognitionsItem1;
      'ourteam.recognitions-item2': OurteamRecognitionsItem2;
      'ourteam.snapshot': OurteamSnapshot;
      'ourteam.snapshot-stats': OurteamSnapshotStats;
      'ourteam.teams-in-action': OurteamTeamsInAction;
      'ourteam.teams-in-action-items': OurteamTeamsInActionItems;
      'ourteam.teams-in-action-points': OurteamTeamsInActionPoints;
      'ourteam.what-it-feels': OurteamWhatItFeels;
      'ourteam.what-it-feels-gallery': OurteamWhatItFeelsGallery;
      'ourteam.where-you-work': OurteamWhereYouWork;
      'ourteam.where-you-work-countries': OurteamWhereYouWorkCountries;
      'ourteam.where-you-work-items': OurteamWhereYouWorkItems;
      'ourteam.work-together': OurteamWorkTogether;
      'ourteam.work-together-items': OurteamWorkTogetherItems;
      'services.benefit-sector': ServicesBenefitSector;
      'services.methodology': ServicesMethodology;
      'services.questions': ServicesQuestions;
      'services.related-services': ServicesRelatedServices;
      'services.result-name': ServicesResultName;
      'services.results-stat': ServicesResultsStat;
      'services.service-features': ServicesServiceFeatures;
      'services.servicestats': ServicesServicestats;
      'services.technical-items': ServicesTechnicalItems;
      'services.whats-include-features': ServicesWhatsIncludeFeatures;
      'services.why-matters': ServicesWhyMatters;
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
