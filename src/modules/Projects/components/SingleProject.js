import icongit from "../../../image/icongit.png";

function SingleProject(props) {
  return (
    <div className="project-single-control">
      <div className="project-item_groupimg">
        <img src={props.img} />
        <button>
          <img src={icongit} />
        </button>
      </div>

      <div className="project-item_groupdes">
        <h3>{props.title}</h3>
        <p>{props.des}</p>
        <div className="project-tem_grouplan">
          <span style={{ color: "#3a98ee" }}>#javascript</span>
          <span style={{ color: "#f54478" }}>#html</span>
          <span style={{ color: "#29c786" }}>#css</span>
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
