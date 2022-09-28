import '../../styles/globals.css'
import Layout from '../components/Layout'
import UserLayout from '../layouts/UserLayout'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  return (
    <>
      <Layout>
        {getLayout(<Component {...pageProps} />)}
      </Layout>
    </>
  )
}

export default MyApp
