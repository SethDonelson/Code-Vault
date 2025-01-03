import CodeIcon from '@mui/icons-material/Code';
import { mainColor } from "@/Colors";

export default function Home() {
  return (
    <div>
      <Navbar  />
      <CallToAction   />
    </div>
  );
}
    
function Navbar() {
  return (
    <div className = "flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
    <Logo  />
    <Buttons  />
    </div>
  );
}

function Logo() {
  return (
    <div className= "flex gap-2 items-center">
      <div className= {`bg-[${mainColor}] p-[6px] rounded-md`}>
        <CodeIcon sx= {{ fontSize: 30, color: 'black'}}   />
      </div>
      <div className= "flex gap-1 text-[19px] ">
        <span className= {`font-bold text-[${mainColor}]`}>Code</span>
        <span className= "text-slate-600">Vault</span>
      </div>
    </div>
  )
}

//need to adjust how I call the color
function Buttons() {
  const { userId } = useAuth();
  return (
    <div className= "max-sm:w-full">
      {userId ? (
        <Link href= '/my-notes'>
          <button className= {`max-sm:w-full bg-[${mainColor}] p-[8px] px-6 text-sm  text-white rounded-md`}>
          Access To The App
          </button>
        </Link>
      ) : (  
        <div className = "flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8">
        <button className = {`max-sm:w-full bg-[${mainColor}] p-[8px] px-6 text-sm text-black rounded-md`}>
          <Link href= '/sign-in'> Sign In </Link>
        </button>
      <Link href= '/sign-up'>
      <button className= {`max-sm:w-full text-sm border border-[${mainColor}] text-[${mainColor}]\hover:bg-[${mainColor}] hover:text-white p-[8px] px-6 rounded-md`}>
        Sign Up
      </button>
      </Link>
    </div>
      )}
    </div>
  )
  }

// used main color as text-main
function CallToAction() {
  console.log('CallToAction rendered');
  return (
    <div className= 'flex flex-col mx-16 items-center mt-[120px] gap-6'>
      <h2 className= 'font-bold text-2x1 text-center'>
        Organize Your Code 
        <span className="text-main"> Efficiently</span>    
      </h2>
      <p className= 'text-center text-sm w-[450px] max-sm:w-full text-slate-500'>
        With our advanced tagging and search features, you can quickly find the snippet you need, right when you need it. Spend less time searching for the code you need and more time writing it. 
      </p>
      

      <button className= {'block  px-9 py-3 text-sm font-medium text-black transition  focus:outline-none'} type= "button">
        Let's get started!
      </button>
    </div>
  );
}


