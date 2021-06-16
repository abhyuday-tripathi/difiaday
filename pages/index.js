import Image from 'next/image';

const Home = () => {
  return (
    <div className='flex items-center justify-center flex-col h-screen w-screen bg-primary-900 text-primary-100'>
      <div className='flex sm:hidden mb-10'>
        <Image src='/logo.svg' width={'200'} height={'64'} />
      </div>
      <div className='flex bg-primary-800 flex-col gap-8 p-12 rounded-none w-full sm:rounded-xl sm:w-96'>
        <div className='flex flex-col gap-4'>
          <h1 className='font-bold text-3xl'>Welcome</h1>
          <p className='text-sm'>
            By logging in you accept our{' '}
            <span className='text-primary-accent'>Terms and Conditions</span>.
          </p>
        </div>
        <div className='w-full flex flex-col gap-6'>
          <button className='flex items-center justify-center bg-primary-700 py-4 rounded-lg text-primary-button focus:outline-none focus:ring-4 hover:bg-primary-600 gap-4 text-sm font-bold'>
            <Image src='/spotify.svg' width={'20'} height={'20'} />
            Login with Spotify
          </button>
          <button className='flex items-center justify-center bg-primary-700 py-4 rounded-lg text-primary-button focus:outline-none focus:ring-4 hover:bg-primary-600 gap-4 text-sm font-bold'>
            <Image width={'20'} src='/google.svg' height={'20'} />
            Login with Google
          </button>
          <button className='flex items-center justify-center bg-primary-700 py-4 rounded-lg text-primary-button focus:outline-none focus:ring-4 hover:bg-primary-600 gap-4 text-sm font-bold'>
            <Image
              className='fill-current'
              src='/github.svg'
              width={'20'}
              height={'20'}
            />
            Login with Github
          </button>
        </div>
      </div>
      <div className='absolute bottom-0 flex items-center justify-center sm:justify-between w-full px-5 py-5 sm:px-7'>
        <div className='hidden sm:flex'>
          <Image src='/logo.svg' width={'168'} height={'40'} />
        </div>
        <div className='flex gap-6 text-primary-300'>
          <a href='/' className='hover:text-primary-200'>
            Privacy Policy
          </a>
          <a href='/' className='hover:text-primary-200'>
            Report a bug
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
