import ItemSkill from "./Components/ItemSkill";
import skill1 from "../../image/skill1.png";
import skill2 from "../../image/skill2.png";
import skill3 from "../../image/skill3.png";
import skill4 from "../../image/skill4.png";
import AniItemSkill from "../../components/animations/AniItemSkill";

function Instruction() {
  return (
    <div className="instruction-control">
      <AniItemSkill className="instruction-des">
        <h3>GIỚI THIỆU</h3>
        <h1>TỔNG QUAN.</h1>
        <p>
          Tôi là sinh viên tốt nghiệp trường Đại học Công nghệ thông tin - ĐHQG
          tp Hồ Chí Minh. Định hướng của tôi hiện tại là trở thành Frontend
          Developer. Tôi đã tiếp xúc và thực hiện các dự án có sử dụng đến một
          số ngôn ngữ như Javascript, Typescript, ... Các thư viện và framework
          như Reactjs, Angular. Tôi hi vọng bản thân có thể có cơ hội để đóng
          góp kỹ năng và kiến thức của mình vào việc xây dựng ứng dụng web của
          bạn.
        </p>
      </AniItemSkill>

      <div className="instruction-list_item_control">
        <AniItemSkill>
          <ItemSkill image={skill1} title="Frontend Developer" />
        </AniItemSkill>
        <AniItemSkill delay={0.5}>
          <ItemSkill image={skill2} title="Reactjs Developer" />
        </AniItemSkill>
        <AniItemSkill delay={0.8}>
          <ItemSkill image={skill3} title="Angular Developer" />
        </AniItemSkill>
        <AniItemSkill delay={1.1}>
          <ItemSkill image={skill4} title="Frontend Developer" />
        </AniItemSkill>
      </div>
    </div>
  );
}

export default Instruction;
