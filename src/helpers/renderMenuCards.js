import { MenuCard } from "../components";

export const renderMenuCards = (array) => {
  return array.map((item) => (
    <MenuCard url={item.url} img={item.img} title={item.title} imgSize={item?.imgSize} />
  ));
};
