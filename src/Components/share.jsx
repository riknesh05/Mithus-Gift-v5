import share_icon from '../assets/share_icon_1.svg'

function share(){

    return <>
     <div className="share w-10 h-10 bg-neutral-200 rounded-xl relative">
          <img
            src={share_icon}
            alt="Share Icon"
            className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
    </>
}

export default share;