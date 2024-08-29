import PropTypes from 'prop-types';
function Card({article}) {
  const dateConversion=(date)=>{
    const originalDate=new Date(date)
    const options = {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    };
    
    return  originalDate.toLocaleString('en-IN', options);
    // console.log(formattedDate);
} 
  return (
  
      
        <div className="card m-4 shadow-lg p-3 mb-5 bg-white rounded">
                        
                <img className="card-img-top align-self-center " src={article.urlToImage? (article.urlToImage) : 'https://static.toiimg.com/thumb/imgsize-37494,msid-88579058,width-400,resizemode-4/88579058.jpg'} alt="News image cap" />

            <div className="card-body flex flex-col">
                <h5 className="card-title font-bold">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <div className='flex justify-between mt-3'>
                <p className='font-bold text-sm'>{dateConversion(article.publishedAt)}</p>
                
                <a className=" italic underline text-black hover:text-blue-500 active:text-red-500 visited:text-purple-600" href={article.url} target="_blank">Read More...</a>
                </div>

            </div>
        </div>
 
  )
}

Card.propTypes={
  article:PropTypes.object.isRequired
};

export default Card
