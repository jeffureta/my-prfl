import { Profile } from "./library/utilities.js";

const socialMediaAccounts = {
    "github" : "https://github.com/jeffureta",
    "twitter" : "https://twitter.com/jepoyureta",
    "table" : "https://www.kaggle.com/jeffureta",
    "linkedin" : "https://www.linkedin.com/in/jeffureta/"
}

const myProfile = Profile.structure(
    "Jeff Ureta", "[nurse, programmer]", 
    socialMediaAccounts, "./images/IMG_0057.gif"
    )
$(".wrapper").append(myProfile)