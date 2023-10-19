import '../styles/general.css';
import '../styles/card.css';
import Card from '../components/Card.jsx';

import dogPhoto from '../images/wrinkles.jpg';
import buildingPhoto from '../images/building.jpg';

export default function AboutMe() {
  return (
    <div>
      <h1>All About Me!</h1>

      <h4>
        Hey, thanks for stopping by. I’m JD!
      </h4>

      <p>
        I worked as a teacher, department director, and principal for the last 20 years. I had a great time working with children aged 3 to 14, most of whom were twice exceptional. These jobs were meaningful and fulfilling. They were also very rewarding, however, there comes a time in every teacher’s life when they know they must move on. 2023 was that time for me.
      </p>

      <p>
        I have returned to coding, something I left behind when I graduated from high school.
      </p>

      <p>
        With two adult sons who code, and a husband who has been in the tech industry for 30 years, I am surrounded by it constantly and so I have been able to re-engage and find my love of the specificity, flexibility and limitless choices one has when coding
      </p>

      <p>
        I am currently finishing a boot camp through edX and the University of Toronto’s continuing education program on full-stack development. It has been intense, but fun at the same time. I have got to meet many great people, both on the administrative and instructional side as well as my fellow bootcampers!
      </p>
<div className="d-flex justify-content-around flex-wrap">
      <Card imgSrc = {dogPhoto} imgAlt = "French Bulldog in a red hoodie standing in a forest" title= "Hiking" description="In my spare time, I love to hike with my dog Wrinkles. He is a 6-year-old French bulldog who is my shadow. Hiking is easy as I currently reside on the side of a mountain covered in trees."/>
      
      <Card imgSrc = {buildingPhoto} imgAlt = "a gravel bed with concrete slabs for a foundation" title= "Building" description="My big project outside of coding boot camp is building a tiny cottage with my husband and another couple. We have the foundation ready to go and are about to put up the walls. It is great to take some time each week to do something physical and see what you can produce."/>
      </div>
      
    </div>
  );
}