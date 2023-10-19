import "../../styles/general.css";
import "../../styles/card.css";

import Card from "../Card.jsx";

export default function Portfolio() {
    return (
        <div className="d-flex flex wrap justify-content-around">
<Card imgSrc="src/images/health-esteem-logo.png"
imgAlt="Health-Esteem Logo"
title="Health-Esteem"
description="This app allows you to track four major health criteria and creates a chart on demand."
buttonText="Check it out here!"
link="https://jd2929.github.io/Health_Esteem/"/>

<Card imgSrc="src/images/logo-color.png" 
imgAlt="MedInfo Logo"
title="MedInfo"
description="A medical platform where both patients and doctors can keep track of appointments, file notes and a list of conditions"
buttonText="Check it out here!"
link="https://medicalinfo-db-397969924a16.herokuapp.com/"/>


<Card imgSrc="src/images/Weather.png" 
imgAlt="Weather Dashboard with the weather of Halifax listed "
title="Weather App"
description="A great place to check out the weather, at home or while traveling"
buttonText="Check it out here!"
link="https://jd2929.github.io/WeatherApp/"/>

        </div>

    )

}

