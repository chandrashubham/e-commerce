

const Title = ({text1,text2}) => {
  return (
  <>
    <div className='inline-flex m-auto items-center mt-10 gap-3'>
    <p className='w-16 h-1 bg-gray-600'></p>
     <p className='sm:text-3xl  text-gray-500 font-medium'>{text1}</p>
     <p className='sm:text-4xl font-bold'>{text2}</p>
    <p className='w-16 h-1 bg-gray-600'></p>
    </div>

  </>
  )
}

export default Title