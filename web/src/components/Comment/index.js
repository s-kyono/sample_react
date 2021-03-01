import React from "react";
import Date from "../Comment/Date";
import Text from "../Comment/Text";

function Index({ text, date }) {
  return (
    <div className="Comment">
      <Text text={text} />
      <Date date={date} />
    </div>

  );
}
export default Index;
