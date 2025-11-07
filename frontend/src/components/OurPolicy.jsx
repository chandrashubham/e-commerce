import { assets } from "../assets/assets"

const OurPolicy = () => {
  return (
    <div className="flex flex-col p-5 gap-10 sm:flex-row items-center justify-center sm:gap-60 mt-10 ">
        <div className="flex flex-col items-center gap-2">
            <img src={assets.exchange_icon} alt="exchange" />
            <p className="font-medium">Easy exchange policy</p>
            <p>hassle free exchange</p>
        </div>
        <div className="flex flex-col items-center gap-2">
            <img src={assets.quality_icon} alt="exchange" />
            <p className="font-medium">7 days return Policy</p>
            <p>we provide 7 days free return</p>
        </div>
        <div className="flex flex-col items-center gap-2">
            <img src={assets.support_img} alt="exchange" />
            <p className="font-medium">Best Customer Support</p>
            <p>24/7 customer support </p>
        </div>

    </div>
  )
}

export default OurPolicy