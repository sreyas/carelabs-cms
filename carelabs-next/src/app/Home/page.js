import GlobalReach from '@/components/Home/GlobalReach';
import HomeBanner from '@/components/Home/HomeBanner';
import HomeBlog from '@/components/Home/HomeBlog';
import HomeServices from '@/components/Home/HomeServices';
import HomeTestimonials from '@/components/Home/HomeTestimonials';
import { GET_HOMEPAGE_DATA } from '@/lib/api-Collection';
import client from '@/lib/appollo-client';
import React from 'react'

export default async function Page() {
    let homeBannerData = null;
    let homeServicesData = null;
    let homeGlobalReachData = null;
    let homeTestimonialsData = null;
    let homeBloginsights = null;
    try{
       const res= await client.query({
                  query: GET_HOMEPAGE_DATA,
                 });
        homeBannerData = res?.data?.homePage?.homebanner;
        homeServicesData= res?.data?.homePage?.home_service;
        homeGlobalReachData= res?.data?.homePage?.worldwideimpact_section;
        homeTestimonialsData= res?.data?.homePage?.testimonials_section;
        homeBloginsights= res?.data?.homePage?.home_insights;
        console.log("Blog",homeBloginsights);
                 
    }catch(err){
        console.error("Failed to fetch app/Home/page.js data:", err);
    }

  return (
    <div>
        <section>
        <HomeBanner data={homeBannerData} />
        </section>

        <section>
        <HomeServices data={homeServicesData} />
        </section>

        <section>
        <GlobalReach data={homeGlobalReachData} />
        </section>

        <section>
        <HomeTestimonials data={homeTestimonialsData} />
        </section>

        <section>
        <HomeBlog data={homeBloginsights} />
        </section>

      
    </div>
  );
}

