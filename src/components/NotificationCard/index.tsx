import React, { useEffect, useState } from "react";
import { Container } from "./styles";

import Activities from "../../components/Activities";
import { useDark } from "../../contexts/darkContext";

const NotificationCard = () => {
  const isDark = useDark();

  const [value, setValue] = useState(["900", "100", "300"]);
  const [payd, setPayd] = useState(["received", "payd", "received"]);
  const [people, setPeople] = useState(["mark", "Prima1", "Matheus"]);
  const [data, setData] = useState(["1 year ago", "3 years ago", "hoje"]);
  const [profileUrl, setProfileUrl] = useState([
    "https://github.com/koch21.png",
    "https://github.com/koch21.png",
    "https://github.com/koch21.png",
  ]);
  const [id, setId] = useState(0);

  const prop = [
    {
      value,
      payd,
      people,
      data,
      profileUrl,
    },
  ];
  const [propsCard, setPropsCard] = useState(prop);

  // Display StockCards
  const MapCard = (id: number) => {
    return propsCard?.map(() => (
      <Activities
        ChangeColorValue={
          payd[id] === "payd"
            ? isDark
              ? "#CC0000"
              : "#ff4444"
            : isDark
            ? "#0084eb"
            : "#0392ea"
        }
        BlueValue={value[id]}
        you="You"
        Payd={payd[id]}
        someone={people[id]}
        date={data[id]}
        profileImg={{ uri: profileUrl[id] }}
        key={id}
      />
    ));
  };

  const arraynum = value.length;

  return (
    <Container>{[...Array(arraynum)]?.map((_, i) => MapCard(i++))}</Container>
  );
};

export default NotificationCard;
