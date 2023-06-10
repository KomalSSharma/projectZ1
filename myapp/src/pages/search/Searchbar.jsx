import React ,{useState} from 'react'
import './StyleSearch.css'
import { useDispatch, useSelector } from 'react-redux'
import { userSearch } from '../../features/searchF/searchSlice'
import { useFetchUserSearchQuery } from '../../features/searchF/searchApi'
import UserSearchedWrapper from './LazyUserSearched'

function Searchbar() {
    const dispatch=useDispatch()
    const {searchUser} = useSelector((state)=>state?.searchUsers);

    const { data , isLoading , isError } = useFetchUserSearchQuery(searchUser)|| { data: null, isLoading: false, isError: false };
   {/* if(data){
        console.log(data.total_count)
        console.log(data)
    } */}

    const[inputValue , setInputValue] = useState('')
    const [searchKey, setSearchKey] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(userSearch(inputValue));
        setSearchKey(inputValue);
    }
  return (
    <section className='search-section'>
    <nav className='search-nav'>
        <h1 className='search-nav-title'>
            GitHub Users
        </h1>
        </nav>
    <main className='search-main'>
        <form className='search-form'>
            <input className='search-form-input' type="text" placeholder="UserName"
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            />
            <button className='search-btn' type="submit"  onClick={handleSubmit}>Search</button>
        </form>
        {data && <><h3 className='total-user-length'>{data?.total_count} result found</h3> 
        <UserSearchedWrapper
         searchData={data} 
         isLoading={isLoading} 
         isError={isError}
         key={searchKey}
         />
        </>
    }
        </main>
        <footer>
            {/* <h3>Thank you for using MyApp</h3> */}
        </footer>
        </section>
  )
}

export default Searchbar


