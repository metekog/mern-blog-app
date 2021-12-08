import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React&Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Huang-Mai-2017photocontest-Goldcreekpond.jpg?crop=0,233,4000,2200&wid=4000&hei=2200&scl=1.0"
        alt=""
        className="headerImg"
      />
    </div>
  );
}
