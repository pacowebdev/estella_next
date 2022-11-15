import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from "../Container/Container";

function MyApp({ Component, pageProps }) {
  return (
      <Container>
        <Component {...pageProps} />
      </Container>
  )
}

export default MyApp
