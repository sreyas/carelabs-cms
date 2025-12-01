"use client";
import OurTeamPartner from '@/components/OurTeams/OurTeamPartner';
import OurTeamRecognitions from '@/components/OurTeams/OurTeamRecognitions';
import OurTeamsAction from '@/components/OurTeams/OurTeamsAction';
import OurTeamsBanner from '@/components/OurTeams/OurTeamsBanner';
import OurTeamsDrivesUs from '@/components/OurTeams/OurTeamsDrivesUs';
import OurTeamsSnapshot from '@/components/OurTeams/OurTeamsSnapshot';
import OurTeamsWrkProjcet from '@/components/OurTeams/OurTeamsWrkProjcet';
import OurTeamsWrkTogether from '@/components/OurTeams/OurTeamsWrkTogether';
import React from 'react'

const page = () => {
 

  return (
    <div>
      <section>
        <OurTeamsBanner/>
      </section>

      <section>
        <OurTeamsSnapshot/>
      </section>

      <section>
        <OurTeamsDrivesUs/>
      </section>

      <section>
        <OurTeamsWrkTogether/>
      </section>

      <section>
        <OurTeamsWrkProjcet/>
      </section>

       <section>
        <OurTeamsAction/>
      </section>

      <section>
        <OurTeamPartner/>
      </section>

      <section>
        <OurTeamRecognitions/>
      </section>
     
    </div>
  )
}

export default page
