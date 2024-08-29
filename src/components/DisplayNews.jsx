// import React from 'react'
import { keepPreviousData }  from 'react'
import { fetchNews } from '../api/api'
import Card from './Card';
import {useQuery} from '@tanstack/react-query'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setProgress } from '../redux/slice/loader';
function DisplayNews() {

    const [page, setPage] = useState(1)
    const [totalNewsCount, setTotalNewsCount] = useState(0);
    const searchQ = useSelector(state => state.searchQuery.query)
    const category = useSelector(state => state.category.cate)
    const dispatch = useDispatch();
    // console.log(category);

    const { data, isLoading, isError, error } = useQuery({

        queryKey: ['news', { page, searchQ, category }],
        queryFn: () => fetchNews(page, searchQ, category),
        placeholderData: keepPreviousData,
        
    })


    useEffect(() => {
        if (data?.articles) {
            setTotalNewsCount(data.totalResults)
        }
    }, [data])

    // console.log(data);


    // console.log(totalNewsCount);


    if (isLoading) {
        dispatch(setProgress(100));
        return <div className='text-white text-2xl animate-bounce text-center m-12' >Loading...</div>
    }

    if (isError) {
        console.log(error);
        return <div className='text-red-700 text-center m-12'>Error fetching data</div>;
    }

    // const pagessss=data.pages;
    // console.log(data.articles);
    // console.log(searchQ);


    const handlePreviousClick=()=>{
        setPage(previousPg => previousPg - 1)
        window.scrollTo({top:0,behavior:'smooth'});
    }
    const handleNextClick=()=>{
        setPage(previousPg => previousPg + 1)
        window.scrollTo({top:0,behavior:'smooth'});
    }

    

    return (
        <>
            {data.status === 'error' ? (
                <>
                < div className="error-message text-red-500 text-center text-3xl my-20">Error While Fetching Data</ div>
                {console.error(data.message)}</>    
            ) : (<>
                <div className='grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                    {data?.articles.map((article, index) => (
                        <div key={index}>
                            <Card article={article} />
                        </div>

                        // console.log(article)
                    ))}


                </div>


                <div className='flex justify-evenly m-2 '>
                    <button
                        className='bg-blue-600 text-white rounded-lg px-2 py-1 disabled:bg-blue-300 hover:bg-blue-700'
                        onClick={handlePreviousClick}
                        disabled={page <= 1}
                    >
                        &lt;&lt; Previous
                    </button>
                    <p className='text-white'>{page}</p>
                    <button
                        className='bg-blue-600 text-white rounded-lg px-2 py-1 disabled:bg-blue-300 hover:bg-blue-700'
                        onClick={handleNextClick}
                        disabled={page >= Math.ceil(totalNewsCount / 16)}
                    >
                        Load More &gt; &gt;
                    </button>
                </div>
            </>
            )
            }

        </>
    )
}

export default DisplayNews
