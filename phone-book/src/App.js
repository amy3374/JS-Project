import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";

//1. 왼쪽에는 연락처를 등록하는 폼이, 오른쪽에는 연락처 리스트와, search창이 있다.
//2. 리스트에 유저 이름과 전화번호를 추가할 수 있다.
//3. 리스트에 아이템이 몇개있는 지 보인다.
//4. 사용자가 유저를 이름 검색으로 찾을 수 있다.
//5. + 연락처 삭제, 수정?
function App() {
  return (
    <div>
      <Container>
        <h1 className="title">Phone Book</h1>
        <Row>
          <Col lg={6}>
            <ContactForm />
          </Col>
          <Col lg={6}>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
