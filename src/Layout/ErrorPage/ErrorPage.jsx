import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
 const error = useRouteError();

 return (
  <div style={styles.container}>
   <h1 style={styles.title}>Oops!</h1>

   <p style={styles.message}>
    Sorry, something went wrong or the page was not found.
   </p>

   <p style={styles.error}>
    {error?.statusText || error?.message || "Unknown Error"}
   </p>

   <Link to="/" style={styles.button}>
    Go Back Home
   </Link>
  </div>
 );
};

const styles = {
 container: {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#f8f9fa",
  textAlign: "center",
 },
 title: {
  fontSize: "60px",
  color: "#dc3545",
  marginBottom: "10px",
 },
 message: {
  fontSize: "18px",
  marginBottom: "10px",
 },
 error: {
  color: "gray",
  marginBottom: "20px",
 },
 button: {
  padding: "10px 20px",
  background: "#007bff",
  color: "white",
  textDecoration: "none",
  borderRadius: "5px",
 },
};

export default ErrorPage;