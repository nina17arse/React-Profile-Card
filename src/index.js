import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {}
        <SkillList />
        <Footer />
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <img
      className="avatar"
      src="Profile-Card-10-17_11-23-02.jpg"
      alt="Profile Photo"
    />
  );
}
function Intro() {
  return (
    <div>
      <h1>Natnael Wondwoesn Solomon</h1>
      <p>
        Full-stack web developer and Student At AASTU. When not coding or
        Learning In Uni, I like to play Video games, to cook (and eat), or to
        just enjoy the Addis Ababa sun With Some Friends.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💙" color="teal" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Django" emoji="🔥" color="orangered" />
      <Skill skill="Flask" emoji="🔥" color="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
function Footer() {
  return (
    <div className="footer">
      <footer>
        <a href="https://github.com/nina17arse">Github Profile</a>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
