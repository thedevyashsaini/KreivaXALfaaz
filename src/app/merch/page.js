import ThreeDCardDemo from "../_components/ui/tryingout"
export default function Merch(){
  return (
    <div className='h-screen w-screen p-8  flex flex-col'>
      <div className='text-white font-bold text-6xl text-center '>Official Merch</div>
      <ThreeDCardDemo imgSrc="/merch1.png" />
      <ThreeDCardDemo imgSrc="/merch2.png" />
    </div>
  )
}