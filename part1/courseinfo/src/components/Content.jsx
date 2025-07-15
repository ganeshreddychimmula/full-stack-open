import Part from "./Part";

const Content = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
          <Part key={index} part={item.part} exercise={item.exercise} />
      ))}
    </>
  );
};

export default Content;
