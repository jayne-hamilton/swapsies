function Listings() {

  const ListingsItems = () => {
    const [listingData, setListingData] = useState([])
    getListings().then((d) => {
      console.log(d)
      setListingData(d)
    })


  return <h1>Listings page</h1>
  
}



export default Listings