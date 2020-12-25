import Footer from "../component/Footer"
import SearchAdvance from "../component/form/searchAdvance"
import Menu from "../component/Menu"

const SearchScreen = ({props}) =>{
    return (
        <>
            <Menu />
            <SearchAdvance />
            <Footer />
        </>
    )
}
export default SearchScreen