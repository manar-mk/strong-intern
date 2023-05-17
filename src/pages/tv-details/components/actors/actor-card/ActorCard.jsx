import { useMemo } from "react";
import s from "./actorcard.module.css";

export default function ActorCard({ actor }) {
  const { profile_path, name, character } = actor;
  const maxTitleSize = 15;
  const maxCharacterSize = 13;

  const truncatedName = useMemo(() => {
    return name.length > maxTitleSize
      ? `${name.slice(0, maxTitleSize)}...`
      : name;
  }, [name, maxTitleSize]);

  const truncatedCharacter = useMemo(() => {
    return character.length > maxCharacterSize
      ? `${character.slice(0, maxTitleSize)}...`
      : character;
  }, [character, maxCharacterSize]);

  return (
    <div className={s.actor__card}>
      <img
        width="120px"
        height="auto"
        src={`https://image.tmdb.org/t/p/original/${profile_path}`}
        alt={name}
        className={s.actor__image}
      />
      <div className={s.actor__details}>
        <p className={s.actor__name}>{truncatedName}</p>
        <p className={s.actor__department}>{truncatedCharacter}</p>
      </div>
    </div>
  );
}
