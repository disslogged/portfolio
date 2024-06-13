import { RiReactjsLine } from "react-icons/ri";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experiences = () => {
  return (
    <section className="section" id="experiences">
      <h2 className="sectionTitle">Experiences</h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#eae9e8",
            color: "#000",
            border: "1px solid black",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #000" }}
          date="2022 - 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<RiReactjsLine />}
        >
          <h3 className="vertical-timeline-element-title">
            start to self study learning
          </h3>
          <p>
            "I started my learning journey with Python and Linux, and after some
            time, I found my interest in this way and entered the frontend
            field. React.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#eae9e8",
            color: "#000",
            border: "1px solid black",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #000" }}
          date="2024-current"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<RiReactjsLine />}
        >
          <h3 className="vertical-timeline-element-title">
            Freelancer Frontend developer
          </h3>
          <p>
            - creating re-useable and fully responsive components
            <br />
            - implementing ui features
            <br />
            - Integrating with APIs
            <br />
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Experiences;
