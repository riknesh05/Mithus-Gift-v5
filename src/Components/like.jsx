import like_heart from '../assets/like_heart_1.svg'

function like(){

    return <>
             <div className="like w-10 h-10 bg-neutral-200 rounded-xl relative">
          <img
            src={like_heart}
            alt="Like Icon"
            className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
    </>
}

export default like;