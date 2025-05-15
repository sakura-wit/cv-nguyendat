import anhthe from "../image/anhthe.jpg";
import logo from "../image/logoSakura.jpg";

function Header() {
  return (
    <div>
      <div className="header-control">
        <div style={{ display: "flex" }}>
          <img src={logo} />
          <p>Nguyen Van Dat|Frontend Developer</p>
        </div>

        <ul>
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Xin Chào */}
      <div className="header-group_avt">
        <div className="header-frameimage">
          <img src={anhthe} />
        </div>
        <div>
          <p>Xin Chào, tôi là Nguyễn Văn Đạt</p>
          <p>
            Tôi thực hiện phát triển giao diện người dùng và các ứng dụng web
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
