import Part from "./Part";

const Content = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
          <Part key={index} part={item.name} exercise={item.exercises} />
      ))}
    </>
  );
};

export default Content;
