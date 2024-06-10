const Footer = () => {
  var today = new Date();
  return(
    <footer className = "container">
      <div className = "row justify-content-center mt-3 mb-4">
        <div class = "col-8">
      <h4>Team Member allocation app - {today.getFullYear()}</h4>
          </div>
        </div>
    </footer>
  );
};
export default Footer;