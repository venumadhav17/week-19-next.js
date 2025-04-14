import Link from "next/link";
//import { useRouter } from "next/navigation";

export default function Home() {
  //const router = useRouter();
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div>
        Todo Application
        {/* <Button onClick={()=>{
      router.push("/signin")}}>Signin</Button>*/}
        <br />
        <Link
          className='border border-amber-300 bg-orange-400 rounded-md'
          href='/signin'
        >
          Sign in to Todo app
        </Link>
        <br />
        <Link
          className='border border-amber-300 bg-orange-400 rounded-md pt-1'
          href='/signup'
        >
          Sign up to Todo app
        </Link>
      </div>
    </div>
  );
}
