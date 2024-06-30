import Image from "next/image";
import Button from "./components/Button/Button";
import Links from "./components/Links/Index";

export default function Home() {
  return (
    <main className='md:bg-signUp-pattern h-screen md:grid md:place-items-center md:bg-[length:12em_12em]'>
      <form className="md:shadow-lg md:bg-white rounded-2xl w-auto md:min-w-[500px] px-4 py-8 md:p-8" autoComplete="off">
        <div className="pt-6 pb-10">
          <Image src='/images/full_logo.png' alt="Funds Ng Logo" width={193} height={40} className="mx-auto" />
        </div>
        <p className="text-primary font-medium text-center text-xl leading-loose">Good Day, Welcome!</p>
        <p className="text-center text-[#929090]">It&apos;s a good day to create ideas that will change the world</p>

        <div className="space-y-4 pt-6">

          <div>
            <div className='form-group rounded-lg border border-[#E5E2E1] px-3 py-2 peer-focus:border-primary'>
              <label htmlFor="" className="block text-sm text-[#929090] peer-focus:text-red-600">Email</label>
              <input type="email" autoComplete="off" className="w-full text-FBlack font-medium focus:border-none focus:ring-none focus:outline-none peer" placeholder="Enter your Email" />
            </div>
            <span className="text-red-500 hidden">Error</span>
          </div>
          
          <div>
            <div className='form-group rounded-lg border border-[#E5E2E1] px-3 py-2'>
              <label htmlFor="" className="block text-sm text-[#929090]">Password</label>
              <input type="password" autoComplete="off" className="w-full text-FBlack font-medium focus:border-none focus:ring-none focus:outline-none" placeholder="Enter your Password" />
            </div>
            <span className="text-red-500 hidden">Error</span>
          </div>

          <div>
            <div className='form-group rounded-lg border border-[#E5E2E1] px-3 py-2'>
              <label htmlFor="" className="block text-sm text-[#929090]">Confirm Password</label>
              <input type="password" autoComplete="off" className="w-full text-FBlack font-medium focus:border-none focus:ring-none focus:outline-none" placeholder="Enter your Password again" />
            </div>
            <span className="text-red-500 hidden">Error</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-16 ">
          <Button name="Sign up with Google" ariaLabel="button to sign up with google" color="grey" />
          <Button name="Continue" ariaLabel="Continue button" color="primary" />
        </div>
        <p className="text-FBlack text-center">
          <span className="">Already have an account?</span>
          <span className="pl-1">
            <Links href="/signin" ariaLabel="link to go to sign in page" name={"Sign in here"} />
          </span>
        </p>
      </form>
    </main>
  );
}