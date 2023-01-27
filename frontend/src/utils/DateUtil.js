const formatDate = (datetime) => {
  const dateArray = Date(datetime).toString().split(" ");
  return (  
    `${dateArray[1].toUpperCase()} ${dateArray[2]}`
  );
};

export default formatDate;