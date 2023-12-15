import React from 'react';
import Image from './Image.jsx';
import Pattern from './PatternSquare.jsx';
import PageHaeder from './PageHaeder.jsx';
import Logo from './Logo.jsx';
import OurValues from './OurValues.jsx';
import Team from './Team.jsx';
import Position from './Position.jsx';


function Home() {
  return (
    <>
    <Pattern/>
    <PageHaeder/>
    <Image/>
    <Logo/>
    <OurValues/>
    <Team/>
    <Position/>
    </>
  );
}

export default Home;
