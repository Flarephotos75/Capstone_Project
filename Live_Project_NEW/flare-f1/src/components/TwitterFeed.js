const TwitterFeed = () => {
    return (
        <div className='dash-list-item'>
            <img src={"http://localhost:8080/images/twitter.png"} width="50px" height="50px"/>
            <a id="twitter" data-width="500" data-height="1500" href="https://twitter.com/F1?ref_src=twsrc%5Etfw">Tweets by F1</a> 
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
    )
}

export default TwitterFeed;