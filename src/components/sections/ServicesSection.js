import React from "react";
import immune from "../images/immune-system-immunity-defense-svgrepo-com.svg"
import energy from "../images/running-2-svgrepo-com.svg"
import glow from "../images/woman-with-beautiful-skin-svgrepo-com.svg"
import dizzy from "../images/dizzy-svgrepo-com.svg"
import detox from "../images/juice-squeezing-svgrepo-com.svg"
import endurance from "../images/working-out-silhouette-svgrepo-com.svg"
import skin from "../images/skin-hair-follicle-dermis-svgrepo-com.svg"
import weightLoss from "../images/weight-loss-svgrepo-com.svg"
import hair from "../images/hair-style-women-svgrepo-com.svg"
import hydration from "../images/hydration-station-drint-water-hydration-station-sign-svgrepo-com.svg"
import ageing from "../images/old-man-1-svgrepo-com.svg"
import {Typography} from "@mui/material";

export const ServicesSection = () => {
    return (
        <>
            <section id="services" className="services">
                <h2 className={"services-h2"}>Our IV Treatments & Benefits</h2>
                <div className="services-section-boxed">
                    <div className={"services-card"}>
                        <img className={"services-card-img"} src={immune} alt={"immunity"}/>
                        <Typography className={"services-card-text"} gutterBottom variant="h5" component="div">
                            {`Immunity Drip   -    R730`}
                        </Typography>
                        <Typography className={"services-card-text2"} variant="body2" color="text.secondary">
                            Protects against viral & bacterial infections by boosting your
                            immune system.
                        </Typography>
                    </div>
                    <div className={"services-card"}>
                        <img className={"services-card-img"} src={energy} alt={"immunity"}/>
                        <Typography className={"services-card-text"} gutterBottom cls
                                    variant="h5" component="div">
                            {`Energy Drip  -    R900`}
                        </Typography>
                        <Typography className={"services-card-text2"} variant="body2" color="text.secondary">
                            Fights fatigue & leaves tou feeling energised.
                        </Typography>
                    </div>
                    <div className={"services-card"}>
                        <img className={"services-card-img"} src={glow} alt={"immunity"}/>
                        <Typography className={"services-card-text"} gutterBottom variant="h5" component="div">
                            {`Skin Glow  -    R850`}
                        </Typography>
                        <Typography className={"services-card-text2"} variant="body2" color="text.secondary">
                            Evens your skin tone by combating pigmentation, leaving you with a
                            youthful glow.
                        </Typography>
                    </div>
                    <div className={"services-card"}>
                        <img className={"services-card-img"} src={dizzy} alt={"immunity"}/>
                        <Typography className={"services-card-text"} gutterBottom variant="h5" component="div">
                            {`Hangover Recovery  -    R700`}
                        </Typography>
                        <Typography className={"services-card-text2"} variant="body2" color="text.secondary">
                            Relieved the after party effects by flushing alcohol and toxins out
                            if your system.
                        </Typography>
                    </div>
                    <div className={"services-card"}>
                        <img className={"services-card-img"} src={detox} alt={"immunity"}/>
                        <Typography className={"services-card-text"} gutterBottom variant="h5" component="div">
                            {`Detox Drip  -    R600`}
                        </Typography>
                        <Typography className={"services-card-text2"} variant="body2" color="text.secondary">
                            Cleanses & flushes the body of toxins & free radicles.
                        </Typography>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="services-section-boxed">
                    <div className={"services-card"}>
                        <img className={"services-card-img"} src={endurance} alt={"immunity"}/>
                        <Typography className={"services-card-text"} gutterBottom variant="h5" component="div">
                            {`Sports Endurance Booster   -    R950`}
                        </Typography>
                        <Typography className={"services-card-text2"} variant="body2" color="text.secondary">
                            Supports athletic performance during training by supporting muscle
                            retention and speeding up muscle recovery.
                        </Typography>
                    </div>
                    <div className={"services-card"}>
                        <img className={"services-card-img"} src={skin} alt={"immunity"}/>
                        <Typography className={"services-card-text"} gutterBottom variant="h5" component="div">
                            {`Anti - Inflammatory Drip  -    R1000`}
                        </Typography>
                        <Typography className={"services-card-text2"} variant="body2" color="text.secondary">
                            Improves tissue repair & speeds up recovery.
                        </Typography>
                    </div>
                    <div className={"services-card"}>
                        <img className={"services-card-img"} src={weightLoss} alt={"immunity"}/>
                        <Typography className={"services-card-text"} gutterBottom variant="h5" component="div">
                            {`Weight Assist Drip  -    R500`}
                        </Typography>
                        <Typography className={"services-card-text2"} variant="body2" color="text.secondary">
                            Increases metabolism and converts energy into glycogen instead of
                            fat, thereby promoting weight loss.
                        </Typography>
                    </div>
                    <div className={"services-card"}>
                        <img className={"services-card-img"} src={hair} alt={"immunity"}/>
                        <Typography className={"services-card-text"} gutterBottom variant="h5" component="div">
                            {`Hair Loss Drip  -    R300`}
                        </Typography>
                        <Typography className={"services-card-text2"} variant="body2" color="text.secondary">
                            Strengthens hair by promoting follicle activity.
                        </Typography>
                    </div>
                    <div className={"services-card"}>
                        <img className={"services-card-img"} src={hydration} alt={"immunity"}/>
                        <Typography className={"services-card-text"} gutterBottom variant="h5" component="div">
                            {`Hydration Boost Drip  -    R300`}
                        </Typography>
                        <Typography className={"services-card-text2"} variant="body2" color="text.secondary">
                            Replenishes lost electrolytes while removing waste and toxins.
                        </Typography>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="services-section-boxed">
                    <div className={"services-card"}>
                        <img className={"services-card-img"} src={ageing} alt={"immunity"}/>
                        <Typography className={"services-card-text"} gutterBottom variant="h5" component="div">
                            {`NAD+ (coming soon)`}
                        </Typography>
                        <Typography className={"services-card-text2"} variant="body2" color="text.secondary">
                            For anti ageing and neuro recovery
                        </Typography>
                    </div>
                </div>
            </section>
        </>
    )
}