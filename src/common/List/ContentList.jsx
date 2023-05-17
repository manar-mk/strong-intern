import { useLocation } from "react-router-dom";
import ContentListItem from "./ContentListItem";
import s from "./contentlist.module.css";

export default function ContentList({ tvShows, movieList }) {
  const location = useLocation();
  let contentItems;

  if (location.pathname === "/movies") {
    contentItems = movieList.map((item) => (
      <ContentListItem key={item.id} title={item.title} item={item} />
    ));
  } else if (location.pathname === "/tvserials") {
    contentItems = tvShows.map((item) => (
      <ContentListItem key={item.id} name={item.name} item={item} />
    ));
  }

  return <div className={s.content__list__container}>{contentItems}</div>;
}
