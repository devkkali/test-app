export default function Home({data}) {
  console.log('hihi');
  return (
    <>
      This is index page.
      <h5>{data.title}</h5>
      <p>{data.body}</p>
    </>
  )
}

// export async function getStaticProps(){
//   // Data Fetching 
//   // no update even after change in api
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   const data = await res.json()
//   return{
//       props:{
//           data
//       }
//   }
// }

export async function getServerSideProps(){
  // Data Fetching 
  // no update even after change in api
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/2")
  const data = await res.json()
  return{
      props:{
          data
      }
  }
}