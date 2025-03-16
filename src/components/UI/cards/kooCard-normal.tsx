export default function KooCard() {
 return (
  <article className="flex flex-col gap-4">
    <div className="grid grid-cols-[auto,1fr]">
      <img src="ca_icon.webp" alt="ProjectPic" />
      <h3>Name of Project</h3>
    </div>
    <img src="ca_pic.webp" alt="" />
    <ul id="infoStuff">
      <li>GitHubLink</li>
      <li>LiveLink</li>
    </ul>
  </article>
 ) 
}