import GridCard from "../grid-card/grid-card";
import GridCardContentRight from "../grid-card-content-right/grid-card-content-right";
import GridCardContentLeft from "../grid-card-content-left/grid-card-content-left";
import athleteStyles from "./athlete.module.css";
import Image from "next/image";
import Slider from "../responsive-slider/slider";

export default function Athlete() {
  return (
    <div className={`overflow-hidden`}>
      <div
        className={`${athleteStyles.grid_container} ${athleteStyles.grid_container_fixed_height}`}
      >
        <div style={{ zIndex: 2 }}>
          <div className="relative">
            <Image
              src="/athlete/footballer-desktop.png"
              width={991}
              height={815}
              className={`${athleteStyles.img_overlap} ${athleteStyles.desktop}`}
              alt="Showing desktop version"
            />
            <Image
              src="/athlete/footballer-tablet.png"
              width={518}
              height={719}
              className={`${athleteStyles.img_overlap} ${athleteStyles.tablet}`}
              alt="Showing tablet version"
            />
            <Image
              src="/athlete/footballer-mobile.png"
              width={691}
              height={568}
              className={`${athleteStyles.img_overlap} ${athleteStyles.mobile}`}
              alt="Showing mobile version"
            />
          </div>
        </div>

        <div className={`${athleteStyles.grid_title_init_right}`}>
          <h1 className="text-custom-gray-300">ATHLETES</h1>
        </div>
      </div>

      <Slider>
        <GridCard className="bg-white">
          <GridCardContentRight>
            <h2 className={`${athleteStyles.card_header}`}>
              <span
                className={`${athleteStyles.no_of} ${athleteStyles.underline} ${athleteStyles.dark}`}
              >
                01
              </span>
              <span
                className={`${athleteStyles.sub_topic} text-custom-gray-500`}
              >
                CONNECTION
              </span>
            </h2>

            <p className={athleteStyles.card_paragraph}>
              Connect with coaches directly, you can ping coaches to view
              profile.
            </p>
          </GridCardContentRight>
        </GridCard>

        <GridCard className="bg-custom-gray-400">
          <GridCardContentRight>
            <h2 className={`${athleteStyles.card_header}`}>
              <span
                className={`${athleteStyles.no_of} ${athleteStyles.underline} ${athleteStyles.dark}`}
              >
                02
              </span>
              <span
                className={`${athleteStyles.sub_topic} text-custom-gray-500`}
              >
                COLLABORATION
              </span>
            </h2>

            <p className={athleteStyles.card_paragraph}>
              Work with other student athletes to increase visability. When you
              share and like other players videos it will increase your
              visability as a player. This is the team work aspect to Surface 1.
            </p>
          </GridCardContentRight>
        </GridCard>

        <GridCard className="bg-custom-purple-500">
          <GridCardContentRight>
            <h2 className={`${athleteStyles.card_header}`}>
              <span
                className={`${athleteStyles.no_of} ${athleteStyles.underline}`}
              >
                03
              </span>
              <span
                className={`${athleteStyles.sub_topic} text-custom-gray-500`}
              >
                GROWTH
              </span>
            </h2>

            <p className={`${athleteStyles.card_paragraph} text-white`}>
              Resources and tools for you to get better as a student Athelte.
              Access to training classes, tutor sessions, etc 
            </p>
          </GridCardContentRight>
        </GridCard>
      </Slider>

      <div
        className={`${athleteStyles.grid_container} ${athleteStyles.grid_container_fixed_height_second}`}
      >
        <div className={`${athleteStyles.grid_title_init_left}`}>
          <h1 className="text-custom-gray-300">PLAYERS</h1>
        </div>

        <div style={{ zIndex: 2 }}>
          <div className="relative">
            <Image
              src="/athlete/basket-ball-player.png"
              width={991}
              height={815}
              className={`${athleteStyles.img_overlap_right} ${athleteStyles.desktop}`}
              alt="Showing desktop version"
            />
            <Image
              src="/athlete/basket-ball-player-tablet.png"
              width={691}
              height={568}
              className={`${athleteStyles.img_overlap_right} ${athleteStyles.tablet}`}
              alt="Showing tablet version"
            />
            <Image
              src="/athlete/basket-ball-player-mobile.png"
              width={302}
              height={249}
              className={`${athleteStyles.img_overlap_right} ${athleteStyles.mobile}`}
              alt="Showing mobile version"
            />
          </div>
        </div>
      </div>

      <Slider>
        <GridCard className="bg-white">
          <GridCardContentLeft>
            <h2 className={`${athleteStyles.card_header}`}>
              <span
                className={`${athleteStyles.no_of} ${athleteStyles.underline} ${athleteStyles.dark}`}
              >
                01
              </span>
              <span
                className={`${athleteStyles.sub_topic} text-custom-gray-500`}
              >
                CONNECTION
              </span>
            </h2>

            <p className={athleteStyles.card_paragraph}>
              Connect with talented athlete directly, you can watch their skills
              through video showreels directly from Surface 1.
            </p>
          </GridCardContentLeft>
        </GridCard>

        <GridCard className="bg-custom-gray-400">
          <GridCardContentLeft>
            <h2 className={`${athleteStyles.card_header}`}>
              <span
                className={`${athleteStyles.no_of} ${athleteStyles.underline} ${athleteStyles.dark}`}
              >
                02
              </span>
              <span
                className={`${athleteStyles.sub_topic} text-custom-gray-500`}
              >
                COLLABORATION
              </span>
            </h2>

            <p className={athleteStyles.card_paragraph}>
              Work with recruiter to increase your chances of finding talented
              athlete.
            </p>
          </GridCardContentLeft>
        </GridCard>

        <GridCard className="bg-custom-dark-blue">
          <GridCardContentLeft>
            <h2 className={`${athleteStyles.card_header}`}>
              <span
                className={`${athleteStyles.no_of} text-custom-purple-400 ${athleteStyles.underline}`}
              >
                03
              </span>
              <span
                className={`${athleteStyles.sub_topic} text-custom-gray-500`}
              >
                GROWTH
              </span>
            </h2>

            <p className={`${athleteStyles.card_paragraph} text-white`}>
              Save your time, recruit proper athlets for your team.
            </p>
          </GridCardContentLeft>
        </GridCard>
      </Slider>
    </div>
  );
}
