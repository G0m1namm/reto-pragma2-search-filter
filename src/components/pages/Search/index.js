import React, { useState } from 'react'
import SearchInput from '../../molecules/SearchInput'
import { Link } from 'react-router-dom'

//Assets
import { ReactComponent as IcoBack } from '../../../assets/icons/IcoArrow.svg'

//Services
import { getCocktailsByName } from '../../../services'

//Styles
import './styles.scss'
import EmptySearch from '../../molecules/EmptySearch'

const SearchPage = () => {

    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    const [coctels, setCoctels] = useState([])
    const [isRecomendationVisible, setIsRecomendationVisible] = useState(true)
    const [isEmpty, setIsEmpty] = useState(false)
    

    const onChange = async (e) => {
        const value = e.target.value

        !isRecomendationVisible && setIsRecomendationVisible(true)
        coctels.length && setCoctels([])

        setSearch(value)
        setIsEmpty(false)
        value ? getResults(value) : setResults([])
    }

    const getResults = async (value) => {
        const { drinks } = await getCocktailsByName(value)
        setResults(drinks)
    }

    const onSearch = () => {
        results ? setCoctels(results) : setIsEmpty(true)
        setIsRecomendationVisible(false)
    }

    const clear = () => {
        setSearch('')
        setResults([])
        setCoctels([])
    }

    return(
        <div className="search-page">
            <Link to="/" className="back-button">
                <IcoBack />
                Regresar
            </Link>
            <SearchInput 
                search={search}
                results={results}
                handleChange={onChange}
                handleSearch={onSearch}
                clear={clear}
                isVisible={isRecomendationVisible}
            />
            {!!coctels.length && <p className="results-text">
                Resultados para "{search}" ({coctels.length})
            </p>}
            <div className="search-results-container">
                {!!coctels.length &&
                    coctels.map((coctel) => (
                        <div>hola</div>
                    )) 
                }
            </div>
            {(isEmpty && search) && <EmptySearch />}
        </div>
    )
}

export default SearchPage