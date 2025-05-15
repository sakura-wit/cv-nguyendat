import SingleProject from "./components/SingleProject";
import AppearFromTop from "../../components/animations/AppearFromTop";
import AppearFromRight from "../../components/animations/AppearFromRight";

function Projects() {
  return (
    <div>
      <AppearFromTop className="projects-group_title">
        <h3>CÔNG VIỆC CỦA TÔI</h3>
        <h1>CÁC DỰ ÁN.</h1>
        <p>
          Tôi là sinh viên tốt nghiệp trường Đại học Công nghệ thông tin - ĐHQG
          tp Hồ Chí Minh. Định hướng của tôi hiện tại là trở thành Frontend
          Developer. Tôi đã tiếp xúc và thực hiện các dự án có sử dụng đến một
          số ngôn ngữ như Javascript, Typescript, ... Các thư viện và framework
          như Reactjs, Angular. Tôi hi vọng bản thân có thể có cơ hội để đóng
          góp kỹ năng và kiến thức của mình vào việc xây dựng ứng dụng web của
          bạn.
        </p>
      </AppearFromTop>

      <AppearFromRight>
        <div className="project-group_sigleproject">
          <SingleProject
            title="Car Rent"
            img="https://protfolio-woad.vercel.app/assets/carrent-aba013d1.png"
            des="Web-based platform that allows users to search, book, and manage car
        rentals from various providers, providing a convenient and ef
        ficient
        solution for transportation needs."
          />

          <SingleProject
            title="Car Rent"
            img="https://protfolio-woad.vercel.app/assets/carrent-aba013d1.png"
            des="Web-based platform that allows users to search, book, and manage car
        rentals from various providers, providing a convenient and efficient
        solution for transportation needs."
          />

          <SingleProject
            title="Car Rent"
            img="https://protfolio-woad.vercel.app/assets/carrent-aba013d1.png"
            des="Web-based platform that allows users to search, book, and manage car
        rentals from various providers, providing a convenient and efficient
        solution for transportation needs."
          />
        </div>
      </AppearFromRight>
    </div>
  );
}

export default Projects;
