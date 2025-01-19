"use client";

import Marquee from "../ui/marquee";
import MarqueeCard from "./card";

const CustomMarquee = () => {
    return(
        <div>
            <Marquee pauseOnHover>
                <MarqueeCard />
            </Marquee>
        </div>
    )
}
export default CustomMarquee