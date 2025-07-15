const Content = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <p key={index}>
          {item.part} {item.exercise}
        </p>
      ))}
    </>
  );
};

export default Content;
