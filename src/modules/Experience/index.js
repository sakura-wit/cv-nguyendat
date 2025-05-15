import AppearFromBot from "../../components/animations/AppearFromBot";
import AppearFromLeft from "../../components/animations/AppearFromLeft";
import AppearFromRight from "../../components/animations/AppearFromRight";
import pj2 from "../../image/pj2.png";
import pj3 from "../../image/pj3.png";

function Experiences() {
  return (
    <div className="experiences-control">
      <div className="experiences-title">
        <h5>NHỮNG GÌ LÀM ĐƯỢC CHO ĐẾN NAY</h5>
        <h1>KINH NGHIỆM</h1>
      </div>

      <div className="experiences_timeline">
        <div className="experiences-timeline_item">
          <AppearFromBot>
            <div className="timeline-icon">
              <img
                className="experiences-item_img"
                src="https://protfolio-woad.vercel.app/assets/starbucks-af2a76fc.png"
              />
            </div>
          </AppearFromBot>

          {/* Dự Án 1 */}
          <AppearFromLeft className="experiences-content1">
            <h2>React.js Developer</h2>
            <ul>
              <li>
                Developing and maintaining web applications using React.js and
                other related technologies.
              </li>
              <li>
                Collaborating with cross-functional teams including designers,
                product managers, and other developers to create high-quality
                products.
              </li>
              <li>
                Implementing responsive design and ensuring cross-browser
                compatibility.
              </li>
              <li>
                Participating in code reviews and providing constructive
                feedback to other developers.
              </li>
            </ul>
          </AppearFromLeft>
          <span class="timeline-date">March 2020 - April 2021</span>
        </div>

        <div className="experiences-timeline_item">
          <AppearFromBot>
            <div className="timeline-icon">
              <img className="experiences-item_img" src={pj2} />
            </div>
          </AppearFromBot>

          {/* Dự Án 2 */}
          <AppearFromRight className="experiences-content2">
            <h2>React.js Developer</h2>
            <ul>
              <li>
                Developing and maintaining web applications using React.js and
                other related technologies.
              </li>
              <li>
                Collaborating with cross-functional teams including designers,
                product managers, and other developers to create high-quality
                products.
              </li>
              <li>
                Implementing responsive design and ensuring cross-browser
                compatibility.
              </li>
              <li>
                Participating in code reviews and providing constructive
                feedback to other developers.
              </li>
            </ul>
          </AppearFromRight>
          <span class="timeline-date2">March 2020 - April 2021</span>
        </div>

        {/* Dự án 3  */}
        <div className="experiences-timeline_item">
          <AppearFromBot>
            <div className="timeline-icon">
              <img className="experiences-item_img" src={pj3} />
            </div>
          </AppearFromBot>

          {/* Dự Án 3 */}
          <AppearFromLeft className="experiences-content1">
            <h2>React.js Developer</h2>
            <ul>
              <li>
                Developing and maintaining web applications using React.js and
                other related technologies.
              </li>
              <li>
                Collaborating with cross-functional teams including designers,
                product managers, and other developers to create high-quality
                products.
              </li>
              <li>
                Implementing responsive design and ensuring cross-browser
                compatibility.
              </li>
              <li>
                Participating in code reviews and providing constructive
                feedback to other developers.
              </li>
            </ul>
          </AppearFromLeft>
          <span class="timeline-date">March 2020 - April 2021</span>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
