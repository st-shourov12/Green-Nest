import React, { Suspense } from 'react';
import HeroSection from '../Components/Header/HeroSection';
import Plants from '../Components/Plants/Plants';
import usePlant from '../usePlant';
import MeetExperts from './MeetExperts';
import PlantOfWeek from './PlantOfWeek';
import PlantCare from './PlantCare';
import HomeAbout from './HomeAbout';
import Loading from '../Loading/Loading';



const HomePages = () => {
    const {plants, loading} =usePlant();
    const plantSort = plants.sort((a, b) => b.rating - a.rating);
    const filterPlant = plantSort.slice(0,6);
    if (loading) {
        return <Loading />
    }
  
    return (
        <div>
            <title>Green Nest </title>
            <HomeAbout></HomeAbout>
            <HeroSection></HeroSection>
            <Suspense fallback={<Loading />}>
                <Plants filterPlant={filterPlant}></Plants>
            </Suspense>
            <PlantCare></PlantCare>
            <MeetExperts></MeetExperts>

            <PlantOfWeek></PlantOfWeek>

            
            
        </div>
    );
};

export default HomePages;